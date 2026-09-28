// src/pages/CognitivePage.jsx
// Accenture-exclusive Gamified Cognitive Assessment Hub

import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Brain, Play, Timer, Target, ShieldCheck, ArrowRight, Building2,
  Sparkles, Trophy, Flame, CheckCircle2, ChevronRight, Zap, RefreshCw
} from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import { COGNITIVE_GAMES_BY_COMPANY } from '../config/cognitiveGamesData'
import { getCognitiveStats } from '../utils/cognitiveStorage'
import { fetchCognitiveGameStatsFromDB } from '../services/cognitiveService'

export default function CognitivePage() {
  const { currentCompany } = useCompany()
  const { companySlug } = useParams()
  const slug = companySlug || currentCompany?.slug || 'accenture'

  const [stats, setStats] = useState(() => getCognitiveStats())
  const [dbStats, setDbStats] = useState(null)

  useEffect(() => {
    let isMounted = true

    const loadStats = async () => {
      setStats(getCognitiveStats())
      try {
        const live = await fetchCognitiveGameStatsFromDB(slug)
        if (isMounted && live) {
          setDbStats(live)
        }
      } catch (e) {
        console.warn('DB fetch in CognitivePage failed:', e)
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

  // Cognitive games are exclusive to Accenture
  if (slug !== 'accenture') {
    return (
      <div style={{ maxWidth: 640, margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
        <Card style={{ padding: '36px', border: '1px solid var(--color-border)' }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'rgba(37, 99, 235, 0.1)',
            color: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <Brain size={28} />
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>
            Accenture-Exclusive Assessment
          </h2>
          <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 20px' }}>
            Gamified Cognitive Assessments (Math Bubble & Memory Maze) are an official elimination round exclusively for <strong>Accenture</strong>. {currentCompany?.name || slug.toUpperCase()} uses standard online aptitude and technical assessments instead.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
            <Link to={`/${slug}`} style={{ textDecoration: 'none' }}>
              <Button variant="outline" style={{ gap: 6 }}>
                <Building2 size={15} /> {currentCompany?.name || 'Company'} Hub
              </Button>
            </Link>
            <Link to={`/${slug}/syllabus`} style={{ textDecoration: 'none' }}>
              <Button variant="primary" style={{ gap: 6 }}>
                View Official Syllabus <ArrowRight size={15} />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    )
  }

  const companyConfig = COGNITIVE_GAMES_BY_COMPANY.accenture
  const mathBest = dbStats ? dbStats.mathBest : (stats.bestScores?.mathBubble || 0)
  const mazeBest = dbStats ? dbStats.mazeBest : (stats.bestScores?.memoryMaze || 0)
  const pathFinderBest = dbStats ? dbStats.pathFinderBest : (stats.bestScores?.path_finder || 0)
  const currentStreak = stats.dailyStreak?.current || 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1080, margin: '0 auto', width: '100%', paddingBottom: 40 }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(161, 0, 255, 0.08) 0%, rgba(37, 99, 235, 0.05) 50%, var(--color-surface) 100%)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        padding: '28px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div style={{ maxWidth: 700 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '3px 10px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(161, 0, 255, 0.1)',
              color: '#A100FF',
              fontSize: 11.5,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              <Brain size={13} /> Accenture Round 3
            </span>
            <Badge variant="primary">{companyConfig.stageBadge}</Badge>
          </div>

          <h1 style={{ fontSize: 26, fontWeight: 900, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>
            Accenture — {companyConfig.title}
          </h1>
          <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
            {companyConfig.subtitle}
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div style={{
          display: 'flex',
          gap: 16,
          background: 'var(--color-surface)',
          padding: '14px 20px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div>
            <div style={{ fontSize: 10.5, color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Daily Streak</div>
            <div style={{ fontSize: 15, fontWeight: 900, color: '#ef4444', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Flame size={14} /> {currentStreak} Days
            </div>
          </div>
          <div style={{ width: 1, background: 'var(--color-border)' }} />
          <div>
            <div style={{ fontSize: 10.5, color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Games Active</div>
            <div style={{ fontSize: 15, fontWeight: 900, color: '#A100FF' }}>3 Official</div>
          </div>
        </div>
      </div>

      {/* Featured: Full Cognitive Mock Assessment */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(161, 0, 255, 0.12) 0%, rgba(37, 99, 235, 0.08) 100%)',
        border: '2px solid rgba(161, 0, 255, 0.3)',
        borderRadius: 'var(--radius-xl)',
        padding: '28px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
        boxShadow: '0 6px 20px rgba(161, 0, 255, 0.08)'
      }}>
        <div style={{ maxWidth: 640 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{
              background: '#A100FF',
              color: '#ffffff',
              fontSize: 11,
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: 'var(--radius-pill)',
              textTransform: 'uppercase'
            }}>
              Simulation
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Accenture Round 3 Timed Full Mock
            </span>
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: 'var(--color-text-primary)', margin: '0 0 6px' }}>
            Complete 2-Round Cognitive Assessment
          </h2>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
            Experience the real exam pressure. First complete <strong>Quick Math Bubble</strong> (15 numerical questions), then transition smoothly into <strong>Memory Maze</strong> (spatial navigation with hidden walls). Receive a comprehensive competency report card.
          </p>
        </div>

        <Link to={`/${slug}/cognitive/full-mock`} style={{ textDecoration: 'none' }}>
          <button style={{
            background: 'linear-gradient(135deg, #A100FF 0%, #2563eb 100%)',
            color: '#fff',
            border: 'none',
            padding: '14px 28px',
            borderRadius: 'var(--radius-md)',
            fontWeight: 800,
            fontSize: 14,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: '0 4px 16px rgba(161, 0, 255, 0.4)',
            transition: 'all 0.2s ease'
          }}>
            <Play size={16} fill="currentColor" /> Launch Full Mock Assessment
          </button>
        </Link>
      </div>

      {/* Daily Challenge Card */}
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: 'rgba(239, 68, 68, 0.1)',
            color: '#ef4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Flame size={24} />
          </div>
          <div>
            <h3 style={{ margin: '0 0 2px 0', fontSize: 15, fontWeight: 800, color: 'var(--color-text-primary)' }}>
              Daily Cognitive Drill
            </h3>
            <p style={{ margin: 0, fontSize: 12.5, color: 'var(--color-text-secondary)' }}>
              Maintain calculation sharpness with 1 daily bubble set. Keep your streak alive!
            </p>
          </div>
        </div>

        <Link
          to={`/${slug}/cognitive/math-bubble?mode=daily`}
          style={{ textDecoration: 'none' }}
        >
          <Button variant="outline" style={{ gap: 6, fontWeight: 700 }}>
            Play Daily Drill <ChevronRight size={15} />
          </Button>
        </Link>
      </div>

      {/* Games Showcase Grid (3 Real Games) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
        {companyConfig.games.map((game) => {
          const isBubble = game.id === 'bubble'
          const isMaze = game.id === 'maze'
          const bestScore = isBubble ? mathBest : isMaze ? mazeBest : pathFinderBest

          return (
            <Card
              key={game.id}
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                position: 'relative'
              }}
              className="hover-elevate"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: game.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24
                  }}>
                    {game.icon}
                  </div>
                  <Badge variant="primary">{game.badge}</Badge>
                </div>

                <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 4 }}>
                  {game.title}
                </h2>
                <div style={{ fontSize: 12, fontWeight: 600, color: game.color, marginBottom: 10 }}>
                  {game.subtitle}
                </div>

                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>
                  {game.desc}
                </p>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: 12,
                  color: 'var(--color-text-muted)',
                  marginBottom: 16,
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-bg)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Timer size={14} color="var(--color-primary)" />
                    <span>{game.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontWeight: 700 }}>
                    <Trophy size={14} color="#f59e0b" />
                    <span>Best: {bestScore} pts</span>
                  </div>
                </div>

                <Link
                  to={`/${slug}/cognitive/${game.path}`}
                  style={{ textDecoration: 'none', display: 'block', width: '100%' }}
                >
                  <Button
                    variant="primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      gap: 8,
                      background: game.color,
                      borderColor: game.color
                    }}
                  >
                    <Play size={15} fill="currentColor" /> Practice {game.title}
                  </Button>
                </Link>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Official Accenture Cognitive Round Insights */}
      <Card style={{
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16
      }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: 'rgba(161, 0, 255, 0.1)',
          color: '#A100FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <ShieldCheck size={22} />
        </div>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 6px' }}>
            {companyConfig.ruleTitle}
          </h3>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 10px' }}>
            {companyConfig.ruleDescription}
          </p>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            <li><strong>Bubble Math:</strong> 3-item ascending sequence ordering with mixed decimal/fraction numbers. Fast responses grant speed bonus points (+150 max).</li>
            <li><strong>Memory Maze:</strong> Hidden walls are discovered only by colliding. Memorize dead-ends and collect all keys before reaching the door.</li>
            <li><strong>No Retries in Real Test:</strong> On test day, both games run back-to-back with strict timers. Practice here to build automatic reflexes!</li>
          </ul>
        </div>
      </Card>
    </div>
  )
}
