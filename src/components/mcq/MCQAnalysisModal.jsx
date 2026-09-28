// src/components/mcq/MCQAnalysisModal.jsx
import React, { useState } from 'react'
import {
  Trophy, X, CheckCircle, XCircle, Clock,
  RotateCcw, BookOpen, AlertCircle, ChevronDown, ChevronUp, Check,
  Code2, ListOrdered
} from 'lucide-react'
import { parseExplanationStructure, renderRichLines } from './ExplanationFormatter'

export default function MCQAnalysisModal({
  isOpen,
  onClose,
  questions = [],
  userAnswers = {},
  timeSpent = '00:00',
  totalTime = '00:00',
  onRetake,
  onSwitchPractice,
  onJumpToQuestion
}) {
  const [reviewFilter, setReviewFilter] = useState('all') // 'all' | 'wrong' | 'skipped'
  const [expandedItems, setExpandedItems] = useState({})

  if (!isOpen) return null

  const total = questions.length
  let correctCount = 0
  let wrongCount = 0
  let skippedCount = 0

  questions.forEach((q) => {
    const ans = userAnswers[q.id]
    if (!ans) skippedCount++
    else if (ans === q.correct_option) correctCount++
    else wrongCount++
  })

  const scorePercent = total > 0 ? Math.round((correctCount / total) * 100) : 0
  const isPassed = scorePercent >= 70 // Accenture cutoff guideline

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const filteredQuestions = questions.filter((q) => {
    const ans = userAnswers[q.id]
    if (reviewFilter === 'wrong') return ans && ans !== q.correct_option
    if (reviewFilter === 'skipped') return !ans
    return true
  })

  return (
    <div className="cloud-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="analysis-modal-title">
      <div className="cloud-analysis-modal">
        {/* Header */}
        <div className="cloud-analysis-header">
          <div className="cloud-analysis-title-group">
            <div className="cloud-trophy-badge" style={{ background: isPassed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)', color: isPassed ? '#10b981' : '#ef4444' }}>
              <Trophy size={28} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="cloud-badge cloud-badge-primary">Accenture Assessment Results</span>
                <span className={`cloud-badge ${isPassed ? 'cloud-diff-easy' : 'cloud-diff-hard'}`}>
                  {isPassed ? 'Benchmark Met (≥ 70%)' : 'Needs Practice (< 70%)'}
                </span>
              </div>
              <h2 id="analysis-modal-title" className="cloud-analysis-title">
                Performance Scorecard & Solutions Review
              </h2>
            </div>
          </div>

          <button
            type="button"
            className="cloud-modal-close"
            onClick={onClose}
            aria-label="Close Analysis"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="cloud-analysis-body">
          {/* 4 Metrics Cards */}
          <div className="cloud-metrics-grid">
            <div className="cloud-metric-card score">
              <span className="cloud-metric-label">Overall Accuracy</span>
              <div className="cloud-metric-value" style={{ color: '#38bdf8' }}>
                <span>{scorePercent}%</span>
                <span className="cloud-metric-sub">{correctCount}/{total}</span>
              </div>
              <span className="cloud-metric-footer">Accenture benchmark: 70%</span>
            </div>

            <div className="cloud-metric-card correct">
              <span className="cloud-metric-label">Correct Answers</span>
              <div className="cloud-metric-value" style={{ color: '#16a34a' }}>
                <span>{correctCount}</span>
                <span className="cloud-metric-sub">Questions</span>
              </div>
              <span className="cloud-metric-footer">+10 XP per correct</span>
            </div>

            <div className="cloud-metric-card wrong">
              <span className="cloud-metric-label">Incorrect Answers</span>
              <div className="cloud-metric-value" style={{ color: '#dc2626' }}>
                <span>{wrongCount}</span>
                <span className="cloud-metric-sub">Questions</span>
              </div>
              <span className="cloud-metric-footer">Added to Mistake Tracker</span>
            </div>

            <div className="cloud-metric-card time">
              <span className="cloud-metric-label">Time Spent</span>
              <div className="cloud-metric-value" style={{ color: '#818cf8' }}>
                <span>{timeSpent}</span>
                <span className="cloud-metric-sub">/ {totalTime}</span>
              </div>
              <span className="cloud-metric-footer">Allocated time (1–2 min/Q)</span>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="cloud-analysis-section">
            <div className="cloud-review-header">
              <h3 className="cloud-section-heading">
                <span>Detailed Question Review</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  ({filteredQuestions.length} of {total})
                </span>
              </h3>

              {/* Review Filter Pills */}
              <div className="cloud-review-filter-pills" role="tablist">
                <button
                  type="button"
                  className={`cloud-filter-pill ${reviewFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('all')}
                >
                  All ({total})
                </button>
                <button
                  type="button"
                  className={`cloud-filter-pill ${reviewFilter === 'wrong' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('wrong')}
                >
                  Incorrect ({wrongCount})
                </button>
                <button
                  type="button"
                  className={`cloud-filter-pill ${reviewFilter === 'skipped' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('skipped')}
                >
                  Skipped ({skippedCount})
                </button>
              </div>
            </div>

            {/* List */}
            <div className="cloud-review-list">
              {filteredQuestions.map((q, idx) => {
                const originalIndex = questions.findIndex((item) => item.id === q.id)
                const userChoice = userAnswers[q.id]
                const isItemCorrect = userChoice === q.correct_option
                const isItemSkipped = !userChoice
                const isExpanded = !!expandedItems[q.id]

                let itemClass = 'cloud-review-item'
                if (isItemCorrect) itemClass += ' item-correct'
                else if (isItemSkipped) itemClass += ' item-skipped'
                else itemClass += ' item-incorrect'

                return (
                  <div key={q.id} className={itemClass}>
                    <div
                      className="cloud-review-item-header"
                      onClick={() => toggleExpand(q.id)}
                    >
                      <div className="cloud-review-header-left">
                        <span className="cloud-review-qnum">
                          #{originalIndex + 1}
                        </span>
                        <div style={{ flex: 1 }}>
                          <span className="cloud-review-item-title">
                            {q.question}
                          </span>
                        </div>
                      </div>

                      <div className="cloud-review-header-right">
                        {isItemCorrect ? (
                          <span style={{ color: '#16a34a', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8rem', fontWeight: 700 }}>
                            <CheckCircle size={15} />
                            <span>Correct</span>
                          </span>
                        ) : isItemSkipped ? (
                          <span className="cloud-skipped-indicator">
                            Skipped
                          </span>
                        ) : (
                          <span style={{ color: '#dc2626', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8rem', fontWeight: 700 }}>
                            <XCircle size={15} />
                            <span>Wrong</span>
                          </span>
                        )}
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>

                    {/* Expandable Review Details */}
                    {isExpanded && (
                      <div className="cloud-review-item-content">
                        {/* Pseudocode snippet if available */}
                        {q.code && (
                          <div className="cloud-code-container" style={{ margin: '8px 0 14px 0' }}>
                            <div className="cloud-code-header">
                              <span className="cloud-code-badge">
                                <Code2 size={13} />
                                <span>Pseudocode</span>
                              </span>
                            </div>
                            <pre className="cloud-code-block" style={{ padding: '0.85rem 1rem', fontSize: '0.85rem' }}>
                              <code>{q.code}</code>
                            </pre>
                          </div>
                        )}

                        {/* Question Image if present */}
                        {q.image && (
                          <div className="cloud-question-image-wrap" style={{ margin: '8px 0 14px 0' }}>
                            <img
                              src={q.image.startsWith('/') ? q.image : `/${q.image}`}
                              alt={q.image_alt || 'Question illustration'}
                              className="cloud-question-image"
                              style={{ maxHeight: 220 }}
                            />
                          </div>
                        )}

                        {/* Options */}
                        <div className="cloud-review-all-options">
                          {q.options?.map((opt) => {
                            const isUserChoice = userChoice === opt.key
                            const isAnswer = opt.key === q.correct_option

                            let optClass = 'review-opt'
                            if (isAnswer) optClass += ' opt-correct'
                            else if (isUserChoice && !isAnswer) optClass += ' opt-wrong'

                            return (
                              <div key={opt.key} className={optClass}>
                                <span className="opt-letter">[{opt.key}]</span>
                                <span className="opt-text">{opt.text}</span>
                                {isUserChoice && (
                                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isAnswer ? '#16a34a' : '#dc2626' }}>
                                    Your Choice
                                  </span>
                                )}
                                {isAnswer && !isUserChoice && (
                                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#16a34a' }}>
                                    Correct Answer
                                  </span>
                                )}
                              </div>
                            )
                          })}
                        </div>

                        {/* Explanation formatted as step cards or structured content */}
                        {(() => {
                          const parsed = parseExplanationStructure(q.explanation)
                          return (
                            <div style={{ marginTop: '10px' }}>
                              {parsed.sections.length > 0 ? (
                                <div className="cloud-steps-timeline">
                                  {parsed.sections.map((sec, sIdx) => (
                                    <div key={sIdx} className="cloud-step-card">
                                      <div className="cloud-step-header">
                                        <span className="cloud-step-tag">{sec.tag}</span>
                                      </div>
                                      <div className="cloud-step-content">
                                        {renderRichLines(sec.content)}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : parsed.plainText ? (
                                <div className="cloud-step-card">
                                  <div className="cloud-step-content">
                                    {renderRichLines(parsed.plainText)}
                                  </div>
                                </div>
                              ) : null}

                              {/* Step Trace Table if available */}
                              {q.stepTrace && q.stepTrace.length > 0 && (
                                <div className="cloud-trace-container" style={{ marginTop: '12px' }}>
                                  <div className="cloud-trace-heading">
                                    <div className="cloud-trace-heading-left">
                                      <ListOrdered size={14} />
                                      <span>Execution Step-by-Step Trace</span>
                                    </div>
                                    <span className="cloud-trace-step-pill">
                                      {q.stepTrace.length} Steps
                                    </span>
                                  </div>
                                  <div className="cloud-trace-table-wrap">
                                    <table className="cloud-trace-table">
                                      <thead>
                                        <tr>
                                          <th style={{ width: '12%' }}>Line / Step</th>
                                          <th style={{ width: '32%' }}>Statement / Operation</th>
                                          <th style={{ width: '26%' }}>Variables State</th>
                                          <th style={{ width: '30%' }}>Evaluation Notes</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {q.stepTrace.map((step, sIdx) => {
                                          const varEntries =
                                            step.variables && typeof step.variables === 'object'
                                              ? Object.entries(step.variables)
                                              : []
                                          return (
                                            <tr key={sIdx}>
                                              <td>
                                                <span className="cloud-trace-line-badge">
                                                  {step.line ? `L${step.line}` : `#${sIdx + 1}`}
                                                </span>
                                              </td>
                                              <td className="cloud-trace-code-cell">
                                                <code>{step.code || '-'}</code>
                                              </td>
                                              <td>
                                                {varEntries.length > 0 ? (
                                                  varEntries.map(([k, v]) => (
                                                    <span key={k} className="cloud-trace-var-tag">
                                                      {k} = {String(v)}
                                                    </span>
                                                  ))
                                                ) : (
                                                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>—</span>
                                                )}
                                              </td>
                                              <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                                {step.note || '-'}
                                              </td>
                                            </tr>
                                          )
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}

                              {/* Output Callout */}
                              {parsed.outputValue && (
                                <div className="cloud-output-callout" style={{ marginTop: '12px' }}>
                                  <div className="cloud-output-icon">
                                    <CheckCircle size={20} />
                                  </div>
                                  <div>
                                    <div className="cloud-output-label">Final Computed Output / Result</div>
                                    <div className="cloud-output-value">{parsed.outputValue}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })()}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="cloud-analysis-footer">
          {onRetake && (
            <button
              type="button"
              className="cloud-btn cloud-btn-secondary"
              onClick={onRetake}
            >
              <RotateCcw size={14} />
              <span>Retake Exam</span>
            </button>
          )}

          {onSwitchPractice && (
            <button
              type="button"
              className="cloud-btn cloud-btn-secondary"
              onClick={onSwitchPractice}
            >
              <BookOpen size={14} />
              <span>Switch to Practice Mode</span>
            </button>
          )}

          <button
            type="button"
            className="cloud-btn cloud-btn-primary"
            onClick={onClose}
          >
            Done Reviewing
          </button>
        </div>
      </div>
    </div>
  )
}
