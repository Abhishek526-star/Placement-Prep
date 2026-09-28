// src/services/progressService.js
// Database persistence service for Company Progress, XP, and streaks in Supabase

import { supabase, IS_SUPABASE_CONFIGURED } from '../lib/supabase'

/**
 * Resolves company UUID from company slug
 */
async function resolveCompanyId(slug) {
  if (!slug) return null
  try {
    const { data: comp } = await supabase
      .from('companies')
      .select('id')
      .eq('slug', slug.toLowerCase())
      .maybeSingle()
    return comp?.id || null
  } catch (err) {
    console.warn('[ProgressService] Error resolving company ID:', err)
    return null
  }
}

/**
 * Resolves the active user ID for Supabase persistence.
 * For authenticated users, returns their real auth UUID.
 * For demo mode or unauthenticated preview, falls back to the registered demo user UUID
 * so database persistence and foreign keys always succeed.
 */
export async function resolveActiveUserId() {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    if (user?.id) return user.id
  } catch (err) {
    console.warn('[ProgressService] Session resolution warning:', err)
  }

  // Fallback to active demo user UUID in Supabase
  return '91edaaa0-448e-4f37-8f67-cad93737eeb7'
}

/**
 * Ensures a profile record exists in public.profiles for the given userId.
 * This prevents foreign key constraint violation (code 23503) when writing to user_progress.
 */
export async function ensureUserProfile(userId, userObj = null) {
  if (!userId) return false
  try {
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', userId)
      .maybeSingle()

    if (!existingProfile) {
      const email = userObj?.email || `${userId}@user.local`
      const fullName = userObj?.user_metadata?.full_name || userObj?.full_name || (userObj?.email ? userObj.email.split('@')[0] : 'Student')

      const { error: insertProfileErr } = await supabase
        .from('profiles')
        .insert({
          id: userId,
          email: email,
          full_name: fullName,
          role: 'student',
          xp_points: 0,
          current_streak: 0
        })

      if (insertProfileErr) {
        console.warn('[ProgressService] Profile initialization note:', insertProfileErr.message)
      } else {
        console.log('[ProgressService] Created profile record for user:', userId)
      }
    }
    return true
  } catch (err) {
    console.warn('[ProgressService] ensureUserProfile error:', err)
    return false
  }
}

/**
 * Saves company-specific progress and XP into Supabase
 */
