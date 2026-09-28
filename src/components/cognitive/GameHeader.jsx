// src/components/cognitive/GameHeader.jsx
// Reusable top bar for cognitive games with company branding, logo, amber score pill, and rules modal access

import { Link } from 'react-router-dom'
import { ArrowLeft, Volume2, VolumeX, Zap, HelpCircle } from 'lucide-react'
import './cognitive.css'

export default function GameHeader({
  title = 'Memory Assessment Game – Cognitive Practice',
  subtitle = 'Accenture-Style Cognitive Round • Memory Maze Game',
  score = 0,
  soundEnabled = true,
  onToggleSound,
  onOpenRules,
  backUrl = '/accenture/cognitive'
}) {
  return (
    <div className="game-header">
      <div className="game-header-left">
        {/* Back Button with Text (Screenshot 1 & 2) */}
        <Link to={backUrl} className="game-header-back-btn" title="Back to Cognitive Hub">
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>

        {/* Company Logo Badge & Title Group */}
        <div className="game-header-title-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Accenture Logo Mark Badge */}
            <div className="game-header-brand-logo" title="Accenture Cognitive Assessment">
              <span className="accenture-bracket">&gt;</span>
            </div>
            <h2>{title}</h2>
          </div>

          {subtitle && (
            <span className="game-header-badge">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      <div className="game-header-right">
        {/* Amber Score Pill (Screenshot 1 & 2) */}
        <div className="game-header-score-pill">
          <Zap size={15} className="score-zap-icon" />
          <span className="score-text">Score:</span>
          <span className="score-number">{score}</span>
        </div>

        {/* Sound Toggle Button (Screenshot 1 & 2) */}
        {onToggleSound && (
          <button
            className="game-header-sound-btn"
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        )}

        {/* Rules Button */}
        {onOpenRules && (
          <button
            className="game-header-rules-btn"
            onClick={onOpenRules}
            title="View Official Rules"
          >
            <HelpCircle size={15} />
            <span>Rules</span>
          </button>
        )}
      </div>
    </div>
  )
}
