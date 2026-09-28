// src/games/MathBubble/MathBubble.jsx
// Exact Math Bubble Game Engine for Accenture Cognitive Assessment

import { useState, useEffect, useRef } from 'react'
import { Timer, ArrowLeft, Volume2, VolumeX, Sparkles, Check, HelpCircle } from 'lucide-react'
import { calculateMathScore } from './scoring'
import './MathBubble.css'

export default function MathBubble({
  question,
  setNumber = 1,
  questionNumber = 1,
  totalQuestions = 15,
  currentStreak = 0,
  soundEnabled = true,
  onComplete,
}) {
  const [selectedSequence, setSelectedSequence] = useState([])
  const [secondsRemaining, setSecondsRemaining] = useState(question?.timeLimit || 15)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const questionStartTimeRef = useRef(Date.now())

  // Reset state on question change
  useEffect(() => {
    setSelectedSequence([])
    setSecondsRemaining(question?.timeLimit || 15)
    setIsSubmitting(false)
    questionStartTimeRef.current = Date.now()
  }, [question?.id])

  // Countdown timer
  useEffect(() => {
    if (isSubmitting) return

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleTimeOut()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isSubmitting, question?.id])

  const handleTimeOut = () => {
    if (isSubmitting) return
    setIsSubmitting(true)

    const timeTaken = Math.max(1, Math.round((Date.now() - questionStartTimeRef.current) / 1000))
    const totalScore = calculateMathScore({
      isCorrect: false,
      isQuestionComplete: false,
      timeRemaining: 0,
      maxTime: question.timeLimit,
      currentStreak: 0,
    })

    const result = {
      question,
      isCorrect: false,
      timedOut: true,
      selectedOrder: selectedSequence.map((b) => b.expression),
      selectedValues: selectedSequence.map((b) => b.value),
      expectedOrder: question.sortedAnswers.map(
        (val) => question.bubbles.find((b) => b.value === val)?.expression || ''
      ),
      expectedValues: question.sortedAnswers,
      timeTaken,
      scoreData: { totalScore: 0, isCorrect: false },
    }

    setTimeout(() => {
      onComplete?.(result)
    }, 400)
  }

  const handleBubbleClick = (bubble) => {
    if (isSubmitting) return

    const existingIndex = selectedSequence.findIndex((b) => b.id === bubble.id)

    // Deselect / Undo support
    if (existingIndex !== -1) {
      if (selectedSequence.length < 3) {
        setSelectedSequence(selectedSequence.filter((b) => b.id !== bubble.id))
      }
      return
    }

    if (selectedSequence.length >= 3) return

    const nextSequence = [...selectedSequence, bubble]
    setSelectedSequence(nextSequence)

    // When 3rd bubble is picked
    if (nextSequence.length === 3) {
      setIsSubmitting(true)
      const timeTaken = Math.max(1, Math.round((Date.now() - questionStartTimeRef.current) / 1000))
      const isCorrect = nextSequence.every(
        (b, i) => b.value === question.sortedAnswers[i]
      )

      const totalScore = calculateMathScore({
        isCorrect,
        isQuestionComplete: isCorrect,
        timeRemaining: secondsRemaining,
        maxTime: question.timeLimit,
        currentStreak: isCorrect ? currentStreak + 1 : 0,
      })

      const result = {
        question,
        isCorrect,
        timedOut: false,
        selectedOrder: nextSequence.map((b) => b.expression),
        selectedValues: nextSequence.map((b) => b.value),
        expectedOrder: question.sortedAnswers.map(
          (val) => question.bubbles.find((b) => b.value === val)?.expression || ''
        ),
        expectedValues: question.sortedAnswers,
        timeTaken,
        scoreData: { totalScore, isCorrect },
      }

      setTimeout(() => {
        onComplete?.(result)
      }, 400)
    }
  }

  const getStepHint = () => {
    switch (selectedSequence.length) {
      case 0:
        return 'Select 1st bubble (Lowest value)'
      case 1:
        return 'Select 2nd bubble (Middle value)'
      case 2:
        return 'Select 3rd bubble (Highest value)'
      default:
        return 'Sequence Recorded ✓'
    }
  }

  if (!question) return null

  return (
    <div className="math-bubble-container" role="region" aria-label="Math Bubble Assessment">
      {/* Top Header */}
      <div className="mb-header">
        <div className="mb-header-left">
          <span className="mb-title">
            <Sparkles size={16} color="#A100FF" /> Math Bubble • Set {setNumber}
          </span>
          <span className="mb-q-count">
            Q {questionNumber} / {totalQuestions}
          </span>
        </div>

        <div className="mb-header-right">
          <div className={`mb-timer-box ${secondsRemaining <= 4 ? 'warning' : ''}`}>
            <Timer size={15} />
            <span>{secondsRemaining}s</span>
          </div>
        </div>
      </div>

      {/* Instruction banner */}
      <div className="mb-instruction-banner">
        <div className="mb-instruction-text">
          <span>Target:</span>
          <span className="mb-instruction-highlight">{getStepHint()}</span>
        </div>

        {/* 3 Step Dots */}
        <div className="mb-steps-indicator">
          {[0, 1, 2].map((stepIdx) => {
            const isCompleted = selectedSequence.length > stepIdx
            const isActive = selectedSequence.length === stepIdx
            return (
              <div
                key={stepIdx}
                className={`mb-step-dot ${isCompleted ? 'completed' : isActive ? 'active' : ''}`}
              >
                {isCompleted ? <Check size={12} strokeWidth={3} /> : stepIdx + 1}
              </div>
            )
          })}
        </div>
      </div>

      {/* Bubble Arena */}
      <div className="mb-arena">
        {question.bubbles.map((bubble) => {
          const selectedIdx = selectedSequence.findIndex((b) => b.id === bubble.id)
          const isSelected = selectedIdx !== -1

          return (
            <button
              key={bubble.id}
              type="button"
              className={`math-bubble ${isSelected ? 'selected' : ''}`}
              style={{
                left: bubble.position.left,
                top: bubble.position.top,
                transform: bubble.position.transform,
              }}
              onClick={() => handleBubbleClick(bubble)}
              aria-label={bubble.aria}
            >
              {isSelected && (
                <div className="mb-order-pill">
                  #{selectedIdx + 1}
                </div>
              )}
              <span className="mb-expression">{bubble.expression}</span>
              <span className="mb-order-label">
                {isSelected ? `Order #${selectedIdx + 1}` : 'Tap to select'}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
