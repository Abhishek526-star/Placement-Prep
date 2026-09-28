// src/components/mcq/MCQQuizHeader.jsx
import React from 'react'
import {
  Clock, Pause, Play, Bookmark, BookOpen, Layers,
  Cpu, Network, ShieldCheck, CheckCircle2
} from 'lucide-react'

export default function MCQQuizHeader({
  companyName = 'Accenture',
  activeTab,
  onSelectTab,
  tabs = [],
  mode,
  onToggleMode,
  timeRemaining = 0,
  isTimerPaused = false,
  onToggleTimerPause,
  totalQuestions = 0,
  answeredCount = 0,
  bookmarkCount = 0,
  formatTimer,
  onResetExam
}) {
  const isTimerWarning = mode === 'exam' && timeRemaining <= 300 // under 5 minutes
  const progressPercent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0

  return (
    <header className="cloud-quiz-header">
      {/* Top Bar: Brand, Tag, Mode Switcher, Actions */}
      <div className="cloud-header-top">
        <div className="cloud-brand">
          <div className="cloud-brand-icon">
            <Cpu size={26} strokeWidth={2.2} />
          </div>
          <div>
            <div className="cloud-tag-row">
              <span className="cloud-badge cloud-badge-primary">
                Round 1 Assessment
              </span>
              <span className="cloud-badge cloud-badge-secondary">
                {companyName} Technical
              </span>
              <span className="cloud-badge cloud-badge-topic">
                {totalQuestions} Questions Available
              </span>
            </div>
            <h1 className="cloud-title">
              {companyName} Technical MCQ Assessment Engine
            </h1>
          </div>
        </div>

        {/* Header Right Actions & Mode Switcher */}
        <div className="cloud-header-actions">
          {/* Mode Switcher */}
          <div className="cloud-mode-toggle" role="tablist" aria-label="Assessment Mode">
            <button
              type="button"
              className={`cloud-mode-btn ${mode === 'practice' ? 'active' : ''}`}
              onClick={() => onToggleMode('practice')}
              title="Practice mode: instant feedback, per-option explanations, and hints"
            >
              <BookOpen size={15} />
              <span>Practice Mode</span>
            </button>
            <button
              type="button"
              className={`cloud-mode-btn ${mode === 'exam' ? 'active' : ''}`}
              onClick={() => onToggleMode('exam')}
              title="Exam mode: timed (1 min/Q), questions reviewable at submit"
            >
              <Clock size={15} />
              <span>Exam Mode</span>
            </button>
          </div>

          {mode === 'exam' && onResetExam && (
            <button
              type="button"
              className="cloud-btn cloud-btn-secondary"
              onClick={onResetExam}
              title="Reset and restart the examination"
            >
              Restart Exam
            </button>
          )}
        </div>
      </div>

      {/* Sub-Section Navigation Tabs */}
      <div className="cloud-tier-nav">
        <div className="cloud-tier-tabs" role="tablist">
          {tabs.map((tab) => {
            const Icon = tab.icon || Layers
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                className={`cloud-tier-tab ${isActive ? 'active' : ''}`}
                onClick={() => onSelectTab(tab.id)}
              >
                <Icon size={14} style={{ color: isActive ? '#38bdf8' : tab.color }} />
                <span>{tab.label}</span>
                <span className="cloud-tier-badge">{tab.count}</span>
                {tab.badgeText && (
                  <span className="tier-timer-tag">{tab.badgeText}</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Status & Timer Bar */}
      <div className="cloud-status-bar">
        {/* Progress Track */}
        <div className="cloud-progress-group">
          <div className="cloud-progress-label">
            <span>
              Progress: <strong>{answeredCount}</strong> of {totalQuestions} answered ({progressPercent}%)
            </span>
            {bookmarkCount > 0 && (
              <span className="cloud-bookmark-pill">
                <Bookmark size={13} fill="currentColor" />
                <span>{bookmarkCount} marked</span>
              </span>
            )}
          </div>
          <div className="cloud-progress-track">
            <div
              className="cloud-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Right Status (Timer in Exam Mode) */}
        <div className="cloud-status-right">
          {mode === 'exam' ? (
            <div className="cloud-timer-container">
              <div
                className={`cloud-timer-pill ${isTimerWarning ? 'timer-warning' : ''}`}
                title={isTimerWarning ? 'Under 5 minutes remaining!' : 'Time remaining (1 min/Q)'}
              >
                <Clock size={15} />
                <span className="cloud-timer-digits">
                  {formatTimer ? formatTimer(timeRemaining) : timeRemaining}
                </span>
                {onToggleTimerPause && (
                  <button
                    type="button"
                    className="cloud-timer-pause-btn"
                    onClick={onToggleTimerPause}
                    title={isTimerPaused ? 'Resume Timer' : 'Pause Timer'}
                  >
                    {isTimerPaused ? <Play size={11} fill="currentColor" /> : <Pause size={11} fill="currentColor" />}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: '#10b981', fontWeight: 600 }}>
              <CheckCircle2 size={16} />
              <span>Practice Mode: Instant Feedback Active</span>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
