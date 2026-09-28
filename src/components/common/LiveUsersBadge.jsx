// src/components/common/LiveUsersBadge.jsx
// Public view: Shows only the real total live user count
// Admin view: Shows the complete breakdown with active sessions, usernames, and company details

import { useState, useRef, useEffect } from 'react'
import { Radio, ChevronDown, Wifi, Shield, Users, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLiveUsers } from '../../contexts/LiveUsersContext'
import { useCompany } from '../../contexts/CompanyContext'
import { useAuth } from '../../contexts/AuthContext'

export default function LiveUsersBadge() {
  const { totalLiveUsers, companyLiveUsers, companyBreakdown, activeSessions, connectionStatus } = useLiveUsers()
  const { currentCompany } = useCompany()
  const { isAdmin } = useAuth()
  const [open, setOpen] = useState(false)
  const popoverRef = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div style={{ position: 'relative' }} ref={popoverRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        title={isAdmin ? 'Admin View: Realtime user sessions' : 'Live active users online'}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          padding: '5px 12px',
          borderRadius: 'var(--radius-pill)',
          background: 'rgba(22, 163, 74, 0.08)',
          border: '1px solid rgba(22, 163, 74, 0.25)',
          color: 'var(--color-text-primary)',
          fontSize: 12,
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          userSelect: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(22, 163, 74, 0.14)'
          e.currentTarget.style.borderColor = 'rgba(22, 163, 74, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(22, 163, 74, 0.08)'
          e.currentTarget.style.borderColor = 'rgba(22, 163, 74, 0.25)'
        }}
      >
        {/* Pulsing Green Radar Dot */}
        <span style={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
          <span
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: '#22c55e',
              opacity: 0.75,
              animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}
          />
          <span
            style={{
              position: 'relative',
              display: 'inline-flex',
              borderRadius: '50%',
              width: 8,
              height: 8,
              background: '#16a34a'
            }}
          />
        </span>

        {/* Public real live count */}
        <span style={{ color: '#16a34a', fontWeight: 800 }}>
          {totalLiveUsers}
        </span>
        <span style={{ color: 'var(--color-text-secondary)', fontSize: 11.5 }}>
          {totalLiveUsers === 1 ? 'Live User' : 'Live Users'}
        </span>

        {isAdmin && (
          <span style={{
            fontSize: 9.5,
            fontWeight: 800,
            padding: '1px 5px',
            borderRadius: 6,
            background: 'rgba(37, 99, 235, 0.15)',
            color: 'var(--color-primary)',
            marginLeft: 2
          }}>
            ADMIN
          </span>
        )}

        <ChevronDown
          size={12}
          color="var(--color-text-muted)"
          style={{
            transition: 'transform 0.2s',
            transform: open ? 'rotate(180deg)' : 'none'
          }}
        />
      </button>

      {/* Popover Dropdown */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            width: isAdmin ? 320 : 240,
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            padding: 16,
            zIndex: 200,
            animation: 'fadeIn 0.15s ease'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700, color: 'var(--color-text-primary)' }}>
              <Radio size={14} color="#16a34a" />
              <span>{isAdmin ? 'Admin Live Inspector' : 'Live Activity'}</span>
            </div>
            <span style={{
              fontSize: 10,
              fontWeight: 700,
              padding: '2px 7px',
              borderRadius: 8,
              background: 'rgba(22, 163, 74, 0.1)',
              color: '#16a34a'
            }}>
              Realtime
            </span>
          </div>

          {/* Public Simple Card */}
          <div style={{
            padding: '10px 12px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-bg)',
            marginBottom: 10,
            border: '1px solid var(--color-border)'
          }}>
            <div style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 600 }}>
              CURRENTLY ONLINE
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--color-text-primary)', marginTop: 2 }}>
              {totalLiveUsers} {totalLiveUsers === 1 ? 'Active Student' : 'Active Students'}
            </div>
            <div style={{ fontSize: 11.5, color: '#16a34a', fontWeight: 600, marginTop: 4 }}>
              🔥 {companyLiveUsers} practicing for {currentCompany?.shortName || 'Accenture'}
            </div>
          </div>

          {/* If NOT Admin: Show simple privacy message */}
          {!isAdmin && (
            <div style={{ fontSize: 11, color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
              Live counter tracks authentic connected students across all companies in real time via WebSockets.
            </div>
          )}

          {/* If ADMIN: Show the Whole Detail */}
          {isAdmin && (
            <>
              {/* Company Breakdown */}
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', margin: '12px 0 6px', letterSpacing: '0.04em' }}>
                Distribution by Company
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: 'var(--color-text-secondary)' }}>
                  <span>Accenture</span>
                  <strong style={{ color: companyBreakdown.accenture > 0 ? '#16a34a' : 'var(--color-text-muted)' }}>
                    {companyBreakdown.accenture} online
                  </strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: 'var(--color-text-secondary)' }}>
                  <span>TCS</span>
                  <strong style={{ color: companyBreakdown.tcs > 0 ? '#16a34a' : 'var(--color-text-muted)' }}>
                    {companyBreakdown.tcs} online
                  </strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: 'var(--color-text-secondary)' }}>
                  <span>Infosys</span>
                  <strong style={{ color: companyBreakdown.infosys > 0 ? '#16a34a' : 'var(--color-text-muted)' }}>
                    {companyBreakdown.infosys} online
                  </strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: 'var(--color-text-secondary)' }}>
                  <span>Wipro</span>
                  <strong style={{ color: companyBreakdown.wipro > 0 ? '#16a34a' : 'var(--color-text-muted)' }}>
                    {companyBreakdown.wipro} online
                  </strong>
                </div>
              </div>

              {/* Connected Sessions List */}
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 6, letterSpacing: '0.04em' }}>
                Connected Sessions ({activeSessions.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 120, overflowY: 'auto', marginBottom: 12 }}>
                {activeSessions.map((s, idx) => (
                  <div
                    key={s.tab_id || idx}
                    style={{
                      padding: '6px 8px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      fontSize: 11,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>
                        {s.name || 'Student'}
                      </span>
                      <span style={{
                        fontSize: 9.5,
                        padding: '1px 5px',
                        borderRadius: 4,
                        background: 'rgba(37, 99, 235, 0.1)',
                        color: 'var(--color-primary)',
                        textTransform: 'capitalize'
                      }}>
                        {s.company}
                      </span>
                    </div>
                    <div style={{ fontSize: 9.5, color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {s.tab_id}
                    </div>
                  </div>
                ))}
              </div>

              {/* Admin Console Link */}
              <Link
                to="/admin"
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  padding: '7px 12px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-primary)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: 12,
                  fontWeight: 600
                }}
              >
                <span>Open Admin Live Console</span>
                <ExternalLink size={13} />
              </Link>
            </>
          )}

          <div style={{ marginTop: 10, paddingTop: 8, borderTop: '1px solid var(--color-border)', fontSize: 10.5, color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Wifi size={11} color="#16a34a" /> WebSocket Connected
            </span>
            <span>Real Presence</span>
          </div>
        </div>
      )}

      {/* Global pulse keyframes */}
      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
