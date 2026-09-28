// src/components/mcq/ExplanationFormatter.jsx
import React from 'react'

/**
 * Format inline text tokens (booleans, code expressions, arrows, variable chips)
 */
export function formatInlineTokens(rawText) {
  if (!rawText) return null

  // Check if the entire segment is a series of variable assignments like "p = 22, q = 4, r = 2"
  const isVarList = /^[a-zA-Z_]\w*\s*=\s*-?\d+(?:\s*,\s*[a-zA-Z_]\w*\s*=\s*-?\d+)*$/.test(rawText.trim())
  if (isVarList) {
    const pairs = rawText.split(',').map((p) => p.trim())
    return pairs.map((pair, idx) => (
      <span key={idx} className="cloud-var-chip">
        {pair}
      </span>
    ))
  }

  // Regex tokenizer to split into known patterns:
  // 1. Booleans: true, false
  // 2. Arrows: ->, =>
  // 3. Function / method calls: e.g. fun(...), System.out.println(...), Print ...
  // 4. Code expressions in parentheses: e.g. (p > 1), (x / y)
  // 5. Backtick code: `...`
  const tokenRegex = /(fun\([^)]*\)|System\.out\.println\([^)]*\)|Print\s+[\w\s,]+|\([a-zA-Z0-9_\s><=!&|+\-*\/]+\)|`[^`]+`|\btrue\b|\bfalse\b|->|=>)/g

  const parts = rawText.split(tokenRegex)

  return parts.map((part, idx) => {
    if (!part) return null

    if (part === 'true') {
      return (
        <span key={idx} className="cloud-token-true">
          true
        </span>
      )
    }

    if (part === 'false') {
      return (
        <span key={idx} className="cloud-token-false">
          false
        </span>
      )
    }

    if (part === '->' || part === '=>') {
      return (
        <span key={idx} className="cloud-token-arrow">
          →
        </span>
      )
    }

    if (
      part.startsWith('fun(') ||
      part.startsWith('System.out.println(') ||
      part.startsWith('Print ') ||
      part.startsWith('`') ||
      (part.startsWith('(') && part.endsWith(')') && /[><=!&|+\-*\/]/.test(part))
    ) {
      const cleanCode = part.replace(/^`|`$/g, '')
      return (
        <code key={idx} className="cloud-inline-code">
          {cleanCode}
        </code>
      )
    }

    return <React.Fragment key={idx}>{part}</React.Fragment>
  })
}

/**
 * Render structured lines with bullets, numbers, spacers, and inline formatting
 */
export function renderRichLines(text) {
  if (!text) return null

  const lines = text.split(/\r?\n/)

  return (
    <div className="cloud-expl-content-wrapper">
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim()
        if (!trimmed) {
          return <div key={lineIdx} className="cloud-expl-spacer" />
        }

        const isBullet = trimmed.startsWith('•') || trimmed.startsWith('- ')
        const numMatch = trimmed.match(/^(\d+)\.\s*(.*)/)

        let content = trimmed
        let prefix = null

        if (isBullet) {
          content = trimmed.replace(/^[•\-]\s*/, '')
          prefix = <span className="cloud-expl-bullet-marker">•</span>
        } else if (numMatch) {
          prefix = <span className="cloud-expl-num-badge">{numMatch[1]}</span>
          content = numMatch[2]
        }

        return (
          <div
            key={lineIdx}
            className={`cloud-expl-line ${isBullet ? 'line-bullet' : ''} ${numMatch ? 'line-numbered' : ''}`}
          >
            {prefix}
            <span className="cloud-expl-line-text">
              {formatInlineTokens(content)}
            </span>
          </div>
        )
      })}
    </div>
  )
}

/**
 * Format entire explanation text into structured step cards, logic trace, and output callout
 */
export function parseExplanationStructure(text) {
  if (!text) return { sections: [], plainText: '', outputValue: null }

  let cleanText = text
  let outputValue = null

  // Extract Output: ... if present
  const outputMatch = cleanText.match(/(?:^|\n|\r\n)(?:Output|Final Answer|Result):\s*([^\n\r]+)/i)
  if (outputMatch) {
    outputValue = outputMatch[1].trim()
    cleanText = cleanText.replace(/(?:^|\n|\r\n)(?:Output|Final Answer|Result):\s*[^\n\r]+/i, '').trim()
  }

  // Check if text has step boundaries: "Step 1:", "Step 2:", "Initial call:", "Start:"
  const stepPattern = /(?:^|\n\n|\r\n\r\n)(Step\s*\d+:?|Initial\s*call:?|Start:?|Overview:?)/i
  if (stepPattern.test(cleanText)) {
    const parts = cleanText.split(/(?:^|\n\n|\r\n\r\n)(Step\s*\d+:?|Initial\s*call:?|Start:?|Overview:?)/i)
    const sections = []
    if (parts[0] && parts[0].trim()) {
      sections.push({ tag: 'Overview', content: parts[0].trim() })
    }
    for (let i = 1; i < parts.length; i += 2) {
      const tag = parts[i]?.trim().replace(/:$/, '')
      const content = parts[i + 1]?.trim()
      if (tag && content) {
        sections.push({ tag, content })
      }
    }
    if (sections.length > 0) {
      return { sections, plainText: '', outputValue }
    }
  }

  return { sections: [], plainText: cleanText, outputValue }
}
