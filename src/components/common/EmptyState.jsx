// src/components/common/EmptyState.jsx
// Shown on all content pages when DB returns no data.
// This is intentional during Phase 5A (before content is added).

import { Inbox } from 'lucide-react'

export default function EmptyState({ icon: Icon = Inbox, title = 'Nothing here yet', description = 'Content will appear here once added.', action }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6xl) var(--space-2xl)',
      textAlign: 'center',
      color: 'var(--color-text-muted)',
    }}>
      <div style={{
        width: 64, height: 64,
        background: 'var(--color-bg)',
        border: '2px dashed var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 'var(--space-xl)',
      }}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>
        {title}
      </h3>
      <p style={{ fontSize: 14, maxWidth: 320, lineHeight: 1.6 }}>{description}</p>
      {action && <div style={{ marginTop: 'var(--space-xl)' }}>{action}</div>}
    </div>
  )
}
