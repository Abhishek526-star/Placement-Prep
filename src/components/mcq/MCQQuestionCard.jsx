// src/components/mcq/MCQQuestionCard.jsx
import React, { useState, useEffect } from 'react'
import {
  Bookmark, CheckCircle, XCircle, Check, ChevronLeft,
  ChevronRight, RotateCcw, Lightbulb, Sparkles, BookOpen, Send,
  Code2, ListOrdered
} from 'lucide-react'
import { parseExplanationStructure, renderRichLines } from './ExplanationFormatter'

export default function MCQQuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelectOption,
  onClearOption,
  isBookmarked,
  onToggleBookmark,
  onNextQuestion,
  onPrevQuestion,
  onSubmitQuiz,
  mode = 'practice'
}) {
  const [showExplanationOverride, setShowExplanationOverride] = useState(false)

  const parsedExplanation = React.useMemo(() => {
    return parseExplanationStructure(question?.explanation)
  }, [question?.explanation])

  // Keyboard navigation support: Left Arrow -> Prev, Right Arrow -> Next
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return

      if (e.key === 'ArrowLeft' && questionIndex > 0) {
        onPrevQuestion()
      } else if (e.key === 'ArrowRight' && questionIndex < totalQuestions - 1) {
        onNextQuestion()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [questionIndex, totalQuestions, onPrevQuestion, onNextQuestion])

  if (!question) {
    return (
      <div className="cloud-card" style={{ padding: '3rem', textAlign: 'center' }}>
        No question selected.
      </div>
    )
  }

  const isPractice = mode === 'practice'
  const isAnswered = !!selectedAnswer
  const isCorrect = selectedAnswer === question.correct_option
  const showReveal = isPractice && (isAnswered || showExplanationOverride)
  const isLastQuestion = questionIndex === totalQuestions - 1

  const diffClass =
    question.difficulty === 'hard'
      ? 'cloud-diff-hard'
      : question.difficulty === 'medium'
      ? 'cloud-diff-medium'
      : 'cloud-diff-easy'

  return (
    <article className="cloud-card" aria-label={`Question ${questionIndex + 1} of ${totalQuestions}`}>
      {/* ── Top Header Bar: Question Number, Badges, Navigation Shortcuts, Bookmark ── */}
      <div className="cloud-card-meta">
        <div className="cloud-meta-left">
          <span className="cloud-qnumber">
            Question <strong>{questionIndex + 1}</strong> of {totalQuestions}
          </span>
          <span className="cloud-badge cloud-badge-secondary">
            {question.category || 'Technical MCQ'}
          </span>
          {question.topic && (
            <span className="cloud-badge cloud-badge-topic">
              {question.topic}
            </span>
          )}
          <span className={`cloud-badge ${diffClass}`}>
            {question.difficulty || 'medium'}
          </span>
        </div>

        {/* Quick Top Prev / Next Buttons & Bookmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <button
              type="button"
              className="cloud-btn cloud-btn-secondary"
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem' }}
              onClick={onPrevQuestion}
              disabled={questionIndex === 0}
              title="Previous question (← key)"
            >
              <ChevronLeft size={14} />
              <span>Prev</span>
            </button>
            <button
              type="button"
              className="cloud-btn cloud-btn-secondary"
              style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem' }}
              onClick={isLastQuestion && onSubmitQuiz ? onSubmitQuiz : onNextQuestion}
              disabled={isLastQuestion && !onSubmitQuiz}
              title={isLastQuestion ? 'Submit Test' : 'Next question (→ key)'}
            >
              <span>{isLastQuestion ? 'Submit' : 'Next'}</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <button
            type="button"
            className={`cloud-bookmark-btn ${isBookmarked ? 'active' : ''}`}
            onClick={onToggleBookmark}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this question'}
            aria-label={isBookmarked ? 'Bookmarked' : 'Bookmark'}
          >
            <Bookmark size={15} fill={isBookmarked ? '#f59e0b' : 'none'} />
            <span>{isBookmarked ? 'Marked' : 'Bookmark'}</span>
          </button>
        </div>
      </div>

      {/* ── Question Text ── */}
      <h2 className="cloud-question-text">
        {question.question}
      </h2>

      {/* ── Pseudocode Snippet (Preserving 4-Space Indentation) ── */}
      {question.code && (
        <div className="cloud-code-container">
          <div className="cloud-code-header">
            <span className="cloud-code-badge">
              <Code2 size={14} />
              <span>Pseudocode</span>
            </span>
            <span className="cloud-code-hint">Analyze trace & operators</span>
          </div>
          <pre className="cloud-code-block">
            <code>{question.code}</code>
          </pre>
        </div>
      )}

      {/* ── Question Image (Rendered after statement and before options) ── */}
      {question.image && (
        <div className="cloud-question-image-wrap">
          <img
            src={question.image.startsWith('/') ? question.image : `/${question.image}`}
            alt={question.image_alt || 'Question illustration'}
            className="cloud-question-image"
          />
        </div>
      )}

      {/* ── Options Grid ── */}
      <div
        className="cloud-options-grid"
        role="radiogroup"
        aria-label="Answer options"
      >
        {question.options?.map((opt) => {
          const isSelected = selectedAnswer === opt.key
          const isOptionCorrect = opt.key === question.correct_option

          let optionStateClass = ''
          if (showReveal) {
            if (isOptionCorrect) {
              optionStateClass = 'cloud-option-correct'
            } else if (isSelected && !isOptionCorrect) {
              optionStateClass = 'cloud-option-incorrect'
            } else {
              optionStateClass = 'cloud-option-neutral'
            }
          } else if (isSelected) {
            optionStateClass = 'cloud-option-selected'
          }

          return (
            <button
              key={opt.key}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={`cloud-option-item ${optionStateClass}`}
              onClick={() => onSelectOption(opt.key)}
            >
              {/* Option Letter Badge */}
              <div className="cloud-option-letter-badge" aria-hidden="true">
                {opt.key}
              </div>

              {/* Option Text & Inline Explanation (in Practice Mode) */}
              <div className="cloud-option-text-wrap">
                <span className="cloud-option-text">
                  {opt.text}
                </span>

                {/* Practice Mode Inline Option Feedback */}
                {showReveal && (
                  <span className="cloud-option-expl">
                    {isOptionCorrect ? (
                      <span className="cloud-option-expl-label" style={{ color: '#16a34a' }}>
                        <Check size={13} strokeWidth={2.5} />
                        <span>Correct Answer: {opt.explanation || 'Directly satisfies the question criteria.'}</span>
                      </span>
                    ) : isSelected ? (
                      <span className="cloud-option-expl-label" style={{ color: '#dc2626' }}>
                        <XCircle size={13} strokeWidth={2.5} />
                        <span>Your Choice (Incorrect): {opt.explanation || 'Does not meet the requirement.'}</span>
                      </span>
                    ) : (
                      opt.explanation && (
                        <span className="cloud-option-expl-label cloud-option-expl-label-neutral">
                          <span>{opt.explanation}</span>
                        </span>
                      )
                    )}
                  </span>
                )}
              </div>

              {/* Status Icon */}
              {showReveal && (
                <div className="cloud-option-status-icon" aria-hidden="true">
                  {isOptionCorrect ? (
                    <CheckCircle className="cloud-icon-correct" size={20} />
                  ) : isSelected ? (
                    <XCircle className="cloud-icon-wrong" size={20} />
                  ) : null}
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* ── Prominent Navigation & Action Bar ── */}
      <div className="cloud-card-actions">
        <div className="cloud-actions-left">
          {selectedAnswer && (
            <button
              type="button"
              className="cloud-btn-clear"
              onClick={onClearOption}
              title="Clear selected option"
            >
              <RotateCcw size={13} />
              <span>Clear Choice</span>
            </button>
          )}

          {isPractice && !isAnswered && (
            <button
              type="button"
              className="cloud-btn-hint"
              onClick={() => setShowExplanationOverride((prev) => !prev)}
            >
              <Lightbulb size={14} />
              <span>{showExplanationOverride ? 'Hide Solution' : 'Reveal Solution & Breakdown'}</span>
            </button>
          )}
        </div>

        {/* Big Prominent Previous and Next Buttons */}
        <div className="cloud-nav-buttons">
          <button
            type="button"
            className="cloud-btn cloud-btn-secondary"
            onClick={onPrevQuestion}
            disabled={questionIndex === 0}
            style={{ minWidth: 120, justifyContent: 'center' }}
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          {isLastQuestion ? (
            <button
              type="button"
              className="cloud-btn cloud-btn-primary"
              onClick={onSubmitQuiz ? onSubmitQuiz : onNextQuestion}
              style={{
                minWidth: 140,
                justifyContent: 'center',
                background: mode === 'exam' ? '#16a34a' : 'var(--color-primary, #0284c7)'
              }}
            >
              <span>{mode === 'exam' ? 'Submit Exam' : 'Review Scorecard'}</span>
              <Send size={15} />
            </button>
          ) : (
            <button
              type="button"
              className="cloud-btn cloud-btn-primary"
              onClick={onNextQuestion}
              style={{ minWidth: 120, justifyContent: 'center' }}
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>

      {/* ── PRACTICE MODE: "All 4 Options Analysis" Breakdown Cards ── */}
      {showReveal && (
        <section className="cloud-options-breakdown-section" aria-label="Option analysis breakdown">
          <h3 className="cloud-breakdown-heading">
            <Sparkles size={16} color="#38bdf8" />
            <span>All 4 Options Analysis & Reference Breakdown</span>
          </h3>

          <div className="cloud-breakdown-cards">
            {question.options?.map((opt) => {
              const isOptionCorrect = opt.key === question.correct_option
              const isUserWrong = isAnswered && selectedAnswer === opt.key && !isOptionCorrect

              let cardVariantClass = 'card-neutral-wrong'
              if (isOptionCorrect) {
                cardVariantClass = 'card-correct-green'
              } else if (isUserWrong) {
                cardVariantClass = 'card-user-wrong'
              }

              return (
                <div key={opt.key} className={`cloud-breakdown-card ${cardVariantClass}`}>
                  <div className="breakdown-card-top">
                    <div className="breakdown-letter-group">
                      <span className="breakdown-letter">{opt.key}</span>
                      <span className="breakdown-opt-title">{opt.text}</span>
                    </div>

                    <div className="breakdown-status-badges">
                      {isOptionCorrect ? (
                        <span className="breakdown-pill pill-correct">
                          <Check size={12} strokeWidth={2.5} />
                          <span>Correct Answer</span>
                        </span>
                      ) : isUserWrong ? (
                        <span className="breakdown-pill pill-user-wrong">
                          <XCircle size={12} strokeWidth={2.5} />
                          <span>Your Pick (Incorrect)</span>
                        </span>
                      ) : (
                        <span className="breakdown-pill pill-distractor">
                          <span>Distractor</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="breakdown-card-desc">
                    <p className="breakdown-text">
                      {opt.explanation || (isOptionCorrect ? 'Valid correct choice according to syllabus specification.' : 'Distractor choice that does not satisfy the question statement.')}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* ── PRACTICE MODE: Bottom Comprehensive Solution Box ── */}
      {showReveal && question.explanation && (
        <section className="cloud-explanation-box" aria-label="Explanation and Key Takeaway">
          <div className="cloud-explanation-header">
            <div className="cloud-expl-badge">
              <CheckCircle size={18} />
              <span>Correct Answer: Option {question.correct_option} — {question.correct_answer}</span>
            </div>

            <div className="cloud-memory-shortcut">
              <Sparkles size={14} />
              <span>Accenture Focus Insight</span>
            </div>
          </div>

          <div className="cloud-explanation-body">
            <div className="cloud-expl-heading">
              <div className="cloud-expl-heading-left">
                <div className="cloud-expl-heading-icon">
                  <BookOpen size={16} />
                </div>
                <span>Comprehensive Solution & Logic Trace</span>
              </div>
              <span className="cloud-badge cloud-badge-secondary" style={{ fontSize: '0.72rem' }}>
                Verified Solution
              </span>
            </div>

            {/* Explanation formatted as step cards or structured content */}
            {parsedExplanation.sections.length > 0 ? (
              <div className="cloud-steps-timeline">
                {parsedExplanation.sections.map((sec, sIdx) => (
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
            ) : (
              <div className="cloud-step-card">
                <div className="cloud-step-content">
                  {renderRichLines(parsedExplanation.plainText)}
                </div>
              </div>
            )}

            {/* Step-by-Step Execution Trace Table for Pseudocode */}
            {question.stepTrace && question.stepTrace.length > 0 && (
              <div className="cloud-trace-container">
                <div className="cloud-trace-heading">
                  <div className="cloud-trace-heading-left">
                    <ListOrdered size={15} />
                    <span>Step-by-Step Execution Trace</span>
                  </div>
                  <span className="cloud-trace-step-pill">
                    {question.stepTrace.length} Steps
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
                      {question.stepTrace.map((step, sIdx) => {
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
                            <td style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
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

            {/* Final Output Callout */}
            {parsedExplanation.outputValue && (
              <div className="cloud-output-callout">
                <div className="cloud-output-icon">
                  <CheckCircle size={22} />
                </div>
                <div>
                  <div className="cloud-output-label">Final Computed Output / Result</div>
                  <div className="cloud-output-value">{parsedExplanation.outputValue}</div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </article>
  )
}
