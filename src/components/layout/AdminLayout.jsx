// src/components/layout/AdminLayout.jsx
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom'
import {
  ShieldAlert, LayoutDashboard, HelpCircle, ClipboardList,
  Building2, Users, FileText, ArrowLeft
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import './AdminLayout.css'

export default function AdminLayout() {
  const { profile } = useAuth()
  const navigate = useNavigate()

  const adminNav = [
    { to: '/admin', label: 'Overview', icon: LayoutDashboard, exact: true },
    { to: '/admin/questions', label: 'Question Bank', icon: HelpCircle },
    { to: '/admin/assessments', label: 'Assessments', icon: ClipboardList },
    { to: '/admin/companies', label: 'Companies', icon: Building2 },
    { to: '/admin/study-materials', label: 'Study Materials', icon: FileText },
  ]

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div className="admin-header-left">
          <Link to="/" className="admin-back-btn" title="Return to student app">
            <ArrowLeft size={16} /> Exit to App
          </Link>
          <div className="admin-title-badge">
            <ShieldAlert size={16} />
            <span>Admin Console</span>
          </div>
        </div>
        <div className="admin-header-right">
          <span className="admin-user-pill">
            Logged in as: <strong>{profile?.full_name || 'Admin'}</strong>
          </span>
        </div>
      </header>

      <div className="admin-body">
        <aside className="admin-sidebar">
          <nav className="admin-nav">
            <span className="admin-nav-label">Management</span>
            {adminNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.exact}
                className={({ isActive }) => `admin-nav-item${isActive ? ' active' : ''}`}
              >
                <item.icon size={17} />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="admin-content">
          <div className="admin-container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