export async function saveCompanyProgressToDB({
  companySlug,
  xp = 0,
  solvedCount = 0,
  readiness = 0,
  streak = 0,
  lastDailyPracticeDate = null,
  trackId = null,
  explicitUserId = null
}) {
  if (!IS_SUPABASE_CONFIGURED) return null

  try {
    let authUser = null
    try {
      const { data: authData } = await supabase.auth.getUser()
      authUser = authData?.user || null
    } catch (e) {}

    const userId = explicitUserId || authUser?.id || await resolveActiveUserId()
    if (!userId) return null

    // Ensure profile row exists to prevent foreign key errors
    await ensureUserProfile(userId, authUser)

    const companyId = await resolveCompanyId(companySlug)
    if (!companyId) return null

    // 1. Check if a progress record already exists for this user and company
    let query = supabase
      .from('user_progress')
      .select('id, xp, streak, completed_questions_count')
      .eq('user_id', userId)
      .eq('company_id', companyId)

    if (trackId) {
      query = query.eq('track_id', trackId)
    } else {
      query = query.is('track_id', null)
    }

    const { data: existingRows } = await query.order('updated_at', { ascending: false })
    const existing = existingRows?.[0]

    let progData = null
    const row = {
      user_id: userId,
      company_id: companyId,
      track_id: trackId,
      completed_questions_count: solvedCount,
      readiness_percentage: readiness,
      xp: xp,
      streak: streak,
      last_daily_practice_date: lastDailyPracticeDate,
      updated_at: new Date().toISOString()
    }

    if (existing?.id) {
      // Update the existing record directly by ID (avoids PostgreSQL NULL onConflict issues)
      const { data, error: updateErr } = await supabase
        .from('user_progress')
        .update(row)
        .eq('id', existing.id)
        .select()
        .maybeSingle()

      if (updateErr) {
        console.warn('[ProgressService] Warning updating user_progress:', updateErr.message)
      } else {
        console.log('[ProgressService] Successfully updated user_progress in DB:', data)
      }
      progData = data

      // Clean up any extra duplicate rows if they existed
      if (existingRows.length > 1) {
        const extraIds = existingRows.slice(1).map(r => r.id)
        await supabase.from('user_progress').delete().in('id', extraIds)
      }
    } else {
      // Insert new record
      const { data, error: insertErr } = await supabase
        .from('user_progress')
        .insert(row)
        .select()
        .maybeSingle()

      if (insertErr) {
        console.warn('[ProgressService] Warning inserting user_progress:', insertErr.message)
      } else {
        console.log('[ProgressService] Successfully inserted user_progress in DB:', data)
      }
      progData = data
    }

    // 2. Update user profile's total XP and streak if available
    try {
      const { data: currentProfile } = await supabase
        .from('profiles')
        .select('xp_points, current_streak')
        .eq('id', userId)
        .maybeSingle()

      if (currentProfile) {
        const updatedTotalXP = Math.max(currentProfile.xp_points || 0, xp)
        await supabase
          .from('profiles')
          .update({
            xp_points: updatedTotalXP,
            current_streak: Math.max(currentProfile.current_streak || 0, streak),
            last_active_at: new Date().toISOString()
          })
          .eq('id', userId)
      }
    } catch (profErr) {
      console.warn('[ProgressService] Profile XP sync skipped:', profErr)
    }

    return progData
  } catch (err) {
    console.warn('[ProgressService] Error saving progress to DB:', err)
    return null
  }
}

/**
 * Fetches company progress and XP directly from Supabase
 */
export async function fetchCompanyProgressFromDB(companySlug, explicitUserId = null) {
  if (!IS_SUPABASE_CONFIGURED || !companySlug) return null

  try {
    let authUser = null
    try {
      const { data: authData } = await supabase.auth.getUser()
      authUser = authData?.user || null
    } catch (e) {}

    const userId = explicitUserId || authUser?.id || await resolveActiveUserId()
    if (!userId) return null

    const companyId = await resolveCompanyId(companySlug)
    if (!companyId) return null

    // Use order by updated_at desc and limit 1 to safely handle any historical multiple rows
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('company_id', companyId)
      .is('track_id', null)
      .order('updated_at', { ascending: false })
      .limit(1)

    if (error) {
      console.warn('[ProgressService] Warning fetching company progress:', error.message)
      return null
    }

    if (!data || data.length === 0) {
      // User has no record yet in Supabase for this company (clean 0 state)
      return {
        isNew: true,
        xp: 0,
        solvedCount: 0,
        readinessScore: 0,
        streak: 0,
        lastDailyPracticeDate: null
      }
    }

    const record = data[0]

    return {
      isNew: false,
      xp: record.xp || 0,
      solvedCount: record.completed_questions_count || 0,
      readinessScore: record.readiness_percentage || 0,
      streak: record.streak || 0,
      lastDailyPracticeDate: record.last_daily_practice_date || null
    }
  } catch (err) {
    console.warn('[ProgressService] Error fetching progress from DB:', err)
    return null
  }
}

export async function fetchUserProgress(userId, companyId) {
  if (!IS_SUPABASE_CONFIGURED || !userId || !companyId) {
    return { data: [], error: null }
  }

  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*, company_tracks(*)')
      .eq('user_id', userId)
      .eq('company_id', companyId)

    if (error) throw error
    return { data: data || [], error: null }
  } catch (err) {
    console.error('[ProgressService] Fetch error:', err.message)
    return { data: [], error: err.message }
  }
}
