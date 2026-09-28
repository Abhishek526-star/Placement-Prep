// src/features/admin/MaterialUploadModal.jsx
import { useState, useRef } from 'react'
import {
  UploadCloud, FileText, CheckCircle2, AlertCircle, X,
  Layers, Link2, BookOpen, FileCheck, Loader2
} from 'lucide-react'
import Modal from '../../components/common/Modal'
import Button from '../../components/common/Button'
import { uploadMaterialFile, createStudyMaterial, formatFileSize } from '../../services/studyMaterialService'
import './AdminModals.css'

export default function MaterialUploadModal({
  isOpen,
  onClose,
  companies = [],
  tracks = [],
  defaultCompanyId = '',
  onSuccess,
}) {
  const [selectedCompanyId, setSelectedCompanyId] = useState(defaultCompanyId || companies[0]?.id || '')
  const [selectedTrackId, setSelectedTrackId] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [materialType, setMaterialType] = useState('notes')
  const [sourceMode, setSourceMode] = useState('file') // 'file' | 'url'
  const [directUrl, setDirectUrl] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [isPublished, setIsPublished] = useState(true)

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const fileInputRef = useRef(null)

  // Filter tracks for selected company
  const availableTracks = tracks.filter((t) => !selectedCompanyId || t.company_id === selectedCompanyId)

  const handleFileDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0])
    }
  }

  const handleFileSelect = (file) => {
    setErrorMessage(null)
    if (!file) return

    if (file.size > 50 * 1024 * 1024) {
      setErrorMessage('File size exceeds the 50MB limit.')
      return
    }

    setSelectedFile(file)
    if (!title) {
      // Auto-populate title from filename (strip extension)
      const cleanTitle = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
      setTitle(cleanTitle)
    }

    // Auto-detect material type based on extension
    if (file.name.endsWith('.pdf')) {
      setMaterialType((prev) => (prev === 'video' ? 'pdf' : prev))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)

    if (!selectedCompanyId) {
      setErrorMessage('Please select a company.')
      return
    }

    if (!title.trim()) {
      setErrorMessage('Please provide a title for the study material.')
      return
    }

    if (sourceMode === 'file' && !selectedFile) {
      setErrorMessage('Please select a file to upload.')
      return
    }

    if (sourceMode === 'url' && !directUrl.trim()) {
      setErrorMessage('Please provide a valid document or resource URL.')
      return
    }

    setLoading(true)
    try {
      let finalFileUrl = directUrl.trim()
      let finalSizeBytes = selectedFile ? selectedFile.size : null

      // Upload file to Supabase storage if in 'file' mode
      if (sourceMode === 'file' && selectedFile) {
        const uploadResult = await uploadMaterialFile(selectedFile, {
          companyId: selectedCompanyId,
          category: materialType,
        })
        finalFileUrl = uploadResult.fileUrl
        finalSizeBytes = uploadResult.fileSize
      }

      // Create database record
      await createStudyMaterial({
        companyId: selectedCompanyId,
        trackId: selectedTrackId || null,
        title: title.trim(),
        description: description.trim(),
        materialType,
        fileUrl: finalFileUrl,
        fileSizeBytes: finalSizeBytes,
        isPublished,
      })

      setSuccessMessage('Study material successfully added!')
      setTimeout(() => {
        resetForm()
        onSuccess?.()
        onClose()
      }, 1000)
    } catch (err) {
      console.error('[MaterialUploadModal] Error:', err)
      setErrorMessage(err.message || 'Failed to upload study material.')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setSelectedFile(null)
    setDirectUrl('')
    setErrorMessage(null)
    setSuccessMessage(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        if (!loading) {
          resetForm()
          onClose()
        }
      }}
      title="Upload Study Material & Resources"
      maxWidth="620px"
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {/* Error / Success Banners */}
        {errorMessage && (
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            padding: '12px 14px',
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid var(--color-danger)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-danger)',
            fontSize: 13
          }}>
            <AlertCircle size={18} style={{ flexShrink: 0, marginTop: 2 }} />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 14px',
            background: 'rgba(22, 163, 74, 0.08)',
            border: '1px solid var(--color-success)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-success)',
            fontSize: 13
          }}>
            <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Company & Track Selectors */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
              Target Company *
            </label>
            <select
              value={selectedCompanyId}
              onChange={(e) => {
                setSelectedCompanyId(e.target.value)
                setSelectedTrackId('')
              }}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '9px 12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                fontSize: 13,
                outline: 'none'
              }}
            >
              <option value="" disabled>Select Company</option>
              {companies.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
              Learning Track (Optional)
            </label>
            <select
              value={selectedTrackId}
              onChange={(e) => setSelectedTrackId(e.target.value)}
              disabled={loading || availableTracks.length === 0}
              style={{
                width: '100%',
                padding: '9px 12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                fontSize: 13,
                outline: 'none'
              }}
            >
              <option value="">General / All Tracks</option>
              {availableTracks.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Title */}
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
            Material Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Accenture Technical MCQs & Pseudocode Cheat Sheet"
            required
            disabled={loading}
            style={{
              width: '100%',
              padding: '9px 12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              fontSize: 13,
              outline: 'none'
            }}
          />
        </div>

        {/* Resource Type & Source Mode */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
              Category *
            </label>
            <select
              value={materialType}
              onChange={(e) => setMaterialType(e.target.value)}
              disabled={loading}
              style={{
                width: '100%',
                padding: '9px 12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                fontSize: 13,
                outline: 'none'
              }}
            >
              <option value="notes">Curated Study Notes</option>
              <option value="cheatsheet">Formula / Cheat Sheet</option>
              <option value="pdf">Past Papers / Solved PDF</option>
              <option value="video">Video Tutorial</option>
              <option value="link">Web Reference / Doc Link</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
              Resource Source *
            </label>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                type="button"
                onClick={() => setSourceMode('file')}
                style={{
                  flex: 1,
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-md)',
                  border: `1px solid ${sourceMode === 'file' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  background: sourceMode === 'file' ? 'rgba(37, 99, 235, 0.08)' : 'var(--color-surface)',
                  color: sourceMode === 'file' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  fontWeight: 600,
                  fontSize: 12,
                  cursor: 'pointer'
                }}
              >
                Upload File
              </button>
              <button
                type="button"
                onClick={() => setSourceMode('url')}
                style={{
                  flex: 1,
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-md)',
                  border: `1px solid ${sourceMode === 'url' ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  background: sourceMode === 'url' ? 'rgba(37, 99, 235, 0.08)' : 'var(--color-surface)',
                  color: sourceMode === 'url' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  fontWeight: 600,
                  fontSize: 12,
                  cursor: 'pointer'
                }}
              >
                Direct Link / URL
              </button>
            </div>
          </div>
        </div>

        {/* Source: File Upload Area */}
        {sourceMode === 'file' ? (
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
              File (PDF, Docx, Text, Markdown, Image — Max 50MB) *
            </label>
            <div
              className="uploader-dropzone"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
              onClick={() => fileInputRef.current?.click()}
              style={{
                padding: '24px 16px',
                borderStyle: selectedFile ? 'solid' : 'dashed',
                borderColor: selectedFile ? 'var(--color-success)' : 'var(--color-border)'
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.txt,.md,.png,.jpg,.jpeg,.webp"
                onChange={(e) => handleFileSelect(e.target.files[0])}
                style={{ display: 'none' }}
              />

              {selectedFile ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left' }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      background: 'rgba(22, 163, 74, 0.1)',
                      color: 'var(--color-success)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FileCheck size={22} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        {selectedFile.name}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                        {formatFileSize(selectedFile.size)} • Ready for Supabase Storage
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedFile(null)
                      if (fileInputRef.current) fileInputRef.current.value = ''
                    }}
                  >
                    <X size={15} />
                  </Button>
                </div>
              ) : (
                <>
                  <div className="dropzone-icon" style={{ width: 44, height: 44, marginBottom: 8 }}>
                    <UploadCloud size={24} />
                  </div>
                  <div className="dropzone-title" style={{ fontSize: 13 }}>
                    Drop your document here, or <span style={{ color: 'var(--color-primary)' }}>browse</span>
                  </div>
                  <div className="dropzone-subtitle" style={{ fontSize: 11 }}>
                    Targeting Supabase Storage bucket: <code>study-materials</code> (Max 50MB)
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
              Resource URL (Google Drive, YouTube, Docs, CDN) *
            </label>
            <div style={{ position: 'relative' }}>
              <Link2 size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input
                type="url"
                value={directUrl}
                onChange={(e) => setDirectUrl(e.target.value)}
                placeholder="https://drive.google.com/... or https://youtube.com/..."
                required
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 36px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text-primary)',
                  fontSize: 13,
                  outline: 'none'
                }}
              />
            </div>
          </div>
        )}

        {/* Description */}
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
            Description & Key Topics Covered
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief summary of syllabus points, formulas, or instructions for students..."
            rows={3}
            disabled={loading}
            style={{
              width: '100%',
              padding: '9px 12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-primary)',
              fontSize: 13,
              fontFamily: 'inherit',
              outline: 'none',
              resize: 'vertical'
            }}
          />
        </div>

        {/* Published Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input
            type="checkbox"
            id="publish-check"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            disabled={loading}
            style={{ cursor: 'pointer', width: 16, height: 16 }}
          />
          <label htmlFor="publish-check" style={{ fontSize: 13, color: 'var(--color-text-primary)', cursor: 'pointer', userSelect: 'none' }}>
            Publish immediately (visible to enrolled students)
          </label>
        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 8, paddingTop: 14, borderTop: '1px solid var(--color-border)' }}>
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            style={{ minWidth: 140 }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="spin-animate" />
                <span>Uploading...</span>
              </>
            ) : (
              'Save & Publish'
            )}
          </Button>
        </div>
      </form>
    </Modal>
  )
}
