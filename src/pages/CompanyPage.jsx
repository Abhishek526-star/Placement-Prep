// src/pages/CompanyPage.jsx
// Company-specific preparation hub with isolated readiness analytics and dynamic modules

import { Link } from 'react-router-dom'
import {
  Code2, Database, ClipboardList, FileText,
  MessageSquare, ArrowRight, BookOpen, CheckCircle2, Globe,
  Brain, CheckSquare, History, Workflow, Flame, Award, Zap
} from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import { useProgressStore } from '../stores/useProgressStore'
import { useLiveUsers } from '../contexts/LiveUsersContext'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { ReadinessRing, ProgressBar, StreakBadge } from '../components/common/ProgressBar'

const ICON_MAP = {
  Workflow,
  BookOpen,
  Brain,
  CheckSquare,
  Code2,
  Database,
  Globe,
  ClipboardList,
  History,
  FileText,
  MessageSquare,
}

export default function CompanyPage() {
  const { currentCompany } = useCompany()
  const slug = currentCompany?.slug || 'accenture'
  const { getCompanyProgress } = useProgressStore()
  const { companyLiveUsers } = useLiveUsers()

  // Retrieve strictly company-isolated progress metrics
  const progress = getCompanyProgress(slug)
  const readiness = progress?.readinessScore || 0
  const solvedCount = progress?.solvedCount || 0
  const streak = progress?.streak || 0
  const xp = progress?.xp || 0

  const modules = currentCompany?.placementModules || []

  const standardUtilities = [
    {
      title: 'Mock Assessments',
      desc: 'Full-length timed company pattern recruitment tests',
      icon: ClipboardList,
      to: `/${slug}/assessments`,
      color: '#8b5cf6',
      badge: 'Full Test',
    },
    {
      title: 'Recent PYQs',
      desc: 'Authentic previous year question papers categorized year-wise',
      icon: History,
      to: `/${slug}/pyqs`,
      color: '#d97706',
      badge: 'Previous Papers',
    },
    {
      title: 'Study Material',
      desc: 'Curated PDFs, cheat sheets, and high-yield notes',
      icon: FileText,
      to: `/${slug}/study-materials`,
      color: '#10b981',
      badge: 'PDFs & Notes',
    },
    {
      title: 'Interview Prep',
      desc: 'HR, technical, and behavioral interview questions with answers',
      icon: MessageSquare,
      to: `/${slug}/interview`,
      color: '#f59e0b',
      badge: 'Final Round',
    },
  ]

  return (
    <div>
      {/* Company Header Card */}
      <div style={{
        background: `linear-gradient(135deg, ${currentCompany?.branding?.badgeBg || 'rgba(37,99,235,0.08)'} 0%, var(--color-surface) 100%)`,
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        padding: '28px',
        marginBottom: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20
      }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              background: currentCompany?.branding?.badgeBg || 'rgba(37,99,235,0.1)',
              color: 'var(--color-primary)',
              fontSize: 12,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {currentCompany?.name} Preparation Hub
            </span>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '3px 10px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(22, 163, 74, 0.08)',
              border: '1px solid rgba(22, 163, 74, 0.25)',
              color: '#16a34a',
              fontSize: 11.5,
              fontWeight: 700
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
              {companyLiveUsers} Students Online Now
            </div>
            {streak > 0 && <StreakBadge streak={streak} />}
          </div>

          <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>
            {currentCompany?.name} Placement Hub
          </h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
            {currentCompany?.description}
          </p>

          {/* Quick stats pills */}
          <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
            <div style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              fontSize: 12.5,
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
              <CheckCircle2 size={15} color="var(--color-success)" />
              <span><strong>{solvedCount}</strong> Questions Solved</span>
            </div>
            <div style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              fontSize: 12.5,
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
              <Award size={15} color="var(--color-primary)" />
              <span><strong>{xp}</strong> XP Earned</span>
            </div>
            <Link
              to={`/${slug}/progress`}
              style={{
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-primary)',
                color: '#fff',
                fontSize: 12.5,
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              View Analytics <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <ReadinessRing score={readiness} />
          <span style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--color-text-muted)' }}>
            Company Readiness
          </span>
        </div>
      </div>

      {/* Dynamic Company Modules Grid */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
              {currentCompany?.name} Specialized Rounds
            </h2>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: '2px 0 0' }}>
              Custom-tailored recruitment modules matching the official recruitment pattern
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16 }}>
          {modules.map((m) => {
            const Icon = ICON_MAP[m.icon] || Code2
            return (
              <Link key={m.id || m.title} to={`/${slug}${m.path}`} style={{ textDecoration: 'none' }}>
                <Card hoverable style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: `${m.color}15`, color: m.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={20} />
                    </div>
                    {m.badge && (
                      <span style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: 12,
                        background: 'var(--color-bg)',
                        color: 'var(--color-text-secondary)',
                        border: '1px solid var(--color-border)'
                      }}>
                        {m.badge}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 6px' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.45, flex: 1, marginBottom: 14 }}>
                    {m.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)' }}>
                    Launch <ArrowRight size={13} />
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Practice & Preparation Resources */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14, color: 'var(--color-text-primary)' }}>
          Assessment & Preparation Suite
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16 }}>
          {standardUtilities.map((m) => (
            <Link key={m.title} to={m.to} style={{ textDecoration: 'none' }}>
              <Card hoverable style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${m.color}15`, color: m.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <m.icon size={20} />
                  </div>
                  <span style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: 12,
                    background: 'var(--color-bg)',
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-border)'
                  }}>
                    {m.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 4px' }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.4, flex: 1, marginBottom: 12 }}>
                  {m.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)' }}>
                  Launch <ArrowRight size={13} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Company Syllabus Track Completion */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14, color: 'var(--color-text-primary)' }}>
          {currentCompany?.name} Track Progress
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {currentCompany?.tracks?.map((track) => {
            const trackSolved = progress?.trackProgress?.[track.slug]?.solved || 0
            const trackTotal = track.questionsCount || 40
            const pct = Math.min(100, Math.round((trackSolved / trackTotal) * 100))

            return (
              <Card key={track.id}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                    {track.name}
                  </h3>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 6 }}>
                    <span>{pct}% completed</span>
                    <span>{trackSolved} / {trackTotal} solved</span>
                  </div>
                  <ProgressBar value={pct} />
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
