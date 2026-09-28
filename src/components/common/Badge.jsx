// src/components/common/Badge.jsx
import './Badge.css'

export function Badge({
  children,
  variant = 'default', // default | success | warning | danger | info | primary
  size = 'md',         // sm | md
  className = '',
}) {
  return (
    <span className={`app-badge app-badge--${variant} app-badge--${size} ${className}`}>
      {children}
    </span>
  )
}

export function DifficultyBadge({ difficulty = 'medium', size = 'md' }) {
  const norm = difficulty.toLowerCase()
  const variant = norm === 'easy' ? 'success' : norm === 'hard' ? 'danger' : 'warning'
  const label = norm.charAt(0).toUpperCase() + norm.slice(1)

  return (
    <Badge variant={variant} size={size}>
      {label}
    </Badge>
  )
}

export function TypeBadge({ type = 'mcq', size = 'md' }) {
  const labels = {
    mcq: 'MCQ',
    dsa: 'DSA Coding',
    sql: 'SQL Query',
    frontend: 'Frontend Web',
    interview: 'Interview Prep',
  }
  return (
    <Badge variant="info" size={size}>
      {labels[type.toLowerCase()] || type.toUpperCase()}
    </Badge>
  )
}

export function StatusBadge({ status = 'published', size = 'md' }) {
  const variants = {
    published: 'success',
    draft: 'warning',
    archived: 'default',
  }
  return (
    <Badge variant={variants[status.toLowerCase()] || 'default'} size={size}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  )
}

export default Badge
