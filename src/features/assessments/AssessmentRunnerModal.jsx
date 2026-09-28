// src/features/assessments/AssessmentRunnerModal.jsx
import { useState, useEffect } from 'react'
import {
  Clock, AlertTriangle, CheckCircle2, XCircle,
  Bookmark, ChevronLeft, ChevronRight, Check, X
} from 'lucide-react'
import Button from '../../components/common/Button'
import QuestionPalette from '../../components/assessment/QuestionPalette'
import './AssessmentRunner.css'

export default function AssessmentRunnerModal({
  isOpen,
  onClose,
  assessmentTitle = 'Placement Mock Exam Simulation',
  durationMinutes = 15,
  sampleQuestions = [],
}) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [marked, setMarked] = useState({})
  const [visited, setVisited] = useState({ 0: true })
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60)
  const [isFinished, setIsFinished] = useState(false)
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)

  // Use provided sample questions or default simulated questions
  const questions = sampleQuestions.length > 0 ? sampleQuestions : [
    {
      id: 1,
      type: 'mcq',
      section: 'Cognitive Ability',
      prompt: 'If a car travels at 60 km/h for 2.5 hours, how much distance does it cover?',
      options: [
        { key: 'A', text: '120 km' },
        { key: 'B', text: '150 km' },
        { key: 'C', text: '160 km' },
        { key: 'D', text: '180 km' },
      ],
      correct: 'B',
    },
    {
      id: 2,
      type: 'mcq',
      section: 'Technical Assessment',
      prompt: 'What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?',
      options: [
        { key: 'A', text: 'O(1)' },
        { key: 'B', text: 'O(N)' },
        { key: 'C', text: 'O(log N)' },
        { key: 'D', text: 'O(N log N)' },
      ],
      correct: 'C',
    },
    {
      id: 3,
      type: 'mcq',
      section: 'Technical Assessment',
      prompt: 'Which protocol is used to securely transfer files over SSH?',
      options: [
        { key: 'A', text: 'FTP' },
        { key: 'B', text: 'SFTP' },
        { key: 'C', text: 'TFTP' },
        { key: 'D', text: 'HTTP' },
      ],
      correct: 'B',
    },
    {
      id: 4,
      type: 'mcq',
      section: 'Pseudocode',
      prompt: 'What will be the output of: Set integer a = 5, b = 10; a = a ^ b; b = a ^ b; a = a ^ b; Print a, b',
      options: [
        { key: 'A', text: '5, 10' },
        { key: 'B', text: '10, 5' },
        { key: 'C', text: '15, 10' },
        { key: 'D', text: '0, 0' },
      ],
      correct: 'B',
    },
    {
      id: 5,
      type: 'mcq',
      section: 'Communication',
      prompt: 'Choose the sentence with correct subject-verb agreement:',
      options: [
        { key: 'A', text: 'The group of students were cheering.' },
        { key: 'B', text: 'The group of students was cheering.' },
        { key: 'C', text: 'The group of students have cheered.' },
        { key: 'D', text: 'The group of students are cheering.' },
      ],
      correct: 'B',
    },
  ]

  // Countdown Timer
  useEffect(() => {
    if (!isOpen || isFinished) return
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleFinish()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [isOpen, isFinished])

  if (!isOpen) return null

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  // Timer semantic color
  const timerClass = timeLeft < 120 ? 'critical' : timeLeft < 300 ? 'warning' : 'normal'

  const handleSelectOption = (key) => {
    setAnswers((prev) => ({ ...prev, [currentIdx]: key }))
  }

  const handleClear = () => {
    setAnswers((prev) => {
      const copy = { ...prev }
      delete copy[currentIdx]
      return copy
    })
  }

  const handleToggleMark = () => {
    setMarked((prev) => ({ ...prev, [currentIdx]: !prev[currentIdx] }))
  }

  const handleNavigate = (idx) => {
    setCurrentIdx(idx)
    setVisited((prev) => ({ ...prev, [idx]: true }))
  }

  const handleFinish = () => {
    setShowConfirmSubmit(false)
    setIsFinished(true)
  }

  // Compute final score
  const correctCount = questions.reduce((acc, q, idx) => {
    return answers[idx] === q.correct ? acc + 1 : acc
  }, 0)
  const percentage = Math.round((correctCount / questions.length) * 100)
  const isPassed = percentage >= 60

  return (
    <div className="runner-overlay">
      <div className="runner-modal">
        {/* Runner Header */}
        <header className="runner-header">
          <div>
            <h2 className="runner-title">{assessmentTitle}</h2>
            <span className="runner-subtitle">
              Question {currentIdx + 1} of {questions.length} • Section: {questions[currentIdx]?.section}
            </span>
          </div>

          <div className="runner-header-right">
            {!isFinished && (
              <div className={`runner-timer runner-timer--${timerClass}`}>
                <Clock size={16} />
                <span>{formatTimer(timeLeft)}</span>
              </div>
            )}

            {!isFinished ? (
              <Button variant="danger" size="sm" onClick={() => setShowConfirmSubmit(true)}>
                Finish Assessment
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={onClose} icon={X}>
                Exit
              </Button>
            )}
          </div>
        </header>

        {/* Confirmation Modal */}
        {showConfirmSubmit && (
          <div className="confirm-modal-backdrop">
            <div className="confirm-modal-box">
              <h3 style={{ margin: '0 0 8px', fontSize: 16 }}>Ready to submit exam?</h3>
              <p style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', margin: '0 0 16px' }}>
                You have answered <strong>{Object.keys(answers).length}</strong> out of{' '}
                <strong>{questions.length}</strong> questions.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                <Button variant="ghost" size="sm" onClick={() => setShowConfirmSubmit(false)}>
                  Continue Test
                </Button>
                <Button variant="danger" size="sm" onClick={handleFinish}>
                  Yes, Submit Now
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        {!isFinished ? (
          <div className="runner-body">
            {/* Question Workspace */}
            <div className="runner-question-zone">
              <div className="question-header">
                <span className="question-badge">Q{currentIdx + 1}</span>
                <span className="question-prompt">{questions[currentIdx]?.prompt}</span>
              </div>

              {/* Options List */}
              <div className="question-options">
                {questions[currentIdx]?.options.map((opt) => {
                  const isSelected = answers[currentIdx] === opt.key
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      className={`option-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelectOption(opt.key)}
                    >
                      <span className="option-key">{opt.key}</span>
                      <span className="option-text">{opt.text}</span>
                      {isSelected && <Check size={16} className="option-check" />}
                    </button>
                  )
                })}
              </div>

              {/* Action Toolbar */}
              <div className="runner-actions-bar">
                <div style={{ display: 'flex', gap: 8 }}>
                  <Button
                    variant={marked[currentIdx] ? 'warning' : 'outline'}
                    size="sm"
                    icon={Bookmark}
                    onClick={handleToggleMark}
                  >
                    {marked[currentIdx] ? 'Marked for Review' : 'Mark for Review'}
                  </Button>
                  {answers[currentIdx] && (
                    <Button variant="ghost" size="sm" onClick={handleClear}>
                      Clear Choice
                    </Button>
                  )}
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    icon={ChevronLeft}
                    disabled={currentIdx === 0}
                    onClick={() => handleNavigate(currentIdx - 1)}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    disabled={currentIdx === questions.length - 1}
                    onClick={() => handleNavigate(currentIdx + 1)}
                  >
                    Next <ChevronRight size={14} style={{ marginLeft: 4 }} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar Palette */}
            <aside className="runner-palette-zone">
              <QuestionPalette
                totalQuestions={questions.length}
                currentIndex={currentIdx}
                answers={answers}
                markedForReview={marked}
                visited={visited}
                onSelectQuestion={(idx) => handleNavigate(idx)}
              />
            </aside>
          </div>
        ) : (
          /* Results Breakdown */
          <div className="runner-result-screen">
            <div className={`result-hero ${isPassed ? 'passed' : 'failed'}`}>
              {isPassed ? <CheckCircle2 size={48} /> : <XCircle size={48} />}
              <h3 className="result-headline">
                {isPassed ? 'Assessment Passed!' : 'Assessment Incomplete'}
              </h3>
              <p className="result-subtext">
                Your score: <strong>{percentage}%</strong> ({correctCount} / {questions.length} correct)
              </p>
            </div>

            <div className="result-stats-grid">
              <div className="result-stat-box">
                <span className="stat-label">Correct Answers</span>
                <span className="stat-val" style={{ color: 'var(--color-success)' }}>{correctCount}</span>
              </div>
              <div className="result-stat-box">
                <span className="stat-label">Incorrect Answers</span>
                <span className="stat-val" style={{ color: 'var(--color-danger)' }}>{Object.keys(answers).length - correctCount}</span>
              </div>
              <div className="result-stat-box">
                <span className="stat-label">Unanswered</span>
                <span className="stat-val" style={{ color: 'var(--color-text-muted)' }}>{questions.length - Object.keys(answers).length}</span>
              </div>
              <div className="result-stat-box">
                <span className="stat-label">Time Elapsed</span>
                <span className="stat-val">{formatTimer((durationMinutes * 60) - timeLeft)}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
              <Button variant="primary" onClick={onClose}>
                Return to Mock Assessments
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
