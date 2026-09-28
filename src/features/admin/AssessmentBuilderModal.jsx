// src/features/admin/AssessmentBuilderModal.jsx
import { useState } from 'react'
import { ClipboardList, Clock, Award, CheckCircle2, ShieldAlert } from 'lucide-react'
import Modal from '../../components/common/Modal'
import Button from '../../components/common/Button'
import TextInput from '../../components/forms/TextInput'
import SelectInput from '../../components/forms/SelectInput'
import { useCompany } from '../../contexts/CompanyContext'
import { supabase, IS_SUPABASE_CONFIGURED } from '../../lib/supabase'
import toast from 'react-hot-toast'

export default function AssessmentBuilderModal({ isOpen, onClose, onCreated }) {
  const { companies } = useCompany()
  const [targetCompany, setTargetCompany] = useState('accenture')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [durationMinutes, setDurationMinutes] = useState(60)
  const [passingPercentage, setPassingPercentage] = useState(60)
  const [description, setDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleTitleChange = (val) => {
    setTitle(val)
    setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) {
      toast.error('Please enter an assessment title.')
      return
    }

    setIsSubmitting(true)
    try {
      if (IS_SUPABASE_CONFIGURED) {
        // Resolve company_id from slug
        const { data: comp } = await supabase
          .from('companies')
          .select('id')
          .eq('slug', targetCompany)
          .single()

        if (comp?.id) {
          const { error } = await supabase.from('assessments').insert({
            company_id: comp.id,
            title,
            slug: slug || `assessment-${Date.now()}`,
            description,
            duration_minutes: parseInt(durationMinutes) || 60,
            passing_score_percentage: parseInt(passingPercentage) || 60,
            is_published: true,
          })
          if (error) throw error
        }
      }

      toast.success(`Assessment "${title}" created successfully!`)
      onCreated?.({
        id: Date.now().toString(),
        title,
        slug,
        companySlug: targetCompany,
        durationMinutes,
        passingPercentage,
      })
      onClose()
      setTitle('')
      setDescription('')
    } catch (err) {
      toast.error(`Error creating assessment: ${err.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Mock Assessment Paper"
      maxWidth={620}
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" loading={isSubmitting} onClick={handleSubmit}>
            Create Assessment
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <SelectInput
            label="Target Company"
            value={targetCompany}
            onChange={(e) => setTargetCompany(e.target.value)}
            options={companies.map((c) => ({ value: c.slug, label: c.name }))}
            required
          />
          <TextInput
            label="Duration (Minutes)"
            type="number"
            min={5}
            max={300}
            value={durationMinutes}
            onChange={(e) => setDurationMinutes(e.target.value)}
            required
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
          <TextInput
            label="Assessment Title"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="e.g. Accenture National Qualifier Mock 01"
            required
          />
          <TextInput
            label="Passing Score (%)"
            type="number"
            min={10}
            max={100}
            value={passingPercentage}
            onChange={(e) => setPassingPercentage(e.target.value)}
            required
          />
        </div>

        <div>
          <TextInput
            label="URL Identifier (Slug)"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="accenture-mock-01"
            helperText="Used in the browser link for students: /:companySlug/assessments/:slug"
            required
          />
        </div>

        <div>
          <label className="form-label" style={{ marginBottom: 6, display: 'block' }}>
            Instructions &amp; Overview
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Specify section breakdown (e.g. 20 Cognitive, 30 Technical, 2 Coding) and rules..."
            style={{
              width: '100%',
              minHeight: 90,
              padding: 10,
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              fontFamily: 'inherit',
              fontSize: 13.5,
              color: 'var(--color-text-primary)',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{
          background: 'rgba(37, 99, 235, 0.05)',
          border: '1px solid rgba(37, 99, 235, 0.2)',
          borderRadius: 'var(--radius-md)',
          padding: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 12,
          color: 'var(--color-text-secondary)'
        }}>
          <Clock size={16} color="var(--color-primary)" />
          <span>
            Server-authoritative timer will automatically manage exam start, expiration timestamps, and anti-cheat constraints.
          </span>
        </div>
      </form>
    </Modal>
  )
}
