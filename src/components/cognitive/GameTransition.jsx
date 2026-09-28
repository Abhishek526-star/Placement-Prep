// src/components/cognitive/GameTransition.jsx
// Animated inter-section transition screen for Full Cognitive Mock

import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import './cognitive.css'

export default function GameTransition({
  nextSectionTitle = 'Next Round',
  description = 'Prepare for the next cognitive challenge...',
  countdownDuration = 3,
  onDone
}) {
  const [secondsLeft, setSecondsLeft] = useState(countdownDuration)

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (onDone) onDone()
      return
    }

    const timer = setTimeout(() => {
      setSecondsLeft(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [secondsLeft, onDone])

  return (
    <div className="game-transition-overlay">
      <div className="game-transition-card">
        <div className="game-transition-spinner" />

        <div style={{ textAlign: 'center' }}>
          <span style={{
            fontSize: 12,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#A100FF'
          }}>
            Next Section In {secondsLeft}s
          </span>
          <h3 style={{ margin: '8px 0 6px 0', fontSize: 22, fontWeight: 800, color: 'var(--color-text-primary)' }}>
            {nextSectionTitle}
          </h3>
          <p style={{ margin: 0, fontSize: 13.5, color: 'var(--color-text-secondary)', maxWidth: 360 }}>
            {description}
          </p>
        </div>

        <button
          className="cmc-start-btn"
          style={{ width: 'auto', padding: '10px 24px', marginTop: 8 }}
          onClick={onDone}
        >
          <span>Continue Now</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  )
}
