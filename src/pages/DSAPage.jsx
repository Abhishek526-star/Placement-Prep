// src/pages/DSAPage.jsx
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Play, CheckCircle2, Terminal, RefreshCw, AlertCircle, FileCode } from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { DifficultyBadge } from '../components/common/Badge'
import EmptyState from '../components/common/EmptyState'
import SelectInput from '../components/forms/SelectInput'
import CodeEditor from '../components/editor/CodeEditor'
import { CODE_TEMPLATES } from '../engines/judge/templates'
import { executeJudge0Submission } from '../engines/judge/index'

export default function DSAPage() {
  const { currentCompany } = useCompany()
  const [selectedLang, setSelectedLang] = useState('cpp')
  const [code, setCode] = useState(CODE_TEMPLATES.cpp)
  const [customInput, setCustomInput] = useState('10')
  const [activeConsoleTab, setActiveConsoleTab] = useState('output')
  const [isRunning, setIsRunning] = useState(false)
  const [executionResult, setExecutionResult] = useState(null)

  const languages = [
    { value: 'cpp', label: 'C++ (GCC 9.2)' },
    { value: 'java', label: 'Java 17' },
    { value: 'python', label: 'Python 3.10' },
    { value: 'javascript', label: 'JavaScript (Node 18)' },
  ]

  const handleLangChange = (newLang) => {
    setSelectedLang(newLang)
    setCode(CODE_TEMPLATES[newLang] || CODE_TEMPLATES.cpp)
  }

  const handleResetCode = () => {
    setCode(CODE_TEMPLATES[selectedLang] || CODE_TEMPLATES.cpp)
  }

  const handleRunCode = async () => {
    setIsRunning(true)
    setActiveConsoleTab('output')
    const res = await executeJudge0Submission({
      sourceCode: code,
      language: selectedLang,
      stdin: customInput,
    })
    setExecutionResult(res)
    setIsRunning(false)
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {currentCompany?.name} — DSA Practice Environment
          </h1>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 2 }}>
            Monaco Editor coding environment with multi-language compiler integration.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: 16, minHeight: 600 }}>
        {/* Left Panel: Problem Statement / Empty State */}
        <Card style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderBottom: '1px solid var(--color-border)', paddingBottom: 12, marginBottom: 16
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <FileCode size={18} color="var(--color-primary)" />
              <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Problem Statement</h2>
            </div>
            <DifficultyBadge difficulty="medium" />
          </div>

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <EmptyState
              icon={FileCode}
              title="No DSA problems in database yet"
              message={`You will be able to supply and import real problem sets for ${currentCompany?.name} after all platform components are tested.`}
            />
          </div>
        </Card>

        {/* Right Panel: Code Editor + Test Console */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Editor Header Bar */}
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 16px', borderBottom: '1px solid var(--color-border)',
              background: 'var(--color-surface-elevated, #f8fafc)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 170 }}>
                  <SelectInput
                    value={selectedLang}
                    onChange={(e) => handleLangChange(e.target.value)}
                    options={languages}
                  />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={RefreshCw}
                  onClick={handleResetCode}
                  title="Reset to template"
                >
                  Reset
                </Button>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <Button
                  variant="outline"
                  size="sm"
                  icon={Play}
                  loading={isRunning}
                  onClick={handleRunCode}
                >
                  Run Code
                </Button>
                <Button variant="primary" size="sm" icon={CheckCircle2}>
                  Submit Solution
                </Button>
              </div>
            </div>

            {/* Live Monaco Editor */}
            <CodeEditor
              value={code}
              language={selectedLang}
              onChange={(val) => setCode(val || '')}
              height="380px"
            />
          </Card>

          {/* Console / Output Panel */}
          <Card style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 8 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab('output')}
                  style={{
                    background: 'none', border: 'none',
                    fontWeight: 600, fontSize: 13,
                    color: activeConsoleTab === 'output' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    cursor: 'pointer', paddingBottom: 4,
                    borderBottom: activeConsoleTab === 'output' ? '2px solid var(--color-primary)' : 'none'
                  }}
                >
                  Execution Output
                </button>
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab('input')}
                  style={{
                    background: 'none', border: 'none',
                    fontWeight: 600, fontSize: 13,
                    color: activeConsoleTab === 'input' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    cursor: 'pointer', paddingBottom: 4,
                    borderBottom: activeConsoleTab === 'input' ? '2px solid var(--color-primary)' : 'none'
                  }}
                >
                  Custom Test Input (stdin)
                </button>
              </div>

              {executionResult && (
                <div style={{ display: 'flex', gap: 12, fontSize: 12, color: 'var(--color-text-muted)' }}>
                  <span>Time: <strong>{executionResult.executionTime}</strong></span>
                  <span>Memory: <strong>{executionResult.memoryKb}</strong></span>
                </div>
              )}
            </div>

            {activeConsoleTab === 'output' ? (
              <div style={{
                background: 'var(--color-surface-elevated, #f8fafc)',
                borderRadius: 'var(--radius-md)',
                padding: 12,
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 12.5,
                color: 'var(--color-text-secondary)',
                minHeight: 80,
                whiteSpace: 'pre-wrap',
                lineHeight: 1.5
              }}>
                {executionResult ? (
                  <div>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      fontSize: 12, fontWeight: 700,
                      color: executionResult.isSuccess ? 'var(--color-success)' : 'var(--color-danger)',
                      marginBottom: 8
                    }}>
                      {executionResult.isSuccess ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                      {executionResult.status}
                    </div>
                    <div>{executionResult.stdout}</div>
                    {executionResult.stderr && <div style={{ color: 'var(--color-danger)' }}>{executionResult.stderr}</div>}
                  </div>
                ) : (
                  'Click "Run Code" to compile and execute your code against custom input.'
                )}
              </div>
            ) : (
              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Enter standard input for your program..."
                style={{
                  width: '100%',
                  minHeight: 80,
                  padding: 10,
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface-elevated, #f8fafc)',
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: 13,
                  color: 'var(--color-text-primary)',
                  boxSizing: 'border-box'
                }}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
