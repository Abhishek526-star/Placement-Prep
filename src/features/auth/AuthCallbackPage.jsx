// src/features/auth/AuthCallbackPage.jsx
// Handles OAuth + magic-link redirects from Supabase.
// Supabase redirects to /auth/callback after Google OAuth or email link.

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { GraduationCap } from 'lucide-react'
import './Auth.css'

export default function AuthCallbackPage() {
  const navigate = useNavigate()

  useEffect(() => {
    // Supabase automatically processes the URL hash/params
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/', { replace: true })
      } else {
        navigate('/login', { replace: true })
      }
    })
  }, [navigate])

  return (
    <div className="auth-page">
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, background: 'var(--color-primary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <GraduationCap size={26} color="white" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', color: 'var(--color-text-secondary)', fontSize: 14 }}>
          <span className="spinner dark"/>
          Completing sign in…
        </div>
      </div>
    </div>
  )
}
