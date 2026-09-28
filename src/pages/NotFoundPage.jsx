// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom'
import { SearchX } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)', padding: 'var(--space-2xl)', textAlign: 'center' }}>
      <div>
        <SearchX size={48} color="var(--color-text-muted)" style={{ margin: '0 auto 16px' }}/>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 8 }}>Page not found</h1>
        <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 24 }}>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" style={{ display: 'inline-block', padding: '10px 20px', background: 'var(--color-primary)', color: 'white', borderRadius: 'var(--radius-md)', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
          Go home
        </Link>
      </div>
    </div>
  )
}
