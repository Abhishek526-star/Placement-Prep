// src/pages/InterviewPage.jsx
import { useState, useEffect } from 'react'
import {
  MessageSquare, Users, Cpu, Briefcase, ChevronDown, ChevronUp,
  Bookmark, CheckCircle2, AlertCircle, Sparkles, Search,
  Award, HelpCircle, Layers, Lightbulb, BookmarkCheck
} from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import { useProgressStore } from '../stores/useProgressStore'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import EmptyState from '../components/common/EmptyState'
import { fetchCompanyQuestions } from '../services/questionService'

export default function InterviewPage() {
  const { currentCompany } = useCompany()
  const slug = currentCompany?.slug || 'accenture'
  const { isBookmarked, toggleBookmark } = useProgressStore()

  const [activeCategory, setActiveCategory] = useState('technical')
  const [searchQuery, setSearchQuery] = useState('')
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState(null)
  const [masteredIds, setMasteredIds] = useState(new Set())

  const categories = [
    { id: 'technical', label: 'Technical Rounds', icon: Cpu },
    { id: 'hr', label: 'HR & Behavioral', icon: Users },
    { id: 'managerial', label: 'Managerial & Fitment', icon: Briefcase },
  ]

  useEffect(() => {
    let isMounted = true
    async function loadQuestions() {
      if (!currentCompany?.id) {
        setQuestions([])
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const { data, error } = await fetchCompanyQuestions({
          companyId: currentCompany.id,
          questionType: 'interview',
        })
        if (!error && isMounted) {
          setQuestions(data || [])
        }
      } catch (err) {
        console.error('[InterviewPage] Fetch error:', err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadQuestions()
    return () => {
      isMounted = false
    }
  }, [currentCompany?.id])

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const toggleMastered = (id, e) => {
    e.stopPropagation()
    setMasteredIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  // Filter questions by category and search
  const filteredQuestions = questions.filter((q) => {
    const matchesCategory =
      activeCategory === 'all' ||
      !q.category ||
      q.category.toLowerCase().includes(activeCategory)
    const matchesSearch =
      !searchQuery.trim() ||
      q.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.description?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Page Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {currentCompany?.name} — Interview Experience & Prep
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
            Company Specific
          </span>
        </div>
        <p style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
          Real interview questions, expected responses, STAR technique frameworks, and tips from candidates placed at {currentCompany?.name}.
        </p>
      </div>

      {/* Category Tabs & Search Bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: 12
      }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  background: isActive ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: isActive ? '#ffffff' : 'var(--color-text-secondary)',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 1px 3px rgba(37, 99, 235, 0.3)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <Icon size={15} />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', width: 260 }}>
          <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
          <input
            type="text"
            placeholder="Search interview questions..."
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

      {/* Content Section */}
      {loading ? (
        <Card style={{ padding: 48, textAlign: 'center', color: 'var(--color-text-muted)' }}>
          Loading interview questions for {currentCompany?.name}...
        </Card>
      ) : filteredQuestions.length === 0 ? (
        <Card style={{ padding: 48 }}>
          <EmptyState
            icon={MessageSquare}
            title={
              searchQuery
                ? 'No matching interview questions'
                : `No ${categories.find((c) => c.id === activeCategory)?.label} questions yet`
            }
            message={
              searchQuery
                ? `No questions matched "${searchQuery}". Try a broader query.`
                : `Interview questions and expected answers for ${currentCompany?.name} will appear here once imported.`
            }
            actionText={searchQuery ? 'Clear Filter' : undefined}
            onAction={searchQuery ? () => setSearchQuery('') : undefined}
          />
        </Card>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {filteredQuestions.map((q) => {
            const isExpanded = expandedId === q.id
            const bookmarked = isBookmarked(slug, q.id)
            const isMastered = masteredIds.has(q.id)

            return (
              <Card
                key={q.id}
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  border: isExpanded ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  transition: 'border-color 0.15s ease'
                }}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(q.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    cursor: 'pointer',
                    background: isExpanded ? 'rgba(37, 99, 235, 0.02)' : 'var(--color-surface)',
                    userSelect: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: isMastered ? 'rgba(22, 163, 74, 0.1)' : 'rgba(37, 99, 235, 0.08)',
                      color: isMastered ? 'var(--color-success)' : 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {isMastered ? <CheckCircle2 size={18} /> : <HelpCircle size={18} />}
                    </div>

                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4 }}>
                        {q.title}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Badge variant={q.difficulty === 'hard' ? 'danger' : q.difficulty === 'medium' ? 'warning' : 'success'}>
                          {q.difficulty || 'medium'}
                        </Badge>
                        {q.frequency && (
                          <span style={{ fontSize: 11, color: 'var(--color-primary)', fontWeight: 600 }}>
                            ★ {q.frequency}
                          </span>
                        )}
                        {q.company_tracks?.name && (
                          <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                            {q.company_tracks.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Chevron */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <button
                      type="button"
                      title={isMastered ? 'Mark as Unprepared' : 'Mark as Mastered'}
                      onClick={(e) => toggleMastered(q.id, e)}
                      style={{
                        padding: '6px 10px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        background: isMastered ? 'rgba(22, 163, 74, 0.1)' : 'var(--color-surface)',
                        color: isMastered ? 'var(--color-success)' : 'var(--color-text-secondary)',
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4
                      }}
                    >
                      <CheckCircle2 size={13} />
                      {isMastered ? 'Mastered' : 'Practice'}
                    </button>

                    <button
                      type="button"
                      title="Bookmark Question"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleBookmark(slug, { id: q.id, title: q.title, link: `/${slug}/interview` })
                      }}
                      style={{
                        padding: '6px 8px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-surface)',
                        color: bookmarked ? 'var(--color-primary)' : 'var(--color-text-muted)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {bookmarked ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
                    </button>

                    <div style={{ color: 'var(--color-text-muted)', paddingLeft: 4 }}>
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                </div>

                {/* Expanded Answer Body */}
                {isExpanded && (
                  <div style={{
                    padding: '20px',
                    borderTop: '1px solid var(--color-border)',
                    background: 'var(--color-bg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                  }}>
                    {/* Problem Statement / Context */}
                    {q.description && (
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: 4 }}>
                          Context & Question Details
                        </div>
                        <div style={{ fontSize: 13.5, color: 'var(--color-text-primary)', lineHeight: 1.6 }}>
                          {q.description}
                        </div>
                      </div>
                    )}

                    {/* Best Response / Model Answer */}
                    {q.model_answer && (
                      <div style={{
                        padding: '14px 16px',
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 6 }}>
                          <Lightbulb size={14} />
                          Ideal Response Framework
                        </div>
                        <div style={{ fontSize: 13.5, color: 'var(--color-text-primary)', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                          {q.model_answer}
                        </div>
                      </div>
                    )}

                    {/* Key Talking Points */}
                    {q.key_points && Array.isArray(q.key_points) && q.key_points.length > 0 && (
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: 6 }}>
                          Key Points Evaluated by Interviewer
                        </div>
                        <ul style={{ paddingLeft: 20, margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {q.key_points.map((pt, idx) => (
                            <li key={idx}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* STAR Framework Guide for HR questions */}
                    {activeCategory === 'hr' && (
                      <div style={{
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(37, 99, 235, 0.05)',
                        border: '1px dashed var(--color-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6
                      }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Sparkles size={14} /> Recommended Structure: STAR Technique
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                          <strong>S</strong>ituation (Set context) → <strong>T</strong>ask (What was required) → <strong>A</strong>ction (Your exact initiative) → <strong>R</strong>esult (Measurable outcome).
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
