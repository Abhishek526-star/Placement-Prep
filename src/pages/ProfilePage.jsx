// src/pages/ProfilePage.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  User, Mail, Building2, GraduationCap, GitBranch, Calendar,
  CheckCircle2, AlertCircle, Edit3, Save, X, KeyRound,
  ShieldCheck, Flame, Zap, Bookmark, AlertTriangle, ArrowRight,
  Sparkles, Loader2, Check
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useProgressStore } from '../stores/useProgressStore'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import { ReadinessRing } from '../components/common/ProgressBar'

const COMPANY_OPTIONS = [
  'Accenture', 'TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL', 'Capgemini'
]

const COURSE_OPTIONS = [
  'B.Tech / B.E.', 'BCA', 'MCA', 'M.Tech', 'B.Sc (CS/IT)', 'M.Sc (CS/IT)', 'Other'
]

const PRESET_AVATARS = [
  { id: 'purple', bg: '#8b5cf6', label: 'Violet' },
  { id: 'blue',   bg: '#2563eb', label: 'Blue' },
  { id: 'emerald',bg: '#10b981', label: 'Emerald' },
  { id: 'rose',   bg: '#f43f5e', label: 'Rose' },
  { id: 'amber',  bg: '#f59e0b', label: 'Amber' },
  { id: 'indigo', bg: '#6366f1', label: 'Indigo' },
]

