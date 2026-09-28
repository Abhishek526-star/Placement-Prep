// src/services/cognitiveService.js
// Supabase database service for Accenture Cognitive Assessment sessions and live metrics

import { supabase } from '../lib/supabase'
import { saveSessionResult, getCognitivePuzzleCounts, clearCognitiveHistory } from '../utils/cognitiveStorage'

/**
 * Persists a completed cognitive round directly into Supabase database
 * with local storage cache fallback.
 */
export async function saveCognitiveSessionToDB(sessionData) {
  // 1. Mirror locally for instant offline reactivity
  const localSaved = saveSessionResult(sessionData)

  try {
    // 2. Get current authenticated user
    const { data: { user } } = await supabase.auth.getUser()
    const userId = user?.id || null

    // 3. Resolve Accenture company ID if available
    let companyId = null
    try {
      const { data: company } = await supabase
        .from('companies')
        .select('id')
        .eq('slug', 'accenture')
        .maybeSingle()
      if (company?.id) {
        companyId = company.id
      }
    } catch (e) {
      console.warn('[cognitiveService] Company resolution skipped:', e)
    }

    const normalizedGameType = (sessionData.gameType || 'math_bubble').replace('-', '_')

    // 4. Prepare database row
    const row = {
      user_id: userId,
      company_id: companyId,
      game_type: normalizedGameType,
      set_number: sessionData.setNumber || null,
      variant: sessionData.variant || null,
      score: sessionData.score || 0,
      accuracy: typeof sessionData.accuracy === 'number' ? sessionData.accuracy : null,
      correct_count: sessionData.correctCount ?? null,
      total_questions: sessionData.totalQuestions ?? null,
      avg_time: sessionData.avgTime ?? null,
      time_taken: sessionData.timeTaken ?? null,
      attempts: sessionData.attempts ?? 0,
      solved: sessionData.solved !== false,
      details: {
        variantName: sessionData.variantName || sessionData.details?.variantName || null,
        gridSize: sessionData.gridSize || sessionData.details?.gridSize || null,
        keyCount: sessionData.keyCount || sessionData.details?.keyCount || null,
        moves: sessionData.details?.moves ?? sessionData.attempts ?? 0,
        minMoves: sessionData.details?.minMoves ?? null,
        pathLength: sessionData.details?.pathLength ?? null,
        stage: sessionData.details?.stage || null,
        questionBreakdown: sessionData.questionBreakdown || sessionData.details?.questionBreakdown || [],
        round1: sessionData.round1 || sessionData.details?.round1 || null,
        round2: sessionData.round2 || sessionData.details?.round2 || null
      }
    }

    // 5. Insert into Supabase table
    const { data, error } = await supabase
      .from('cognitive_game_sessions')
      .insert(row)
      .select()
      .maybeSingle()

    if (error) {
      console.warn('[cognitiveService] Supabase insert warning (falling back to local):', error.message)
    }

    // 6. Notify listeners across the app
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('accenture-activity-updated', {
        detail: { type: 'cognitive', session: data || localSaved }
      }))
    }

    return data || localSaved
  } catch (err) {
    console.warn('[cognitiveService] Save session error, using local fallback:', err)
    return localSaved
  }
}

/**
 * Dynamically fetches cognitive game statistics and complete round history from Supabase.
 * Calculates solve counts, best scores, and averages in real time.
 */
