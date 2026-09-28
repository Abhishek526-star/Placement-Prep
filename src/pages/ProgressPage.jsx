// src/pages/ProgressPage.jsx
// Company-specific preparation analytics & multi-company progress tracker

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart2, CheckCircle2, Bookmark, AlertTriangle,
  Flame, Award, Trash2, ExternalLink, ArrowRight, Building2,
  Check, RefreshCw, Sparkles, PlusCircle, Brain, Trophy, Eye, Clock, Target, Play
} from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import { useAuth } from '../contexts/AuthContext'
import { useProgressStore } from '../stores/useProgressStore'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { ReadinessRing, ProgressBar, StreakBadge } from '../components/common/ProgressBar'
import EmptyState from '../components/common/EmptyState'
import { getCognitivePuzzleCounts } from '../utils/cognitiveStorage'
import { fetchCognitiveGameStatsFromDB, clearCognitiveSessionsDB } from '../services/cognitiveService'
import { getTodayDateString } from '../utils/dateUtils'
import RoundDetailsModal from '../components/cognitive/RoundDetailsModal'
import toast from 'react-hot-toast'

export default function ProgressPage() {
  const { currentCompany, companies, setCompanyBySlug } = useCompany()
  const { user } = useAuth()
  const slug = currentCompany?.slug || 'accenture'
  const [activeTab, setActiveTab] = useState('overview')
  const [isSaving, setIsSaving] = useState(false)
  const [selectedRoundSession, setSelectedRoundSession] = useState(null)
  const [cognitiveData, setCognitiveData] = useState(() => getCognitivePuzzleCounts())
  const [loadingCognitive, setLoadingCognitive] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadStats = async () => {
      setLoadingCognitive(true)
      try {
        const stats = await fetchCognitiveGameStatsFromDB(slug)
        if (isMounted && stats) {
          setCognitiveData(stats)
        }
      } catch (e) {
        console.warn('Failed to load DB cognitive stats:', e)
      } finally {
        if (isMounted) setLoadingCognitive(false)
      }
    }

    loadStats()

    const handleUpdate = () => {
      loadStats()
    }
    window.addEventListener('accenture-activity-updated', handleUpdate)
    window.addEventListener('storage', handleUpdate)
    return () => {
      isMounted = false
      window.removeEventListener('accenture-activity-updated', handleUpdate)
      window.removeEventListener('storage', handleUpdate)
    }
  }, [slug])

  const {
    companyProgress,
    getCompanyProgress,
    claimDailyPractice,
    syncCompanyProgressFromDB,
    resetCompanyProgress,
    bookmarks,
    mistakes,
    removeBookmark,
    removeMistake
  } = useProgressStore()

  // Retrieve company progress & XP dynamically from Supabase whenever slug or active user changes
  useEffect(() => {
    syncCompanyProgressFromDB(slug, user?.id)
  }, [slug, user?.id, syncCompanyProgressFromDB])

  // Strictly isolated stats for the current active company (subscribing to companyProgress changes)
  const currentStats = companyProgress?.[slug] || getCompanyProgress(slug)
  const solvedCount = currentStats.solvedCount || 0
  const readiness = currentStats.readinessScore || 0
  const xp = currentStats.xp || 0
  const streak = currentStats.streak || 0

  const today = getTodayDateString()
  const isDailyClaimed = currentStats.lastDailyPracticeDate === today

  const companyBookmarks = bookmarks[slug] || []
  const companyMistakes = mistakes[slug] || []

  // One-time-per-day practice solve (+15 XP)
  const handleDailyPractice = async (trackSlug = currentCompany?.tracks?.[0]?.slug || 'general') => {
    if (isDailyClaimed || isSaving) return
    setIsSaving(true)
    try {
      const res = await claimDailyPractice(slug, trackSlug, 15)
      if (res?.success) {
        toast.success(`Daily Practice Solved! +${res.xp || 15} XP saved to database.`)
      } else if (res?.alreadyClaimed) {
        toast('Already claimed today! Resets tomorrow at midnight.', { icon: 'ℹ️' })
      }
    } catch (err) {
      console.error('Failed to claim daily practice:', err)
      toast.error('Failed to save to database. Please check your connection.')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div>
      {/* Top Heading */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              padding: '2px 8px',
              borderRadius: 'var(--radius-pill)',
              background: currentCompany?.branding?.badgeBg || 'rgba(37,99,235,0.1)',
              color: 'var(--color-primary)'
            }}>
              Individual Company Progress
            </span>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: 'var(--color-text-primary)' }}>
            {currentCompany?.name} — Preparation Analytics
          </h1>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 2 }}>
            Your progress is isolated strictly to {currentCompany?.name}. Switching companies switches your target stats.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <StreakBadge streak={streak} />
          {isDailyClaimed ? (
            <div
              title={`Next +15 XP bonus unlocks tomorrow at midnight to reach a ${streak + 1}-day streak!`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10b981',
                fontSize: 12.5,
                fontWeight: 700
              }}
            >
              <Check size={14} strokeWidth={2.5} /> Daily Practice Solved (+15 XP Claimed)
            </div>
          ) : (
            <Button
              variant="outline"
              size="sm"
              icon={isSaving ? RefreshCw : PlusCircle}
              disabled={isSaving}
              onClick={() => handleDailyPractice(currentCompany?.tracks?.[0]?.slug || 'general')}
            >
              {isSaving ? 'Saving (+15 XP)...' : 'Mark Practice Solved (+15 XP)'}
            </Button>
          )}
        </div>
      </div>

      {/* Metrics Row (Strictly scoped to currentCompany) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
        <Card>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>
            {currentCompany?.shortName?.toUpperCase()} READINESS
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--color-text-primary)', marginTop: 4 }}>
            {readiness}%
          </div>
          <div style={{ marginTop: 10 }}>
            <ProgressBar value={readiness} />
          </div>
          <div style={{ fontSize: 11.5, color: 'var(--color-text-muted)', marginTop: 6 }}>
            {readiness >= 75 ? '🔥 Placement Ready' : readiness >= 40 ? '⚡ Good Momentum' : '🌱 Getting Started'}
          </div>
        </Card>

        <Card>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>
            SOLVED IN {currentCompany?.shortName?.toUpperCase()}
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--color-text-primary)', marginTop: 4 }}>
            {solvedCount}
          </div>
          <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 6 }}>
            Specific to this company
          </div>
        </Card>

        <Card>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>
            SAVED BOOKMARKS
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--color-text-primary)', marginTop: 4 }}>
            {companyBookmarks.length}
          </div>
          <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 6 }}>
            Tricky problems & notes
          </div>
        </Card>

        <Card>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>
            COMPANY XP
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--color-primary)', marginTop: 4 }}>
            {xp} XP
          </div>
          <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 6 }}>
            Tier {Math.floor(xp / 100) + 1} Aspirant
          </div>
        </Card>

        {slug === 'accenture' && (
          <Card>
            <div style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 700, letterSpacing: '0.04em' }}>
              COGNITIVE PUZZLES SOLVED
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#A100FF', marginTop: 4 }}>
              {cognitiveData.totalSolved}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 6 }}>
              🎈 Bubble: {cognitiveData.mathSolved} • 🧩 Maze: {cognitiveData.mazeSolved}
            </div>
          </Card>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20, borderBottom: '1px solid var(--color-border)', paddingBottom: 10, flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          style={{
            padding: '7px 16px', borderRadius: 'var(--radius-pill)', border: 'none',
            background: activeTab === 'overview' ? 'var(--color-primary)' : 'var(--color-surface)',
            color: activeTab === 'overview' ? '#fff' : 'var(--color-text-secondary)',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          Track Breakdown
        </button>

        {slug === 'accenture' && (
          <button
            type="button"
            onClick={() => setActiveTab('cognitive')}
            style={{
              padding: '7px 16px', borderRadius: 'var(--radius-pill)', border: 'none',
              background: activeTab === 'cognitive' ? 'var(--color-primary)' : 'var(--color-surface)',
              color: activeTab === 'cognitive' ? '#fff' : 'var(--color-text-secondary)',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              transition: 'all 0.15s ease'
            }}
          >
            <Brain size={14} /> Cognitive Assessments ({cognitiveData.totalSolved} Solved)
          </button>
        )}

        <button
          type="button"
          onClick={() => setActiveTab('all-companies')}
          style={{
            padding: '7px 16px', borderRadius: 'var(--radius-pill)', border: 'none',
            background: activeTab === 'all-companies' ? 'var(--color-primary)' : 'var(--color-surface)',
            color: activeTab === 'all-companies' ? '#fff' : 'var(--color-text-secondary)',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          All Companies Comparison
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('mistakes')}
          style={{
            padding: '7px 16px', borderRadius: 'var(--radius-pill)', border: 'none',
            background: activeTab === 'mistakes' ? 'var(--color-primary)' : 'var(--color-surface)',
            color: activeTab === 'mistakes' ? '#fff' : 'var(--color-text-secondary)',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          Mistake Notebook ({companyMistakes.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('bookmarks')}
          style={{
            padding: '7px 16px', borderRadius: 'var(--radius-pill)', border: 'none',
            background: activeTab === 'bookmarks' ? 'var(--color-primary)' : 'var(--color-surface)',
            color: activeTab === 'bookmarks' ? '#fff' : 'var(--color-text-secondary)',
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          Saved Bookmarks ({companyBookmarks.length})
        </button>
      </div>

      {/* Tab 1: Current Company Track Breakdown */}
      {activeTab === 'overview' && (
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                {currentCompany?.name} Sectional Track Mastery
              </h2>
              <p style={{ fontSize: 12.5, color: 'var(--color-text-muted)', margin: '2px 0 0' }}>
                Completion percentage for each dedicated assessment track
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              icon={RefreshCw}
              onClick={async () => {
                resetCompanyProgress(slug)
                if (slug === 'accenture') {
                  await clearCognitiveSessionsDB()
                  const fresh = await fetchCognitiveGameStatsFromDB('accenture')
                  setCognitiveData(fresh)
                }
              }}
            >
              Reset {currentCompany?.shortName} Stats
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {currentCompany?.tracks?.map((track) => {
              const trackSolved = currentStats.trackProgress?.[track.slug]?.solved || 0
              const trackTotal = track.questionsCount || 40
              const pct = Math.min(100, Math.round((trackSolved / trackTotal) * 100))

              return (
                <div key={track.id} style={{
                  padding: 14,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13.5 }}>
                    <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {track.name}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                        {trackSolved} / {trackTotal} solved ({pct}%)
                      </span>
                      <Link to={`/${slug}/assessments`} style={{ textDecoration: 'none' }}>
                        <Button variant="outline" size="xs">
                          Practice
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <ProgressBar value={pct} />
                </div>
              )
            })}
          </div>
        </Card>
      )}

      {/* Tab 2: All Companies Comparison */}
      {activeTab === 'all-companies' && (
        <Card>
          <div style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
              Individual Company Progress Comparison
            </h2>
            <p style={{ fontSize: 12.5, color: 'var(--color-text-muted)', margin: '2px 0 0' }}>
              Progress is partitioned separately for each company. Click any company to switch to its preparation suite.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
                  <th style={{ padding: '12px 10px', fontWeight: 600 }}>Company</th>
                  <th style={{ padding: '12px 10px', fontWeight: 600 }}>Readiness</th>
                  <th style={{ padding: '12px 10px', fontWeight: 600 }}>Solved Questions</th>
                  <th style={{ padding: '12px 10px', fontWeight: 600 }}>Company XP</th>
                  <th style={{ padding: '12px 10px', fontWeight: 600 }}>Streak</th>
                  <th style={{ padding: '12px 10px', fontWeight: 600 }}>Bookmarks</th>
                  <th style={{ padding: '12px 10px', fontWeight: 600, textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => {
                  const compStats = getCompanyProgress(c.slug)
                  const isCurrent = c.slug === slug
                  const bCount = (bookmarks[c.slug] || []).length

                  return (
                    <tr
                      key={c.slug}
                      style={{
                        borderBottom: '1px solid var(--color-border)',
                        background: isCurrent ? 'var(--color-bg)' : 'transparent',
                        fontWeight: isCurrent ? 600 : 400
                      }}
                    >
                      <td style={{ padding: '14px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{
                          width: 28, height: 28, borderRadius: 6,
                          background: c.branding?.primaryColor || '#2563eb',
                          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, fontWeight: 800
                        }}>
                          {c.shortName.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div style={{ color: 'var(--color-text-primary)' }}>{c.name}</div>
                          {isCurrent && (
                            <span style={{ fontSize: 10, color: 'var(--color-primary)', fontWeight: 700 }}>
                              Active Company
                            </span>
                          )}
                        </div>
                      </td>

                      <td style={{ padding: '14px 10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: 120 }}>
                          <ProgressBar value={compStats.readinessScore || 0} />
                          <span style={{ fontSize: 12, minWidth: 28 }}>{compStats.readinessScore || 0}%</span>
                        </div>
                      </td>

                      <td style={{ padding: '14px 10px', color: 'var(--color-text-primary)' }}>
                        <strong>{compStats.solvedCount || 0}</strong> solved
                      </td>

                      <td style={{ padding: '14px 10px', color: 'var(--color-primary)' }}>
                        {compStats.xp || 0} XP
                      </td>

                      <td style={{ padding: '14px 10px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                          <Flame size={14} color="#f59e0b" /> {compStats.streak || 0}d
                        </span>
                      </td>

                      <td style={{ padding: '14px 10px', color: 'var(--color-text-secondary)' }}>
                        {bCount} saved
                      </td>

                      <td style={{ padding: '14px 10px', textAlign: 'right' }}>
                        <Link
                          to={`/${c.slug}`}
                          onClick={() => setCompanyBySlug(c.slug)}
                          style={{
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            fontSize: 12,
                            fontWeight: 700,
                            color: isCurrent ? 'var(--color-text-muted)' : 'var(--color-primary)'
                          }}
                        >
                          {isCurrent ? 'Current' : 'Switch'} <ArrowRight size={12} />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Tab 3: Mistake Notebook */}
      {activeTab === 'mistakes' && (
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
              {currentCompany?.name} Mistake Notebook
            </h2>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              {companyMistakes.length} mistakes recorded
            </span>
          </div>

          {companyMistakes.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {companyMistakes.map((m) => (
                <div key={m.id} style={{
                  padding: 14, borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 600 }}>{m.questionTitle}</h4>
                    <span style={{ fontSize: 12, color: 'var(--color-danger)' }}>Wrong response: {m.wrongAnswer}</span>
                  </div>
                  <Button variant="ghost" size="sm" icon={Trash2} onClick={() => removeMistake(slug, m.id)}>
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={AlertTriangle}
              title="Mistake book is clear!"
              message={`Questions you answer incorrectly during ${currentCompany?.name} mock practice will appear here for targeted revision.`}
            />
          )}
        </Card>
      )}

      {/* Tab 4: Saved Bookmarks */}
      {activeTab === 'bookmarks' && (
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
              {currentCompany?.name} Bookmarks
            </h2>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              {companyBookmarks.length} items saved
            </span>
          </div>

          {companyBookmarks.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {companyBookmarks.map((b) => (
                <div key={b.id} style={{
                  padding: 14, borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 600 }}>{b.title}</h4>
                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Saved on {b.date}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {b.link && (
                      <Link to={b.link}>
                        <Button variant="outline" size="sm" icon={ExternalLink}>
                          View
                        </Button>
                      </Link>
                    )}
                    <Button variant="ghost" size="sm" icon={Trash2} onClick={() => removeBookmark(slug, b.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Bookmark}
              title="No bookmarks saved"
              message={`Save tricky ${currentCompany?.name} questions, algorithm notes, and cheat-sheets to review them later.`}
            />
          )}
        </Card>
      )}

      {/* Tab 5: Cognitive Assessments (Accenture Exclusive) */}
      {activeTab === 'cognitive' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Top Banner Card */}
          <Card style={{
            background: 'linear-gradient(135deg, rgba(161, 0, 255, 0.08) 0%, rgba(37, 99, 235, 0.06) 100%)',
            border: '1px solid var(--color-border)',
            padding: '24px 28px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '2px 10px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(161, 0, 255, 0.12)',
                    color: '#A100FF'
                  }}>
                    Accenture Stage 1 • Round 3 Telemetry
                  </span>
                  {cognitiveData.isLiveFromDB && (
                    <span style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#10b981',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                      Supabase DB Synced
                    </span>
                  )}
                  {loadingCognitive && (
                    <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                      Refreshing...
                    </span>
                  )}
                </div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 6px' }}>
                  Gamified Cognitive Problem Solves
                </h2>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0 }}>
                  Detailed tracking of mental calculation sets, invisible maze escapes, and sectional performance.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <Link to="/accenture/cognitive/full-mock" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" style={{ gap: 6 }}>
                    <Play size={14} fill="currentColor" /> Take Full Mock
                  </Button>
                </Link>
                <Link to="/accenture/cognitive" style={{ textDecoration: 'none' }}>
                  <Button variant="outline" style={{ gap: 6 }}>
                    <Brain size={14} /> Cognitive Hub
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Individual Puzzle Telemetry Cards (Bubble Math vs Memory Maze) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
            {/* Bubble Math Card */}
            <Card style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 26 }}>🎈</span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                      Quick Bubble Math
                    </h3>
                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                      Ascending arithmetic expressions
                    </span>
                  </div>
                </div>

                <Link to="/accenture/cognitive/math-bubble" style={{ textDecoration: 'none' }}>
                  <Button variant="outline" size="sm" style={{ gap: 4 }}>
                    <Play size={12} fill="currentColor" /> Play Set
                  </Button>
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, background: 'var(--color-bg)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: 20, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#A100FF' }}>
                    {cognitiveData.mathSolved}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Sets Cleared
                  </span>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: 20, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#10b981' }}>
                    {cognitiveData.avgMathAccuracy}%
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Avg Accuracy
                  </span>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: 20, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#38bdf8' }}>
                    {cognitiveData.mathBest}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Best Score
                  </span>
                </div>
              </div>
            </Card>

            {/* Memory Maze Card */}
            <Card style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 26 }}>🧩</span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                      Memory Maze
                    </h3>
                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                      Invisible wall navigation & keys
                    </span>
                  </div>
                </div>

                <Link to="/accenture/cognitive/memory-maze" style={{ textDecoration: 'none' }}>
                  <Button variant="outline" size="sm" style={{ gap: 4 }}>
                    <Play size={12} fill="currentColor" /> Play Maze
                  </Button>
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, background: 'var(--color-bg)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: 20, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#2563eb' }}>
                    {cognitiveData.mazeSolved}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Mazes Solved
                  </span>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: 20, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#f59e0b' }}>
                    {cognitiveData.minMazeAttempts}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Min Wall Hits
                  </span>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: 20, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#38bdf8' }}>
                    {cognitiveData.mazeBest}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Best Score
                  </span>
                </div>
              </div>
            </Card>

            {/* Path Finder Card */}
            <Card style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 26 }}>🧭</span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                      Path Finder
                    </h3>
                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                      Spatial tile rotation & pathing
                    </span>
                  </div>
                </div>

                <Link to="/accenture/cognitive/path-finder" style={{ textDecoration: 'none' }}>
                  <Button variant="outline" size="sm" style={{ gap: 4 }}>
                    <Play size={12} fill="currentColor" /> Play Grid
                  </Button>
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, background: 'var(--color-bg)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: 20, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#f97316' }}>
                    {cognitiveData.pathFinderSolved || 0}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Boards Solved
                  </span>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: 20, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#10b981' }}>
                    {cognitiveData.avgPathFinderMoves ? `${cognitiveData.avgPathFinderMoves}` : '0'}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Avg Moves
                  </span>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: 20, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#38bdf8' }}>
                    {cognitiveData.pathFinderBest || 0}
                  </span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                    Best Score
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Detailed Round-by-Round Play History Log */}
          <Card>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                  Cognitive Assessment Play History
                </h3>
                <p style={{ margin: '2px 0 0', fontSize: 12.5, color: 'var(--color-text-muted)' }}>
                  Click "View Full Details" on any round to inspect question-by-question telemetry, wall hits, and completion speed.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  background: 'rgba(161, 0, 255, 0.08)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)'
                }}>
                  {cognitiveData.allHistory.length} Total Sessions
                </span>

                {cognitiveData.allHistory.length > 0 && (
                  <Button
                    variant="ghost"
                    size="xs"
                    icon={Trash2}
                    onClick={async () => {
                      if (window.confirm('Reset all cognitive game history and solve counts to 0?')) {
                        await clearCognitiveSessionsDB()
                        const fresh = await fetchCognitiveGameStatsFromDB('accenture')
                        setCognitiveData(fresh)
                      }
                    }}
                    style={{ color: 'var(--color-text-muted)', fontSize: 11.5 }}
                  >
                    Reset (0)
                  </Button>
                )}
              </div>
            </div>

            {cognitiveData.allHistory && cognitiveData.allHistory.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {cognitiveData.allHistory.map((s, idx) => {
                  const isMathRound = s.gameType === 'math_bubble'
                  const isMazeRound = s.gameType === 'memory_maze'
                  const title = isMathRound
                    ? `Quick Bubble Math • Set ${s.setNumber || 1}`
                    : isMazeRound
                    ? `Memory Maze • ${s.variantName || s.variant || 'Find the Key'}`
                    : 'Accenture Full Mock Assessment'

                  const dateStr = s.timestamp
                    ? new Date(s.timestamp).toLocaleString(undefined, {
                        dateStyle: 'medium',
                        timeStyle: 'short'
                      })
                    : 'Recent'

                  return (
                    <div
                      key={s.id || idx}
                      style={{
                        padding: '14px 18px',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 12,
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 24 }}>
                          {isMathRound ? '🎈' : isMazeRound ? '🧩' : '🏆'}
                        </span>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                            {title}
                          </div>
                          <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                            Played on {dateStr}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ display: 'block', fontSize: 15, fontWeight: 800, fontFamily: 'JetBrains Mono', color: '#A100FF' }}>
                            {s.score > 0 ? `+${s.score}` : s.score || 0} pts
                          </span>
                          <span style={{ fontSize: 11.5, color: 'var(--color-text-muted)' }}>
                            {isMathRound
                              ? `${s.accuracy || 0}% Accuracy`
                              : isMazeRound
                              ? `${s.attempts ?? 0} Wall Hits`
                              : `${s.accuracy || 0}% Acc`}
                          </span>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          icon={Eye}
                          onClick={() => setSelectedRoundSession(s)}
                          style={{ gap: 6, fontWeight: 700 }}
                        >
                          View Full Details
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <EmptyState
                icon={Brain}
                title="No cognitive games played yet"
                message="Start practicing Quick Bubble Math or Memory Maze to build your mental speed and track individual round telemetry here."
              />
            )}
          </Card>
        </div>
      )}

      {/* Full Round Details Modal */}
      <RoundDetailsModal
        session={selectedRoundSession}
        isOpen={!!selectedRoundSession}
        onClose={() => setSelectedRoundSession(null)}
        companySlug={slug}
      />
    </div>
  )
}
