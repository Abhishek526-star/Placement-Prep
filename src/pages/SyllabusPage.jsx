// src/pages/SyllabusPage.jsx
// Company-Specific Selection Process & Comprehensive Syllabus Engine

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  BookOpen, CheckCircle2, ArrowRight, Brain, FileCode,
  Headphones, Users, CheckSquare, Sparkles, Trophy,
  Layers, ArrowDown, Globe, Database, Shield, Zap,
  ExternalLink, Check, Copy, Flame, AlertTriangle
} from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import { SYLLABUS_BY_COMPANY } from '../config/syllabusData'

export default function SyllabusPage() {
  const { currentCompany } = useCompany()
  const { companySlug } = useParams()
  const slug = companySlug || currentCompany?.slug || 'accenture'

  const syllabus = SYLLABUS_BY_COMPANY[slug] || SYLLABUS_BY_COMPANY.accenture

  // Topic checklist state stored in localStorage per company slug
  const [checkedTopics, setCheckedTopics] = useState(() => {
    try {
      const saved = localStorage.getItem(`syllabus_progress_${slug}`)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  const toggleTopic = (topicKey) => {
    setCheckedTopics((prev) => {
      const next = { ...prev, [topicKey]: !prev[topicKey] }
      try {
        localStorage.setItem(`syllabus_progress_${slug}`, JSON.stringify(next))
      } catch (e) {
        console.error(e)
      }
      return next
    })
  }

  // Calculate total and completed count across all rounds for this company
  const allTopicKeys = []
  syllabus.rounds.forEach((round) => {
    round.categories.forEach((cat) => {
      cat.topics.forEach((topic) => {
        allTopicKeys.push(`${slug}_${cat.keyPrefix}_${topic}`)
      })
    })
  })

  const completedCount = allTopicKeys.filter((k) => checkedTopics[k]).length
  const progressPercent = allTopicKeys.length > 0
    ? Math.round((completedCount / allTopicKeys.length) * 100)
    : 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 1080, margin: '0 auto', width: '100%' }}>
      {/* ── Header Card ── */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(139, 92, 246, 0.06) 50%, var(--color-surface) 100%)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        padding: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20
      }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--color-primary)',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              <BookOpen size={13} /> Official Curriculum
            </span>
            <Badge variant="primary">{syllabus.badgeText}</Badge>
          </div>

          <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>
            {syllabus.title}
          </h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
            {syllabus.subtitle}
          </p>
        </div>

        {/* Progress Tracker Pill */}
        <div style={{
          background: 'var(--color-surface)',
          padding: '16px 20px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          minWidth: 200,
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            <span>Syllabus Prepared</span>
            <span style={{ color: 'var(--color-primary)' }}>{progressPercent}%</span>
          </div>
          <div style={{ width: '100%', height: 7, borderRadius: 10, background: 'var(--color-bg)', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #2563eb, #10b981)', transition: 'width 0.3s ease' }} />
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
            {completedCount} of {allTopicKeys.length} topics mastered
          </div>
        </div>
      </div>

      {/* ⚠️ Rule Alert Banner ⚠️ */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.03) 100%)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: 'var(--radius-lg)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
        <div style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: '#ef4444',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <AlertTriangle size={22} />
        </div>
        <div>
          <div style={{ fontSize: 13.5, fontWeight: 900, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {syllabus.ruleBadge}
          </div>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5, marginTop: 2 }}>
            {syllabus.ruleDesc}
          </div>
        </div>
      </div>

      {/* ── ROUNDS & CURRICULUM SECTIONS ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {syllabus.rounds.map((round) => {
          return (
            <Card
              key={round.id}
              style={{
                padding: '24px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: 18
              }}
            >
              {/* Round Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                      {round.roundNumber}
                    </span>
                    <Badge variant={round.badgeVariant || 'primary'}>{round.badge}</Badge>
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 4px' }}>
                    {round.title}
                  </h2>
                  <div style={{ fontSize: 12.5, color: 'var(--color-text-muted)' }}>
                    {round.timing}
                  </div>
                </div>

                {round.practiceLink && (
                  <Link to={round.practiceLink} style={{ textDecoration: 'none' }}>
                    <Button variant="primary" size="sm" style={{ gap: 6 }}>
                      {round.practiceText || 'Start Practice'} <ArrowRight size={13} />
                    </Button>
                  </Link>
                )}
              </div>

              <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {round.desc}
              </p>

              {/* Categories & Topics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                {round.categories.map((cat) => (
                  <div
                    key={cat.name}
                    style={{
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '16px'
                    }}
                  >
                    <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: 'var(--color-primary)' }}>•</span> {cat.name}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {cat.topics.map((topic) => {
                        const key = `${slug}_${cat.keyPrefix}_${topic}`
                        const isDone = !!checkedTopics[key]

                        return (
                          <div
                            key={topic}
                            onClick={() => toggleTopic(key)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 10,
                              padding: '8px 10px',
                              borderRadius: 6,
                              background: isDone ? 'rgba(16, 185, 129, 0.08)' : 'var(--color-surface)',
                              border: isDone ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--color-border)',
                              cursor: 'pointer',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <div style={{
                              width: 18,
                              height: 18,
                              borderRadius: 4,
                              border: isDone ? 'none' : '2px solid var(--color-border)',
                              background: isDone ? '#10b981' : 'transparent',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              {isDone && <Check size={12} color="#ffffff" strokeWidth={3} />}
                            </div>
                            <span style={{
                              fontSize: 12.5,
                              color: isDone ? '#10b981' : 'var(--color-text-primary)',
                              fontWeight: isDone ? 700 : 500,
                              textDecoration: isDone ? 'line-through' : 'none'
                            }}>
                              {topic}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
