// src/components/common/PdfViewerModal.jsx
// In-page responsive document viewer for PDFs, cheat sheets, and study materials

import { useEffect, useRef, useState } from 'react'
import { X, Download, Maximize2, Minimize2, FileText, ExternalLink, Loader2 } from 'lucide-react'
import Button from './Button'
import Badge from './Badge'
import { formatFileSize } from '../../services/studyMaterialService'

export default function PdfViewerModal({
  isOpen,
  onClose,
  material, // { title, file_url, file_size_bytes, material_type, description }
}) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const modalRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose?.()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      setIsLoading(true)
    } else {
      document.body.style.overflow = ''
      setIsFullscreen(false)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !material) return null

  const isPdf = material.file_url?.toLowerCase().endsWith('.pdf') || material.material_type === 'pdf'

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isFullscreen ? 0 : 20,
        transition: 'all 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: isFullscreen ? '100vw' : '92vw',
          maxWidth: isFullscreen ? '100vw' : 1100,
          height: isFullscreen ? '100vh' : '90vh',
          backgroundColor: 'var(--color-surface)',
          borderRadius: isFullscreen ? 0 : 'var(--radius-lg)',
          border: isFullscreen ? 'none' : '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeIn 0.15s ease',
        }}
      >
        {/* Top Control Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            borderBottom: '1px solid var(--color-border)',
            background: 'var(--color-surface)',
            flexShrink: 0,
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, overflow: 'hidden' }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'rgba(239, 68, 68, 0.1)',
                color: '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText size={18} />
            </div>

            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    margin: 0,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {material.title}
                </h3>
                {material.material_type && (
                  <Badge variant="primary" style={{ textTransform: 'uppercase', fontSize: 10 }}>
                    {material.material_type}
                  </Badge>
                )}
              </div>
              <span style={{ fontSize: 11.5, color: 'var(--color-text-muted)' }}>
                {material.file_size_bytes ? formatFileSize(material.file_size_bytes) : 'Document Preview'}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {/* Download Link */}
            {material.file_url && (
              <a
                href={material.file_url}
                download={material.title || 'document.pdf'}
                title="Download Document"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="outline" size="sm" icon={Download}>
                  Download
                </Button>
              </a>
            )}

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '6px 8px',
                color: 'var(--color-text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              title="Close (Esc)"
              style={{
                background: 'none',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                padding: 6,
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* In-Page Document Viewer Frame */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            width: '100%',
            height: '100%',
            background: 'var(--color-bg)',
          }}
        >
          {isLoading && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                color: 'var(--color-text-muted)',
                zIndex: 1,
              }}
            >
              <Loader2 size={32} className="animate-spin" color="var(--color-primary)" />
              <span style={{ fontSize: 13 }}>Loading document in-page...</span>
            </div>
          )}

          {material.file_url ? (
            <iframe
              src={`${material.file_url}#toolbar=1&navpanes=0`}
              title={material.title}
              onLoad={() => setIsLoading(false)}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
              }}
            />
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: 'var(--color-text-muted)',
                padding: 24,
                textAlign: 'center',
              }}
            >
              <FileText size={40} style={{ marginBottom: 12, opacity: 0.5 }} />
              <p>No valid document link available to preview.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
