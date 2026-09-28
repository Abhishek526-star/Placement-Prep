// src/pages/FullCognitiveMock.jsx
// Full Accenture Round 3 Cognitive Assessment Simulation (Math Bubble -> Memory Maze -> Report)

import { useState, useCallback, useMemo } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { Brain, Sparkles, ArrowRight, ShieldCheck, Clock, Zap, Target } from 'lucide-react'
import MathBubble from '../games/MathBubble/MathBubble'
import { generateQuestionSet } from '../games/MathBubble/generator'
import MemoryMaze from '../games/MemoryMaze/MemoryMaze'
import GameTransition from '../components/cognitive/GameTransition'
import GameHeader from '../components/cognitive/GameHeader'
import { saveCognitiveSessionToDB } from '../services/cognitiveService'
import '../components/cognitive/cognitive.css'

export default function FullCognitiveMock() {
  const navigate = useNavigate()
  const { companySlug = 'accenture' } = useParams()

  // Stages: 'INTRO' | 'MATH_BUBBLE' | 'TRANSITION' | 'MEMORY_MAZE'
  const [stage, setStage] = useState('INTRO')

  // Math Bubble State
  const [mathQuestions] = useState(() => generateQuestionSet(1)) // Set 1: 15 Qs
  const [mathIndex, setMathIndex] = useState(0)
  const [mathResults, setMathResults] = useState([])
  const [mathStreak, setMathStreak] = useState(0)

  // Scores
  const [mathScore, setMathScore] = useState(0)
  const [mazeScore, setMazeScore] = useState(0)

  // Math completion handler
  const handleMathComplete = (result) => {
    const updated = [...mathResults, result]
    setMathResults(updated)

    if (result.isCorrect) {
      setMathStreak(prev => prev + 1)
    } else {
      setMathStreak(0)
    }

    const currentScore = updated.reduce((sum, r) => sum + (r.scoreData?.totalScore || 0), 0)
    setMathScore(currentScore)

    if (mathIndex + 1 < mathQuestions.length) {
      setMathIndex(prev => prev + 1)
    } else {
      // Math section completed -> trigger transition
      setStage('TRANSITION')
    }
  }

  // Maze completion handler
  const handleMazeComplete = (mazeResult) => {
    setMazeScore(mazeResult.score || 0)

    // Calculate aggregated results
    const mathCorrect = mathResults.filter(r => r.isCorrect).length
    const mathAccuracy = Math.round((mathCorrect / mathQuestions.length) * 100)
    const mathTotalTime = mathResults.reduce((sum, r) => sum + (r.timeTaken || 0), 0)
    const mathAvgTime = Math.round(mathTotalTime / mathQuestions.length)

    const mazeSolved = mazeResult.solved ?? true
    const mazeAttempts = mazeResult.attempts || 0
    const mazeTimeTaken = mazeResult.timeTaken || 0
    const efficiency = Math.max(30, Math.min(100, Math.round(100 - mazeAttempts * 10)))

    const totalAssessmentScore = mathScore + (mazeResult.score || 0)

    const sessionData = {
      score: totalAssessmentScore,
      accuracy: mathAccuracy,
      round1: {
        accuracy: mathAccuracy,
        avgTime: mathAvgTime,
        score: mathScore,
        correctCount: mathCorrect,
        totalQuestions: mathQuestions.length
      },
      round2: {
        solvedCount: mazeSolved ? 1 : 0,
        totalPuzzles: 1,
        avgEfficiency: efficiency,
        score: mazeResult.score || 0,
        timeTaken: mazeTimeTaken,
        attempts: mazeAttempts
      }
    }

    // Persist session to database and local store
    saveCognitiveSessionToDB({
      gameType: 'full_mock',
      score: totalAssessmentScore,
      accuracy: mathAccuracy,
      correctCount: mathCorrect,
      totalQuestions: mathQuestions.length,
      avgTime: mathAvgTime,
      round1: sessionData.round1,
      round2: sessionData.round2,
      mathScore,
      mazeScore: mazeResult.score || 0,
      solved: true,
      timestamp: new Date().toISOString()
    })

    // Navigate to results
    navigate(`/${companySlug}/cognitive/results`, { state: { session: sessionData } })
  }

  const liveTotalScore = mathScore + mazeScore

  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '16px 20px', width: '100%' }}>
      {/* INTRO SCREEN */}
      {stage === 'INTRO' && (
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px 32px',
          boxShadow: 'var(--shadow-xl)',
          maxWidth: 680,
          margin: '20px auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 12px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(161, 0, 255, 0.1)',
              color: '#A100FF',
              fontSize: 12,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 12
            }}>
              <Brain size={14} /> Official Format
            </span>
            <h1 style={{ fontSize: 24, fontWeight: 900, color: 'var(--color-text-primary)', margin: '0 0 8px' }}>
              Accenture Round 3 Cognitive Assessment
            </h1>
            <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Simulate the authentic elimination round. Two gamified sections evaluated strictly on numerical agility, working memory, and mental calculation speed.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginBottom: 28 }}>
            <div style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '18px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 18 }}>🎈</span>
                <h4 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                  Section 1: Quick Math Bubble
                </h4>
              </div>
              <p style={{ margin: 0, fontSize: 12.5, color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                15 Rapid questions. Evaluate 3 expressions/fractions and click them in strict ascending order (Lowest to Highest).
              </p>
              <div style={{ marginTop: 8, fontSize: 11.5, fontWeight: 700, color: '#A100FF' }}>
                15 seconds / question
              </div>
            </div>

            <div style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '18px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 18 }}>🧩</span>
                <h4 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                  Section 2: Memory Maze
                </h4>
              </div>
              <p style={{ margin: 0, fontSize: 12.5, color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                Grid exploration with hidden walls. Discover obstacles, pick up the key, and reach the exit door with minimal collision attempts.
              </p>
              <div style={{ marginTop: 8, fontSize: 11.5, fontWeight: 700, color: '#3b82f6' }}>
                233 seconds time limit
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(161, 0, 255, 0.04)',
            border: '1px solid rgba(161, 0, 255, 0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 16px',
            marginBottom: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            <ShieldCheck size={20} color="#A100FF" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: 12.5, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
              Sectional cutoffs apply. Maintain both high speed and high accuracy to clear the Accenture benchmark.
            </span>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <Link
              to={`/${companySlug}/cognitive`}
              className="pf-btn"
              style={{ textDecoration: 'none', textAlign: 'center' }}
            >
              Cancel
            </Link>
            <button
              className="cmc-start-btn"
              onClick={() => setStage('MATH_BUBBLE')}
            >
              Start Official Mock Exam <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* SECTION 1: MATH BUBBLE */}
      {stage === 'MATH_BUBBLE' && (
        <div>
          <GameHeader
            title="Round 3 • Section 1: Quick Math Bubble"
            subtitle={`Question ${mathIndex + 1} of ${mathQuestions.length}`}
            score={liveTotalScore}
            backUrl={`/${companySlug}/cognitive`}
          />

          <MathBubble
            key={mathQuestions[mathIndex].id}
            question={mathQuestions[mathIndex]}
            setNumber={1}
            questionNumber={mathIndex + 1}
            totalQuestions={mathQuestions.length}
            currentStreak={mathStreak}
            soundEnabled={true}
            onComplete={handleMathComplete}
          />
        </div>
      )}

      {/* SECTION TRANSITION */}
      {stage === 'TRANSITION' && (
        <GameTransition
          nextSectionTitle="Section 2: Memory Maze"
          description="Numerical round completed! Preparing your spatial memory and hidden maze challenge..."
          countdownDuration={4}
          onDone={() => setStage('MEMORY_MAZE')}
        />
      )}

      {/* SECTION 2: MEMORY MAZE */}
      {stage === 'MEMORY_MAZE' && (
        <div>
          <GameHeader
            title="Round 3 • Section 2: Memory Maze"
            subtitle="Explore & Unlock Exit Door"
            score={liveTotalScore}
            backUrl={`/${companySlug}/cognitive`}
          />

          <MemoryMaze
            variantKey="find-the-key"
            isMock={true}
            onComplete={handleMazeComplete}
          />
        </div>
      )}
    </div>
  )
}
