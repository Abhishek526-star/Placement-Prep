// src/features/auth/LoginPage.jsx
// Login page with 3 tabs:
//   Tab 1 — Email + Password
//   Tab 2 — Email OTP (magic link / code)
//   Tab 3 — Google OAuth

import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { GraduationCap, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import './Auth.css'

// Google icon SVG
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.96L3.964 7.292C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  )
}

// ── Email + Password Tab ─────────────────────────────────────────
function EmailPasswordTab({ onSuccess }) {
  const { signInWithEmail, signUpWithEmail } = useAuth()
  const [mode, setMode]         = useState('signin') // 'signin' | 'signup' | 'forgot'
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [showPw, setShowPw]     = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [success, setSuccess]   = useState('')
  const { resetPassword }       = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    if (mode === 'signup') {
      if (!fullName.trim()) { setError('Full name is required.'); setLoading(false); return }
      if (password.length < 8) { setError('Password must be at least 8 characters.'); setLoading(false); return }
      const res = await signUpWithEmail(email, password, fullName)
      if (res.success) {
        setSuccess('Account created! Check your email to verify your account.')
      } else {
        setError(res.error)
      }
    } else if (mode === 'forgot') {
      const res = await resetPassword(email)
      if (res.success) {
        setSuccess('Password reset email sent. Check your inbox.')
      } else {
        setError(res.error)
      }
    } else {
      const res = await signInWithEmail(email, password)
      if (!res.success) setError(res.error)
      else onSuccess()
    }
    setLoading(false)
  }

  if (mode === 'forgot') {
    return (
      <form className="auth-form" onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center', marginBottom: 4 }}>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
            Enter your email and we&apos;ll send you a reset link.
          </p>
        </div>
        {error   && <div className="auth-alert error"><AlertCircle size={15}/>{error}</div>}
        {success && <div className="auth-alert success"><CheckCircle size={15}/>{success}</div>}
        <div className="field-group">
          <label className="field-label">Email address</label>
          <input className="field-input" type="email" value={email}
            onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
        </div>
        <button className="btn-primary" type="submit" disabled={loading}>
          {loading ? <><span className="spinner"/>&nbsp;Sending…</> : 'Send Reset Link'}
        </button>
        <button type="button" className="forgot-link" onClick={() => { setMode('signin'); setError(''); setSuccess('') }}>
          ← Back to sign in
        </button>
      </form>
    )
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {error   && <div className="auth-alert error"><AlertCircle size={15}/>{error}</div>}
      {success && <div className="auth-alert success"><CheckCircle size={15}/>{success}</div>}

      {mode === 'signup' && (
        <div className="field-group">
          <label className="field-label">Full name</label>
          <input className="field-input" type="text" value={fullName}
            onChange={e => setFullName(e.target.value)} placeholder="Jane Smith" required />
        </div>
      )}

      <div className="field-group">
        <label className="field-label">Email address</label>
        <div style={{ position: 'relative' }}>
          <input className="field-input" type="email" value={email}
            onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
            style={{ paddingLeft: 36 }} required />
          <Mail size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }}/>
        </div>
      </div>

      <div className="field-group">
        <label className="field-label">Password</label>
        <div style={{ position: 'relative' }}>
          <input className="field-input" type={showPw ? 'text' : 'password'} value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={mode === 'signup' ? 'Min. 8 characters' : 'Your password'}
            style={{ paddingLeft: 36, paddingRight: 40 }} required />
          <Lock size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }}/>
          <button type="button" onClick={() => setShowPw(p => !p)}
            style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: 0 }}>
            {showPw ? <EyeOff size={15}/> : <Eye size={15}/>}
          </button>
        </div>
        {mode === 'signin' && (
          <button type="button" className="forgot-link" onClick={() => { setMode('forgot'); setError(''); setSuccess('') }}>
            Forgot password?
          </button>
        )}
      </div>

      <button className="btn-primary" type="submit" disabled={loading}>
        {loading
          ? <><span className="spinner"/>&nbsp;{mode === 'signup' ? 'Creating account…' : 'Signing in…'}</>
          : (mode === 'signup' ? 'Create account' : 'Sign in')}
      </button>

      <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--color-text-secondary)' }}>
        {mode === 'signin'
          ? <>Don&apos;t have an account? <button type="button" style={{ background:'none',border:'none',color:'var(--color-primary)',cursor:'pointer',fontWeight:600,fontFamily:'inherit',fontSize:'inherit' }} onClick={() => { setMode('signup'); setError(''); setSuccess('') }}>Sign up</button></>
          : <>Already have an account? <button type="button" style={{ background:'none',border:'none',color:'var(--color-primary)',cursor:'pointer',fontWeight:600,fontFamily:'inherit',fontSize:'inherit' }} onClick={() => { setMode('signin'); setError(''); setSuccess('') }}>Sign in</button></>
        }
      </p>
    </form>
  )
}

