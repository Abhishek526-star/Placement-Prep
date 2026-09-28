// src/components/mcq/MCQQuestionPalette.jsx
import React, { useState } from 'react'
import { LayoutGrid, Send, Bookmark, CheckCircle2 } from 'lucide-react'

export default function MCQQuestionPalette({
  questions = [],
  currentIndex = 0,
  onSelectIndex,
  userAnswers = {},
  bookmarks = [],
  onSubmitQuiz,
  mode = 'practice'
}) {
  const [filter, setFilter] = useState('all') // 'all' | 'done' | 'left' | 'marked'

  const total = questions.length
  const answeredCount = questions.filter((q) => !!userAnswers[q.id]).length
  const leftCount = total - answeredCount
  const markedCount = bookmarks.length

  const filteredIndices = questions.map((q, idx) => {
    const isAnswered = !!userAnswers[q.id]
    const isMarked = Array.isArray(bookmarks) ? bookmarks.includes(q.id) : !!bookmarks[q.id]

    if (filter === 'done' && !isAnswered) return null
    if (filter === 'left' && isAnswered) return null
    if (filter === 'marked' && !isMarked) return null
    return idx
  }).filter((idx) => idx !== null)

  return (
    <aside className="cloud-palette-card" aria-label="Question Navigator">
      <div className="cloud-palette-header">
        <h3 className="cloud-palette-title">
          <LayoutGrid size={16} />
          <span>Question Navigator</span>
        </h3>
        <span className="cloud-palette-summary">
          {answeredCount}/{total} Done
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="cloud-palette-filters" role="tablist">
        <button
          type="button"
          className={`cloud-filter-pill ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({total})
        </button>
        <button
          type="button"
          className={`cloud-filter-pill ${filter === 'done' ? 'active' : ''}`}
          onClick={() => setFilter('done')}
        >
          Done ({answeredCount})
        </button>
        <button
          type="button"
          className={`cloud-filter-pill ${filter === 'left' ? 'active' : ''}`}
          onClick={() => setFilter('left')}
        >
          Left ({leftCount})
        </button>
        <button
          type="button"
          className={`cloud-filter-pill ${filter === 'marked' ? 'active' : ''}`}
          onClick={() => setFilter('marked')}
        >
          Marked ({markedCount})
        </button>
      </div>

      {/* Numbered Grid */}
      <div className="cloud-palette-grid">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentIndex
          const isAnswered = !!userAnswers[q.id]
          const isMarked = Array.isArray(bookmarks) ? bookmarks.includes(q.id) : !!bookmarks[q.id]
          const isDimmed = !filteredIndices.includes(idx)

          let btnClass = 'cloud-palette-btn'
          if (isCurrent) btnClass += ' current'
          if (isAnswered) btnClass += ' answered'
          if (isMarked) btnClass += ' marked'
          if (isDimmed) btnClass += ' dimmed'

          return (
            <button
              key={q.id || idx}
              type="button"
              className={btnClass}
              onClick={() => onSelectIndex(idx)}
              title={`Question ${idx + 1}${isAnswered ? ' (Answered)' : ''}${isMarked ? ' (Marked)' : ''}`}
              aria-label={`Jump to question ${idx + 1}`}
            >
              <span>{idx + 1}</span>
              {isMarked && <span className="cloud-palette-marker" aria-hidden="true" />}
            </button>
          )
        })}
      </div>

      {/* Legend */}
      <div className="cloud-palette-legend" aria-hidden="true">
        <div className="cloud-legend-item">
          <span className="cloud-legend-dot dot-current" />
          <span>Current</span>
        </div>
        <div className="cloud-legend-item">
          <span className="cloud-legend-dot dot-answered" />
          <span>Answered</span>
        </div>
        <div className="cloud-legend-item">
          <span className="cloud-legend-dot dot-marked" />
          <span>Marked</span>
        </div>
        <div className="cloud-legend-item">
          <span className="cloud-legend-dot dot-unanswered" />
          <span>Unanswered</span>
        </div>
      </div>

      {/* Submit Button */}
      <div className="cloud-palette-footer">
        <button
          type="button"
          className="cloud-submit-btn"
          onClick={onSubmitQuiz}
        >
          {mode === 'exam' ? <Send size={15} /> : <CheckCircle2 size={15} />}
          <span>{mode === 'exam' ? 'Submit Examination' : 'Complete & View Scorecard'}</span>
        </button>
      </div>
    </aside>
  )
}
