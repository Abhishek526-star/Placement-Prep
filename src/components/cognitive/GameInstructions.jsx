// src/components/cognitive/GameInstructions.jsx
// Pre-game instruction modal for Accenture Cognitive Games

import { Brain, Sparkles, X, CheckCircle2 } from 'lucide-react'
import './cognitive.css'

export default function GameInstructions({
  gameType = 'math_bubble',
  isOpen = true,
  onStart
}) {
  if (!isOpen) return null

  const isMath = gameType === 'math_bubble'

  return (
    <div className="game-instructions-overlay">
      <div className="game-instructions-card">
        <div className="game-instructions-header">
          <div className="game-instructions-title-row">
            <div className="game-instructions-icon">
              <Brain size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: 'var(--color-text-primary)' }}>
                {isMath ? 'Math Bubble — Instructions' : gameType === 'path_finder' ? 'Path Finder — Instructions' : 'Memory Maze — Instructions'}
              </h3>
              <p style={{ margin: '2px 0 0 0', fontSize: 12, color: 'var(--color-text-muted)' }}>
                Official Accenture Round 3 Cognitive Assessment Rules
              </p>
            </div>
          </div>
          {onStart && (
            <button
              onClick={onStart}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--color-text-muted)',
                cursor: 'pointer',
                padding: 4
              }}
              aria-label="Close instructions"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className="game-instructions-body">
          {isMath ? (
            <>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Ascending Order:</strong> Click the 3 bubbles in sequence from <strong>LOWEST (1st)</strong> to <strong>HIGHEST (3rd)</strong> value.
                </div>
              </div>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Mixed Formats:</strong> Bubbles contain arithmetic expressions, fractions (e.g. ½, ¾, ⅗), decimals, and products. Quick mental estimation is key!
                </div>
              </div>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Undo Available:</strong> You can click an already chosen bubble to deselect it before confirming all three.
                </div>
              </div>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Time Limit:</strong> 15 seconds per question (14s in advanced sets). Correct answers award speed bonuses and streak multipliers!
                </div>
              </div>
            </>
          ) : gameType === 'path_finder' ? (
            <>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Continuous Path:</strong> Connect the astronaut start icon on the left edge to the moon end icon on the right edge.
                </div>
              </div>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Rotate &amp; Flip:</strong> Click any dark tile to select its 3×3 block. Use 🗘 to rotate 90° clockwise and ⇆ to reverse route directions.
                </div>
              </div>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Arrow Navigation:</strong> Arrows point cardinally (left, right, up, down) and diagonally at bend angles along the tile route.
                </div>
              </div>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Minimal Moves:</strong> Complete the path in the least number of moves within the 240-second countdown for the highest competency score.
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Objective:</strong> Guide your token from <strong>START</strong> to collect all hidden keys, then reach the <strong>DOOR</strong> to unlock it.
                </div>
              </div>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Hidden Walls:</strong> Walls are invisible until you bump into them. Each collision records an attempt and reveals that red wall segment.
                </div>
              </div>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Controls:</strong> Navigate using the on-screen arrows, <strong>Arrow Keys</strong>, or <strong>W/A/S/D</strong> on your keyboard.
                </div>
              </div>
              <div className="game-instruction-rule">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>Scoring:</strong> Higher remaining time and fewer wall collisions yield maximum competency points.
                </div>
              </div>
            </>
          )}
        </div>

        <button className="cmc-start-btn" onClick={onStart}>
          <Sparkles size={16} /> Start Game
        </button>
      </div>
    </div>
  )
}
