// src/pages/MathBubblePage.jsx
// Math Bubble Assessment Page (7 Sets, Daily Mode, Detailed Results Review)

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useNavigate, useSearchParams, useParams, Link } from 'react-router-dom'
import {
  Trophy, RotateCcw, ArrowRight, ArrowLeft, CheckCircle2,
  XCircle, Clock, Flame, HelpCircle, Zap
} from 'lucide-react'
import MathBubble from '../games/MathBubble/MathBubble'
import { generateQuestionSet } from '../games/MathBubble/generator'
import {
  saveSessionResult,
  updateDailyChallenge,
  getCognitiveStats
} from '../utils/cognitiveStorage'
import { saveCognitiveSessionToDB } from '../services/cognitiveService'
import GameHeader from '../components/cognitive/GameHeader'
import GameInstructions from '../components/cognitive/GameInstructions'
import '../components/cognitive/cognitive.css'

const TOTAL_SETS = 7

export default function MathBubblePage() {
  const navigate = useNavigate()
  const { companySlug = 'accenture' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const setParam = parseInt(searchParams.get('set') || '1', 10)
  const isDaily = searchParams.get('mode') === 'daily'

  const activeSetNumber = Math.min(Math.max(1, isNaN(setParam) ? 1 : setParam), TOTAL_SETS)

  const [questionSet, setQuestionSet] = useState(() => generateQuestionSet(activeSetNumber))
  const [currentQIndex, setCurrentQIndex] = useState(0)
  const [setResults, setSetResults] = useState([])
  const [isSetComplete, setIsSetComplete] = useState(false)
  const [streak, setStreak] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [showInstructions, setShowInstructions] = useState(false)

  // Start / restart a specific set
  const startSet = useCallback((setNum) => {
    const validNum = Math.min(Math.max(1, setNum), TOTAL_SETS)
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      next.set('set', String(validNum))
      return next
    })
    setQuestionSet(generateQuestionSet(validNum))
    setCurrentQIndex(0)
    setSetResults([])
    setIsSetComplete(false)
    setStreak(0)
  }, [setSearchParams])

  // Sync when activeSetNumber changes from URL
  useEffect(() => {
    setQuestionSet(generateQuestionSet(activeSetNumber))
    setCurrentQIndex(0)
    setSetResults([])
    setIsSetComplete(false)
    setStreak(0)
  }, [activeSetNumber])

  // Handle completion of each individual question
  const handleQuestionComplete = (result) => {
    const updatedResults = [...setResults, result]
    setSetResults(updatedResults)

    if (result.isCorrect) {
      setStreak(prev => prev + 1)
    } else {
      setStreak(0)
    }

    if (currentQIndex + 1 < questionSet.length) {
      setCurrentQIndex(prev => prev + 1)
    } else {
      // Completed all questions in the set!
      finishSet(updatedResults)
    }
  }

  // Finish set and persist
  const finishSet = (allResults) => {
    const correctCount = allResults.filter(r => r.isCorrect).length
    const totalQuestions = allResults.length
    const accuracy = Math.round((correctCount / totalQuestions) * 100)
    const totalScore = allResults.reduce((acc, r) => acc + (r.scoreData?.totalScore || 0), 0)
    const totalTime = allResults.reduce((acc, r) => acc + (r.timeTaken || 0), 0)
    const avgTime = Math.round(totalTime / totalQuestions)

    const questionBreakdown = allResults.map((r, idx) => {
      const qObj = questionSet[idx]
      return {
        index: idx + 1,
        isCorrect: r.isCorrect,
        timeTaken: r.timeTaken || 0,
        score: r.scoreData?.totalScore || 0,
        sortedLabels: qObj?.sortedIndices?.map(i => qObj.bubbles[i]?.label).join(' < ') || '',
        userLabels: r.selectedIndices?.map(i => qObj?.bubbles[i]?.label).join(' < ') || (r.isCorrect ? qObj?.sortedIndices?.map(i => qObj.bubbles[i]?.label).join(' < ') : 'Timed Out')
      }
    })

    saveCognitiveSessionToDB({
      gameType: 'math_bubble',
      setNumber: activeSetNumber,
      score: totalScore,
      accuracy,
      correctCount,
      totalQuestions,
      avgTime,
      isDaily,
      questionBreakdown
    })

    if (isDaily) {
      updateDailyChallenge('math_bubble')
    }

    setIsSetComplete(true)
  }

  const currentQuestion = questionSet[currentQIndex]
  const currentTotalScore = useMemo(() => {
    return setResults.reduce((sum, r) => sum + (r.scoreData?.totalScore || 0), 0)
  }, [setResults])

  const correctCount = useMemo(() => {
    return setResults.filter(r => r.isCorrect).length
  }, [setResults])

  const totalTimeSpent = useMemo(() => {
    return setResults.reduce((sum, r) => sum + (r.timeTaken || 0), 0)
  }, [setResults])

  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '16px 20px', width: '100%' }}>
      {/* Top Header */}
      <GameHeader
        title={isDaily ? 'Math Bubble (Daily Challenge)' : `Math Bubble — Set ${activeSetNumber}`}
        subtitle="Accenture Gamified Round 3 • Rapid Mental Arithmetic"
        score={currentTotalScore}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(prev => !prev)}
        backUrl={`/${companySlug}/cognitive`}
      />

      {/* Set Navigation & Controls Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 20
      }}>
        {/* Set selection pills */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {Array.from({ length: TOTAL_SETS }, (_, i) => i + 1).map((sNum) => (
            <button
              key={sNum}
              onClick={() => startSet(sNum)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: 12.5,
                fontWeight: 700,
                border: activeSetNumber === sNum ? '1px solid #A100FF' : '1px solid var(--color-border)',
                background: activeSetNumber === sNum ? 'rgba(161, 0, 255, 0.12)' : 'var(--color-surface)',
                color: activeSetNumber === sNum ? '#A100FF' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              Set {sNum} {sNum >= 6 ? '(Advanced)' : ''}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {streak >= 3 && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              fontSize: 12,
              fontWeight: 800
            }}>
              <Flame size={14} /> {streak} Streak!
            </div>
          )}

          <button
            onClick={() => setShowInstructions(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-secondary)',
              fontSize: 12.5,
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <HelpCircle size={14} /> Rules
          </button>
        </div>
      </div>

      {/* Main Game Card */}
      {!isSetComplete && currentQuestion && (
        <MathBubble
          key={currentQuestion.id}
          question={currentQuestion}
          setNumber={activeSetNumber}
          questionNumber={currentQIndex + 1}
          totalQuestions={questionSet.length}
          currentStreak={streak}
          soundEnabled={soundEnabled}
          onComplete={handleQuestionComplete}
        />
      )}

      {/* Set Complete Modal */}
      {isSetComplete && (
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '32px 28px',
          boxShadow: 'var(--shadow-xl)',
          marginTop: 10
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.12)',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px'
            }}>
              <Trophy size={28} />
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 6px' }}>
              Set {activeSetNumber} Complete!
            </h2>
            <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', margin: 0 }}>
              Performance summary for Accenture Round 3 Bubble Math evaluation.
            </p>
          </div>

          {/* Stat Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: 12,
            marginBottom: 28
          }}>
            <div style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '14px',
              textAlign: 'center'
            }}>
              <span style={{ display: 'block', fontSize: 22, fontWeight: 800, color: '#A100FF', fontFamily: 'JetBrains Mono' }}>
                {currentTotalScore}
              </span>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Total Score
              </span>
            </div>

            <div style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '14px',
              textAlign: 'center'
            }}>
              <span style={{ display: 'block', fontSize: 22, fontWeight: 800, color: '#10b981', fontFamily: 'JetBrains Mono' }}>
                {Math.round((correctCount / questionSet.length) * 100)}%
              </span>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Accuracy ({correctCount}/{questionSet.length})
              </span>
            </div>

            <div style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '14px',
              textAlign: 'center'
            }}>
              <span style={{ display: 'block', fontSize: 22, fontWeight: 800, color: '#38bdf8', fontFamily: 'JetBrains Mono' }}>
                {Math.round(totalTimeSpent / questionSet.length)}s
              </span>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Avg Speed / Q
              </span>
            </div>
          </div>

          {/* Per-Question Breakdown List */}
          <h4 style={{ fontSize: 14, fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 12 }}>
            Question Breakdown & Review:
          </h4>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            maxHeight: 280,
            overflowY: 'auto',
            paddingRight: 6,
            marginBottom: 28
          }}>
            {setResults.map((res, idx) => {
              const qObj = questionSet[idx]
              const sortedLabels = qObj?.sortedIndices?.map(i => qObj.bubbles[i]?.label).join(' < ')

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {res.isCorrect ? (
                      <CheckCircle2 size={18} style={{ color: '#10b981' }} />
                    ) : (
                      <XCircle size={18} style={{ color: '#ef4444' }} />
                    )}
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                        Q{idx + 1}:
                      </span>{' '}
                      <span style={{ fontSize: 12.5, color: 'var(--color-text-secondary)' }}>
                        Correct: <strong>{sortedLabels}</strong>
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{
                      fontSize: 12,
                      fontFamily: 'JetBrains Mono',
                      color: res.isCorrect ? '#10b981' : '#ef4444',
                      fontWeight: 700
                    }}>
                      {res.scoreData?.totalScore > 0 ? `+${res.scoreData?.totalScore}` : (res.scoreData?.totalScore || 0)} pts
                    </span>
                    <span style={{ fontSize: 11.5, color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Clock size={11} /> {res.timeTaken}s
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              className="pf-btn"
              style={{ flex: 1 }}
              onClick={() => startSet(activeSetNumber)}
            >
              <RotateCcw size={15} /> Retry Set {activeSetNumber}
            </button>

            {activeSetNumber < TOTAL_SETS ? (
              <button
                className="cmc-start-btn"
                style={{ flex: 1.4 }}
                onClick={() => startSet(activeSetNumber + 1)}
              >
                Proceed to Set {activeSetNumber + 1} <ArrowRight size={15} />
              </button>
            ) : (
              <Link
                to={`/${companySlug}/cognitive`}
                className="cmc-start-btn"
                style={{ flex: 1.4, textDecoration: 'none' }}
              >
                Return to Cognitive Hub <ArrowRight size={15} />
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Instructions Modal */}
      <GameInstructions
        gameType="math_bubble"
        isOpen={showInstructions}
        onStart={() => setShowInstructions(false)}
      />
    </div>
  )
}
