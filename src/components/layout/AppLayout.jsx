// src/components/layout/AppLayout.jsx
// Main application shell — Header + Company-aware Dynamic Sidebar + Breadcrumb + Content + Mobile Nav

import { useState, useRef, useEffect, useMemo } from 'react'
import { Outlet, NavLink, useNavigate, useLocation, useParams } from 'react-router-dom'
import {
  GraduationCap, Home, Building2, Code2, Database,
  ClipboardList, FileText, MessageSquare, BarChart2,
  Moon, Sun, LogOut, User, ChevronDown, ShieldAlert, Globe,
  Brain, CheckSquare, History, Workflow, BookOpen, Layers
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import { useCompany } from '../../contexts/CompanyContext'
import CompanySelector from './CompanySelector'
import Breadcrumb from './Breadcrumb'
import EditProfileModal from '../common/EditProfileModal'
import LiveUsersBadge from '../common/LiveUsersBadge'
import './Layout.css'

const ICON_MAP = {
  Home,
  Building2,
  Workflow,
  BookOpen,
  Brain,
  CheckSquare,
  Code2,
  Database,
  Globe,
  ClipboardList,
  History,
  FileText,
  MessageSquare,
  BarChart2,
  Layers,
}

function ProfileDropdown() {
  const { user, profile, signOut, isAdmin } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const initials = (profile?.full_name || user?.email || 'U')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const handleSignOut = async () => {
    setOpen(false)
    await signOut()
    navigate('/login', { replace: true })
  }

  return (
    <div className="dropdown-wrapper" ref={ref}>
      <button
        type="button"
        className="profile-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open profile menu"
      >
        <div className="profile-avatar">{initials}</div>
        <span className="profile-name">
          {profile?.full_name || user?.email?.split('@')[0] || 'User'}
        </span>
        <ChevronDown
          size={14}
          color="var(--color-text-muted)"
          style={{
            transition: 'transform 0.2s',
            transform: open ? 'rotate(180deg)' : 'none',
          }}
        />
      </button>

      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <div className="dropdown-user-name">{profile?.full_name || 'Student'}</div>
            <div className="dropdown-user-email">{user?.email}</div>
          </div>

          <button
            type="button"
            className="dropdown-item"
            onClick={() => {
              setOpen(false)
              navigate('/profile')
            }}
          >
            <User size={15} /> My Profile
          </button>

          <button
            type="button"
            className="dropdown-item"
            onClick={() => {
              toggleTheme()
              setOpen(false)
            }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>

          {isAdmin && (
            <button
              type="button"
              className="dropdown-item"
              onClick={() => {
                setOpen(false)
                navigate('/admin')
              }}
            >
              <ShieldAlert size={15} /> Admin Console
            </button>
          )}

          <div className="dropdown-divider" />

          <button type="button" className="dropdown-item danger" onClick={handleSignOut}>
            <LogOut size={15} /> Sign out
          </button>
        </div>
      )}

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      />
    </div>
  )
}

export default function AppLayout() {
  const { currentCompany, setCompanyBySlug } = useCompany()
  const { isAdmin } = useAuth()
  const { companySlug } = useParams()
  const location = useLocation()

  // Sync route companySlug with company context
  useEffect(() => {
    if (companySlug && companySlug !== currentCompany?.slug) {
      setCompanyBySlug(companySlug)
    }
  }, [companySlug, currentCompany, setCompanyBySlug])

  const slug = currentCompany?.slug || 'accenture'

  // Dynamic placement modules configured for the active company
  const companyModules = useMemo(() => {
    const rawModules = currentCompany?.placementModules || []
    return rawModules.map((m) => ({
      to: `/${slug}${m.path}`,
      label: m.shortTitle || m.title,
      icon: ICON_MAP[m.icon] || Code2,
      badge: m.badge,
      color: m.color,
    }))
  }, [currentCompany, slug])

  // Shared practice & resource tools
  const resourceItems = useMemo(() => [
    { to: `/${slug}/assessments`, label: 'Mock Tests', icon: ClipboardList },
    { to: `/${slug}/pyqs`, label: 'Recent PYQs', icon: History },
    { to: `/${slug}/study-materials`, label: 'Study Material', icon: FileText },
    { to: `/${slug}/interview`, label: 'Interview Prep', icon: MessageSquare },
  ], [slug])

  const mobileNav = [
    { to: `/${slug}`, label: 'Hub', icon: Building2 },
    { to: `/${slug}/dsa`, label: 'Practice', icon: Code2 },
    { to: `/${slug}/assessments`, label: 'Tests', icon: ClipboardList },
    { to: `/${slug}/progress`, label: 'Progress', icon: BarChart2 },
  ]

  return (
    <div className="app-shell">
      {/* ── Header ── */}
      <header className="header">
        <div className="header-left">
          <NavLink to="/" className="header-logo" aria-label="PlacementPrep Home">
            <div className="header-logo-icon">
              <GraduationCap size={18} />
            </div>
            <span className="header-logo-text">PlacementPrep</span>
          </NavLink>
          <div className="header-divider" />
          <CompanySelector />
        </div>

        <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LiveUsersBadge />
          <ProfileDropdown />
        </div>
      </header>

      <div className="app-body">
        {/* ── Dynamic Sidebar ── */}
        <aside className="sidebar" aria-label="Main navigation">
          <nav className="sidebar-nav">
            {/* Overview Links */}
            <span className="sidebar-section-label">Navigation</span>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <Home size={17} className="nav-item-icon" />
              <span>All Companies</span>
            </NavLink>
            <NavLink
              to={`/${slug}`}
              end
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <Building2 size={17} className="nav-item-icon" />
              <span>{currentCompany?.shortName || 'Company'} Hub</span>
            </NavLink>

            {/* Dynamic Company Rounds & Modules */}
            <span className="sidebar-section-label" style={{ marginTop: 14 }}>
              {currentCompany?.shortName || 'Company'} Modules
            </span>
            {companyModules.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
              >
                <item.icon size={17} className="nav-item-icon" />
                <span>{item.label}</span>
              </NavLink>
            ))}

            {/* Practice & Resources */}
            <span className="sidebar-section-label" style={{ marginTop: 14 }}>
              Practice & Prep
            </span>
            {resourceItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
              >
                <item.icon size={17} className="nav-item-icon" />
                <span>{item.label}</span>
              </NavLink>
            ))}

            {/* Progress & Analytics */}
            <span className="sidebar-section-label" style={{ marginTop: 14 }}>
              Analytics
            </span>
            <NavLink
              to={`/${slug}/progress`}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <BarChart2 size={17} className="nav-item-icon" />
              <span>My Progress</span>
            </NavLink>

            {isAdmin && (
              <>
                <span className="sidebar-section-label" style={{ marginTop: 14 }}>Administration</span>
                <NavLink
                  to="/admin"
                  className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
                >
                  <ShieldAlert size={17} className="nav-item-icon" />
                  <span>Admin Console</span>
                </NavLink>
              </>
            )}
          </nav>
        </aside>

        {/* ── Main Content ── */}
        <main className="main-content" id="main-content">
          <div className="page-container">
            <Breadcrumb />
            <Outlet />
          </div>
        </main>
      </div>

      {/* ── Mobile Bottom Nav ── */}
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <div className="mobile-nav-items">
          {mobileNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `mobile-nav-item${isActive ? ' active' : ''}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
