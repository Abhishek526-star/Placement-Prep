// src/components/assessment/QuestionPalette.jsx
import { Check, Bookmark, Circle, ArrowRight } from 'lucide-react'
import './QuestionPalette.css'

export default function QuestionPalette({
  totalQuestions = 10,
  currentIndex = 0,
  answers = {},          // { [qIndex]: answerValue }
  markedForReview = {},  // { [qIndex]: boolean }
  visited = {},          // { [qIndex]: boolean }
  onSelectQuestion,
}) {
  return (
    <div className="palette-container">
      <div className="palette-header">
        <h3 className="palette-title">Question Palette</h3>
        <span className="palette-count">{Object.keys(answers).length}/{totalQuestions} answered</span>
      </div>

      <div className="palette-legend">
        <div className="legend-item"><span className="legend-badge answered"><Check size={10}/></span> Answered</div>
        <div className="legend-item"><span className="legend-badge marked"><Bookmark size={10}/></span> Marked</div>
        <div className="legend-item"><span className="legend-badge unanswered"><Circle size={10}/></span> Not Answered</div>
        <div className="legend-item"><span className="legend-badge unvisited" /> Not Visited</div>
      </div>

      <div className="palette-grid">
        {Array.from({ length: totalQuestions }).map((_, idx) => {
          const isCurrent = currentIndex === idx
          const isAnswered = answers[idx] !== undefined && answers[idx] !== null && answers[idx] !== ''
          const isMarked = !!markedForReview[idx]
          const isVisited = !!visited[idx] || isCurrent

          let stateClass = 'unvisited'
          let stateIcon = null

          if (isCurrent) {
            stateClass = 'current'
          } else if (isMarked) {
            stateClass = 'marked'
            stateIcon = <Bookmark size={10} className="palette-item-icon" />
          } else if (isAnswered) {
            stateClass = 'answered'
            stateIcon = <Check size={11} className="palette-item-icon" />
          } else if (isVisited) {
            stateClass = 'unanswered'
          }

          return (
            <button
              key={idx}
              type="button"
              className={`palette-item palette-item--${stateClass} ${isCurrent ? 'is-current' : ''}`}
              onClick={() => onSelectQuestion?.(idx)}
              aria-label={`Question ${idx + 1}, state: ${stateClass}`}
            >
              <span className="palette-num">{idx + 1}</span>
              {stateIcon}
            </button>
          )
        })}
      </div>
    </div>
  )
}
