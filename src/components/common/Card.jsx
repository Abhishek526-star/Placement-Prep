// src/components/common/Card.jsx
import './Card.css'

export default function Card({
  children,
  className = '',
  hoverable = false,
  onClick,
  ...props
}) {
  return (
    <div
      className={`app-card ${hoverable ? 'app-card--hoverable' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}
