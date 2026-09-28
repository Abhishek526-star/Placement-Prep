// src/pages/TechnicalMCQPage.jsx
// Main host & state owner for Accenture Technical MCQ Assessment Engine
// Implements exact Cloud Assessment Architecture, Design Suite & User Flow:
// - MCQQuizHeader
// - MCQQuestionCard
// - MCQQuestionPalette
// - MCQAnalysisModal
// Sub-sections populated strictly with verified questions:
// 1. CS Fundamental: 120 Questions (Operating Systems, SQL & DBMS, DSA)
// 2. Computer Network: 120 Questions (OSI/TCP-IP, Routing, Protocols, LAN)
// 3. Network Security & Cloud: 120 Questions (Cloud Computing, Cryptography, Firewalls)

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { Layers, Cpu, Network, ShieldCheck, Cloud, FileSpreadsheet, FileCode } from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import { useProgressStore } from '../stores/useProgressStore'
import MCQQuizHeader from '../components/mcq/MCQQuizHeader'
import MCQQuestionCard from '../components/mcq/MCQQuestionCard'
import MCQQuestionPalette from '../components/mcq/MCQQuestionPalette'
import MCQAnalysisModal from '../components/mcq/MCQAnalysisModal'
import {
  ALL_ACCENTURE_TECHNICAL_MCQS,
  CS_FUNDAMENTALS_MCQS,
  COMPUTER_NETWORKS_MCQS,
  NETWORK_SECURITY_CLOUD_MCQS,
  CLOUD_COMPUTING_MCQS,
  MS_OFFICE_MCQS,
  PSEUDO_CODE_MCQS
} from '../data/accenture/accentureMCQBank.js'

