// src/components/layout/CompanySelector.jsx
import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Building2, ChevronDown, Check } from 'lucide-react'
import { useCompany } from '../../contexts/CompanyContext'
import './CompanySelector.css'

export default function CompanySelector() {
  const { currentCompany, companies, setCompanyBySlug } = useCompany()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (comp) => {
    setCompanyBySlug(comp.slug)
    setOpen(false)

    // Preserve the sub-path if possible (e.g. /accenture/dsa -> /tcs/dsa)
    const parts = location.pathname.split('/').filter(Boolean)
    if (parts.length > 0 && parts[0] !== 'admin' && parts[0] !== 'login') {
      const subPath = parts.slice(1).join('/')
      navigate(`/${comp.slug}${subPath ? '/' + subPath : ''}`)
    } else {
      navigate(`/${comp.slug}`)
    }
  }

  return (
    <div className="company-selector" ref={ref}>
      <button
        type="button"
        className="company-selector-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Select placement company"
      >
        <span
          className="company-indicator-dot"
          style={{ background: currentCompany?.branding?.primaryColor || 'var(--color-primary)' }}
        />
        <span className="company-selector-name">{currentCompany?.name || 'Select Company'}</span>
        <ChevronDown
          size={14}
          className="company-chevron"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        />
      </button>

      {open && (
        <div className="company-menu">
          <div className="company-menu-header">Placement Companies</div>
          <div className="company-menu-list">
            {companies.map((c) => {
              const isSelected = c.slug === currentCompany?.slug
              return (
                <button
                  key={c.id}
                  type="button"
                  className={`company-menu-item ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleSelect(c)}
                >
                  <div className="company-item-info">
                    <span
                      className="company-item-dot"
                      style={{ background: c.branding.primaryColor }}
                    />
                    <div className="company-item-text">
                      <span className="company-item-name">{c.name}</span>
                      <span className="company-item-tagline">{c.tagline}</span>
                    </div>
                  </div>
                  {isSelected && <Check size={16} className="company-item-check" />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
