// src/components/common/EditProfileModal.jsx
import { useState, useEffect } from 'react'
import {
  User, Mail, Calendar, Building2, CheckCircle2,
  AlertCircle, Sparkles, GraduationCap, BookOpen, GitBranch, Loader2
} from 'lucide-react'
import Modal from './Modal'
import Button from './Button'
import { useAuth } from '../../contexts/AuthContext'

const PRESET_AVATARS = [
  { id: 'purple', bg: '#8b5cf6', label: 'Violet' },
  { id: 'blue',   bg: '#2563eb', label: 'Blue' },
  { id: 'emerald',bg: '#10b981', label: 'Emerald' },
  { id: 'rose',   bg: '#f43f5e', label: 'Rose' },
  { id: 'amber',  bg: '#f59e0b', label: 'Amber' },
  { id: 'indigo', bg: '#6366f1', label: 'Indigo' },
]

const COMPANY_OPTIONS = [
  'Accenture', 'TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL', 'Capgemini'
]

const COURSE_OPTIONS = [
  'B.Tech / B.E.', 'BCA', 'MCA', 'M.Tech', 'B.Sc (CS/IT)', 'M.Sc (CS/IT)', 'Other'
]

export default function EditProfileModal({ isOpen, onClose }) {
  const { user, profile, updateProfile } = useAuth()

  const [fullName, setFullName] = useState('')
  const [avatarColor, setAvatarColor] = useState('#8b5cf6')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [collegeName, setCollegeName] = useState('')
  const [courseName, setCourseName] = useState('B.Tech / B.E.')
  const [branch, setBranch] = useState('')
  const [targetGradYear, setTargetGradYear] = useState('2026')
  const [selectedCompanies, setSelectedCompanies] = useState(['Accenture'])

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)

  // Populate initial values
  useEffect(() => {
    if (isOpen) {
      setFullName(profile?.full_name || user?.user_metadata?.full_name || '')
      setAvatarUrl(profile?.avatar_url || '')
      setCollegeName(profile?.college_name || '')
      setCourseName(profile?.course_name || 'B.Tech / B.E.')
      setBranch(profile?.branch || '')
      setTargetGradYear(profile?.target_grad_year ? String(profile.target_grad_year) : '2026')
      setSelectedCompanies(
        profile?.target_companies && profile.target_companies.length > 0
          ? profile.target_companies
          : ['Accenture']
      )
      setErrorMsg(null)
      setSuccessMsg(null)
    }
  }, [isOpen, profile, user])

  const toggleCompany = (comp) => {
    setSelectedCompanies((prev) =>
      prev.includes(comp) ? prev.filter((c) => c !== comp) : [...prev, comp]
    )
  }

  const getInitials = (name) => {
    if (!name) return 'U'
    const parts = name.trim().split(/\s+/)
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
    return name.slice(0, 2).toUpperCase()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg(null)
    setSuccessMsg(null)

    if (!fullName.trim()) {
      setErrorMsg('Full name cannot be blank.')
      return
    }

    setLoading(true)
    try {
      const res = await updateProfile({
        fullName: fullName.trim(),
        avatarUrl: avatarUrl.trim() || null,
        collegeName: collegeName.trim(),
        courseName: courseName.trim(),
        branch: branch.trim(),
        targetGradYear: targetGradYear ? parseInt(targetGradYear, 10) : null,
        targetCompanies: selectedCompanies,
      })

      if (!res.success) {
        throw new Error(res.error || 'Failed to update profile')
      }

      setSuccessMsg('Profile updated successfully!')
      setTimeout(() => {
        onClose()
      }, 900)
    } catch (err) {
      setErrorMsg(err.message || 'Error saving profile.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        if (!loading) onClose()
      }}
      title="Edit Profile"
      maxWidth="560px"
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* Alerts */}
        {errorMsg && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 14px',
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid var(--color-danger)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-danger)',
            fontSize: 13
          }}>
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 14px',
            background: 'rgba(22, 163, 74, 0.08)',
            border: '1px solid var(--color-success)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-success)',
            fontSize: 13
          }}>
            <CheckCircle2 size={16} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Avatar Preview & Color Picker */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '12px 16px',
          background: 'var(--color-bg)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)'
        }}>
          <div style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: avatarColor,
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 19,
            fontWeight: 800,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            flexShrink: 0
          }}>
            {getInitials(fullName)}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4 }}>
              Avatar Color
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {PRESET_AVATARS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAvatarColor(a.bg)}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: a.bg,
                    border: avatarColor === a.bg ? '2px solid var(--color-text-primary)' : '2px solid transparent',
                    cursor: 'pointer',
                    transform: avatarColor === a.bg ? 'scale(1.15)' : 'none',
                    transition: 'transform 0.15s ease'
                  }}
                  title={a.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Full Name & Email */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
              Full Name *
            </label>
            <div style={{ position: 'relative' }}>
              <User size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Abhishek Kumar"
                required
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 36px',
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
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                value={user?.email || profile?.email || ''}
                readOnly
                disabled
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 36px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg)',
                  color: 'var(--color-text-muted)',
                  fontSize: 13,
                  outline: 'none',
                  cursor: 'not-allowed'
                }}
              />
            </div>
          </div>
        </div>

        {/* College Name (Optional) */}
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
            College / University <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>(Optional)</span>
          </label>
          <div style={{ position: 'relative' }}>
            <Building2 size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              placeholder="e.g. IIT Delhi, VIT Vellore, SRM University"
              disabled={loading}
              style={{
                width: '100%',
                padding: '9px 12px 9px 36px',
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

        {/* Course & Branch (Optional) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
              Course / Degree <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>(Optional)</span>
            </label>
            <div style={{ position: 'relative' }}>
              <BookOpen size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <select
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 36px',
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
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
              Branch / Stream <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>(Optional)</span>
            </label>
            <div style={{ position: 'relative' }}>
              <GitBranch size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder="e.g. CSE, IT, ECE, EEE"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 36px',
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
        </div>

        {/* Target Graduation Year */}
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
            Target Graduation Year <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>(Optional)</span>
          </label>
          <div style={{ position: 'relative' }}>
            <Calendar size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <select
              value={targetGradYear}
              onChange={(e) => setTargetGradYear(e.target.value)}
              disabled={loading}
              style={{
                width: '100%',
                padding: '9px 12px 9px 36px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                fontSize: 13,
                outline: 'none'
              }}
            >
              <option value="2024">2024 (Passed Out)</option>
              <option value="2025">2025 (Final Year)</option>
              <option value="2026">2026 (Pre-Final Year)</option>
              <option value="2027">2027 (Sophomore)</option>
              <option value="2028">2028 (Freshman)</option>
            </select>
          </div>
        </div>

        {/* Target Companies */}
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
            Target Placement Companies <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>(Optional)</span>
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
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-pill)',
                    border: isSelected ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                    background: isSelected ? 'rgba(37, 99, 235, 0.1)' : 'var(--color-surface)',
                    color: isSelected ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {isSelected ? `✓ ${c}` : `+ ${c}`}
                </button>
              )
            })}
          </div>
        </div>

        {/* Form Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 6, paddingTop: 12, borderTop: '1px solid var(--color-border)' }}>
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            style={{ minWidth: 120 }}
          >
            {loading ? (
              <>
                <Loader2 size={15} className="spin-animate" />
                <span>Saving...</span>
              </>
            ) : (
              'Save Changes'
            )}
          </Button>
        </div>
      </form>
    </Modal>
  )
}
