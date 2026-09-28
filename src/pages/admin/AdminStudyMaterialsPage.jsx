// src/pages/admin/AdminStudyMaterialsPage.jsx
import { useState, useEffect } from 'react'
import {
  FileText, Plus, Search, Filter, Trash2, ExternalLink,
  Download, Eye, CheckCircle2, AlertTriangle, Layers, Building2,
  FileCheck, BookOpen, Video, Link as LinkIcon
} from 'lucide-react'
import Card from '../../components/common/Card'
import Button from '../../components/common/Button'
import Badge from '../../components/common/Badge'
import EmptyState from '../../components/common/EmptyState'
import MaterialUploadModal from '../../features/admin/MaterialUploadModal'
import PdfViewerModal from '../../components/common/PdfViewerModal'
import {
  fetchAdminStudyMaterials,
  deleteStudyMaterial,
  togglePublishStudyMaterial,
  formatFileSize
} from '../../services/studyMaterialService'
import { fetchCompanies, fetchCompanyTracks } from '../../services/companyService'

export default function AdminStudyMaterialsPage() {
  const [materials, setMaterials] = useState([])
  const [companies, setCompanies] = useState([])
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)

  const [selectedCompanyId, setSelectedCompanyId] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  const [viewingMaterial, setViewingMaterial] = useState(null)
  const [deletingId, setDeletingId] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  const loadData = async () => {
    setLoading(true)
    try {
      const [compRes, matRes] = await Promise.all([
        fetchCompanies(),
        fetchAdminStudyMaterials({ companyId: selectedCompanyId || undefined })
      ])
      setCompanies(compRes.data || [])
      setMaterials(matRes.data || [])

      if (compRes.data && compRes.data.length > 0) {
        const trackRes = await fetchCompanyTracks(selectedCompanyId || compRes.data[0].id)
        setTracks(trackRes.data || [])
      }
    } catch (err) {
      console.error('[AdminStudyMaterials] Load error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [selectedCompanyId])

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  const handleDelete = async (id, fileUrl, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return
    setDeletingId(id)
    try {
      const { error } = await deleteStudyMaterial(id, fileUrl)
      if (error) throw new Error(error)
      setMaterials((prev) => prev.filter((m) => m.id !== id))
      showToast('Material deleted successfully.')
    } catch (err) {
      alert(`Delete failed: ${err.message}`)
    } finally {
      setDeletingId(null)
    }
  }

  const handleTogglePublish = async (material) => {
    const nextState = !material.is_published
    try {
      const { error } = await togglePublishStudyMaterial(material.id, nextState)
      if (error) throw new Error(error)
      setMaterials((prev) =>
        prev.map((m) => (m.id === material.id ? { ...m, is_published: nextState } : m))
      )
      showToast(nextState ? 'Material published' : 'Material set to draft')
    } catch (err) {
      alert(`Update failed: ${err.message}`)
    }
  }

  // Filtered materials
  const filteredMaterials = materials.filter((m) => {
    const matchesSearch =
      !searchQuery.trim() ||
      m.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === 'all' || m.material_type === selectedType
    return matchesSearch && matchesType
  })

  // Stats calculation
  const totalCount = materials.length
  const notesCount = materials.filter((m) => m.material_type === 'notes').length
  const cheatCount = materials.filter((m) => m.material_type === 'cheatsheet').length
  const pdfCount = materials.filter((m) => m.material_type === 'pdf').length
  const totalBytes = materials.reduce((acc, curr) => acc + (curr.file_size_bytes || 0), 0)

  const getTypeIcon = (type) => {
    switch (type) {
      case 'pdf':
        return <FileText size={15} style={{ color: '#ef4444' }} />
      case 'cheatsheet':
        return <FileCheck size={15} style={{ color: '#f59e0b' }} />
      case 'video':
        return <Video size={15} style={{ color: '#8b5cf6' }} />
      case 'link':
        return <LinkIcon size={15} style={{ color: '#06b6d4' }} />
      case 'notes':
      default:
        return <BookOpen size={15} style={{ color: '#2563eb' }} />
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Toast Alert */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: 24,
          right: 24,
          zIndex: 9999,
          background: 'var(--color-surface)',
          border: '1px solid var(--color-success)',
          color: 'var(--color-success)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 18px',
          boxShadow: 'var(--shadow-dropdown)',
          fontSize: 13,
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}>
          <CheckCircle2 size={16} />
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            Study Materials & Cloud Storage
          </h1>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 4 }}>
            Manage curated reference notes, formulas, cheat sheets, and past papers backed by Supabase Storage.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => setIsUploadOpen(true)}
          style={{ display: 'flex', alignItems: 'center', gap: 6 }}
        >
          <Plus size={16} /> Upload Material
        </Button>
      </div>

      {/* Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
        <Card style={{ padding: '16px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
            Total Resources
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)', marginTop: 4 }}>
            {totalCount}
          </div>
        </Card>

        <Card style={{ padding: '16px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
            Cheat Sheets
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#f59e0b', marginTop: 4 }}>
            {cheatCount}
          </div>
        </Card>

        <Card style={{ padding: '16px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
            Study Notes
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#2563eb', marginTop: 4 }}>
            {notesCount}
          </div>
        </Card>

        <Card style={{ padding: '16px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
            Past Papers (PDF)
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#ef4444', marginTop: 4 }}>
            {pdfCount}
          </div>
        </Card>

        <Card style={{ padding: '16px' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
            Storage Footprint
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)', marginTop: 4 }}>
            {formatFileSize(totalBytes)}
          </div>
        </Card>
      </div>

      {/* Filter and Search Bar */}
      <Card style={{ padding: '14px 18px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 260 }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <Search size={15} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                placeholder="Search materials by title or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px 8px 32px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg)',
                  color: 'var(--color-text-primary)',
                  fontSize: 13,
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Company Filter */}
            <select
              value={selectedCompanyId}
              onChange={(e) => setSelectedCompanyId(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                fontSize: 13,
                outline: 'none'
              }}
            >
              <option value="">All Companies</option>
              {companies.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                fontSize: 13,
                outline: 'none'
              }}
            >
              <option value="all">All Categories</option>
              <option value="notes">Study Notes</option>
              <option value="cheatsheet">Cheat Sheets</option>
              <option value="pdf">Past Papers (PDF)</option>
              <option value="video">Video Tutorials</option>
              <option value="link">Web References</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Materials List / Table */}
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 48, textAlign: 'center', color: 'var(--color-text-muted)' }}>
            Loading study materials from database...
          </div>
        ) : filteredMaterials.length === 0 ? (
          <div style={{ padding: 48 }}>
            <EmptyState
              icon={FileText}
              title="No study materials found"
              message={
                searchQuery || selectedType !== 'all' || selectedCompanyId
                  ? 'No materials match the selected filters.'
                  : 'No study materials have been uploaded yet. Maintain Zero-Seed state or upload your first resource.'
              }
              actionText="Upload Material"
              onAction={() => setIsUploadOpen(true)}
            />
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
                  <th style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Resource</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Company / Track</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Category</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>File Size</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Status</th>
                  <th style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--color-text-secondary)', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMaterials.map((m) => (
                  <tr key={m.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '12px 16px', maxWidth: 300 }}>
                      <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 2 }}>
                        {m.title}
                      </div>
                      {m.description && (
                        <div style={{ fontSize: 11, color: 'var(--color-text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {m.description}
                        </div>
                      )}
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>
                          {m.companies?.name || 'General'}
                        </span>
                        {m.company_tracks?.name && (
                          <span style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                            {m.company_tracks.name}
                          </span>
                        )}
                      </div>
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-pill)',
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        fontSize: 12,
                        textTransform: 'capitalize'
                      }}>
                        {getTypeIcon(m.material_type)}
                        {m.material_type}
                      </span>
                    </td>

                    <td style={{ padding: '12px 16px', color: 'var(--color-text-secondary)', fontVariantNumeric: 'tabular-nums' }}>
                      {formatFileSize(m.file_size_bytes)}
                    </td>

                    <td style={{ padding: '12px 16px' }}>
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(m)}
                        style={{
                          border: 'none',
                          background: 'none',
                          cursor: 'pointer',
                          padding: 0
                        }}
                      >
                        <Badge variant={m.is_published ? 'success' : 'default'}>
                          {m.is_published ? 'Published' : 'Draft'}
                        </Badge>
                      </button>
                    </td>

                    <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: 6 }}>
                        {m.file_url && (
                          <button
                            type="button"
                            onClick={() => setViewingMaterial(m)}
                            title="Preview Document in Page"
                            style={{
                              padding: '6px 8px',
                              borderRadius: 'var(--radius-md)',
                              border: '1px solid var(--color-border)',
                              background: 'var(--color-surface)',
                              color: 'var(--color-primary)',
                              display: 'inline-flex',
                              alignItems: 'center',
                              cursor: 'pointer'
                            }}
                          >
                            <Eye size={14} />
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => handleDelete(m.id, m.file_url, m.title)}
                          disabled={deletingId === m.id}
                          title="Delete Material"
                          style={{
                            padding: '6px 8px',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)',
                            background: 'var(--color-surface)',
                            color: 'var(--color-danger)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center'
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Upload Modal */}
      <MaterialUploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        companies={companies}
        tracks={tracks}
        defaultCompanyId={selectedCompanyId}
        onSuccess={() => {
          showToast('Material added successfully!')
          loadData()
        }}
      />

      {/* In-Page PDF Viewer Modal */}
      <PdfViewerModal
        isOpen={Boolean(viewingMaterial)}
        material={viewingMaterial}
        onClose={() => setViewingMaterial(null)}
      />
    </div>
  )
}
