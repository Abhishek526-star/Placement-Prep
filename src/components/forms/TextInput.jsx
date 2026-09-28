// src/components/forms/TextInput.jsx
import './Forms.css'

export default function TextInput({
  label,
  error,
  helperText,
  icon: Icon,
  required = false,
  className = '',
  id,
  ...props
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div className={`form-field ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label} {required && <span className="form-required">*</span>}
        </label>
      )}
      <div className="form-input-wrapper">
        {Icon && <Icon size={16} className="form-input-icon" />}
        <input
          id={inputId}
          className={`form-input ${Icon ? 'has-icon' : ''}`}
          required={required}
          {...props}
        />
      </div>
      {error && <span className="form-error-msg">{error}</span>}
      {!error && helperText && <span className="form-helper-msg">{helperText}</span>}
    </div>
  )
}
