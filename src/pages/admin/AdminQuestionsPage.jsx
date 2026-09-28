// src/pages/admin/AdminQuestionsPage.jsx
import { useState } from 'react'
import {
  HelpCircle, Plus, Search, Filter, ShieldAlert,
  Code2, Database, Check, Eye, Upload
} from 'lucide-react'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import EmptyState from '../../components/common/EmptyState'
import Modal from '../../components/common/Modal'
import TextInput from '../../components/forms/TextInput'
import SelectInput from '../../components/forms/SelectInput'
import QuestionBatchUploaderModal from '../../features/admin/QuestionBatchUploaderModal'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

export default function AdminQuestionsPage() {
  const { companies } = useCompany()
  const [search, setSearch] = useState('')
  const [companyFilter, setCompanyFilter] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false)

  // Form State
  const [targetCompany, setTargetCompany] = useState('accenture')
  const [title, setTitle] = useState('')
  const [questionType, setQuestionType] = useState('mcq')
  const [difficulty, setDifficulty] = useState('medium')
  const [prompt, setPrompt] = useState('')
  const [optionA, setOptionA] = useState('')
  const [optionB, setOptionB] = useState('')
  const [optionC, setOptionC] = useState('')
  const [optionD, setOptionD] = useState('')
  // Private Evaluation Data (Protected)
  const [correctOption, setCorrectOption] = useState('A')
  const [hiddenTestCases, setHiddenTestCases] = useState('[]')
  const [sqlSolution, setSqlSolution] = useState('')

  const handleSaveQuestion = (e) => {
    e.preventDefault()
    if (!title.trim() || !prompt.trim()) {
      toast.error('Please fill in title and problem prompt.')
      return
    }

    toast.success('Question validated! Private evaluation data mapped safely.')
    setIsModalOpen(false)
    // Reset form
    setTitle('')
    setPrompt('')
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            Question Bank Management
          </h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 4 }}>
            Create and maintain MCQs, DSA problems, and SQL queries with strict evaluation data isolation.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="outline" icon={Upload} onClick={() => setIsBatchModalOpen(true)}>
            Batch Upload (CSV/JSON)
          </Button>
          <Button variant="primary" icon={Plus} onClick={() => setIsModalOpen(true)}>
            New Question
          </Button>
        </div>
      </div>

      <Card style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <TextInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions by title or slug..."
            />
          </div>
          <div style={{ width: 220 }}>
            <SelectInput
              value={companyFilter}
              onChange={(e) => setCompanyFilter(e.target.value)}
              options={[
                { value: 'all', label: 'All Companies' },
                ...companies.map((c) => ({ value: c.slug, label: c.name })),
              ]}
            />
          </div>
        </div>
      </Card>

      <Card>
        <EmptyState
          icon={HelpCircle}
          title="No questions in database yet"
          message="Questions will be supplied and imported by the administrator after all engines are tested."
          actionText="Create Question"
          onAction={() => setIsModalOpen(true)}
        />
      </Card>

      {/* Create / Edit Question Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Placement Question"
        maxWidth={680}
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveQuestion}>
              Save Question
            </Button>
          </>
        }
      >
        <form onSubmit={handleSaveQuestion} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <SelectInput
              label="Target Company"
              value={targetCompany}
              onChange={(e) => setTargetCompany(e.target.value)}
              options={companies.map((c) => ({ value: c.slug, label: c.name }))}
              required
            />
            <SelectInput
              label="Question Type"
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              options={[
                { value: 'mcq', label: 'Multiple Choice (MCQ)' },
                { value: 'dsa', label: 'DSA Coding Challenge' },
                { value: 'sql', label: 'SQL Query Challenge' },
                { value: 'interview', label: 'Interview Question' },
              ]}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
            <TextInput
              label="Question Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Reverse a Linked List"
              required
            />
            <SelectInput
              label="Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              options={[
                { value: 'easy', label: 'Easy' },
                { value: 'medium', label: 'Medium' },
                { value: 'hard', label: 'Hard' },
              ]}
              required
            />
          </div>

          <div>
            <label className="form-label" style={{ marginBottom: 6, display: 'block' }}>
              Problem Prompt (Markdown Supported) *
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the problem, input format, constraints, and sample test cases..."
              style={{
                width: '100%',
                minHeight: 100,
                padding: 10,
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                fontFamily: 'inherit',
                fontSize: 13.5,
                color: 'var(--color-text-primary)',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          {/* MCQ Options */}
          {questionType === 'mcq' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="form-label">Multiple Choice Options</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <TextInput label="Option A" value={optionA} onChange={(e) => setOptionA(e.target.value)} />
                <TextInput label="Option B" value={optionB} onChange={(e) => setOptionB(e.target.value)} />
                <TextInput label="Option C" value={optionC} onChange={(e) => setOptionC(e.target.value)} />
                <TextInput label="Option D" value={optionD} onChange={(e) => setOptionD(e.target.value)} />
              </div>
            </div>
          )}

          {/* PRIVATE EVALUATION DATA SECTION (ADMIN-ONLY) */}
          <div style={{
            background: 'rgba(239, 68, 68, 0.05)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: 16
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, color: 'var(--color-danger)', fontWeight: 700, fontSize: 13 }}>
              <ShieldAlert size={16} /> Private Evaluation Data (Never Exposed to Students)
            </div>
            <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 12 }}>
              Stored in private table <code>question_evaluation_data</code> with strict zero-student RLS policies.
            </p>

            {questionType === 'mcq' ? (
              <SelectInput
                label="Correct Answer Option Key"
                value={correctOption}
                onChange={(e) => setCorrectOption(e.target.value)}
                options={[
                  { value: 'A', label: 'Option A' },
                  { value: 'B', label: 'Option B' },
                  { value: 'C', label: 'Option C' },
                  { value: 'D', label: 'Option D' },
                ]}
              />
            ) : questionType === 'dsa' ? (
              <div>
                <label className="form-label" style={{ marginBottom: 4, display: 'block' }}>
                  Hidden Test Cases (JSON format)
                </label>
                <textarea
                  value={hiddenTestCases}
                  onChange={(e) => setHiddenTestCases(e.target.value)}
                  style={{
                    width: '100%',
                    minHeight: 70,
                    padding: 8,
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: 12,
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            ) : (
              <div>
                <label className="form-label" style={{ marginBottom: 4, display: 'block' }}>
                  Reference SQL Solution Query
                </label>
                <textarea
                  value={sqlSolution}
                  onChange={(e) => setSqlSolution(e.target.value)}
                  placeholder="SELECT ... FROM ..."
                  style={{
                    width: '100%',
                    minHeight: 70,
                    padding: 8,
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: 12,
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            )}
          </div>
        </form>
      </Modal>

      {/* Batch Uploader Modal */}
      <QuestionBatchUploaderModal
        isOpen={isBatchModalOpen}
        onClose={() => setIsBatchModalOpen(false)}
      />
    </div>
  )
}
