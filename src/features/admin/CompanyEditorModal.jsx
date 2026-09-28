// src/features/admin/CompanyEditorModal.jsx
import { useState, useEffect } from 'react'
import { Building2, Plus, Trash2, Check, Palette } from 'lucide-react'
import Modal from '../../components/common/Modal'
import Button from '../../components/common/Button'
import TextInput from '../../components/forms/TextInput'
import { supabase, IS_SUPABASE_CONFIGURED } from '../../lib/supabase'
import { deleteCompany, restoreCompanySlug } from '../../services/companyService'
import toast from 'react-hot-toast'

export default function CompanyEditorModal({ isOpen, onClose, company, onSaved }) {
  const [name, setName] = useState('')
  const [shortName, setShortName] = useState('')
  const [slug, setSlug] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [primaryColor, setPrimaryColor] = useState('#2563eb')
  const [tracks, setTracks] = useState([])
  const [newTrackName, setNewTrackName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (company) {
      setName(company.name || '')
      setShortName(company.shortName || company.name || '')
      setSlug(company.slug || '')
      setTagline(company.tagline || '')
      setDescription(company.description || '')
      setPrimaryColor(company.branding?.primaryColor || '#2563eb')
      setTracks(company.tracks || [])
    } else {
      setName('')
      setShortName('')
      setSlug('')
      setTagline('')
      setDescription('')
      setPrimaryColor('#2563eb')
      setTracks([])
    }
  }, [company, isOpen])

  const handleAddTrack = () => {
    if (!newTrackName.trim()) return
    const trackSlug = newTrackName.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)
    setTracks((prev) => [
      ...prev,
      {
        id: `track-${Date.now()}`,
        name: newTrackName.trim(),
        slug: trackSlug,
        questionsCount: 0,
      },
    ])
    setNewTrackName('')
  }

  const handleRemoveTrack = (trackId) => {
    setTracks((prev) => prev.filter((t) => t.id !== trackId))
  }

  const handleSave = async (e) => {
    e.preventDefault()
    if (!name.trim() || !slug.trim()) {
      toast.error('Please enter Company Name and Slug.')
      return
    }

    setIsSubmitting(true)
    try {
      const updatedCompany = {
        ...company,
        name,
        shortName,
        slug,
        tagline,
        description,
        branding: {
          ...company?.branding,
          primaryColor,
          primaryHover: primaryColor,
        },
        tracks,
      }

      if (IS_SUPABASE_CONFIGURED) {
        // Upsert company record into Supabase
        const { data: compRow, error: compErr } = await supabase
          .from('companies')
          .upsert({
            slug,
            name,
            short_name: shortName,
            tagline,
            description,
            branding: { primaryColor, primaryHover: primaryColor },
            is_active: true,
          }, { onConflict: 'slug' })
          .select('id')
          .single()

        if (compErr) throw compErr

        // Sync tracks to company_tracks
        if (compRow?.id && tracks.length > 0) {
          for (const [idx, t] of tracks.entries()) {
            await supabase.from('company_tracks').upsert({
              company_id: compRow.id,
              name: t.name,
              slug: t.slug,
              track_order: idx + 1,
              is_published: true,
            }, { onConflict: 'company_id,slug' })
          }
        }
      }

      // Ensure company slug is active if previously soft-deleted
      restoreCompanySlug(slug)

      toast.success(`Company ${name} saved successfully!`)
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('company-catalog-updated', {
          detail: { company: updatedCompany }
        }))
      }
      onSaved?.(updatedCompany)
      onClose()
    } catch (err) {
      toast.error(`Error saving company: ${err.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteCompany = async () => {
    if (!company?.slug) return
    const confirmed = window.confirm(
      `Are you sure you want to delete ${company.name}? This will remove the company, its tracks, and modules from student views.`
    )
    if (!confirmed) return

    setIsDeleting(true)
    try {
      await deleteCompany(company.slug)
      toast.success(`${company.name} deleted successfully!`)
      onSaved?.()
      onClose()
    } catch (err) {
      toast.error(`Error deleting company: ${err.message}`)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={company ? `Configure ${company.name}` : 'Add New Placement Company'}
      maxWidth={680}
      footer={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div>
            {company && (
              <Button
                variant="ghost"
                icon={Trash2}
                onClick={handleDeleteCompany}
                loading={isDeleting}
                style={{ color: 'var(--color-danger)', gap: 6 }}
              >
                Delete Company
              </Button>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="primary" loading={isSubmitting} onClick={handleSave}>
              Save Configuration
            </Button>
          </div>
        </div>
      }
    >
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
          <TextInput
            label="Company Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              if (!company) setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
            }}
            placeholder="e.g. Accenture"
            required
          />
          <TextInput
            label="Short Name / Label"
            value={shortName}
            onChange={(e) => setShortName(e.target.value)}
            placeholder="Accenture"
            required
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <TextInput
            label="URL Identifier (Slug)"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="accenture"
            required
          />
          <div>
            <label className="form-label" style={{ marginBottom: 6, display: 'block' }}>
              Branding Primary Color
            </label>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                style={{
                  width: 40, height: 38, padding: 2,
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer', background: 'var(--color-surface)'
                }}
              />
              <TextInput
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                style={{ flex: 1 }}
              />
            </div>
          </div>
        </div>

        <div>
          <TextInput
            label="Tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            placeholder="e.g. Technology & Management Consulting"
          />
        </div>

        <div>
          <label className="form-label" style={{ marginBottom: 6, display: 'block' }}>
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Summary of company hiring rounds, syllabus, and prep strategy..."
            style={{
              width: '100%', minHeight: 70, padding: 10,
              borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)',
              background: 'var(--color-surface)', fontFamily: 'inherit', fontSize: 13,
              color: 'var(--color-text-primary)', boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Syllabus Tracks Manager */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            Syllabus Tracks ({tracks.length})
          </span>

          <div style={{ display: 'flex', gap: 8 }}>
            <TextInput
              value={newTrackName}
              onChange={(e) => setNewTrackName(e.target.value)}
              placeholder="e.g. Cognitive & Critical Reasoning"
              style={{ flex: 1 }}
            />
            <Button variant="secondary" size="md" icon={Plus} onClick={handleAddTrack}>
              Add Track
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 150, overflowY: 'auto' }}>
            {tracks.map((t) => (
              <div key={t.id} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '8px 12px', background: 'var(--color-surface-elevated, #f8fafc)',
                borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: 13
              }}>
                <div>
                  <strong>{t.name}</strong> <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>({t.slug})</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveTrack(t.id)}
                  style={{ background: 'none', border: 'none', color: 'var(--color-danger)', cursor: 'pointer', padding: 4 }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
    </Modal>
  )
}