export async function fetchCognitiveGameStatsFromDB(companySlug = 'accenture') {
  // Always get local fallback first
  const fallbackCounts = getCognitivePuzzleCounts()

  try {
    const { data: { user } } = await supabase.auth.getUser()

    let query = supabase
      .from('cognitive_game_sessions')
      .select('*')
      .order('created_at', { ascending: false })

    if (user?.id) {
      // Filter by current user if logged in
      query = query.eq('user_id', user.id)
    }

    const { data: rows, error } = await query

    if (error) {
      console.warn('[cognitiveService] DB query returned error, using local cache:', error.message)
      return fallbackCounts
    }

    // Query succeeded: if 0 rows in database, user has solved 0 games!
    if (!rows || rows.length === 0) {
      return {
        totalSolved: 0,
        mathSolved: 0,
        mazeSolved: 0,
        pathFinderSolved: 0,
        mockSolved: 0,
        mathBest: 0,
        mazeBest: 0,
        pathFinderBest: 0,
        avgMathAccuracy: 0,
        minMazeAttempts: 0,
        fastestMazeTime: 0,
        fastestPathFinderTime: 0,
        avgPathFinderMoves: 0,
        allHistory: [],
        isLiveFromDB: true
      }
    }

    // Compute metrics dynamically from database rows
    const mathSessions = rows.filter(r => r.game_type === 'math_bubble')
    const mazeSessions = rows.filter(r => r.game_type === 'memory_maze')
    const pathFinderSessions = rows.filter(r => r.game_type === 'path_finder')
    const mockSessions = rows.filter(r => r.game_type === 'full_mock')

    const mathSolved = mathSessions.length
    const mazeSolved = mazeSessions.filter(r => r.solved !== false).length
    const pathFinderSolved = pathFinderSessions.filter(r => r.solved !== false).length
    const mockSolved = mockSessions.length
    const totalSolved = mathSolved + mazeSolved + pathFinderSolved + mockSolved

    const mathBest = mathSessions.reduce((max, r) => Math.max(max, r.score || 0), 0)
    const mazeBest = mazeSessions.reduce((max, r) => Math.max(max, r.score || 0), 0)
    const pathFinderBest = pathFinderSessions.reduce((max, r) => Math.max(max, r.score || 0), 0)

    const avgMathAccuracy = mathSessions.length > 0
      ? Math.round(mathSessions.reduce((sum, r) => sum + (r.accuracy || 0), 0) / mathSessions.length)
      : 0

    const minMazeAttempts = mazeSessions.length > 0
      ? Math.min(...mazeSessions.map(r => r.attempts ?? 999))
      : 0

    const fastestMazeTime = mazeSessions.length > 0
      ? Math.min(...mazeSessions.map(r => r.time_taken || 999))
      : 0

    const fastestPathFinderTime = pathFinderSessions.length > 0
      ? Math.min(...pathFinderSessions.map(r => r.time_taken || 999))
      : 0

    const avgPathFinderMoves = pathFinderSessions.length > 0
      ? Math.round(pathFinderSessions.reduce((sum, r) => sum + (r.attempts || 0), 0) / pathFinderSessions.length)
      : 0

    // Transform DB rows to UI-friendly session models
    const allHistory = rows.map(r => {
      const details = r.details || {}
      return {
        id: r.id,
        gameType: r.game_type,
        setNumber: r.set_number,
        variant: r.variant,
        variantName: details.variantName || r.variant,
        gridSize: details.gridSize,
        keyCount: details.keyCount,
        moves: details.moves ?? r.attempts,
        minMoves: details.minMoves,
        pathLength: details.pathLength,
        stage: details.stage,
        score: r.score,
        accuracy: r.accuracy,
        correctCount: r.correct_count,
        totalQuestions: r.total_questions,
        avgTime: r.avg_time,
        timeTaken: r.time_taken,
        attempts: r.attempts,
        solved: r.solved,
        questionBreakdown: details.questionBreakdown || [],
        round1: details.round1 || null,
        round2: details.round2 || null,
        timestamp: r.created_at ? new Date(r.created_at).getTime() : Date.now()
      }
    })

    return {
      totalSolved,
      mathSolved,
      mazeSolved,
      pathFinderSolved,
      mockSolved,
      mathBest,
      mazeBest,
      pathFinderBest,
      avgMathAccuracy,
      minMazeAttempts: minMazeAttempts === 999 ? 0 : minMazeAttempts,
      fastestMazeTime: fastestMazeTime === 999 ? 0 : fastestMazeTime,
      fastestPathFinderTime: fastestPathFinderTime === 999 ? 0 : fastestPathFinderTime,
      avgPathFinderMoves,
      allHistory,
      isLiveFromDB: true
    }
  } catch (err) {
    console.warn('[cognitiveService] Error fetching DB stats, using local fallback:', err)
    return fallbackCounts
  }
}

/**
 * Resets cognitive sessions from both Supabase database and local storage.
 */
export async function clearCognitiveSessionsDB() {
  clearCognitiveHistory()

  try {
    const { data: { user } } = await supabase.auth.getUser()
    if (user?.id) {
      await supabase
        .from('cognitive_game_sessions')
        .delete()
        .eq('user_id', user.id)
    } else {
      await supabase
        .from('cognitive_game_sessions')
        .delete()
        .is('user_id', null)
    }
  } catch (err) {
    console.warn('[cognitiveService] Clear DB sessions warning:', err)
  }

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('accenture-activity-updated', {
      detail: { type: 'cognitive', cleared: true }
    }))
  }
}

