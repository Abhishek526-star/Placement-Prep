// src/pages/TechnicalMCQPage.jsx
// Dedicated Accenture Technical MCQ Assessment with 5 core sub-sections:
// 1. CS Fundamental
// 2. Computer Network
// 3. MS Office
// 4. Network Security & Cloud
// 5. Pseudo Code

import { useState, useEffect, useMemo } from 'react'
import {
  Code, Cpu, Layers, CheckSquare, Search,
  ChevronDown, ChevronUp, Bookmark, CheckCircle2,
  FileCode, Cloud, HardDrive, Sparkles, HelpCircle, BookmarkCheck,
  Network, FileSpreadsheet, ShieldCheck, XCircle, Check
} from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import { useProgressStore } from '../stores/useProgressStore'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import EmptyState from '../components/common/EmptyState'
import { fetchCompanyQuestions } from '../services/questionService'
import { ACCENTURE_TECHNICAL_MCQS } from '../config/accentureTechnicalMCQs'

export default function TechnicalMCQPage() {
  const { currentCompany } = useCompany()
  const slug = currentCompany?.slug || 'accenture'
  const { isBookmarked, toggleBookmark, markQuestionSolved, recordMistake, companyProgress } = useProgressStore()

  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [dbQuestions, setDbQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState(null)
  const [selectedAnswers, setSelectedAnswers] = useState({})

  // 5 Dedicated Sub-Sections requested for Accenture Technical MCQ
  const tabs = useMemo(() => [
    { id: 'all', label: 'All Technical MCQs', icon: Layers, color: '#3b82f6', badgeText: 'Complete Round' },
    { id: 'cs-fundamentals', label: 'CS Fundamental', icon: Cpu, color: '#8b5cf6', badgeText: 'OS • DBMS • OOPs' },
    { id: 'computer-network', label: 'Computer Network', icon: Network, color: '#0ea5e9', badgeText: 'OSI • TCP/IP' },
    { id: 'ms-office', label: 'MS Office', icon: FileSpreadsheet, color: '#10b981', badgeText: 'Excel • Word • PPT' },
    { id: 'network-security-cloud', label: 'Network Security & Cloud', icon: ShieldCheck, color: '#f59e0b', badgeText: 'Cloud • Cryptography' },
    { id: 'pseudo-code', label: 'Pseudo Code', icon: FileCode, color: '#ec4899', badgeText: 'Signature Tracing' },
  ], [])

  // Fetch Supabase DB questions on mount
  useEffect(() => {
    let isMounted = true
    async function loadQuestions() {
      if (!currentCompany?.id) {
        setDbQuestions([])
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const { data, error } = await fetchCompanyQuestions({
          companyId: currentCompany.id,
          questionType: 'mcq',
        })
        if (!error && isMounted) {
          setDbQuestions(data || [])
        }
      } catch (err) {
        console.error('[TechnicalMCQPage] Fetch error:', err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadQuestions()
    return () => {
      isMounted = false
    }
  }, [currentCompany?.id])

  // Merge DB questions with Curated Question Bank for Accenture (ensures rich offline + seed coverage)
  const allQuestions = useMemo(() => {
    const curated = slug === 'accenture' ? ACCENTURE_TECHNICAL_MCQS : []
    const existingTitles = new Set(dbQuestions.map((q) => q.title?.toLowerCase()))
    const uniqueCurated = curated.filter((q) => !existingTitles.has(q.title?.toLowerCase()))
    return [...dbQuestions, ...uniqueCurated]
  }, [dbQuestions, slug])

  // Count helper for tabs
  const getTabCount = (tabId) => {
    if (tabId === 'all') return allQuestions.length
    return allQuestions.filter((q) => {
      const sub = q.subSection || q.category || ''
      return sub.toLowerCase().includes(tabId.replace(/-/g, ' ')) ||
             sub.toLowerCase().includes(tabId) ||
             (tabId === 'cs-fundamentals' && (sub.toLowerCase().includes('cs') || sub.toLowerCase().includes('fundamental'))) ||
             (tabId === 'computer-network' && (sub.toLowerCase().includes('network') && !sub.toLowerCase().includes('security'))) ||
             (tabId === 'ms-office' && (sub.toLowerCase().includes('office') || sub.toLowerCase().includes('excel') || sub.toLowerCase().includes('word') || sub.toLowerCase().includes('mso'))) ||
             (tabId === 'network-security-cloud' && (sub.toLowerCase().includes('cloud') || sub.toLowerCase().includes('security'))) ||
             (tabId === 'pseudo-code' && (sub.toLowerCase().includes('pseudo') || sub.toLowerCase().includes('code')))
    }).length
  }

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const handleSelectOption = (questionId, optionKeyOrId) => {
    // If already answered, do not change
    if (selectedAnswers[questionId]) return

    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionKeyOrId }))
    const targetQ = allQuestions.find((q) => q.id === questionId)
    if (!targetQ) return

    // Resolve correctness across DB options and curated options format
    let isCorrect = false
    let chosenText = ''

    if (targetQ.options && Array.isArray(targetQ.options)) {
      // Curated format
      const opt = targetQ.options.find((o) => (o.id || o.key) === optionKeyOrId)
      chosenText = opt?.text || ''
      isCorrect = (opt?.key === targetQ.correct_option) || opt?.is_correct === true
    } else if (targetQ.question_options && Array.isArray(targetQ.question_options)) {
      // Supabase DB format
      const opt = targetQ.question_options.find((o) => o.id === optionKeyOrId)
      chosenText = opt?.option_text || ''
      isCorrect = opt?.is_correct === true
    }

    if (isCorrect) {
      markQuestionSolved(slug, 'technical', questionId, 10)
    } else {
      recordMistake(slug, {
        questionTitle: targetQ.title,
        wrongAnswer: chosenText,
        section: `Technical MCQ - ${targetQ.category || 'General'}`
      })
    }
  }

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const sub = (q.subSection || q.category || '').toLowerCase()
      const matchesTab =
        activeTab === 'all' ||
        sub.includes(activeTab.replace(/-/g, ' ')) ||
        sub.includes(activeTab) ||
        (activeTab === 'cs-fundamentals' && (sub.includes('cs') || sub.includes('os') || sub.includes('dbms') || sub.includes('oop'))) ||
        (activeTab === 'computer-network' && (sub.includes('network') && !sub.includes('security'))) ||
        (activeTab === 'ms-office' && (sub.includes('office') || sub.includes('excel') || sub.includes('word') || sub.includes('mso'))) ||
        (activeTab === 'network-security-cloud' && (sub.includes('cloud') || sub.includes('security') || sub.includes('threat'))) ||
        (activeTab === 'pseudo-code' && (sub.includes('pseudo') || sub.includes('code') || sub.includes('algorithm')))

      const matchesSearch =
        !searchQuery.trim() ||
        q.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.prompt_markdown?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topic?.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesTab && matchesSearch
    })
  }, [allQuestions, activeTab, searchQuery])

  // Current company technical track solved metrics
  const compStats = companyProgress?.[slug] || {}
  const technicalSolved = compStats.trackProgress?.technical?.solved || 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              padding: '2px 8px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--color-primary)'
            }}>
              Round 1 • Mandatory Elimination
            </span>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
              • {allQuestions.length} Practice Questions Available
            </span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 12px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--color-text-secondary)'
          }}>
            <CheckCircle2 size={14} color="#10b981" />
            <span>Solved in Track: <strong>{technicalSolved}</strong></span>
          </div>
        </div>

        <h1 style={{ fontSize: 24, fontWeight: 800, color: 'var(--color-text-primary)', margin: '0 0 6px 0' }}>
          {currentCompany?.name} — Technical MCQ Assessment
        </h1>
        <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0, maxWidth: 850, lineHeight: 1.5 }}>
          Comprehensive curriculum tailored for Accenture: Master <strong>CS Fundamental</strong>, <strong>Computer Network</strong>, <strong>MS Office</strong>, <strong>Network Security & Cloud</strong>, and Accenture’s signature <strong>Pseudo Code</strong> logic tracing.
        </p>
      </div>

      {/* Sub-Section Filter Tabs & Search */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: 14
      }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {tabs.map((t) => {
            const Icon = t.icon
            const isActive = activeTab === t.id
            const count = getTabCount(t.id)

            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: isActive ? '1px solid transparent' : '1px solid var(--color-border)',
                  background: isActive ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: isActive ? '#ffffff' : 'var(--color-text-primary)',
                  fontSize: 12.5,
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 2px 6px rgba(37, 99, 235, 0.25)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <Icon size={14} style={{ color: isActive ? '#ffffff' : t.color }} />
                <span>{t.label}</span>
                <span style={{
                  fontSize: 11,
                  padding: '1px 6px',
                  borderRadius: 10,
                  background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--color-bg)',
                  color: isActive ? '#ffffff' : 'var(--color-text-muted)',
                  fontWeight: 700
                }}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Search Input Bar */}
        <div style={{ position: 'relative', maxWidth: 360 }}>
          <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
          <input
            type="text"
            placeholder="Search questions by keyword, topic, or code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px 8px 32px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              fontSize: 12.5,
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Content Section */}
      {loading ? (
        <Card style={{ padding: 48, textAlign: 'center', color: 'var(--color-text-muted)' }}>
          Loading technical questions for {currentCompany?.name}...
        </Card>
      ) : filteredQuestions.length === 0 ? (
        <Card style={{ padding: 48 }}>
          <EmptyState
            icon={CheckSquare}
            title={searchQuery ? 'No matching questions found' : `No questions in ${tabs.find((t) => t.id === activeTab)?.label} yet`}
            message={
              searchQuery
                ? `No questions matched "${searchQuery}". Try a different keyword.`
                : `Questions for this sub-section will appear here once ingested.`
            }
            actionText={searchQuery ? 'Clear Filter' : undefined}
            onAction={searchQuery ? () => setSearchQuery('') : undefined}
          />
        </Card>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {filteredQuestions.map((q, qIndex) => {
            const isExpanded = expandedId === q.id
            const bookmarked = isBookmarked(slug, q.id)
            const selectedOpt = selectedAnswers[q.id]
            const options = q.options || q.question_options || []

            return (
              <Card key={q.id} style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, marginBottom: 12 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                      <Badge variant="primary">{q.category || 'Technical MCQ'}</Badge>
                      {q.topic && (
                        <span style={{
                          fontSize: 11,
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-pill)',
                          background: 'var(--color-bg)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-secondary)',
                          fontWeight: 600
                        }}>
                          {q.topic}
                        </span>
                      )}
                      <Badge variant={q.difficulty === 'hard' ? 'danger' : q.difficulty === 'medium' ? 'warning' : 'success'}>
                        {q.difficulty || 'medium'}
                      </Badge>
                      <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                        Question #{qIndex + 1} • +10 XP
                      </span>
                    </div>

                    <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                      {q.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    title={bookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                    onClick={() => toggleBookmark(slug, { id: q.id, title: q.title, link: `/${slug}/technical-mcq` })}
                    style={{
                      border: 'none',
                      background: 'none',
                      color: bookmarked ? 'var(--color-primary)' : 'var(--color-text-muted)',
                      cursor: 'pointer',
                      padding: 4
                    }}
                  >
                    {bookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                  </button>
                </div>

                {/* Question Prompt / Code Block */}
                {(q.prompt_markdown || q.description) && (
                  <div style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    fontSize: 13,
                    lineHeight: 1.6,
                    marginBottom: 14,
                    color: 'var(--color-text-primary)'
                  }}>
                    {/* Render prompt cleanly */}
                    <div style={{ whiteSpace: 'pre-wrap', fontFamily: (q.prompt_markdown || q.description).includes('```') ? 'var(--font-mono)' : 'inherit' }}>
                      {q.prompt_markdown || q.description}
                    </div>
                  </div>
                )}

                {/* Options List with Interactive Evaluation */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
                  {options.map((opt) => {
                    const optId = opt.id || opt.key
                    const isSelected = selectedOpt === optId
                    const isCorrect = (opt.key && opt.key === q.correct_option) || opt.is_correct === true
                    const hasAnswered = !!selectedOpt

                    let borderColor = 'var(--color-border)'
                    let bgColor = 'var(--color-surface)'
                    let textColor = 'var(--color-text-primary)'

                    if (hasAnswered) {
                      if (isSelected && isCorrect) {
                        borderColor = '#10b981'
                        bgColor = 'rgba(16, 185, 129, 0.08)'
                      } else if (isSelected && !isCorrect) {
                        borderColor = '#ef4444'
                        bgColor = 'rgba(239, 68, 68, 0.08)'
                      } else if (isCorrect) {
                        borderColor = 'rgba(16, 185, 129, 0.5)'
                        bgColor = 'rgba(16, 185, 129, 0.04)'
                      }
                    } else if (isSelected) {
                      borderColor = 'var(--color-primary)'
                      bgColor = 'rgba(37, 99, 235, 0.08)'
                    }

                    return (
                      <button
                        key={optId}
                        type="button"
                        onClick={() => handleSelectOption(q.id, optId)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-md)',
                          border: `1px solid ${borderColor}`,
                          background: bgColor,
                          color: textColor,
                          fontSize: 13,
                          cursor: hasAnswered ? 'default' : 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          border: `2px solid ${hasAnswered && isCorrect ? '#10b981' : isSelected ? 'var(--color-primary)' : 'var(--color-border)'}`,
                          background: hasAnswered && isCorrect ? '#10b981' : '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: 11,
                          fontWeight: 700,
                          color: hasAnswered && isCorrect ? '#ffffff' : 'var(--color-text-secondary)'
                        }}>
                          {opt.key || (hasAnswered && isCorrect ? <Check size={12} strokeWidth={3} /> : null)}
                        </div>
                        <span style={{ flex: 1 }}>{opt.text || opt.option_text}</span>
                        {hasAnswered && isSelected && isCorrect && (
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#10b981' }}>✓ Correct (+10 XP)</span>
                        )}
                        {hasAnswered && isSelected && !isCorrect && (
                          <span style={{ fontSize: 11, fontWeight: 700, color: '#ef4444' }}>✕ Incorrect</span>
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Explanation Reveal */}
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 10 }}>
                  <button
                    type="button"
                    onClick={() => toggleExpand(q.id)}
                    style={{
                      border: 'none',
                      background: 'none',
                      color: 'var(--color-primary)',
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      padding: 0
                    }}
                  >
                    <span>{isExpanded ? 'Hide Solution & Step-by-Step Logic Trace' : 'View Solution & Explanation'}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {isExpanded && (
                    <div style={{
                      marginTop: 10,
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      fontSize: 12.5,
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-wrap'
                    }}>
                      {q.explanation_markdown || q.explanation || 'Detailed step-by-step logic trace will be displayed here.'}
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
