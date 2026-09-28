// src/components/common/ProtectedRoute.jsx
// Wraps any route that requires authentication.
// Redirects unauthenticated users to /login.

import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, loading, userRole } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg)',
      }}>
        <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: 14 }}>
          <div style={{
            width: 32, height: 32,
            border: '3px solid var(--color-border)',
            borderTopColor: 'var(--color-primary)',
            borderRadius: '50%',
            animation: 'spin 0.7s linear infinite',
            margin: '0 auto 12px',
          }}/>
          Loading…
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Role check — if requiredRole is specified
  if (requiredRole) {
    const roleHierarchy = { student: 0, content_creator: 1, admin: 2, super_admin: 3 }
    const userLevel = roleHierarchy[userRole] ?? 0
    const requiredLevel = roleHierarchy[requiredRole] ?? 0
    if (userLevel < requiredLevel) {
      return <Navigate to="/" replace />
    }
  }

  return children
}
