// src/pages/StudyMaterialsPage.jsx
import { useState, useEffect } from 'react'
import {
  FileText, Download, BookOpen, Layers, Search,
  ExternalLink, FileCheck, Video, Link2, Sparkles
} from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import EmptyState from '../components/common/EmptyState'
import PdfViewerModal from '../components/common/PdfViewerModal'
import { fetchStudyMaterials, formatFileSize } from '../services/studyMaterialService'

export default function StudyMaterialsPage() {
  const { currentCompany } = useCompany()
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [materials, setMaterials] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewingMaterial, setViewingMaterial] = useState(null)

  const tabs = [
    { id: 'all', label: 'All Resources' },
    { id: 'notes', label: 'Study Notes' },
    { id: 'cheatsheet', label: 'Cheat Sheets' },
    { id: 'pdf', label: 'Previous Papers (PDF)' },
    { id: 'video', label: 'Video Tutorials' },
  ]

  useEffect(() => {
    let isMounted = true
    async function loadMaterials() {
      if (!currentCompany?.id) {
        setMaterials([])
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const { data, error } = await fetchStudyMaterials({
          companyId: currentCompany.id,
          materialType: activeTab,
        })
        if (!error && isMounted) {
          setMaterials(data || [])
        }
      } catch (err) {
        console.error('[StudyMaterialsPage] Fetch error:', err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadMaterials()
    return () => {
      isMounted = false
    }
  }, [currentCompany?.id, activeTab])

  const filteredMaterials = materials.filter((m) => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return (
      m.title?.toLowerCase().includes(q) ||
      m.description?.toLowerCase().includes(q) ||
      m.company_tracks?.name?.toLowerCase().includes(q)
    )
  })

  const getCategoryMeta = (type) => {
    switch (type) {
      case 'pdf':
        return {
          icon: <FileText size={20} color="#ef4444" />,
          badgeVariant: 'danger',
          label: 'Past Paper (PDF)',
          bg: 'rgba(239, 68, 68, 0.08)'
        }
      case 'cheatsheet':
        return {
          icon: <FileCheck size={20} color="#f59e0b" />,
          badgeVariant: 'warning',
          label: 'Cheat Sheet',
          bg: 'rgba(245, 158, 11, 0.08)'
        }
      case 'video':
        return {
          icon: <Video size={20} color="#8b5cf6" />,
          badgeVariant: 'default',
          label: 'Video Tutorial',
          bg: 'rgba(139, 92, 246, 0.08)'
        }
      case 'link':
        return {
          icon: <Link2 size={20} color="#06b6d4" />,
          badgeVariant: 'default',
          label: 'Web Reference',
          bg: 'rgba(6, 182, 212, 0.08)'
        }
      case 'notes':
      default:
        return {
          icon: <BookOpen size={20} color="#2563eb" />,
          badgeVariant: 'primary',
          label: 'Lecture Notes',
          bg: 'rgba(37, 99, 235, 0.08)'
        }
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Page Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {currentCompany?.name} — Study Material & Resources
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
            Cloud Storage
          </span>
        </div>
        <p style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
          Curated reference notes, formulas, interview cheat sheets, and past placement papers for {currentCompany?.name}.
        </p>
      </div>

      {/* Tabs and Search Controls */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        borderBottom: '1px solid var(--color-border)',
        paddingBottom: 12
      }}>
        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: activeTab === t.id ? 'var(--color-primary)' : 'var(--color-surface)',
                color: activeTab === t.id ? '#ffffff' : 'var(--color-text-secondary)',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: activeTab === t.id ? '0 1px 3px rgba(37, 99, 235, 0.3)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', width: 260 }}>
          <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
          <input
            type="text"
            placeholder="Search notes or formulas..."
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
          Loading resources for {currentCompany?.name}...
        </Card>
      ) : filteredMaterials.length === 0 ? (
        <Card style={{ padding: 48 }}>
          <EmptyState
            icon={FileText}
            title={searchQuery ? 'No matching resources found' : `No study materials uploaded yet`}
            message={
              searchQuery
                ? `No materials matched "${searchQuery}". Try a different keyword.`
                : `Study materials and past papers for ${currentCompany?.name} will appear here once uploaded by an administrator.`
            }
            actionText={searchQuery ? 'Clear Search' : undefined}
            onAction={searchQuery ? () => setSearchQuery('') : undefined}
          />
        </Card>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 16
        }}>
          {filteredMaterials.map((mat) => {
            const meta = getCategoryMeta(mat.material_type)
            return (
              <Card
                key={mat.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '18px',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  cursor: 'pointer'
                }}
                className="hover-elevate"
                onClick={() => {
                  if (mat.file_url) setViewingMaterial(mat)
                }}
              >
                <div>
                  {/* Card Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 'var(--radius-md)',
                      background: meta.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {meta.icon}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      {mat.company_tracks?.name && (
                        <span style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-bg)',
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-pill)',
                          border: '1px solid var(--color-border)'
                        }}>
                          {mat.company_tracks.name}
                        </span>
                      )}
                      <Badge variant={meta.badgeVariant}>
                        {meta.label}
                      </Badge>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: 6,
                    lineHeight: 1.3
                  }}>
                    {mat.title}
                  </h3>

                  {mat.description && (
                    <p style={{
                      fontSize: 12,
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.5,
                      marginBottom: 14,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {mat.description}
                    </p>
                  )}
                </div>

                {/* Card Footer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  borderTop: '1px solid var(--color-border)',
                  marginTop: 8
                }}>
                  <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                    {mat.file_size_bytes ? formatFileSize(mat.file_size_bytes) : 'Document'}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setViewingMaterial(mat)
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <span>Read on Page</span>
                    <BookOpen size={14} />
                  </button>
                </div>
              </Card>
            )
          })}
        </div>
      )}

      {/* In-Page PDF Viewer Modal */}
      <PdfViewerModal
        isOpen={Boolean(viewingMaterial)}
        material={viewingMaterial}
        onClose={() => setViewingMaterial(null)}
      />
    </div>
  )
}
