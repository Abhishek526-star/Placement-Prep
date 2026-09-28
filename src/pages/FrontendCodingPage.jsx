// src/pages/FrontendCodingPage.jsx
import { useState, useEffect, useRef } from 'react'
import {
  Code, Play, RefreshCw, Layout, Smartphone, Monitor,
  Terminal, CheckCircle2, AlertCircle, FileCode, Layers, Trash2
} from 'lucide-react'
import { useCompany } from '../contexts/CompanyContext'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { DifficultyBadge } from '../components/common/Badge'
import EmptyState from '../components/common/EmptyState'
import CodeEditor from '../components/editor/CodeEditor'
import { FRONTEND_TEMPLATES, generateSandboxedDocument } from '../engines/frontend/index'
import './FrontendCoding.css'

export default function FrontendCodingPage() {
  const { currentCompany } = useCompany()
  const [activeTab, setActiveTab] = useState('html') // 'html' | 'css' | 'js'
  const [htmlCode, setHtmlCode] = useState(FRONTEND_TEMPLATES.counter.html)
  const [cssCode, setCssCode] = useState(FRONTEND_TEMPLATES.counter.css)
  const [jsCode, setJsCode] = useState(FRONTEND_TEMPLATES.counter.js)
  const [viewportMode, setViewportMode] = useState('desktop') // 'desktop' | 'mobile'
  const [consoleLogs, setConsoleLogs] = useState([])
  const [previewDoc, setPreviewDoc] = useState('')
  const [activeRightTab, setActiveRightTab] = useState('preview') // 'preview' | 'console'

  // Update preview
  const updatePreview = () => {
    const doc = generateSandboxedDocument({
      html: htmlCode,
      css: cssCode,
      js: jsCode,
    })
    setPreviewDoc(doc)
  }

  // Initial preview on mount
  useEffect(() => {
    updatePreview()
  }, [])

  // Listen to postMessage logs from the sandboxed iframe
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.source === 'FRONTEND_SANDBOX') {
        setConsoleLogs((prev) => [
          ...prev,
          {
            type: e.data.type,
            message: e.data.message,
            timestamp: e.data.timestamp,
            id: Math.random().toString(),
          },
        ])
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const handleReset = () => {
    setHtmlCode(FRONTEND_TEMPLATES.counter.html)
    setCssCode(FRONTEND_TEMPLATES.counter.css)
    setJsCode(FRONTEND_TEMPLATES.counter.js)
    setConsoleLogs([])
    const doc = generateSandboxedDocument({
      html: FRONTEND_TEMPLATES.counter.html,
      css: FRONTEND_TEMPLATES.counter.css,
      js: FRONTEND_TEMPLATES.counter.js,
    })
    setPreviewDoc(doc)
  }

  return (
    <div className="fe-page">
      {/* Header Bar */}
      <div className="fe-header">
        <div>
          <h1 className="fe-title">
            {currentCompany?.name} — Frontend Web Development Sandbox
          </h1>
          <p className="fe-subtitle">
            3-tab HTML/CSS/JS Monaco editor with isolated sandboxed execution and live console streaming.
          </p>
        </div>

        <div className="fe-actions">
          <Button variant="ghost" size="sm" icon={RefreshCw} onClick={handleReset}>
            Reset Code
          </Button>
          <Button variant="primary" size="sm" icon={Play} onClick={updatePreview}>
            Run &amp; Update Preview
          </Button>
        </div>
      </div>

      {/* 3-Column Workspace: Instructions | 3-Tab Editor | Live Preview */}
      <div className="fe-grid">
        {/* Left: Requirements / Problem Statement */}
        <Card className="fe-left-panel">
          <div className="fe-panel-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <FileCode size={18} color="var(--color-primary)" />
              <h2 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>Challenge Specs</h2>
            </div>
            <DifficultyBadge difficulty="medium" />
          </div>

          <div className="fe-specs-content">
            <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 8px' }}>
              Interactive Counter Widget
            </h3>
            <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: '0 0 14px' }}>
              Build an interactive counter widget that allows the user to increment, decrement, and reset a number with responsive button styling and instant DOM updates.
            </p>

            <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', margin: '0 0 8px' }}>
              Requirements:
            </h4>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              <li>Display an element with id <code>#count-display</code> starting at 0.</li>
              <li>Include buttons for Increment (<code>#increment-btn</code>), Decrement (<code>#decrement-btn</code>), and Reset (<code>#reset-btn</code>).</li>
              <li>Apply modern styling with smooth hover transitions.</li>
              <li>Log state changes to the console using <code>console.log()</code>.</li>
            </ul>

            <div style={{ marginTop: 24, padding: 12, borderRadius: 'var(--radius-md)', background: 'var(--color-surface-elevated, #f8fafc)', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', marginBottom: 4 }}>
                <Layers size={14} /> Database Integration
              </div>
              <p style={{ fontSize: 11.5, color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
                Company-specific web challenges from {currentCompany?.name} will be imported after all platform engines are tested.
              </p>
            </div>
          </div>
        </Card>

        {/* Center: 3-Tab Monaco Code Editor */}
        <div className="fe-center-panel">
          <Card style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Editor File Tabs */}
            <div className="fe-tabs-bar">
              <div className="fe-tabs-left">
                <button
                  type="button"
                  className={`fe-tab-btn ${activeTab === 'html' ? 'active' : ''}`}
                  onClick={() => setActiveTab('html')}
                >
                  <span className="fe-tab-dot html" /> index.html
                </button>
                <button
                  type="button"
                  className={`fe-tab-btn ${activeTab === 'css' ? 'active' : ''}`}
                  onClick={() => setActiveTab('css')}
                >
                  <span className="fe-tab-dot css" /> styles.css
                </button>
                <button
                  type="button"
                  className={`fe-tab-btn ${activeTab === 'js' ? 'active' : ''}`}
                  onClick={() => setActiveTab('js')}
                >
                  <span className="fe-tab-dot js" /> script.js
                </button>
              </div>

              <span className="fe-tab-lang-label">
                {activeTab.toUpperCase()}
              </span>
            </div>

            {/* Monaco Editor Container */}
            <div style={{ flex: 1, minHeight: 460 }}>
              {activeTab === 'html' && (
                <CodeEditor
                  value={htmlCode}
                  language="html"
                  onChange={(val) => setHtmlCode(val || '')}
                  height="100%"
                />
              )}
              {activeTab === 'css' && (
                <CodeEditor
                  value={cssCode}
                  language="css"
                  onChange={(val) => setCssCode(val || '')}
                  height="100%"
                />
              )}
              {activeTab === 'js' && (
                <CodeEditor
                  value={jsCode}
                  language="javascript"
                  onChange={(val) => setJsCode(val || '')}
                  height="100%"
                />
              )}
            </div>
          </Card>
        </div>

        {/* Right: Preview & Console Tabs */}
        <div className="fe-right-panel">
          <Card style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Preview Toolbar */}
            <div className="fe-preview-bar">
              <div className="fe-preview-tabs">
                <button
                  type="button"
                  className={`fe-subtab-btn ${activeRightTab === 'preview' ? 'active' : ''}`}
                  onClick={() => setActiveRightTab('preview')}
                >
                  Live Preview
                </button>
                <button
                  type="button"
                  className={`fe-subtab-btn ${activeRightTab === 'console' ? 'active' : ''}`}
                  onClick={() => setActiveRightTab('console')}
                >
                  Console ({consoleLogs.length})
                </button>
              </div>

              {activeRightTab === 'preview' ? (
                <div className="fe-viewport-toggle">
                  <button
                    type="button"
                    className={`fe-icon-btn ${viewportMode === 'desktop' ? 'active' : ''}`}
                    onClick={() => setViewportMode('desktop')}
                    title="Desktop Preview"
                  >
                    <Monitor size={15} />
                  </button>
                  <button
                    type="button"
                    className={`fe-icon-btn ${viewportMode === 'mobile' ? 'active' : ''}`}
                    onClick={() => setViewportMode('mobile')}
                    title="Mobile View (375px)"
                  >
                    <Smartphone size={15} />
                  </button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  icon={Trash2}
                  onClick={() => setConsoleLogs([])}
                  title="Clear Console"
                >
                  Clear
                </Button>
              )}
            </div>

            {/* Sandbox Iframe Preview */}
            {activeRightTab === 'preview' ? (
              <div className="fe-iframe-wrapper">
                <iframe
                  title="Frontend Preview Sandbox"
                  srcDoc={previewDoc}
                  sandbox="allow-scripts"
                  className={`fe-iframe ${viewportMode === 'mobile' ? 'mobile-mode' : ''}`}
                />
              </div>
            ) : (
              /* Live Console Drawer */
              <div className="fe-console-output">
                {consoleLogs.length > 0 ? (
                  consoleLogs.map((log) => (
                    <div key={log.id} className={`fe-log-line ${log.type}`}>
                      <span className="fe-log-time">{log.timestamp}</span>
                      <span className="fe-log-msg">{log.message}</span>
                    </div>
                  ))
                ) : (
                  <div className="fe-console-empty">
                    Console is empty. Use <code>console.log()</code> in your JavaScript to see output here.
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
