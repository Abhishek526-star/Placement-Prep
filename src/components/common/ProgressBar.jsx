// src/components/common/ProgressBar.jsx
import './ProgressBar.css'

export function ProgressBar({
  value = 0, // 0 - 100
  max = 100,
  showLabel = false,
  variant = 'primary', // primary | success | warning | danger
  height = 8,
  className = '',
}) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)))

  return (
    <div className={`app-progress-wrapper ${className}`}>
      <div className="app-progress-track" style={{ height }}>
        <div
          className={`app-progress-fill app-progress-fill--${variant}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="app-progress-label">{percentage}%</span>
      )}
    </div>
  )
}

export function ReadinessRing({ score = 0, size = 110, strokeWidth = 9 }) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (score / 100) * circumference

  // Color by readiness level
  let color = 'var(--color-danger)'
  if (score >= 75) color = 'var(--color-success)'
  else if (score >= 50) color = 'var(--color-warning)'
  else if (score >= 30) color = 'var(--color-primary)'

  return (
    <div className="readiness-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="readiness-ring-bg"
          stroke="var(--color-border)"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="readiness-ring-val"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="readiness-ring-content">
        <span className="readiness-score">{score}%</span>
        <span className="readiness-title">Readiness</span>
      </div>
    </div>
  )
}

export function StreakBadge({ streak = 0 }) {
  return (
    <div className="streak-badge" title={`${streak} Day Streak!`}>
      <span className="streak-icon">🔥</span>
      <span className="streak-count">{streak}</span>
      <span className="streak-label">days</span>
    </div>
  )
}

export default ProgressBar
