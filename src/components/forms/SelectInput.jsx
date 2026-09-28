// src/components/forms/SelectInput.jsx
import { ChevronDown } from 'lucide-react'
import './Forms.css'

export default function SelectInput({
  label,
  options = [], // [{ value, label }]
  error,
  required = false,
  className = '',
  id,
  ...props
}) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div className={`form-field ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label htmlFor={selectId} className="form-label">
          {label} {required && <span className="form-required">*</span>}
        </label>
      )}
      <div className="form-select-wrapper">
        <select id={selectId} className="form-select" required={required} {...props}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={15} className="form-select-chevron" />
      </div>
      {error && <span className="form-error-msg">{error}</span>}
    </div>
  )
}
