// src/utils/cognitiveStorage.js
// Client-side storage and telemetry for Accenture Cognitive Assessment

const PREFIX = 'frontend-assessment-cognitive-'

export const cognitiveStorage = {
  get(key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(`${PREFIX}${key}`)
      return raw ? JSON.parse(raw) : defaultValue
    } catch {
      return defaultValue
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value))
    } catch (err) {
      console.warn('[cognitiveStorage] Failed to save key:', key, err)
    }
  },

  getStreak() {
    const data = this.get('streak', { count: 0, lastActiveDate: null })
    const today = new Date().toISOString().split('T')[0]
    if (!data.lastActiveDate) return 0

    const last = new Date(data.lastActiveDate)
    const now = new Date(today)
    const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24))

    if (diffDays > 1) {
      return 0 // Streak broken
    }
    return data.count || 0
  },

  updateStreakActivity() {
    const today = new Date().toISOString().split('T')[0]
    const data = this.get('streak', { count: 0, lastActiveDate: null })
    if (data.lastActiveDate === today) return data.count

    let count = 1
    if (data.lastActiveDate) {
      const last = new Date(data.lastActiveDate)
      const now = new Date(today)
      const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24))
      if (diffDays === 1) {
        count = (data.count || 0) + 1
      }
    }

    this.set('streak', { count, lastActiveDate: today })
    return count
  },

  getDailyChallengeStatus() {
    const today = new Date().toISOString().split('T')[0]
    const state = this.get('daily-challenge', { date: today, mathCompleted: false, allCompleted: false })
    if (state.date !== today) {
      return { date: today, mathCompleted: false, allCompleted: false }
    }
    return state
  },

  updateDailyChallenge(game = 'math_bubble') {
    const today = new Date().toISOString().split('T')[0]
    const status = this.getDailyChallengeStatus()
    if (game === 'math_bubble') {
      status.mathCompleted = true
      status.allCompleted = true
    }
    status.date = today
    this.set('daily-challenge', status)
    this.updateStreakActivity()
    return status
  },

  getSessionsHistory() {
    return this.get('sessions-history', [])
  },

  getBestScores() {
    return this.get('best-scores', {
      math_bubble: 0,
      memory_maze: 0,
      full_assessment: 0
    })
  },

  updateBestScore(gameType, score) {
    const best = this.getBestScores()
    const normalizedKey = (gameType || '').replace('-', '_')
    if (score > (best[normalizedKey] || 0)) {
      best[normalizedKey] = score
      this.set('best-scores', best)
    }
    return best
  },

  saveSessionResult(session) {
    const timestamp = Date.now()
    const id = `sess_${timestamp}`
    const normalizedGameType = (session.gameType || 'math_bubble').replace('-', '_')

    const savedSession = {
      ...session,
      id,
      timestamp,
      gameType: normalizedGameType
    }

    // Update history (last 30 sessions)
    const history = this.getSessionsHistory()
    const updatedHistory = [savedSession, ...history].slice(0, 30)
    this.set('sessions-history', updatedHistory)

    // Update best score
    if (session.score) {
      this.updateBestScore(normalizedGameType, session.score)
    }

    // Update streak activity
    this.updateStreakActivity()

    // Dispatch external activity event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('accenture-activity-updated', {
          detail: { type: 'cognitive', session: savedSession }
        })
      )
    }

    return savedSession
  },

  clearHistory() {
    this.set('sessions-history', [])
    this.set('best-scores', {
      math_bubble: 0,
      memory_maze: 0,
      path_finder: 0,
      full_assessment: 0
    })
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('accenture-activity-updated', {
          detail: { type: 'cognitive', cleared: true }
        })
      )
    }
  }
}

export function clearCognitiveHistory() {
  return cognitiveStorage.clearHistory()
}

export function getCognitiveStats() {
  const history = cognitiveStorage.getSessionsHistory()
  const bestScores = cognitiveStorage.getBestScores()
  const streak = cognitiveStorage.getStreak()

  const gamesPlayed = history.length
  const totalScoreSum = history.reduce((sum, s) => sum + (s.score || 0), 0)
  const totalXP = totalScoreSum

  let accuracy = 85
  if (gamesPlayed > 0) {
    const withAcc = history.filter((s) => typeof s.accuracy === 'number')
    if (withAcc.length > 0) {
      accuracy = Math.round(withAcc.reduce((acc, s) => acc + s.accuracy, 0) / withAcc.length)
    }
  }

  return {
    totalXP,
    gamesPlayed,
    accuracy,
    bestScores,
    streak,
    recentSessions: history
  }
}

export function saveSessionResult(session) {
  return cognitiveStorage.saveSessionResult(session)
}

export function getDailyChallenge() {
  const status = cognitiveStorage.getDailyChallengeStatus()
  const streak = cognitiveStorage.getStreak()
  return {
    game: 'math_bubble',
    streak,
    completed: status.allCompleted
  }
}

export function updateDailyChallenge(game = 'math_bubble') {
  return cognitiveStorage.updateDailyChallenge(game)
}

export function getCognitivePuzzleCounts() {
  const history = cognitiveStorage.getSessionsHistory()

  const mathSessions = history.filter(s => s.gameType === 'math_bubble')
  const mazeSessions = history.filter(s => s.gameType === 'memory_maze')
  const pathFinderSessions = history.filter(s => s.gameType === 'path_finder')
  const mockSessions = history.filter(s => s.gameType === 'full_mock')

  const mathSolved = mathSessions.length
  const mazeSolved = mazeSessions.filter(s => s.solved !== false).length
  const pathFinderSolved = pathFinderSessions.filter(s => s.solved !== false).length
  const mockSolved = mockSessions.length

  const totalSolved = mathSolved + mazeSolved + pathFinderSolved + mockSolved

  const mathBest = mathSessions.reduce((max, s) => Math.max(max, s.score || 0), 0)
  const mazeBest = mazeSessions.reduce((max, s) => Math.max(max, s.score || 0), 0)
  const pathFinderBest = pathFinderSessions.reduce((max, s) => Math.max(max, s.score || 0), 0)

  const avgMathAccuracy = mathSessions.length > 0
    ? Math.round(mathSessions.reduce((sum, s) => sum + (s.accuracy || 0), 0) / mathSessions.length)
    : 0

  const minMazeAttempts = mazeSessions.length > 0
    ? Math.min(...mazeSessions.map(s => s.attempts ?? 999))
    : 0

  const fastestMazeTime = mazeSessions.length > 0
    ? Math.min(...mazeSessions.map(s => s.timeTaken || 999))
    : 0

  const fastestPathFinderTime = pathFinderSessions.length > 0
    ? Math.min(...pathFinderSessions.map(s => s.timeTaken || 999))
    : 0

  const avgPathFinderMoves = pathFinderSessions.length > 0
    ? Math.round(pathFinderSessions.reduce((sum, s) => sum + (s.attempts || 0), 0) / pathFinderSessions.length)
    : 0

  return {
    totalSolved,
    mathSolved,
    mazeSolved,
    pathFinderSolved,
    mockSolved,
    mathSessions,
    mazeSessions,
    pathFinderSessions,
    mockSessions,
    mathBest,
    mazeBest,
    pathFinderBest,
    avgMathAccuracy,
    minMazeAttempts: minMazeAttempts === 999 ? 0 : minMazeAttempts,
    fastestMazeTime: fastestMazeTime === 999 ? 0 : fastestMazeTime,
    fastestPathFinderTime: fastestPathFinderTime === 999 ? 0 : fastestPathFinderTime,
    avgPathFinderMoves,
    allHistory: history
  }
}

