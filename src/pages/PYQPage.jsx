// src/pages/PYQPage.jsx
// Dedicated Year-Wise Recent Previous Year Questions (PYQ) Hub
import { useState, useEffect } from 'react'
import {
  History, Calendar, Filter, Search, Download,
  ExternalLink, FileText, CheckCircle2, Sparkles, BookOpen, Clock, Layers
} from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import EmptyState from '../components/common/EmptyState'
import { fetchCompanyAssessments } from '../services/assessmentService'

export default function PYQPage() {
  const { currentCompany } = useCompany()
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedRound, setSelectedRound] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [pyqSets, setPyqSets] = useState([])
  const [loading, setLoading] = useState(true)

  const years = [
    { id: 'all', label: 'All Years' },
    { id: '2024', label: '2024 Papers' },
    { id: '2023', label: '2023 Papers' },
    { id: '2022', label: '2022 Papers' },
    { id: '2021', label: '2021 Papers' },
  ]

  const rounds = [
    { id: 'all', label: 'All Rounds' },
    { id: 'technical', label: 'Technical MCQ' },
    { id: 'coding', label: 'Coding / DSA' },
    { id: 'cognitive', label: 'Cognitive Games' },
  ]

  useEffect(() => {
    let isMounted = true
    async function loadPYQs() {
      if (!currentCompany?.id) {
        setPyqSets([])
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const { data, error } = await fetchCompanyAssessments({
          companyId: currentCompany.id,
        })
        if (!error && isMounted) {
          // Filter PYQs or keep all assessments matching PYQ tags
          setPyqSets(data || [])
        }
      } catch (err) {
        console.error('[PYQPage] Fetch error:', err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadPYQs()
    return () => {
      isMounted = false
    }
  }, [currentCompany?.id])

  const filteredPYQs = pyqSets.filter((item) => {
    const matchesYear =
      selectedYear === 'all' ||
      item.title?.includes(selectedYear) ||
      item.description?.includes(selectedYear)
    const matchesRound =
      selectedRound === 'all' ||
      item.title?.toLowerCase().includes(selectedRound) ||
      item.track_id === selectedRound
    const matchesSearch =
      !searchQuery.trim() ||
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesYear && matchesRound && matchesSearch
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {currentCompany?.name} — Recent PYQs (Year-Wise)
          </h1>
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            padding: '2px 8px',
            borderRadius: 'var(--radius-pill)',
            background: 'rgba(37, 99, 235, 0.1)',
            color: 'var(--color-primary)'
          }}>
            Past Year Papers
          </span>
        </div>
        <p style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
          Authentic previous year question papers, recurring question patterns, and solved placement papers for {currentCompany?.name}.
        </p>
      </div>

      {/* Year Filter Tabs & Controls */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: 12
      }}>
        {/* Years Tabs */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {years.map((y) => (
            <button
              key={y.id}
              type="button"
              onClick={() => setSelectedYear(y.id)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: selectedYear === y.id ? 'var(--color-primary)' : 'var(--color-surface)',
                color: selectedYear === y.id ? '#ffffff' : 'var(--color-text-secondary)',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: selectedYear === y.id ? '0 1px 3px rgba(37, 99, 235, 0.3)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              {y.label}
            </button>
          ))}
        </div>

        {/* Round Filter & Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <select
            value={selectedRound}
            onChange={(e) => setSelectedRound(e.target.value)}
            style={{
              padding: '7px 12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              fontSize: 12,
              outline: 'none'
            }}
          >
            {rounds.map((r) => (
              <option key={r.id} value={r.id}>{r.label}</option>
            ))}
          </select>

          <div style={{ position: 'relative', width: 220 }}>
            <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Search PYQ sets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '7px 12px 7px 30px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                fontSize: 12,
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      {loading ? (
        <Card style={{ padding: 48, textAlign: 'center', color: 'var(--color-text-muted)' }}>
          Loading previous year papers for {currentCompany?.name}...
        </Card>
      ) : filteredPYQs.length === 0 ? (
        <Card style={{ padding: 48 }}>
          <EmptyState
            icon={History}
            title={
              searchQuery || selectedYear !== 'all'
                ? 'No matching past year papers found'
                : `No Previous Year Question Papers uploaded yet`
            }
            message={
              searchQuery || selectedYear !== 'all'
                ? 'Try selecting a different year or round filter.'
                : `Verified ${currentCompany?.name} placement papers (2021-2024) will appear here once ingested via the Admin Console.`
            }
            actionText={selectedYear !== 'all' || searchQuery ? 'Reset Filters' : undefined}
            onAction={() => {
              setSelectedYear('all')
              setSelectedRound('all')
              setSearchQuery('')
            }}
          />
        </Card>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
          {filteredPYQs.map((paper) => (
            <Card
              key={paper.id}
              style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 'var(--radius-lg)'
              }}
              className="hover-elevate"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: 'rgba(37, 99, 235, 0.08)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <History size={18} />
                  </div>
                  <Badge variant="primary">PYQ Paper</Badge>
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4 }}>
                  {paper.title}
                </h3>

                {paper.description && (
                  <p style={{ fontSize: 12.5, color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: 14 }}>
                    {paper.description}
                  </p>
                )}
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  borderTop: '1px solid var(--color-border)',
                  fontSize: 12,
                  color: 'var(--color-text-muted)',
                  marginBottom: 12
                }}>
                  <span><Clock size={12} style={{ display: 'inline', marginRight: 4 }} /> {paper.duration_minutes || 60} Mins</span>
                  <span>{paper.total_marks || 100} Marks</span>
                </div>

                <Button
                  variant="primary"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                >
                  <BookOpen size={14} /> Practice Paper
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