// ── Email OTP Tab ────────────────────────────────────────────────
function EmailOTPTab({ onSuccess }) {
  const { signInWithOTP, verifyOTP } = useAuth()
  const [email, setEmail]       = useState('')
  const [otp, setOtp]           = useState('')
  const [otpSent, setOtpSent]   = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [success, setSuccess]   = useState('')

  const handleSendOTP = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await signInWithOTP(email)
    if (res.success) {
      setOtpSent(true)
      setSuccess(`Code sent to ${email}`)
    } else {
      setError(res.error)
    }
    setLoading(false)
  }

  const handleVerifyOTP = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await verifyOTP(email, otp.trim())
    if (res.success) {
      onSuccess()
    } else {
      setError(res.error)
    }
    setLoading(false)
  }

  if (otpSent) {
    return (
      <form className="auth-form" onSubmit={handleVerifyOTP}>
        {error && <div className="auth-alert error"><AlertCircle size={15}/>{error}</div>}
        <div className="otp-sent-info">
          <CheckCircle size={32} color="var(--color-success)" style={{ margin: '0 auto 12px' }}/>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
            We sent a 6-digit code to <span className="otp-email">{email}</span>
          </p>
        </div>
        <div className="field-group">
          <label className="field-label">Enter code</label>
          <input className="field-input otp-input" type="text" value={otp}
            onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
            placeholder="000000" maxLength={6} required autoFocus />
        </div>
        <button className="btn-primary" type="submit" disabled={loading || otp.length < 6}>
          {loading ? <><span className="spinner"/>&nbsp;Verifying…</> : 'Verify Code'}
        </button>
        <div style={{ textAlign: 'center' }}>
          <button type="button" className="otp-resend" onClick={() => { setOtpSent(false); setOtp(''); setError('') }}>
            Didn&apos;t receive it? Change email or resend
          </button>
        </div>
      </form>
    )
  }

  return (
    <form className="auth-form" onSubmit={handleSendOTP}>
      <div className="auth-alert info" style={{ fontSize: 13 }}>
        <Mail size={15}/>
        We&apos;ll send a one-time code to your email. No password needed.
      </div>
      {error && <div className="auth-alert error"><AlertCircle size={15}/>{error}</div>}
      <div className="field-group">
        <label className="field-label">Email address</label>
        <input className="field-input" type="email" value={email}
          onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required autoFocus />
      </div>
      <button className="btn-primary" type="submit" disabled={loading || !email}>
        {loading ? <><span className="spinner"/>&nbsp;Sending…</> : 'Send Code'}
      </button>
    </form>
  )
}

// ── Google OAuth Tab ─────────────────────────────────────────────
function GoogleTab() {
  const { signInWithGoogle } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const handleGoogle = async () => {
    setError('')
    setLoading(true)
    const res = await signInWithGoogle()
    if (!res.success) { setError(res.error); setLoading(false) }
    // On success, Supabase redirects to /auth/callback — no manual redirect needed
  }

  return (
    <div className="auth-form" style={{ alignItems: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
          Sign in instantly using your Google account.
        </p>
      </div>
      {error && <div className="auth-alert error" style={{ width: '100%' }}><AlertCircle size={15}/>{error}</div>}
      <button className="btn-google" onClick={handleGoogle} disabled={loading} type="button"
        style={{ width: '100%' }}>
        {loading
          ? <><span className="spinner dark"/>&nbsp;Redirecting to Google…</>
          : <><GoogleIcon /> Continue with Google</>}
      </button>
      <p style={{ fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center', marginTop: 8 }}>
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  )
}

// ── Main Login Page ──────────────────────────────────────────────
const TABS = [
  { id: 'password', label: 'Password' },
  { id: 'otp',      label: 'Magic Code' },
  { id: 'google',   label: 'Google' },
]

export default function LoginPage() {
  const navigate  = useNavigate()
  const location  = useLocation()
  const { signInAsDemo } = useAuth()
  const [tab, setTab] = useState('password')
  const from = location.state?.from?.pathname || '/'

  const handleSuccess = () => navigate(from, { replace: true })

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Logo */}
        <div className="auth-logo">
          <div className="auth-logo-icon">
            <GraduationCap size={22} />
          </div>
          <span className="auth-logo-text">PlacementPrep</span>
        </div>

        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Choose how you&apos;d like to sign in</p>

        {/* Tab Switcher */}
        <div className="auth-tabs" role="tablist">
          {TABS.map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={`auth-tab${tab === t.id ? ' active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tab === 'password' && <EmailPasswordTab onSuccess={handleSuccess} />}
        {tab === 'otp'      && <EmailOTPTab      onSuccess={handleSuccess} />}
        {tab === 'google'   && <GoogleTab />}

        {/* Demo / Preview Access */}
        <div style={{
          marginTop: 20,
          paddingTop: 16,
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
          <div style={{ fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center' }}>
            Instant Dev / Demo Access
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <button
              type="button"
              onClick={() => { signInAsDemo('student'); handleSuccess() }}
              style={{
                padding: '8px 12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Demo Student →
            </button>
            <button
              type="button"
              onClick={() => { signInAsDemo('admin'); handleSuccess() }}
              style={{
                padding: '8px 12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Demo Admin →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
