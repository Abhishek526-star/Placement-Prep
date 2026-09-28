// src/components/layout/Breadcrumb.jsx
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { useCompany } from '../../contexts/CompanyContext'
import './Breadcrumb.css'

export default function Breadcrumb() {
  const location = useLocation()
  const { currentCompany } = useCompany()

  const pathParts = location.pathname.split('/').filter(Boolean)
  if (pathParts.length === 0) return null

  const items = []
  items.push({ label: 'Home', to: '/' })

  let accPath = ''
  pathParts.forEach((part, index) => {
    accPath += `/${part}`
    const isLast = index === pathParts.length - 1

    let label = part
    if (part === currentCompany?.slug) {
      label = currentCompany.name
    } else if (part === 'selection-process') {
      label = 'Selection Process'
    } else if (part === 'syllabus') {
      label = 'Syllabus'
    } else if (part === 'dsa') {
      label = 'DSA Practice'
    } else if (part === 'sql') {
      label = 'SQL Practice'
    } else if (part === 'frontend') {
      label = 'Frontend Web'
    } else if (part === 'cognitive') {
      label = 'Cognitive Games'
    } else if (part === 'math-bubble' || part === 'bubble-math' || part === 'quick-fire-math') {
      label = 'Math Bubble'
    } else if (part === 'memory-maze') {
      label = 'Memory Maze'
    } else if (part === 'path-finder') {
      label = 'Path Finder'
    } else if (part === 'full-mock' || part === 'assessment') {
      label = 'Full Mock Assessment'
    } else if (part === 'results') {
      label = 'Assessment Report'
    } else if (part === 'technical-mcq') {
      label = 'Technical MCQ'
    } else if (part === 'assessments') {
      label = 'Mock Assessments'
    } else if (part === 'pyqs') {
      label = 'Recent PYQs'
    } else if (part === 'study-materials') {
      label = 'Study Material'
    } else if (part === 'interview') {
      label = 'Interview Prep'
    } else if (part === 'progress') {
      label = 'Progress & Stats'
    } else if (part === 'admin') {
      label = 'Admin Console'
    } else if (part === 'profile') {
      label = 'My Profile'
    } else {
      label = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ')
    }

    items.push({ label, to: accPath, isLast })
  })

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <span key={item.to} className="breadcrumb-item-wrapper">
          {idx > 0 && <ChevronRight size={13} className="breadcrumb-separator" />}
          {item.isLast ? (
            <span className="breadcrumb-current">{item.label}</span>
          ) : (
            <Link to={item.to} className="breadcrumb-link">
              {idx === 0 ? <Home size={13} style={{ marginRight: 4 }} /> : null}
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}
