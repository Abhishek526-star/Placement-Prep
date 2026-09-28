// src/pages/CognitiveResults.jsx
// Official Assessment Report Card for Accenture Round 3 Cognitive Mock

import { useLocation, useNavigate, useParams, Link } from 'react-router-dom'
import {
  Trophy, CheckCircle2, RotateCcw, ArrowRight, Code,
  Brain, ShieldCheck, Sparkles, Activity, Clock, Zap
} from 'lucide-react'
import { getCognitiveStats } from '../utils/cognitiveStorage'
import '../components/cognitive/cognitive.css'

export default function CognitiveResults() {
  const location = useLocation()
  const navigate = useNavigate()
  const { companySlug = 'accenture' } = useParams()

  const stats = getCognitiveStats()
  const latestSession = stats.recentSessions?.[0]

  // Read session from router state or fallback to stored session
  const session = location.state?.session || latestSession || {
    score: 950,
    accuracy: 85,
    round1: { accuracy: 87, avgTime: 6, score: 550, correctCount: 13, totalQuestions: 15 },
    round2: { solvedCount: 1, totalPuzzles: 1, avgEfficiency: 80, score: 400, timeTaken: 120, attempts: 3 }
  }

  const score = session.score || 0
  const accuracy = session.accuracy || 80
  const round1 = session.round1 || { accuracy: 80, avgTime: 7, score: 450 }
  const round2 = session.round2 || { solvedCount: 1, totalPuzzles: 1, avgEfficiency: 75, score: 350 }

  // Grade Bands
  const getGradeBand = (s) => {
    if (s >= 1200) return { band: 'Exceptional', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' }
    if (s >= 800) return { band: 'Advanced', color: '#A100FF', bg: 'rgba(161, 0, 255, 0.12)' }
    if (s < 400) return { band: 'Developing', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)' }
    return { band: 'Proficient', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.12)' }
  }

  const grade = getGradeBand(score)

  // Competency Ratings (0 - 100%)
  const competencies = [
    {
      name: 'Arithmetic Speed',
      value: Math.max(25, Math.min(100, Math.round(100 - (round1.avgTime || 7) * 5))),
      desc: 'Rapid evaluation and comparative judgment of numeric expressions'
    },
    {
      name: 'Working Memory',
      value: Math.min(100, round1.accuracy || accuracy || 75),
      desc: 'Information retention under time pressure and sequence ordering'
    },
    {
      name: 'Spatial Orientation',
      value: Math.round(((round2.solvedCount || 1) / (round2.totalPuzzles || 1)) * 100),
      desc: 'Grid visualization, directional control, and mental obstacle mapping'
    },
    {
      name: 'Pathing Efficiency',
      value: Math.min(100, round2.avgEfficiency || 75),
      desc: 'Obstacle avoidance with minimal collision attempts'
    },
    {
      name: 'Cognitive Stamina',
      value: Math.round(((accuracy || 80) + (round2.avgEfficiency || 75)) / 2),
      desc: 'Focus maintenance across continuous fast-paced cognitive rounds'
    }
  ]

  return (
    <div style={{ maxWidth: 840, margin: '0 auto', padding: '24px 20px', width: '100%' }}>
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(161, 0, 255, 0.1) 0%, rgba(37, 99, 235, 0.08) 100%)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '32px 28px',
        textAlign: 'center',
        marginBottom: 24,
        position: 'relative'
      }}>
        <div style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'var(--color-surface)',
          border: '2px solid #A100FF',
          color: '#A100FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          boxShadow: '0 4px 14px rgba(161, 0, 255, 0.25)'
        }}>
          <Trophy size={30} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{
            fontSize: 12,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: grade.color,
            background: grade.bg,
            padding: '3px 12px',
            borderRadius: 'var(--radius-pill)',
            border: `1px solid ${grade.color}40`
          }}>
            {grade.band} Performance
          </span>
        </div>

        <h1 style={{ fontSize: 26, fontWeight: 900, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>
          Accenture Cognitive Assessment Report
        </h1>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', maxWidth: 520, margin: '0 auto' }}>
          Your performance has been evaluated against Accenture’s Round 3 elimination threshold benchmarks.
        </p>

        {/* Big Score Display */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'baseline',
          gap: 6,
          marginTop: 20,
          padding: '10px 28px',
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Total Score</span>
          <span style={{ fontSize: 32, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#A100FF' }}>{score}</span>
          <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>pts</span>
        </div>
      </div>

      {/* Per-Round Breakdown Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 16,
        marginBottom: 28
      }}>
        {/* Round 1 Card */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 20 }}>🎈</span>
              <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                Round 1: Math Bubble
              </h3>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#A100FF', fontFamily: 'JetBrains Mono' }}>
              {round1.score || 0} pts
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div style={{ background: 'var(--color-bg)', padding: '10px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: 16, fontWeight: 800, color: '#10b981', fontFamily: 'JetBrains Mono' }}>
                {round1.accuracy}%
              </span>
              <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>Accuracy</span>
            </div>
            <div style={{ background: 'var(--color-bg)', padding: '10px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: 16, fontWeight: 800, color: '#38bdf8', fontFamily: 'JetBrains Mono' }}>
                {round1.avgTime}s
              </span>
              <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>Avg Speed</span>
            </div>
          </div>
        </div>

        {/* Round 2 Card */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 20 }}>🧩</span>
              <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                Round 2: Memory Maze
              </h3>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#2563eb', fontFamily: 'JetBrains Mono' }}>
              {round2.score || 0} pts
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div style={{ background: 'var(--color-bg)', padding: '10px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: 16, fontWeight: 800, color: '#10b981', fontFamily: 'JetBrains Mono' }}>
                {round2.solvedCount ? 'Solved' : 'Unfinished'}
              </span>
              <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>Exit Status</span>
            </div>
            <div style={{ background: 'var(--color-bg)', padding: '10px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: 16, fontWeight: 800, color: '#f59e0b', fontFamily: 'JetBrains Mono' }}>
                {round2.attempts ?? 0}
              </span>
              <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>Wall Hits</span>
            </div>
          </div>
        </div>
      </div>

      {/* Competency Ratings Section */}
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '24px 28px',
        marginBottom: 28
      }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 4px' }}>
          Cognitive Competency Index
        </h3>
        <p style={{ fontSize: 12.5, color: 'var(--color-text-muted)', margin: '0 0 20px' }}>
          5-dimension profile calculated from response latency, recovery from errors, and execution consistency.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {competencies.map((comp) => (
            <div key={comp.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <div>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {comp.name}
                  </span>
                  <span style={{ display: 'block', fontSize: 11.5, color: 'var(--color-text-muted)' }}>
                    {comp.desc}
                  </span>
                </div>
                <span style={{
                  fontSize: 14,
                  fontWeight: 800,
                  fontFamily: 'JetBrains Mono',
                  color: comp.value >= 75 ? '#10b981' : comp.value >= 50 ? '#A100FF' : '#f59e0b'
                }}>
                  {comp.value}%
                </span>
              </div>

              {/* Progress bar */}
              <div style={{
                height: 8,
                background: 'var(--color-bg)',
                borderRadius: 'var(--radius-pill)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)'
              }}>
                <div style={{
                  height: '100%',
                  width: `${comp.value}%`,
                  background: 'linear-gradient(90deg, #A100FF 0%, #2563eb 100%)',
                  borderRadius: 'var(--radius-pill)',
                  transition: 'width 0.6s ease'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons / Next Steps */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Link
          to={`/${companySlug}/cognitive`}
          className="pf-btn"
          style={{ flex: 1, textDecoration: 'none', textAlign: 'center' }}
        >
          <Brain size={15} /> Cognitive Hub
        </Link>
        <Link
          to={`/${companySlug}/cognitive/full-mock`}
          className="pf-btn"
          style={{ flex: 1, textDecoration: 'none', textAlign: 'center' }}
        >
          <RotateCcw size={15} /> Retake Mock
        </Link>
        <Link
          to={`/${companySlug}/dsa`}
          className="cmc-start-btn"
          style={{ flex: 1.4, textDecoration: 'none' }}
        >
          <Code size={15} /> Launch Coding Round <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  )
}
