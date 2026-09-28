// src/components/forms/SearchInput.jsx
import { Search, X } from 'lucide-react'
import './Forms.css'

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search topics, questions...',
  onClear,
  className = '',
  ...props
}) {
  return (
    <div className={`form-search-wrapper ${className}`}>
      <Search size={16} className="form-search-icon" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-search-input"
        {...props}
      />
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="form-search-clear"
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
}
