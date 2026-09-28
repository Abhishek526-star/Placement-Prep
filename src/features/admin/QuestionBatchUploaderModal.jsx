// src/features/admin/QuestionBatchUploaderModal.jsx
import { useState } from 'react'
import {
  Upload, FileText, CheckCircle2, AlertCircle, AlertTriangle,
  Download, Eye, ArrowRight, ShieldCheck, X
} from 'lucide-react'
import Modal from '../../components/common/Modal'
import Button from '../../components/common/Button'
import SelectInput from '../../components/forms/SelectInput'
import { useCompany } from '../../contexts/CompanyContext'
import { supabase, IS_SUPABASE_CONFIGURED } from '../../lib/supabase'
import toast from 'react-hot-toast'
import './AdminModals.css'

export default function QuestionBatchUploaderModal({ isOpen, onClose, onImportSuccess }) {
  const { companies } = useCompany()
  const [targetCompany, setTargetCompany] = useState('accenture')
  const [selectedFile, setSelectedFile] = useState(null)
  const [parsedData, setParsedData] = useState([])
  const [validationReport, setValidationReport] = useState(null)
  const [isImporting, setIsImporting] = useState(false)
  const [previewTab, setPreviewTab] = useState('summary') // 'summary' | 'valid' | 'errors'

  // Sample JSON Template for user download / copy
  const sampleJson = [
    {
      title: 'Time and Work Problem',
      slug: 'time-and-work-01',
      question_type: 'mcq',
      difficulty: 'easy',
      points: 10,
      prompt_markdown: 'A can do a piece of work in 10 days and B in 15 days. Working together, in how many days can they complete the work?',
      options: [
        { option_key: 'A', option_text: '5 days' },
        { option_key: 'B', option_text: '6 days' },
        { option_key: 'C', option_text: '8 days' },
        { option_key: 'D', option_text: '9 days' }
      ],
      // Private evaluation data
      correct_option_key: 'B',
      explanation_markdown: '1/10 + 1/15 = 5/30 = 1/6. Hence 6 days.'
    },
    {
      title: 'Valid Parentheses',
      slug: 'valid-parentheses',
      question_type: 'dsa',
      difficulty: 'medium',
      points: 20,
      prompt_markdown: 'Given a string s containing just the characters (), {}, and [], determine if the input string is valid.',
      starter_code: {
        cpp: 'bool isValid(string s) {\n    // your code\n}',
        python: 'def isValid(s: str) -> bool:\n    pass'
      },
      // Private evaluation data
      hidden_test_cases: [
        { stdin: '()[]{}', expected_output: 'true' },
        { stdin: '(]', expected_output: 'false' }
      ]
    }
  ]

  const handleDownloadSample = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(sampleJson, null, 2))
    const dlAnchorElem = document.createElement('a')
    dlAnchorElem.setAttribute('href', dataStr)
    dlAnchorElem.setAttribute('download', `question_bank_template.json`)
    dlAnchorElem.click()
  }

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setSelectedFile(file)

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const text = event.target?.result
        let json
        if (file.name.endsWith('.json')) {
          json = JSON.parse(text)
        } else if (file.name.endsWith('.csv')) {
          // Simple CSV parser for questions
          json = parseCsvQuestions(text)
        } else {
          toast.error('Supported formats: .json, .csv')
          return
        }

        if (!Array.isArray(json)) {
          toast.error('File must contain an array of question objects.')
          return
        }

        validateQuestions(json)
      } catch (err) {
        toast.error(`Parse error: ${err.message}`)
      }
    }
    reader.readAsText(file)
  }

  // Simple CSV parser fallback
  const parseCsvQuestions = (csvText) => {
    const lines = csvText.split('\n').filter((l) => l.trim())
    if (lines.length < 2) return []
    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase())
    
    return lines.slice(1).map((line, idx) => {
      const vals = line.split(',').map((v) => v.trim().replace(/^"|"$/g, ''))
      return {
        title: vals[headers.indexOf('title')] || `Question ${idx + 1}`,
        slug: vals[headers.indexOf('slug')] || `q-${idx + 1}`,
        question_type: vals[headers.indexOf('type')] || 'mcq',
        difficulty: vals[headers.indexOf('difficulty')] || 'medium',
        points: parseInt(vals[headers.indexOf('points')]) || 10,
        prompt_markdown: vals[headers.indexOf('prompt')] || '',
        correct_option_key: vals[headers.indexOf('answer')] || 'A'
      }
    })
  }

  // Schema Validator & Dry-Run Inspector
  const validateQuestions = (questionsList) => {
    const valid = []
    const errors = []
    const warnings = []

    questionsList.forEach((q, index) => {
      const rowNum = index + 1
      const issues = []

      if (!q.title?.trim()) issues.push('Missing "title"')
      if (!q.prompt_markdown?.trim()) issues.push('Missing "prompt_markdown"')
      
      const validTypes = ['mcq', 'dsa', 'sql', 'frontend', 'interview']
      if (!validTypes.includes(q.question_type)) {
        issues.push(`Invalid "question_type": ${q.question_type} (expected: ${validTypes.join(', ')})`)
      }

      const validDiffs = ['easy', 'medium', 'hard']
      if (q.difficulty && !validDiffs.includes(q.difficulty)) {
        issues.push(`Invalid "difficulty": ${q.difficulty}`)
      }

      if (q.question_type === 'mcq') {
        if (!q.options || !Array.isArray(q.options) || q.options.length < 2) {
          issues.push('MCQ must have at least 2 options in "options" array')
        }
        if (!q.correct_option_key) {
          warnings.push({ row: rowNum, warning: 'MCQ has no "correct_option_key" defined' })
        }
      }

      if (issues.length > 0) {
        errors.push({ row: rowNum, title: q.title || `Row ${rowNum}`, issues })
      } else {
        valid.push({
          ...q,
          slug: q.slug || q.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50),
          difficulty: q.difficulty || 'medium',
          points: q.points || 10
        })
      }
    })

    setParsedData(valid)
    setValidationReport({
      total: questionsList.length,
      validCount: valid.length,
      errorCount: errors.length,
      warningCount: warnings.length,
      errors,
      warnings,
    })
  }

  const handleExecuteImport = async () => {
    if (parsedData.length === 0) {
      toast.error('No valid questions to import.')
      return
    }

    setIsImporting(true)

    try {
      if (IS_SUPABASE_CONFIGURED) {
        // Resolve company_id from slug
        const { data: compData } = await supabase
          .from('companies')
          .select('id')
          .eq('slug', targetCompany)
          .single()

        const companyId = compData?.id

        if (companyId) {
          for (const item of parsedData) {
            // 1. Insert into public.questions
            const { data: qData, error: qErr } = await supabase
              .from('questions')
              .insert({
                company_id: companyId,
                title: item.title,
                slug: item.slug,
                question_type: item.question_type,
                difficulty: item.difficulty,
                prompt_markdown: item.prompt_markdown,
                starter_code: item.starter_code || null,
                points: item.points,
                is_published: true
              })
              .select('id')
              .single()

            if (qErr) {
              console.warn('[Import] Question row notice:', qErr.message)
              continue
            }

            const questionId = qData?.id
            if (!questionId) continue

            // 2. Insert MCQ options if available
            if (item.options && Array.isArray(item.options)) {
              const optionRows = item.options.map((opt, i) => ({
                question_id: questionId,
                option_key: opt.option_key || String.fromCharCode(65 + i),
                option_text: opt.option_text || String(opt),
                display_order: i + 1
              }))
              await supabase.from('question_options').insert(optionRows)
            }

            // 3. Insert Private Evaluation Data (Admin-only)
            await supabase.from('question_evaluation_data').insert({
              question_id: questionId,
              correct_option_key: item.correct_option_key || null,
              hidden_test_cases: item.hidden_test_cases || [],
              sql_solution_query: item.sql_solution_query || null
            })
          }
        }
      }

      toast.success(`Successfully imported ${parsedData.length} questions for ${targetCompany.toUpperCase()}!`)
      onImportSuccess?.(parsedData.length)
      onClose()
    } catch (err) {
      toast.error(`Import failed: ${err.message}`)
    } finally {
      setIsImporting(false)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Batch Upload Question Bank (CSV / JSON)"
      maxWidth={720}
      footer={
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <Button variant="ghost" size="sm" icon={Download} onClick={handleDownloadSample}>
            Download Template (.json)
          </Button>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={!validationReport || validationReport.validCount === 0 || isImporting}
              loading={isImporting}
              onClick={handleExecuteImport}
            >
              Confirm &amp; Import ({parsedData.length} Items)
            </Button>
          </div>
        </div>
      }
    >
      <div className="uploader-container">
        {/* Company Target Selector */}
        <div style={{ marginBottom: 16 }}>
          <SelectInput
            label="Import Into Company"
            value={targetCompany}
            onChange={(e) => setTargetCompany(e.target.value)}
            options={companies.map((c) => ({ value: c.slug, label: c.name }))}
            required
          />
        </div>

        {/* Drag and Drop Upload Zone */}
        <label className="uploader-dropzone">
          <input
            type="file"
            accept=".json,.csv"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <div className="dropzone-icon">
            <Upload size={28} />
          </div>
          <span className="dropzone-title">
            {selectedFile ? selectedFile.name : 'Click to select or drop .JSON / .CSV question file'}
          </span>
          <span className="dropzone-subtitle">
            Validates schema, separates private evaluation data, and detects syntax errors before importing.
          </span>
        </label>

        {/* Validation Report & Dry-Run Preview */}
        {validationReport && (
          <div className="validation-report-card">
            <div className="report-header">
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                Dry-Run Validation Summary
              </span>
              <div className="report-chips">
                <span className="chip valid">
                  <CheckCircle2 size={12} /> {validationReport.validCount} Valid
                </span>
                {validationReport.errorCount > 0 && (
                  <span className="chip error">
                    <AlertCircle size={12} /> {validationReport.errorCount} Errors
                  </span>
                )}
                {validationReport.warningCount > 0 && (
                  <span className="chip warning">
                    <AlertTriangle size={12} /> {validationReport.warningCount} Warnings
                  </span>
                )}
              </div>
            </div>

            {/* Error List if any */}
            {validationReport.errors.length > 0 && (
              <div className="report-errors-box">
                {validationReport.errors.map((err, i) => (
                  <div key={i} className="error-item">
                    <strong>Row {err.row} ({err.title}):</strong> {err.issues.join(', ')}
                  </div>
                ))}
              </div>
            )}

            {/* Private Data Separation Notice */}
            <div className="privacy-badge-notice">
              <ShieldCheck size={16} color="var(--color-success)" />
              <span>
                <strong>Evaluation Guard:</strong> Answer keys &amp; hidden tests will be automatically split into the private table <code>question_evaluation_data</code>.
              </span>
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}