export default function ProfilePage() {
  const { user, profile, updateProfile, updatePassword, isAdmin } = useAuth()
  const { bookmarks, mistakes, xpByCompany, streaksByCompany } = useProgressStore()

  const [isEditing, setIsEditing] = useState(false)
  const [fullName, setFullName] = useState('')
  const [avatarColor, setAvatarColor] = useState('#8b5cf6')
  const [collegeName, setCollegeName] = useState('')
  const [courseName, setCourseName] = useState('B.Tech / B.E.')
  const [branch, setBranch] = useState('')
  const [targetGradYear, setTargetGradYear] = useState('2026')
  const [selectedCompanies, setSelectedCompanies] = useState(['Accenture'])

  // Feedback states
  const [saving, setSaving] = useState(false)
  const [profileMsg, setProfileMsg] = useState(null)
  const [profileError, setProfileError] = useState(null)

  // Password change state
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordSaving, setPasswordSaving] = useState(false)
  const [passwordMsg, setPasswordMsg] = useState(null)
  const [passwordError, setPasswordError] = useState(null)

  useEffect(() => {
    if (!isEditing && (profile || user)) {
      setFullName(profile?.full_name || user?.user_metadata?.full_name || 'Student')
      setCollegeName(profile?.college_name || '')
      setCourseName(profile?.course_name || 'B.Tech / B.E.')
      setBranch(profile?.branch || '')
      setTargetGradYear(profile?.target_grad_year ? String(profile.target_grad_year) : '2026')
      setSelectedCompanies(
        profile?.target_companies && profile.target_companies.length > 0
          ? profile.target_companies
          : ['Accenture']
      )
    }
  }, [profile, user, isEditing])

  const getInitials = (name) => {
    if (!name) return 'U'
    const parts = name.trim().split(/\s+/)
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
    return name.slice(0, 2).toUpperCase()
  }

  const toggleCompany = (comp) => {
    setSelectedCompanies((prev) =>
      prev.includes(comp) ? prev.filter((c) => c !== comp) : [...prev, comp]
    )
  }

  const handleProfileSave = async (e) => {
    e.preventDefault()
    setProfileError(null)
    setProfileMsg(null)

    if (!fullName.trim()) {
      setProfileError('Full name cannot be blank.')
      return
    }

    setSaving(true)
    try {
      const res = await updateProfile({
        fullName: fullName.trim(),
        avatarUrl: null,
        collegeName: collegeName.trim(),
        courseName: courseName.trim(),
        branch: branch.trim(),
        targetGradYear: targetGradYear ? parseInt(targetGradYear, 10) : null,
        targetCompanies: selectedCompanies,
      })

      if (!res.success) {
        throw new Error(res.error || 'Failed to update profile')
      }

      setProfileMsg('Profile updated successfully!')
      setIsEditing(false)
      setTimeout(() => setProfileMsg(null), 3500)
    } catch (err) {
      setProfileError(err.message || 'Error saving profile.')
    } finally {
      setSaving(false)
    }
  }

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    setPasswordError(null)
    setPasswordMsg(null)

    if (!newPassword || newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters.')
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match.')
      return
    }

    setPasswordSaving(true)
    try {
      const res = await updatePassword(newPassword)
      if (!res.success) throw new Error(res.error)
      setPasswordMsg('Password changed successfully!')
      setNewPassword('')
      setConfirmPassword('')
      setTimeout(() => setPasswordMsg(null), 3500)
    } catch (err) {
      setPasswordError(err.message || 'Error updating password.')
    } finally {
      setPasswordSaving(false)
    }
  }

  // Calculate total XP across all companies
  const totalXp = Object.values(xpByCompany || {}).reduce((sum, v) => sum + (v || 0), 0)
  const maxStreak = Math.max(...Object.values(streaksByCompany || {}).map((s) => s?.current || 0), 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 960, margin: '0 auto', width: '100%' }}>
      {/* Toast Alert */}
      {profileMsg && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '12px 16px',
          background: 'rgba(22, 163, 74, 0.1)',
          border: '1px solid var(--color-success)',
          color: 'var(--color-success)',
          borderRadius: 'var(--radius-md)',
          fontSize: 13,
          fontWeight: 600
        }}>
          <CheckCircle2 size={16} />
          {profileMsg}
        </div>
      )}

      {/* Hero Header Card */}
      <Card style={{ padding: '24px 28px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* Avatar Circle */}
            <div style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: avatarColor,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              fontWeight: 800,
              boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
              flexShrink: 0
            }}>
              {getInitials(fullName)}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <h1 style={{ fontSize: 22, fontWeight: 800, color: 'var(--color-text-primary)', margin: 0 }}>
                  {profile?.full_name || user?.user_metadata?.full_name || 'Student'}
                </h1>
                {isAdmin && (
                  <span style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(37, 99, 235, 0.1)',
                    color: 'var(--color-primary)'
                  }}>
                    Admin
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
                <Mail size={14} style={{ color: 'var(--color-text-muted)' }} />
                <span>{user?.email || profile?.email || 'student@placementprep.com'}</span>
              </div>

              <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                Targeting: <strong>{selectedCompanies.join(', ') || 'Placement Drives'}</strong>
              </div>
            </div>
          </div>

          <div>
            <Button
              variant={isEditing ? 'ghost' : 'primary'}
              onClick={() => setIsEditing(!isEditing)}
              style={{ display: 'flex', alignItems: 'center', gap: 6 }}
            >
              {isEditing ? (
                <>
                  <X size={15} /> Cancel Editing
                </>
              ) : (
                <>
                  <Edit3 size={15} /> Edit Profile
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Color Palette (When in Edit Mode) */}
        {isEditing && (
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)' }}>
              Choose Avatar Theme:
            </span>
            <div style={{ display: 'flex', gap: 8 }}>
              {PRESET_AVATARS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAvatarColor(a.bg)}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: a.bg,
                    border: avatarColor === a.bg ? '2px solid var(--color-text-primary)' : '2px solid transparent',
                    cursor: 'pointer',
                    transform: avatarColor === a.bg ? 'scale(1.2)' : 'none',
                    transition: 'transform 0.15s ease'
                  }}
                  title={a.label}
                />
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Main Grid: Details + Gamification */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
        {/* Left Column: Academic & Target Information */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Academic Details Card */}
          <Card style={{ padding: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <GraduationCap size={18} style={{ color: 'var(--color-primary)' }} />
                <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                  Academic Profile
                </h2>
              </div>
            </div>

            {isEditing ? (
              <form onSubmit={handleProfileSave} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {profileError && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 12px',
                    background: 'rgba(239, 68, 68, 0.08)',
                    border: '1px solid var(--color-danger)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-danger)',
                    fontSize: 12
                  }}>
                    <AlertCircle size={14} />
                    <span>{profileError}</span>
                  </div>
                )}

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 4 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text-primary)',
                      fontSize: 13,
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 4 }}>
                    College / University <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    placeholder="e.g. IIT Delhi, VIT, SRM University"
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text-primary)',
                      fontSize: 13,
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 4 }}>
                      Course / Degree
                    </label>
                    <select
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                        fontSize: 13,
                        outline: 'none'
                      }}
                    >
                      {COURSE_OPTIONS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 4 }}>
                      Branch / Stream
                    </label>
                    <input
                      type="text"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      placeholder="e.g. CSE, IT, ECE"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                        fontSize: 13,
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 4 }}>
                    Target Graduation Year
                  </label>
                  <select
                    value={targetGradYear}
                    onChange={(e) => setTargetGradYear(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text-primary)',
                      fontSize: 13,
                      outline: 'none'
                    }}
                  >
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>

                {/* Target Companies Edit */}
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
                    Target Placement Companies
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {COMPANY_OPTIONS.map((c) => {
                      const isSelected = selectedCompanies.includes(c)
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => toggleCompany(c)}
                          style={{
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-pill)',
                            border: isSelected ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                            background: isSelected ? 'rgba(37, 99, 235, 0.1)' : 'var(--color-surface)',
                            color: isSelected ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                            fontSize: 12,
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          {isSelected ? `✓ ${c}` : `+ ${c}`}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 10 }}>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={saving}
                    style={{ minWidth: 120 }}
                  >
                    {saving ? <><Loader2 size={14} className="spin-animate" /> Saving...</> : 'Save Changes'}
                  </Button>
                </div>
              </form>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <Building2 size={16} style={{ color: 'var(--color-text-muted)', marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                      College / University
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: collegeName ? 'var(--color-text-primary)' : 'var(--color-text-muted)', marginTop: 2 }}>
                      {collegeName || 'Not specified (Click Edit Profile to add)'}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <GraduationCap size={16} style={{ color: 'var(--color-text-muted)', marginTop: 2 }} />
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                        Course & Degree
                      </div>
                      <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--color-text-primary)', marginTop: 2 }}>
                        {courseName || 'B.Tech / B.E.'}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <GitBranch size={16} style={{ color: 'var(--color-text-muted)', marginTop: 2 }} />
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                        Branch / Stream
                      </div>
                      <div style={{ fontSize: 13.5, fontWeight: 600, color: branch ? 'var(--color-text-primary)' : 'var(--color-text-muted)', marginTop: 2 }}>
                        {branch || 'Not specified'}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <Calendar size={16} style={{ color: 'var(--color-text-muted)', marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                      Target Graduation Year
                    </div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--color-text-primary)', marginTop: 2 }}>
                      {targetGradYear} Batch
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Target Companies Card */}
          <Card style={{ padding: '22px' }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 12 }}>
              Target Placement Companies
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {selectedCompanies.map((c) => (
                <Link
                  key={c}
                  to={`/${c.toLowerCase()}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(37, 99, 235, 0.08)',
                    border: '1px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    fontSize: 12.5,
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>{c}</span>
                  <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Gamification Stats & Security */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Preparation & Gamification Summary */}
          <Card style={{ padding: '22px' }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 16 }}>
              Placement Readiness & Stats
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{
                padding: '14px',
                background: 'var(--color-bg)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(245, 158, 11, 0.12)',
                  color: '#f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Flame size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                    {maxStreak} Days
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                    Current Streak
                  </div>
                </div>
              </div>

              <div style={{
                padding: '14px',
                background: 'var(--color-bg)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: 12
              }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(37, 99, 235, 0.12)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Zap size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                    {totalXp} XP
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                    Total Experience
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
              <Link
                to="/accenture/progress"
                style={{
                  padding: '12px',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Bookmark size={15} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    Bookmarks
                  </span>
                </div>
                <Badge variant="default">{bookmarks?.length || 0}</Badge>
              </Link>

              <Link
                to="/accenture/progress"
                style={{
                  padding: '12px',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <AlertTriangle size={15} style={{ color: '#ef4444' }} />
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    Mistakes
                  </span>
                </div>
                <Badge variant="danger">{mistakes?.length || 0}</Badge>
              </Link>
            </div>
          </Card>

          {/* Account Security & Password Change */}
          <Card style={{ padding: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <KeyRound size={17} style={{ color: 'var(--color-primary)' }} />
              <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                Account Security
              </h2>
            </div>

            <form onSubmit={handlePasswordChange} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {passwordError && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 12px',
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid var(--color-danger)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--color-danger)',
                  fontSize: 12
                }}>
                  <AlertCircle size={14} />
                  <span>{passwordError}</span>
                </div>
              )}

              {passwordMsg && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 12px',
                  background: 'rgba(22, 163, 74, 0.08)',
                  border: '1px solid var(--color-success)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--color-success)',
                  fontSize: 12
                }}>
                  <CheckCircle2 size={14} />
                  <span>{passwordMsg}</span>
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 4 }}>
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface)',
                    color: 'var(--color-text-primary)',
                    fontSize: 13,
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 4 }}>
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat new password"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface)',
                    color: 'var(--color-text-primary)',
                    fontSize: 13,
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
                <Button
                  type="submit"
                  variant="secondary"
                  size="sm"
                  disabled={passwordSaving || !newPassword}
                >
                  {passwordSaving ? 'Updating...' : 'Update Password'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
