// src/components/editor/CodeEditor.jsx
import { Suspense, lazy } from 'react'
import Editor, { loader } from '@monaco-editor/react'
import { useTheme } from '../../contexts/ThemeContext'
import './CodeEditor.css'

export default function CodeEditor({
  value,
  onChange,
  language = 'cpp',
  height = '420px',
  readOnly = false,
}) {
  const { theme } = useTheme()
  const monacoTheme = theme === 'dark' ? 'vs-dark' : 'light'

  // Map our language slugs to Monaco editor language ids
  const monacoLangMap = {
    cpp: 'cpp',
    java: 'java',
    python: 'python',
    javascript: 'javascript',
    sql: 'sql',
    html: 'html',
    css: 'css',
  }

  const activeLang = monacoLangMap[language] || 'cpp'

  return (
    <div className="monaco-wrapper" style={{ height }}>
      <Editor
        height="100%"
        language={activeLang}
        value={value}
        theme={monacoTheme}
        onChange={onChange}
        loading={
          <div className="monaco-loading">
            <span className="monaco-spinner" />
            <span>Loading Code Editor…</span>
          </div>
        }
        options={{
          readOnly,
          minimap: { enabled: false },
          fontSize: 13.5,
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          wordWrap: 'on',
          padding: { top: 12, bottom: 12 },
          renderLineHighlight: 'all',
          cursorBlinking: 'smooth',
          smoothScrolling: true,
        }}
      />
    </div>
  )
}
