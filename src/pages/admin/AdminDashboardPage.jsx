// src/pages/admin/AdminDashboardPage.jsx
// Comprehensive Admin Dashboard with 100% real live user sessions inspector

import { Shield, Database, HelpCircle, ClipboardList, Building2, CheckCircle2, Radio, Users, Wifi } from 'lucide-react'
import Card from '../../components/common/Card'
import { useLiveUsers } from '../../contexts/LiveUsersContext'

export default function AdminDashboardPage() {
  const { totalLiveUsers, companyBreakdown, activeSessions, connectionStatus } = useLiveUsers()

  const stats = [
    { label: 'Real Live Users', value: totalLiveUsers.toString(), icon: Users, color: '#16a34a' },
    { label: 'Configured Companies', value: '4', icon: Building2, color: '#38bdf8' },
    { label: 'Active Tracks', value: '14', icon: Database, color: '#a855f7' },
    { label: 'Published Assessments', value: '0', icon: ClipboardList, color: '#10b981' },
  ]

  return (
    <div>
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            Administration Dashboard
          </h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 4 }}>
            Monitor real-time concurrent students, multi-company content, and database workflows.
          </p>
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 12px',
          borderRadius: 'var(--radius-pill)',
          background: 'rgba(22, 163, 74, 0.1)',
          border: '1px solid rgba(22, 163, 74, 0.25)',
          color: '#16a34a',
          fontSize: 12,
          fontWeight: 700
        }}>
          <Wifi size={14} color="#16a34a" />
          <span>Realtime WebSockets: {connectionStatus}</span>
        </div>
      </div>

      {/* Top Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 28 }}>
        {stats.map((s) => (
          <Card key={s.label}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 500 }}>{s.label}</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-text-primary)', marginTop: 4 }}>{s.value}</div>
              </div>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: `${s.color}20`, color: s.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <s.icon size={22} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Full Live User Sessions Detail (Admin Only) */}
      <Card style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: 'var(--color-text-primary)' }}>
                Real-Time Connected Sessions
              </h2>
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(22, 163, 74, 0.1)',
                color: '#16a34a'
              }}>
                {totalLiveUsers} Active
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: '4px 0 0' }}>
              Full presence telemetry broadcast over Supabase WebSockets. (Admin Only view)
            </p>
          </div>

          {/* Quick Company Breakdown Badges */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 6, background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
              Accenture: <strong>{companyBreakdown.accenture || 0}</strong>
            </span>
            <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 6, background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
              TCS: <strong>{companyBreakdown.tcs || 0}</strong>
            </span>
            <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 6, background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
              Infosys: <strong>{companyBreakdown.infosys || 0}</strong>
            </span>
            <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 6, background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
              Wipro: <strong>{companyBreakdown.wipro || 0}</strong>
            </span>
          </div>
        </div>

        {/* Sessions Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
                <th style={{ padding: '10px 8px', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '10px 8px', fontWeight: 600 }}>Student / User Name</th>
                <th style={{ padding: '10px 8px', fontWeight: 600 }}>Active Company</th>
                <th style={{ padding: '10px 8px', fontWeight: 600 }}>Client Session Tab ID</th>
                <th style={{ padding: '10px 8px', fontWeight: 600, textAlign: 'right' }}>Connected Since</th>
              </tr>
            </thead>
            <tbody>
              {activeSessions.map((session, idx) => (
                <tr key={session.tab_id || idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px 8px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: '#16a34a', fontWeight: 600, fontSize: 12 }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
                      Online
                    </span>
                  </td>
                  <td style={{ padding: '12px 8px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {session.name || 'Student Learner'}
                  </td>
                  <td style={{ padding: '12px 8px' }}>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 10,
                      background: 'rgba(37, 99, 235, 0.1)',
                      color: 'var(--color-primary)',
                      textTransform: 'capitalize'
                    }}>
                      {session.company || 'Accenture'}
                    </span>
                  </td>
                  <td style={{ padding: '12px 8px', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text-muted)' }}>
                    {session.tab_id}
                  </td>
                  <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--color-text-muted)', fontSize: 12 }}>
                    {session.online_at ? new Date(session.online_at).toLocaleTimeString() : 'Just now'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Migration / System Status */}
      <Card>
        <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Platform Migration Status</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--color-text-secondary)' }}>
            <CheckCircle2 size={18} color="var(--color-success)" />
            <span>Frontend layouts, navigation shells, and responsive components: <strong>Complete</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--color-text-secondary)' }}>
            <CheckCircle2 size={18} color="var(--color-success)" />
            <span>Scaffold-First Empty State architecture: <strong>Active (0 hardcoded questions)</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--color-text-secondary)' }}>
            <Database size={18} color="var(--color-primary)" />
            <span>Supabase Schema Migrations (21 tables + RLS): <strong>Ready in /supabase/migrations</strong></span>
          </div>
        </div>
      </Card>
    </div>
  )
}
