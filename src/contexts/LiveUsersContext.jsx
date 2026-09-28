// src/contexts/LiveUsersContext.jsx
// 100% Real-time presence tracking powered by Supabase WebSockets (No fake/dummy counters)

import { createContext, useContext, useEffect, useState, useMemo, useRef } from 'react'
import { supabase, IS_SUPABASE_CONFIGURED } from '../lib/supabase'
import { useAuth } from './AuthContext'
import { useCompany } from './CompanyContext'

const LiveUsersContext = createContext(null)

// Unique session ID for each browser tab / client connection
const CLIENT_TAB_ID = `tab-${Math.random().toString(36).substring(2, 10)}-${Date.now()}`

export function LiveUsersProvider({ children }) {
  const { user, profile } = useAuth()
  const { currentCompany } = useCompany()
  const currentSlug = currentCompany?.slug || 'accenture'

  // Real-time state directly populated from Supabase Presence
  const [presenceState, setPresenceState] = useState({})
  const [connectionStatus, setConnectionStatus] = useState('CONNECTING')
  const channelRef = useRef(null)

  // Determine user identity
  const currentUserId = user?.id || CLIENT_TAB_ID
  const currentUserName = profile?.full_name || (user?.email ? user.email.split('@')[0] : 'Guest Learner')

  // Connect to Supabase Realtime Presence Channel
  useEffect(() => {
    if (!IS_SUPABASE_CONFIGURED) {
      setConnectionStatus('LOCAL_ONLY')
      setPresenceState({
        [CLIENT_TAB_ID]: [{
          tab_id: CLIENT_TAB_ID,
          name: currentUserName,
          company: currentSlug,
          online_at: new Date().toISOString(),
        }]
      })
      return
    }

    // Unique presence channel across all website visitors
    const channel = supabase.channel('placementprep_live_presence', {
      config: {
        presence: { key: CLIENT_TAB_ID },
      },
    })

    channelRef.current = channel

    // 1. Sync event: Fired whenever any user connects, disconnects, or changes state
    channel.on('presence', { event: 'sync' }, () => {
      const state = channel.presenceState()
      setPresenceState(state || {})
    })

    // 2. Join event
    channel.on('presence', { event: 'join' }, ({ key, newPresences }) => {
      const state = channel.presenceState()
      setPresenceState(state || {})
    })

    // 3. Leave event
    channel.on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
      const state = channel.presenceState()
      setPresenceState(state || {})
    })

    // 4. Subscribe and register current user's live presence
    channel.subscribe(async (status) => {
      setConnectionStatus(status)
      if (status === 'SUBSCRIBED') {
        await channel.track({
          tab_id: CLIENT_TAB_ID,
          user_id: currentUserId,
          name: currentUserName,
          company: currentSlug,
          online_at: new Date().toISOString(),
        })
      }
    })

    // Cleanup on tab close / unmount
    return () => {
      if (channelRef.current) {
        channelRef.current.untrack()
        supabase.removeChannel(channelRef.current)
      }
    }
  }, [currentUserId, currentUserName])

  // Update presence payload when user switches company
  useEffect(() => {
    if (channelRef.current && connectionStatus === 'SUBSCRIBED') {
      channelRef.current.track({
        tab_id: CLIENT_TAB_ID,
        user_id: currentUserId,
        name: currentUserName,
        company: currentSlug,
        online_at: new Date().toISOString(),
      })
    }
  }, [currentSlug, currentUserId, currentUserName, connectionStatus])

  // Flatten unique connected active sessions
  const activeSessions = useMemo(() => {
    const list = []
    Object.keys(presenceState).forEach((key) => {
      const presences = presenceState[key]
      if (Array.isArray(presences) && presences.length > 0) {
        list.push(presences[0])
      }
    })
    return list
  }, [presenceState])

  // Real count of connected tabs / users (minimum 1 since current user is online)
  const totalLiveUsers = useMemo(() => {
    return Math.max(1, activeSessions.length)
  }, [activeSessions])

  // Count of users actively on the current company page
  const companyLiveUsers = useMemo(() => {
    const matching = activeSessions.filter((s) => s.company === currentSlug)
    return Math.max(1, matching.length)
  }, [activeSessions, currentSlug])

  // Breakdown across companies
  const companyBreakdown = useMemo(() => {
    const breakdown = { accenture: 0, tcs: 0, infosys: 0, wipro: 0 }
    activeSessions.forEach((s) => {
      const comp = s.company || 'accenture'
      if (breakdown[comp] !== undefined) {
        breakdown[comp] += 1
      } else {
        breakdown[comp] = 1
      }
    })
    // Ensure current tab is accounted for in its company
    if (breakdown[currentSlug] === 0) {
      breakdown[currentSlug] = 1
    }
    return breakdown
  }, [activeSessions, currentSlug])

  const value = {
    totalLiveUsers,
    companyLiveUsers,
    currentCompanySlug: currentSlug,
    activeSessions,
    companyBreakdown,
    connectionStatus,
    clientTabId: CLIENT_TAB_ID,
  }

  return (
    <LiveUsersContext.Provider value={value}>
      {children}
    </LiveUsersContext.Provider>
  )
}

export function useLiveUsers() {
  const context = useContext(LiveUsersContext)
  if (!context) {
    return {
      totalLiveUsers: 1,
      companyLiveUsers: 1,
      currentCompanySlug: 'accenture',
      activeSessions: [],
      companyBreakdown: { accenture: 1, tcs: 0, infosys: 0, wipro: 0 },
      connectionStatus: 'READY',
      clientTabId: CLIENT_TAB_ID,
    }
  }
  return context
}
