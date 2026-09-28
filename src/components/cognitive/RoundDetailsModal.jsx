// src/components/cognitive/RoundDetailsModal.jsx
// Full round telemetry modal for Cognitive Assessment plays

import { Link } from 'react-router-dom'
import {
  X, Trophy, Clock, Target, AlertTriangle, Key,
  CheckCircle2, XCircle, ArrowRight, Play, Brain, Sparkles
} from 'lucide-react'

export default function RoundDetailsModal({ session, isOpen, onClose, companySlug = 'accenture' }) {
  if (!isOpen || !session) return null

  const isMath = session.gameType === 'math_bubble'
  const isMaze = session.gameType === 'memory_maze'
  const isPathFinder = session.gameType === 'path_finder'
  const isMock = session.gameType === 'full_mock'

  const formattedDate = session.timestamp
    ? new Date(session.timestamp).toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    : 'Recent Session'

  const getPlayAgainUrl = () => {
    if (isMath) {
      return `/${companySlug}/cognitive/math-bubble?set=${session.setNumber || 1}`
    }
    if (isMaze) {
      return `/${companySlug}/cognitive/memory-maze?variant=${session.variant || 'find-the-key'}`
    }
    if (isPathFinder) {
      return `/${companySlug}/cognitive/path-finder?variant=${session.variant || '3x3'}`
    }
    return `/${companySlug}/cognitive/full-mock`
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      zIndex: 1200,
      animation: 'fadeIn 0.2s ease'
    }}>
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: '28px 24px',
        width: '100%',
        maxWidth: 540,
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: isPathFinder ? 'rgba(249, 115, 22, 0.1)' : isMath ? 'rgba(161, 0, 255, 0.1)' : isMaze ? 'rgba(37, 99, 235, 0.1)' : 'rgba(16, 185, 129, 0.1)',
              color: isPathFinder ? '#f97316' : isMath ? '#A100FF' : isMaze ? '#2563eb' : '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22
            }}>
              {isPathFinder ? '🧭' : isMath ? '🎈' : isMaze ? '🧩' : '🏆'}
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                {isPathFinder
                  ? `Path Finder • ${session.variantName || session.variant || '3×3 Standard'}`
                  : isMath
                  ? `Quick Bubble Math • Set ${session.setNumber || 1}`
                  : isMaze
                  ? `Memory Maze • ${session.variantName || session.variant || 'Find the Key'}`
                  : 'Accenture Full Mock Assessment'}
              </h3>
              <p style={{ margin: '2px 0 0', fontSize: 12, color: 'var(--color-text-muted)' }}>
                Played on {formattedDate}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              padding: 4,
              display: 'flex',
              alignItems: 'center'
            }}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Top Summary Stat Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 10,
          background: 'var(--color-bg)',
          padding: '12px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: 18, fontWeight: 900, fontFamily: 'JetBrains Mono', color: isPathFinder ? '#f97316' : '#A100FF' }}>
              {session.score || 0}
            </span>
            <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
              Score
            </span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: 18, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#10b981' }}>
              {isPathFinder
                ? (session.solved !== false ? 'Solved ✓' : 'Unfinished')
                : isMath
                ? `${session.accuracy || 0}%`
                : isMaze
                ? (session.solved !== false ? 'Solved' : 'Unfinished')
                : `${session.accuracy || 0}%`}
            </span>
            <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
              {isPathFinder ? 'Route Status' : isMath ? 'Accuracy' : isMaze ? 'Status' : 'Overall Acc'}
            </span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: 18, fontWeight: 900, fontFamily: 'JetBrains Mono', color: '#38bdf8' }}>
              {isPathFinder ? `${session.timeTaken || 0}s` : isMath ? `${session.avgTime || 0}s` : isMaze ? `${session.timeTaken || 0}s` : `${session.mathScore || 0}`}
            </span>
            <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
              {isPathFinder ? 'Time Taken' : isMath ? 'Avg Speed' : isMaze ? 'Time Taken' : 'Math Score'}
            </span>
          </div>
        </div>

        {/* Game-Specific Deep Dive: PATH FINDER */}
        {isPathFinder && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Spatial Path Telemetry:
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              <div style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '12px'
              }}>
                <span style={{ display: 'block', fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  Moves Taken
                </span>
                <span style={{ fontSize: 16, fontWeight: 800, color: (session.moves || session.attempts || 0) <= (session.minMoves || 12) ? '#10b981' : '#f97316' }}>
                  {session.moves || session.attempts || 0} moves
                </span>
              </div>

              <div style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '12px'
              }}>
                <span style={{ display: 'block', fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  Optimal Moves
                </span>
                <span style={{ fontSize: 16, fontWeight: 800, color: '#38bdf8' }}>
                  {session.minMoves || 12} min
                </span>
              </div>

              <div style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '12px'
              }}>
                <span style={{ display: 'block', fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  Grid Matrix
                </span>
                <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                  {session.gridSize || 9}×{session.gridSize || 9}
                </span>
              </div>
            </div>

            <div style={{
              background: 'rgba(249, 115, 22, 0.05)',
              border: '1px solid rgba(249, 115, 22, 0.2)',
              borderRadius: 'var(--radius-md)',
              padding: '10px 14px',
              fontSize: 12.5,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <Sparkles size={16} color="#f97316" style={{ flexShrink: 0 }} />
              <span>
                {(session.moves || session.attempts || 0) <= (session.minMoves || 12)
                  ? 'Masterclass spatial reasoning! Solved at or below the optimal minimum moves threshold.'
                  : 'Valid path connected from start to finish. Repeated practice will refine tile rotation efficiency.'}
              </span>
            </div>
          </div>
        )}

        {/* Game-Specific Deep Dive: BUBBLE MATH */}
        {isMath && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                Question-by-Question Telemetry:
              </span>
              <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                Correct: {session.correctCount || 0} / {session.totalQuestions || 15}
              </span>
            </div>

            {session.questionBreakdown && session.questionBreakdown.length > 0 ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                maxHeight: 240,
                overflowY: 'auto',
                paddingRight: 4
              }}>
                {session.questionBreakdown.map((q, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      fontSize: 12.5
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      {q.isCorrect ? (
                        <CheckCircle2 size={16} color="#10b981" />
                      ) : (
                        <XCircle size={16} color="#ef4444" />
                      )}
                      <div>
                        <strong>Q{q.index || idx + 1}:</strong>{' '}
                        <span style={{ color: 'var(--color-text-secondary)' }}>
                          {q.sortedLabels || 'Correct order'}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11.5, fontWeight: 700, color: q.isCorrect ? '#10b981' : '#ef4444' }}>
                        {q.score > 0 ? `+${q.score}` : q.score} pts
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Clock size={11} /> {q.timeTaken}s
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                fontSize: 12.5,
                color: 'var(--color-text-secondary)',
                textAlign: 'center'
              }}>
                Completed Set {session.setNumber} with {session.accuracy}% accuracy in {session.avgTime}s average speed per calculation.
              </div>
            )}
          </div>
        )}

        {/* Game-Specific Deep Dive: MEMORY MAZE */}
        {isMaze && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Maze Navigation Telemetry:
            </span>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10
            }}>
              <div style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '12px'
              }}>
                <span style={{ display: 'block', fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  Grid Dimensions
                </span>
                <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                  {session.gridSize || 3}×{session.gridSize || 3} Grid
                </span>
              </div>

              <div style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '12px'
              }}>
                <span style={{ display: 'block', fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  Wall Collisions
                </span>
                <span style={{ fontSize: 16, fontWeight: 800, color: (session.attempts || 0) === 0 ? '#10b981' : '#f97316' }}>
                  {session.attempts || 0} hits
                </span>
              </div>

              <div style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '12px'
              }}>
                <span style={{ display: 'block', fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  Keys Collected
                </span>
                <span style={{ fontSize: 16, fontWeight: 800, color: '#f59e0b' }}>
                  {session.keyCount || 1} / {session.keyCount || 1}
                </span>
              </div>

              <div style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '12px'
              }}>
                <span style={{ display: 'block', fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  Exit Door Status
                </span>
                <span style={{ fontSize: 16, fontWeight: 800, color: session.solved !== false ? '#10b981' : '#ef4444' }}>
                  {session.solved !== false ? 'Unlocked ✓' : 'Locked'}
                </span>
              </div>
            </div>

            <div style={{
              background: 'rgba(37, 99, 235, 0.05)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              borderRadius: 'var(--radius-md)',
              padding: '10px 14px',
              fontSize: 12.5,
              color: 'var(--color-text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <Sparkles size={16} color="#2563eb" style={{ flexShrink: 0 }} />
              <span>
                {(session.attempts || 0) === 0
                  ? 'Flawless recall! Navigated to the exit without a single wall strike.'
                  : (session.attempts || 0) <= 2
                  ? 'High efficiency! Only hit 1–2 invisible walls while exploring the corridors.'
                  : 'Experienced multiple wall resets. Practicing will build automatic pathing memory.'}
              </span>
            </div>
          </div>
        )}

        {/* Game-Specific Deep Dive: FULL MOCK */}
        {isMock && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              Accenture Round 3 Sections:
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ background: 'var(--color-bg)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#A100FF', display: 'block', marginBottom: 4 }}>
                  Section 1: Quick Math
                </span>
                <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                  Score: <strong>{session.mathScore || 0} pts</strong>
                </div>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                  Accuracy: {session.accuracy || 0}%
                </div>
              </div>

              <div style={{ background: 'var(--color-bg)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#2563eb', display: 'block', marginBottom: 4 }}>
                  Section 2: Memory Maze
                </span>
                <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                  Score: <strong>{session.mazeScore || 0} pts</strong>
                </div>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                  Door: Unlocked ✓
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: '10px 16px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg)',
              color: 'var(--color-text-primary)',
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Close
          </button>

          <Link
            to={getPlayAgainUrl()}
            onClick={onClose}
            style={{
              flex: 1.4,
              padding: '10px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, #A100FF 0%, #2563eb 100%)',
              color: '#ffffff',
              fontSize: 13,
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6
            }}
          >
            <Play size={14} fill="currentColor" /> Play This Game Again
          </Link>
        </div>
      </div>
    </div>
  )
}
