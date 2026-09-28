// src/stores/useProgressStore.js
// Client progress store with local persistence partitioned individually per company

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { saveCompanyProgressToDB, fetchCompanyProgressFromDB } from '../services/progressService'
import { getTodayDateString, getDaysDifference } from '../utils/dateUtils'

const DEFAULT_COMPANY_STATS = {
  solvedCount: 0,
  solvedQuestionIds: [],
  trackProgress: {}, // e.g. { 'cognitive': { solved: 0 }, 'technical': { solved: 0 } }
  readinessScore: 0,
  streak: 0,
  xp: 0,
  lastActiveDate: null,
  lastDailyPracticeDate: null,
}

export const useProgressStore = create(
  persist(
    (set, get) => ({
      // Per-company progress store: { [companySlug]: { solvedCount, solvedQuestionIds, trackProgress, readinessScore, streak, xp, lastActiveDate } }
      companyProgress: {
        accenture: { ...DEFAULT_COMPANY_STATS },
        tcs: { ...DEFAULT_COMPANY_STATS },
        infosys: { ...DEFAULT_COMPANY_STATS },
        wipro: { ...DEFAULT_COMPANY_STATS },
      },

      // Per-company bookmarks & mistakes
      bookmarks: {}, // { [companySlug]: [ { id, title, type, link, date } ] }
      mistakes: {},  // { [companySlug]: [ { id, questionTitle, section, wrongAnswer, notes, date } ] }

      // Global aggregations for backwards compatibility
      xp: 0,
      streak: 0,
      solvedCount: 0,
      currentUserId: null,

      // Switch progress store to a new user account cleanly
      switchUserProgressAccount: (newUserId) => {
        set({
          currentUserId: newUserId || null,
          companyProgress: {
            accenture: { ...DEFAULT_COMPANY_STATS },
            tcs: { ...DEFAULT_COMPANY_STATS },
            infosys: { ...DEFAULT_COMPANY_STATS },
            wipro: { ...DEFAULT_COMPANY_STATS },
          },
          xp: 0,
          streak: 0,
          solvedCount: 0,
          bookmarks: {},
          mistakes: {}
        })
      },

      // Helper getter: Retrieve company stats with defaults
      getCompanyProgress: (companySlug) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        const state = get()
        return state.companyProgress?.[slug] || { ...DEFAULT_COMPANY_STATS }
      },

      // Per-company Question Solved handler
      markQuestionSolved: (companySlug, trackId, questionId, xpGain = 10) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        set((state) => {
          const currentComp = state.companyProgress?.[slug] || { ...DEFAULT_COMPANY_STATS }
          const solvedIds = currentComp.solvedQuestionIds || []

          // If already solved, do not duplicate
          if (questionId && solvedIds.includes(questionId)) {
            return state
          }

          const nextSolvedIds = questionId ? [...solvedIds, questionId] : solvedIds
          const newSolvedCount = nextSolvedIds.length > 0 ? nextSolvedIds.length : (currentComp.solvedCount + 1)

          // Update track-specific solved count
          const trackProg = { ...(currentComp.trackProgress || {}) }
          if (trackId) {
            const currentTrack = trackProg[trackId] || { solved: 0 }
            trackProg[trackId] = {
              ...currentTrack,
              solved: currentTrack.solved + 1,
            }
          }

          // Streak calculation for this company
          const today = new Date().toISOString().split('T')[0]
          let nextStreak = currentComp.streak || 0
          if (!currentComp.lastActiveDate) {
            nextStreak = 1
          } else if (currentComp.lastActiveDate !== today) {
            const lastDate = new Date(currentComp.lastActiveDate)
            const diffDays = Math.round((new Date(today) - lastDate) / (1000 * 60 * 60 * 24))
            if (diffDays === 1) {
              nextStreak += 1
            } else if (diffDays > 1) {
              nextStreak = 1
            }
          }

          // Dynamic readiness score (0 - 100%)
          const newReadiness = Math.min(100, Math.round(newSolvedCount * 4))
          const newCompanyXP = (currentComp.xp || 0) + xpGain

          const updatedComp = {
            ...currentComp,
            solvedCount: newSolvedCount,
            solvedQuestionIds: nextSolvedIds,
            trackProgress: trackProg,
            readinessScore: newReadiness,
            streak: nextStreak,
            xp: newCompanyXP,
            lastActiveDate: today,
          }

          saveCompanyProgressToDB({
            companySlug: slug,
            xp: newCompanyXP,
            solvedCount: newSolvedCount,
            readiness: newReadiness,
            streak: nextStreak,
            lastDailyPracticeDate: currentComp.lastDailyPracticeDate,
          }).catch((e) => console.warn('[useProgressStore] DB sync warning:', e))

          return {
            companyProgress: {
              ...state.companyProgress,
              [slug]: updatedComp,
            },
            // Update global metrics as aggregate of all companies
            solvedCount: state.solvedCount + 1,
            xp: state.xp + xpGain,
            streak: Math.max(state.streak, nextStreak),
          }
        })
      },

      // Strictly one-time-per-day Practice Solve (+15 XP) handler
      claimDailyPractice: async (companySlug, trackId = 'general', xpGain = 15) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        const today = getTodayDateString()
        const state = get()
        const currentComp = state.companyProgress?.[slug] || { ...DEFAULT_COMPANY_STATS }

        // Check if already claimed today for this company
        if (currentComp.lastDailyPracticeDate === today) {
          return { success: false, alreadyClaimed: true }
        }

        const qId = `daily-practice-${slug}-${today}`
        const solvedIds = currentComp.solvedQuestionIds || []
        const nextSolvedIds = solvedIds.includes(qId) ? solvedIds : [...solvedIds, qId]
        const newSolvedCount = nextSolvedIds.length

        // Update track-specific solved count
        const trackProg = { ...(currentComp.trackProgress || {}) }
        if (trackId) {
          const currentTrack = trackProg[trackId] || { solved: 0 }
          trackProg[trackId] = {
            ...currentTrack,
            solved: currentTrack.solved + 1,
          }
        }

        // Consecutive calendar day streak calculation
        let nextStreak = currentComp.streak || 0
        if (!currentComp.lastDailyPracticeDate) {
          // First practice claim
          nextStreak = 1
        } else {
          const diffDays = getDaysDifference(currentComp.lastDailyPracticeDate, today)
          if (diffDays === 1) {
            // Consecutive next calendar day: increment streak!
            nextStreak = (currentComp.streak || 0) + 1
          } else if (diffDays > 1) {
            // Missed 1 or more calendar days: reset streak to 1
            nextStreak = 1
          }
        }

        const newReadiness = Math.min(100, Math.round(newSolvedCount * 4))
        const newCompanyXP = (currentComp.xp || 0) + xpGain

        const updatedComp = {
          ...currentComp,
          solvedCount: newSolvedCount,
          solvedQuestionIds: nextSolvedIds,
          trackProgress: trackProg,
          readinessScore: newReadiness,
          streak: nextStreak,
          xp: newCompanyXP,
          lastActiveDate: today,
          lastDailyPracticeDate: today,
        }

        set((prevState) => ({
          companyProgress: {
            ...prevState.companyProgress,
            [slug]: updatedComp,
          },
          solvedCount: prevState.solvedCount + 1,
          xp: prevState.xp + xpGain,
          streak: Math.max(prevState.streak, nextStreak),
        }))

        // Persist to Supabase database with await
        let dbSaved = false
        try {
          const savedRow = await saveCompanyProgressToDB({
            companySlug: slug,
            xp: newCompanyXP,
            solvedCount: newSolvedCount,
            readiness: newReadiness,
            streak: nextStreak,
            lastDailyPracticeDate: today,
            explicitUserId: state.currentUserId || null,
          })
          if (savedRow) {
            dbSaved = true
          }
        } catch (e) {
          console.warn('[useProgressStore] DB sync warning:', e)
        }

        return { success: true, xp: xpGain, dbSaved }
      },

      // Update XP for a specific company
      addXP: (companySlug, points) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        set((state) => {
          const currentComp = state.companyProgress?.[slug] || { ...DEFAULT_COMPANY_STATS }
          const newXP = (currentComp.xp || 0) + points
          const updatedComp = {
            ...currentComp,
            xp: newXP,
          }

          saveCompanyProgressToDB({
            companySlug: slug,
            xp: newXP,
            solvedCount: currentComp.solvedCount,
            readiness: currentComp.readinessScore,
            streak: currentComp.streak,
            lastDailyPracticeDate: currentComp.lastDailyPracticeDate,
          }).catch((e) => console.warn('[useProgressStore] DB sync warning:', e))

          return {
            companyProgress: {
              ...state.companyProgress,
              [slug]: updatedComp,
            },
            xp: state.xp + points,
          }
        })
      },

      // Retrieve progress and XP directly from Supabase
      syncCompanyProgressFromDB: async (companySlug, explicitUserId = null) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        const state = get()
        const targetUserId = explicitUserId || state.currentUserId
        try {
          const dbData = await fetchCompanyProgressFromDB(slug, targetUserId)
          if (dbData) {
            set((prevState) => {
              const currentComp = prevState.companyProgress?.[slug] || { ...DEFAULT_COMPANY_STATS }
              const updatedComp = {
                ...currentComp,
                xp: dbData.xp || 0,
                solvedCount: dbData.solvedCount || 0,
                readinessScore: dbData.readinessScore || 0,
                streak: dbData.streak || 0,
                lastDailyPracticeDate: dbData.lastDailyPracticeDate || null,
              }
              return {
                currentUserId: targetUserId || prevState.currentUserId,
                companyProgress: {
                  ...prevState.companyProgress,
                  [slug]: updatedComp,
                },
                xp: dbData.xp || 0,
                streak: dbData.streak || 0,
                solvedCount: dbData.solvedCount || 0,
              }
            })
            return dbData
          }
        } catch (err) {
          console.warn('[useProgressStore] Error syncing progress from DB:', err)
        }
        return null
      },

      // Backward-compatible incrementSolved
      incrementSolved: (companySlug = 'accenture', trackId = 'general', questionId = null) => {
        get().markQuestionSolved(companySlug, trackId, questionId || `q-${Date.now()}`, 10)
      },

      // Bookmark Actions
      addBookmark: (companySlug, item) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        set((state) => {
          const list = state.bookmarks[slug] || []
          if (list.some((b) => b.id === item.id)) return state
          return {
            bookmarks: {
              ...state.bookmarks,
              [slug]: [...list, { ...item, date: new Date().toLocaleDateString() }],
            },
          }
        })
      },

      removeBookmark: (companySlug, itemId) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        set((state) => ({
          bookmarks: {
            ...state.bookmarks,
            [slug]: (state.bookmarks[slug] || []).filter((b) => b.id !== itemId),
          },
        }))
      },

      toggleBookmark: (companySlug, item) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        const isMarked = get().isBookmarked(slug, item.id)
        if (isMarked) {
          get().removeBookmark(slug, item.id)
        } else {
          get().addBookmark(slug, item)
        }
      },

      isBookmarked: (companySlug, itemId) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        const list = get().bookmarks[slug] || []
        return list.some((b) => b.id === itemId)
      },

      // Mistake Book Actions
      recordMistake: (companySlug, mistake) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        set((state) => {
          const list = state.mistakes[slug] || []
          return {
            mistakes: {
              ...state.mistakes,
              [slug]: [
                ...list,
                { ...mistake, id: Date.now().toString(), date: new Date().toLocaleDateString() },
              ],
            },
          }
        })
      },

      removeMistake: (companySlug, id) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        set((state) => ({
          mistakes: {
            ...state.mistakes,
            [slug]: (state.mistakes[slug] || []).filter((m) => m.id !== id),
          },
        }))
      },

      // Reset company progress
      resetCompanyProgress: (companySlug) => {
        const slug = (companySlug || 'accenture').toLowerCase()
        set((state) => ({
          companyProgress: {
            ...state.companyProgress,
            [slug]: { ...DEFAULT_COMPANY_STATS },
          },
        }))
      },

      // Compatibility for ProfilePage
      get xpByCompany() {
        const cp = get().companyProgress || {}
        return {
          Accenture: cp.accenture?.xp || 0,
          TCS: cp.tcs?.xp || 0,
          Infosys: cp.infosys?.xp || 0,
          Wipro: cp.wipro?.xp || 0,
        }
      },

      get streaksByCompany() {
        const cp = get().companyProgress || {}
        return {
          Accenture: cp.accenture?.streak || 0,
          TCS: cp.tcs?.streak || 0,
          Infosys: cp.infosys?.streak || 0,
          Wipro: cp.wipro?.streak || 0,
        }
      },
    }),
    {
      name: 'placement_prep_progress_v2',
    }
  )
)
