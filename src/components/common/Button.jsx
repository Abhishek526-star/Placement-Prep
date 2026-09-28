// src/components/common/Button.jsx
import './Button.css'

export default function Button({
  children,
  variant = 'primary', // primary | secondary | outline | ghost | danger | success
  size = 'md',        // sm | md | lg
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  wrap = false,
  className = '',
  type = 'button',
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      className={`app-btn app-btn--${variant} app-btn--${size} ${wrap ? 'app-btn--wrap' : ''} ${loading ? 'app-btn--loading' : ''} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="app-btn-spinner" />}
      {!loading && Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} className="app-btn-icon" />}
      <span className="app-btn-text">{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} className="app-btn-icon" />}
    </button>
  )
}
