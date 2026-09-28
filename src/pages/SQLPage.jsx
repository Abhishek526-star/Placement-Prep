// src/pages/SQLPage.jsx
import { useState } from 'react'
import { Database, Play, Table, AlertCircle, CheckCircle2, RefreshCw } from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import EmptyState from '../components/common/EmptyState'
import CodeEditor from '../components/editor/CodeEditor'
import { executeInBrowserSql } from '../engines/sql/index'

export default function SQLPage() {
  const { currentCompany } = useCompany()
  const defaultQuery = `SELECT name, department, salary\nFROM employees\nWHERE salary >= 60000\nORDER BY salary DESC;`
  const [query, setQuery] = useState(defaultQuery)
  const [isRunning, setIsRunning] = useState(false)
  const [result, setResult] = useState(null)

  const handleRunSql = async () => {
    setIsRunning(true)
    const res = await executeInBrowserSql(query)
    setResult(res)
    setIsRunning(false)
  }

  const handleReset = () => {
    setQuery(defaultQuery)
    setResult(null)
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)' }}>
            {currentCompany?.name} — SQL Query Environment
          </h1>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 2 }}>
            In-browser SQLite WASM execution environment. Guaranteed isolated from production database.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
        {/* Left: Editor & Output */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 16px', borderBottom: '1px solid var(--color-border)',
              background: 'var(--color-surface-elevated, #f8fafc)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Database size={16} color="var(--color-primary)" />
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                  SQL Query Editor
                </span>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <Button variant="ghost" size="sm" icon={RefreshCw} onClick={handleReset}>
                  Reset
                </Button>
                <Button variant="primary" size="sm" icon={Play} loading={isRunning} onClick={handleRunSql}>
                  Execute Query
                </Button>
              </div>
            </div>

            {/* Monaco SQL Editor */}
            <CodeEditor
              value={query}
              language="sql"
              onChange={(val) => setQuery(val || '')}
              height="260px"
            />
          </Card>

          {/* Results Table */}
          <Card>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700 }}>
                <Table size={16} /> Result Table
              </div>
              {result && result.isSuccess && (
                <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                  {result.rows.length} rows ({result.executionTimeMs}ms)
                </span>
              )}
            </div>

            {result ? (
              result.isSuccess ? (
                result.rows.length > 0 ? (
                  <div style={{ overflowX: 'auto', maxHeight: 280 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                      <thead>
                        <tr style={{ background: 'var(--color-surface-elevated, #f1f5f9)', textAlign: 'left' }}>
                          {result.columns.map((col) => (
                            <th key={col} style={{ padding: '8px 12px', borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}>
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {result.rows.map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                            {row.map((val, j) => (
                              <td key={j} style={{ padding: '8px 12px', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono, monospace)' }}>
                                {String(val)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div style={{ padding: '20px', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 13 }}>
                    {result.message || '0 rows returned.'}
                  </div>
                )
              ) : (
                <div style={{ padding: 12, background: 'rgba(239,68,68,0.1)', color: 'var(--color-danger)', borderRadius: 'var(--radius-md)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <AlertCircle size={16} />
                  <span>SQL Error: {result.error}</span>
                </div>
              )
            ) : (
              <div style={{ padding: '28px 0', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: 13 }}>
                Click &quot;Execute Query&quot; to run your query in the WebAssembly SQLite engine.
              </div>
            )}
          </Card>
        </div>

        {/* Right: Sandbox Schema Explorer & Tasks Empty State */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card>
            <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: 'var(--color-text-primary)' }}>
              Sandbox Schema: <code>employees</code>
            </h3>
            <div style={{ fontSize: 12.5, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid var(--color-border)' }}>
                <code>id</code> <span style={{ color: 'var(--color-text-muted)' }}>INTEGER (PK)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid var(--color-border)' }}>
                <code>name</code> <span style={{ color: 'var(--color-text-muted)' }}>TEXT</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid var(--color-border)' }}>
                <code>department</code> <span style={{ color: 'var(--color-text-muted)' }}>TEXT</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid var(--color-border)' }}>
                <code>role</code> <span style={{ color: 'var(--color-text-muted)' }}>TEXT</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid var(--color-border)' }}>
                <code>salary</code> <span style={{ color: 'var(--color-text-muted)' }}>INTEGER</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                <code>join_date</code> <span style={{ color: 'var(--color-text-muted)' }}>TEXT</span>
              </div>
            </div>
          </Card>

          <Card style={{ flex: 1 }}>
            <EmptyState
              icon={Database}
              title="No company questions in DB yet"
              message={`Company-specific SQL problems for ${currentCompany?.name} will be imported after all platform engines are tested.`}
            />
          </Card>
        </div>
      </div>
    </div>
  )
}
