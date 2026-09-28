// src/contexts/AuthContext.jsx
// Manages authentication state for the entire app.
// Supports: Email/Password, Email OTP, Google OAuth (via Supabase Auth)

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { useProgressStore } from '../stores/useProgressStore'

const AuthContext = createContext(null)

const getSiteUrl = () => {
  if (typeof window !== 'undefined' && window.location.origin) {
    return window.location.origin
  }
  return import.meta.env.VITE_PUBLIC_SITE_URL || 'http://localhost:5173'
}

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  // Load profile from public.profiles table after auth (falls back to auth user_metadata)
  const loadProfile = useCallback(async (userObj) => {
    if (!userObj) {
      setProfile(null)
      return
    }

    const userId = userObj.id
    const meta = userObj.user_metadata || {}
    const defaultProfile = {
      id: userId,
      email: userObj.email,
      full_name: meta.full_name || userObj.email?.split('@')[0] || 'Student',
      avatar_url: meta.avatar_url || null,
      college_name: meta.college_name || '',
      course_name: meta.course_name || 'B.Tech / B.E.',
      branch: meta.branch || '',
      target_grad_year: meta.target_grad_year || 2026,
      target_companies: meta.target_companies || ['Accenture'],
      role: meta.role || 'student',
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (data) {
        setProfile({ ...defaultProfile, ...data })
        return
      }
    } catch (err) {
      console.warn('[Auth] Profiles table query (using auth metadata fallback):', err.message)
    }

    setProfile(defaultProfile)
  }, [])

  // On mount: restore existing session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      if (currentUser) {
        loadProfile(currentUser)
        useProgressStore.getState().switchUserProgressAccount(currentUser.id)
      }
      setLoading(false)
    })

    // Listen for auth state changes (login, logout, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const currentUser = session?.user ?? null
        setUser(currentUser)
        if (currentUser) {
          await loadProfile(currentUser)
          useProgressStore.getState().switchUserProgressAccount(currentUser.id)
        } else {
          setProfile(null)
          useProgressStore.getState().switchUserProgressAccount(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [loadProfile])

  // ── Method 1: Email + Password Sign Up ──────────────────────────
  const signUpWithEmail = useCallback(async (email, password, fullName) => {
    setError(null)
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${getSiteUrl()}/auth/callback`,
        },
      })
      if (error) throw error
      return { success: true, data }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }, [])

  // ── Method 1: Email + Password Sign In ──────────────────────────
  const signInWithEmail = useCallback(async (email, password) => {
    setError(null)
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      return { success: true, data }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }, [])

  // ── Method 2: Email OTP (Magic Link / OTP) ──────────────────────
  const signInWithOTP = useCallback(async (email) => {
    setError(null)
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: `${getSiteUrl()}/auth/callback`,
        },
      })
      if (error) throw error
      return { success: true, data }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }, [])

  // ── Method 2: Verify OTP code ────────────────────────────────────
  const verifyOTP = useCallback(async (email, token) => {
    setError(null)
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email',
      })
      if (error) throw error
      return { success: true, data }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }, [])

  // ── Method 3: Google OAuth ───────────────────────────────────────
  const signInWithGoogle = useCallback(async () => {
    setError(null)
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${getSiteUrl()}/auth/callback`,
        },
      })
      if (error) throw error
      return { success: true, data }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }, [])

  // ── Sign Out ─────────────────────────────────────────────────────
  const signOut = useCallback(async () => {
    setError(null)
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      setUser(null)
      setProfile(null)
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }, [])

  // ── Password Reset ───────────────────────────────────────────────
  const resetPassword = useCallback(async (email) => {
    setError(null)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${getSiteUrl()}/auth/reset-password`,
      })
      if (error) throw error
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }, [])

  // ── Update Password ──────────────────────────────────────────────
  const updatePassword = useCallback(async (newPassword) => {
    setError(null)
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword })
      if (error) throw error
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }, [])

  // ── Update Profile ───────────────────────────────────────────────
  const updateProfile = useCallback(async ({
    fullName,
    avatarUrl,
    collegeName,
    courseName,
    branch,
    targetGradYear,
    targetCompanies
  }) => {
    setError(null)
    setLoading(true)
    try {
      // 1. Demo session or Supabase offline
      if (user?.id?.startsWith('demo-') || !user) {
        const updatedProfile = {
          ...(profile || {}),
          full_name: fullName,
          avatar_url: avatarUrl,
          college_name: collegeName || null,
          course_name: courseName || null,
          branch: branch || null,
          target_grad_year: targetGradYear ? parseInt(targetGradYear, 10) : null,
          target_companies: targetCompanies || [],
        }
        setProfile(updatedProfile)
        const saved = localStorage.getItem('demo_auth_session')
        if (saved) {
          try {
            const parsed = JSON.parse(saved)
            localStorage.setItem('demo_auth_session', JSON.stringify({
              user: { ...parsed.user, user_metadata: { ...(parsed.user?.user_metadata || {}), full_name: fullName } },
              profile: updatedProfile
            }))
          } catch (e) {
            // ignore
          }
        }
        return { success: true, data: updatedProfile }
      }

      // 2. Real Supabase user
      const updates = {
        full_name: fullName,
        avatar_url: avatarUrl || null,
        college_name: collegeName || null,
        course_name: courseName || null,
        branch: branch || null,
        target_grad_year: targetGradYear ? parseInt(targetGradYear, 10) : null,
        target_companies: targetCompanies || [],
      }

      // Save to Supabase auth metadata directly (always exists in Supabase)
      try {
        await supabase.auth.updateUser({
          data: updates
        })
      } catch (authErr) {
        console.warn('[Auth] updateUser metadata warning:', authErr.message)
      }

      // Attempt to save to public.profiles table if initialized
      try {
        const { data: dbData } = await supabase
          .from('profiles')
          .upsert({
            id: user.id,
            email: user.email,
            ...updates,
            updated_at: new Date().toISOString()
          })
          .select()
          .single()

        if (dbData) {
          setProfile(dbData)
          return { success: true, data: dbData }
        }
      } catch (profileErr) {
        console.warn('[Auth] profiles table upsert warning (table might be unmigrated):', profileErr.message)
      }

      // Update local profile state
      const updatedProfile = {
        ...(profile || {}),
        ...updates
      }
      setProfile(updatedProfile)
      return { success: true, data: updatedProfile }
    } catch (err) {
      console.error('[Auth] updateProfile error:', err.message)
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }, [user, profile])

  // ── Demo / Guest Login for Dev Preview ─────────────────────────
  const signInAsDemo = useCallback((role = 'student') => {
    const demoUser = {
      id: 'demo-user-id-001',
      email: role === 'admin' ? 'admin@demo.local' : 'student@demo.local',
      app_metadata: { provider: 'demo' },
      user_metadata: { full_name: role === 'admin' ? 'Demo Admin' : 'Demo Student' },
      created_at: new Date().toISOString(),
    }
    const demoProfile = {
      id: 'demo-user-id-001',
      full_name: role === 'admin' ? 'Demo Admin' : 'Demo Student',
      email: demoUser.email,
      role: role,
      avatar_url: null,
      created_at: new Date().toISOString(),
    }
    setUser(demoUser)
    setProfile(demoProfile)
    localStorage.setItem('demo_auth_session', JSON.stringify({ user: demoUser, profile: demoProfile }))
    useProgressStore.getState().switchUserProgressAccount(demoUser.id)
    return { success: true }
  }, [])

  // Restore demo session if exists and Supabase has no active session
  useEffect(() => {
    const savedDemo = localStorage.getItem('demo_auth_session')
    if (savedDemo && !user) {
      try {
        const parsed = JSON.parse(savedDemo)
        setUser(parsed.user)
        setProfile(parsed.profile)
        useProgressStore.getState().switchUserProgressAccount(parsed.user?.id)
      } catch (e) {
        localStorage.removeItem('demo_auth_session')
      }
    }
  }, [])

  const value = {
    // State
    user,
    profile,
    loading,
    error,
    // Computed
    isAuthenticated: !!user,
    isAdmin: profile?.role === 'admin' || profile?.role === 'super_admin',
    isSuperAdmin: profile?.role === 'super_admin',
    isContentCreator: profile?.role === 'content_creator',
    userRole: profile?.role ?? 'student',
    // Methods
    signUpWithEmail,
    signInWithEmail,
    signInWithOTP,
    verifyOTP,
    signInWithGoogle,
    signOut: async () => {
      localStorage.removeItem('demo_auth_session')
      useProgressStore.getState().switchUserProgressAccount(null)
      return signOut()
    },
    resetPassword,
    updatePassword,
    updateProfile,
    signInAsDemo,
    // Helpers
    clearError: () => setError(null),
    refreshProfile: () => user && loadProfile(user.id),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside <AuthProvider>')
  }
  return context
}