export default function TechnicalMCQPage() {
  const { currentCompany } = useCompany()
  const slug = currentCompany?.slug || 'accenture'
  const companyName = currentCompany?.name || 'Accenture'
  const { markQuestionSolved, recordMistake } = useProgressStore()

  // 1. Sub-Section & Mode State
  const [activeTab, setActiveTab] = useState('all') // 'all' | 'cs-fundamentals' | 'computer-network' | 'network-security-cloud' | 'cloud-computing' | 'ms-office' | 'pseudo-code'
  const [mode, setMode] = useState('practice') // 'practice' | 'exam'
  const [currentIndex, setCurrentIndex] = useState(0)

  // 2. Answers & Bookmarks
  const [userAnswers, setUserAnswers] = useState({})
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem(`mcq_bookmarks_${slug}`)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // 3. Exam Timer & State
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isTimerPaused, setIsTimerPaused] = useState(false)
  const [timeTakenSeconds, setTimeTakenSeconds] = useState(0)
  const [showAnalysisModal, setShowAnalysisModal] = useState(false)
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)

  const timerRef = useRef(null)

  // Sub-sections Configuration
  const tabs = useMemo(() => [
    {
      id: 'all',
      label: 'All Technical MCQs',
      icon: Layers,
      color: '#3b82f6',
      count: ALL_ACCENTURE_TECHNICAL_MCQS.length
    },
    {
      id: 'cs-fundamentals',
      label: 'CS Fundamental',
      icon: Cpu,
      color: '#8b5cf6',
      count: CS_FUNDAMENTALS_MCQS.length
    },
    {
      id: 'computer-network',
      label: 'Computer Network',
      icon: Network,
      color: '#0ea5e9',
      count: COMPUTER_NETWORKS_MCQS.length
    },
    {
      id: 'network-security-cloud',
      label: 'Network Security',
      icon: ShieldCheck,
      color: '#f59e0b',
      count: NETWORK_SECURITY_CLOUD_MCQS.length
    },
    {
      id: 'cloud-computing',
      label: 'Cloud Computing',
      icon: Cloud,
      color: '#06b6d4',
      count: CLOUD_COMPUTING_MCQS.length
    },
    {
      id: 'ms-office',
      label: 'MS Office',
      icon: FileSpreadsheet,
      color: '#10b981',
      count: MS_OFFICE_MCQS.length
    },
    {
      id: 'pseudo-code',
      label: 'Pseudo Code',
      icon: FileCode,
      color: '#ec4899',
      count: PSEUDO_CODE_MCQS.length,
      badgeText: '2 Mins/Q'
    }
  ], [])

  // Active Questions List based on selected Tab
  const activeQuestions = useMemo(() => {
    if (activeTab === 'cs-fundamentals') return CS_FUNDAMENTALS_MCQS
    if (activeTab === 'computer-network') return COMPUTER_NETWORKS_MCQS
    if (activeTab === 'network-security-cloud') return NETWORK_SECURITY_CLOUD_MCQS
    if (activeTab === 'cloud-computing') return CLOUD_COMPUTING_MCQS
    if (activeTab === 'ms-office') return MS_OFFICE_MCQS
    if (activeTab === 'pseudo-code') return PSEUDO_CODE_MCQS
    return ALL_ACCENTURE_TECHNICAL_MCQS
  }, [activeTab])

  // Sync Timer: 2 min per pseudocode question, 1 min per standard MCQ
  const totalAllocatedSeconds = useMemo(() => {
    return activeQuestions.reduce((acc, q) => {
      return acc + (q.subSection === 'pseudo-code' ? 120 : 60)
    }, 0)
  }, [activeQuestions])

  // Initialize/Reset Timer when tab or mode changes
  const resetExamState = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    const initialTime = activeQuestions.reduce((acc, q) => {
      return acc + (q.subSection === 'pseudo-code' ? 120 : 60)
    }, 0)
    setTimeRemaining(initialTime)
    setIsTimerPaused(false)
    setUserAnswers({})
    setCurrentIndex(0)
    setTimeTakenSeconds(0)
    setShowAnalysisModal(false)
    setShowConfirmSubmit(false)
  }, [activeQuestions])

  useEffect(() => {
    resetExamState()
  }, [activeTab, mode, resetExamState])

  // Timer Countdown Effect
  useEffect(() => {
    if (mode === 'exam' && !showAnalysisModal && !showConfirmSubmit && !isTimerPaused) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            handleSubmitQuiz(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [mode, showAnalysisModal, showConfirmSubmit, isTimerPaused])

  // Timer Formatter helper (MM:SS or H:MM:SS)
  const formatTimer = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Persist Bookmarks
  const handleToggleBookmark = (questionId) => {
    setBookmarks((prev) => {
      const next = prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
      try {
        localStorage.setItem(`mcq_bookmarks_${slug}`, JSON.stringify(next))
      } catch {}
      return next
    })
  }

  // Option Selection
  const handleSelectOption = (optionKey) => {
    const currentQ = activeQuestions[currentIndex]
    if (!currentQ) return

    // In practice mode, if already answered, don't re-select
    if (mode === 'practice' && userAnswers[currentQ.id]) return

    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionKey
    }))

    // In practice mode, record progress immediately
    if (mode === 'practice') {
      const isCorrect = optionKey === currentQ.correct_option
      if (isCorrect) {
        markQuestionSolved(slug, 'technical', currentQ.id, 10)
      } else {
        const wrongOpt = currentQ.options?.find((o) => o.key === optionKey)
        recordMistake(slug, {
          questionTitle: currentQ.question?.substring(0, 60),
          wrongAnswer: wrongOpt?.text || optionKey,
          section: `Technical MCQ - ${currentQ.category}`
        })
      }
    }
  }

  // Clear Option Choice
  const handleClearOption = () => {
    const currentQ = activeQuestions[currentIndex]
    if (!currentQ) return

    setUserAnswers((prev) => {
      const next = { ...prev }
      delete next[currentQ.id]
      return next
    })
  }

  // Submit Exam / Complete Quiz
  const handleSubmitQuiz = (forceAutoSubmit = false) => {
    const answeredCount = Object.keys(userAnswers).length
    const unattemptedCount = activeQuestions.length - answeredCount

    if (!forceAutoSubmit && unattemptedCount > 0 && mode === 'exam') {
      setShowConfirmSubmit(true)
      return
    }

    if (timerRef.current) clearInterval(timerRef.current)
    const elapsed = totalAllocatedSeconds - timeRemaining
    setTimeTakenSeconds(elapsed)
    setShowConfirmSubmit(false)
    setShowAnalysisModal(true)

    // Sync XP for all correct answers in Exam mode
    if (mode === 'exam') {
      activeQuestions.forEach((q) => {
        const chosen = userAnswers[q.id]
        if (chosen === q.correct_option) {
          markQuestionSolved(slug, 'technical', q.id, 10)
        } else if (chosen) {
          const wrongOpt = q.options?.find((o) => o.key === chosen)
          recordMistake(slug, {
            questionTitle: q.question?.substring(0, 60),
            wrongAnswer: wrongOpt?.text || chosen,
            section: `Technical Exam - ${q.category}`
          })
        }
      })
    }
  }

  const currentQuestion = activeQuestions[currentIndex]
  const currentQId = currentQuestion?.id
  const isCurrentBookmarked = bookmarks.includes(currentQId)
  const currentSelectedAnswer = userAnswers[currentQId]
  const answeredCount = Object.keys(userAnswers).length

  return (
    <div className="cloud-assessment-page">
      <div className="cloud-page-container">
        {/* ── Quiz Header ───────────────────────────────────────────── */}
        <MCQQuizHeader
          companyName={companyName}
          activeTab={activeTab}
          onSelectTab={(tabId) => {
            setActiveTab(tabId)
            setCurrentIndex(0)
          }}
          tabs={tabs}
          mode={mode}
          onToggleMode={(newMode) => {
            setMode(newMode)
            resetExamState()
          }}
          timeRemaining={timeRemaining}
          isTimerPaused={isTimerPaused}
          onToggleTimerPause={() => setIsTimerPaused((prev) => !prev)}
          totalQuestions={activeQuestions.length}
          answeredCount={answeredCount}
          bookmarkCount={bookmarks.length}
          formatTimer={formatTimer}
          onResetExam={resetExamState}
        />

        {/* ── Workspace Layout: Question Card (Left) + Palette (Right) ─ */}
        <div className="cloud-workspace-layout">
          {/* Main Question Card */}
          <main>
            <MCQQuestionCard
              question={currentQuestion}
              questionIndex={currentIndex}
              totalQuestions={activeQuestions.length}
              selectedAnswer={currentSelectedAnswer}
              onSelectOption={handleSelectOption}
              onClearOption={handleClearOption}
              isBookmarked={isCurrentBookmarked}
              onToggleBookmark={() => handleToggleBookmark(currentQId)}
              onNextQuestion={() => setCurrentIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
              onPrevQuestion={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              onSubmitQuiz={() => handleSubmitQuiz(false)}
              mode={mode}
            />
          </main>

          {/* Right Question Palette (Navigator) */}
          <aside className="cloud-palette-column">
            <MCQQuestionPalette
              questions={activeQuestions}
              currentIndex={currentIndex}
              onSelectIndex={(idx) => setCurrentIndex(idx)}
              userAnswers={userAnswers}
              bookmarks={bookmarks}
              onSubmitQuiz={() => handleSubmitQuiz(false)}
              mode={mode}
            />
          </aside>
        </div>

        {/* ── Confirm Submit Modal (Exam Mode) ───────────────────────── */}
        {showConfirmSubmit && (
          <div className="cloud-modal-overlay" role="dialog" aria-modal="true">
            <div className="cloud-card" style={{ maxWidth: 440, width: '100%', padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.75rem 0', color: 'var(--text-primary)' }}>
                Confirm Exam Submission?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 1.5rem 0' }}>
                You have answered <strong>{answeredCount}</strong> of <strong>{activeQuestions.length}</strong> questions.
                {activeQuestions.length - answeredCount > 0 && (
                  <span style={{ display: 'block', color: '#f87171', marginTop: '0.5rem', fontWeight: 600 }}>
                    Notice: {activeQuestions.length - answeredCount} questions are still unattempted!
                  </span>
                )}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <button
                  type="button"
                  className="cloud-btn cloud-btn-secondary"
                  onClick={() => setShowConfirmSubmit(false)}
                >
                  Continue Test
                </button>
                <button
                  type="button"
                  className="cloud-btn cloud-btn-primary"
                  onClick={() => handleSubmitQuiz(true)}
                >
                  Submit & View Results
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Post-Submit Analysis & Solutions Modal ──────────────────── */}
        <MCQAnalysisModal
          isOpen={showAnalysisModal}
          onClose={() => setShowAnalysisModal(false)}
          questions={activeQuestions}
          userAnswers={userAnswers}
          timeSpent={formatTimer(timeTakenSeconds)}
          totalTime={formatTimer(totalAllocatedSeconds)}
          onRetake={resetExamState}
          onSwitchPractice={() => {
            setMode('practice')
            setShowAnalysisModal(false)
          }}
          onJumpToQuestion={(idx) => {
            setCurrentIndex(idx)
            setShowAnalysisModal(false)
          }}
        />
      </div>
    </div>
  )
}
