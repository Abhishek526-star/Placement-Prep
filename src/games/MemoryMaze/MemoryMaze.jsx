// src/games/MemoryMaze/MemoryMaze.jsx
// Exact reproduction of Accenture Round 3 Memory Maze Game Engine matching official design

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import {
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  Eye, EyeOff, Sparkles, RotateCcw, Trophy
} from 'lucide-react'
import { MEMORY_MAZE_VARIANTS, generateMemoryMaze } from './mazeGenerator'
import './MemoryMaze.css'

export default function MemoryMaze({
  variantKey = 'find-the-key',
  onVariantChange,
  onComplete,
  isMock = false
}) {
  const [phase, setPhase] = useState('INSTRUCTIONS') // 'INSTRUCTIONS' | 'PLAYING' | 'COMPLETED' | 'TIMEOUT'
  const [activeVariant, setActiveVariant] = useState(variantKey)
  const [mazeData, setMazeData] = useState(() => generateMemoryMaze(variantKey))
  const [playerPos, setPlayerPos] = useState(() => mazeData.start)
  const [timeLeft, setTimeLeft] = useState(() => mazeData.variant.timeLimit)
  const [collectedKeys, setCollectedKeys] = useState([])
  const [discoveredWalls, setDiscoveredWalls] = useState(() => new Set())
  const [attempts, setAttempts] = useState(0)
  const [showSolution, setShowSolution] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const [isShaking, setIsShaking] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [timeTaken, setTimeTaken] = useState(0)

  const feedbackTimerRef = useRef(null)

  // Reset and load a new maze
  const loadMaze = useCallback((vKey, autoPlay = true) => {
    const newMaze = generateMemoryMaze(vKey)
    setMazeData(newMaze)
    setActiveVariant(vKey)
    setPlayerPos(newMaze.start)
    setTimeLeft(newMaze.variant.timeLimit)
    setCollectedKeys([])
    setDiscoveredWalls(new Set())
    setAttempts(0)
    setShowSolution(false)
    setFeedback(null)
    setIsShaking(false)
    setFinalScore(0)
    setTimeTaken(0)
    setPhase(autoPlay ? 'PLAYING' : 'INSTRUCTIONS')
  }, [])

  // Sync when variantKey prop changes
  useEffect(() => {
    if (variantKey !== activeVariant) {
      loadMaze(variantKey, false)
    }
  }, [variantKey, activeVariant, loadMaze])

  // Countdown timer during PLAYING
  useEffect(() => {
    if (phase !== 'PLAYING') return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          setPhase('TIMEOUT')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [phase])

  // Toast feedback helper
  const showToast = useCallback((msg) => {
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current)
    setFeedback(msg)
    feedbackTimerRef.current = setTimeout(() => {
      setFeedback(null)
    }, 1400)
  }, [])

  // Move player handler
  const movePlayer = useCallback((direction) => {
    if (phase !== 'PLAYING') return

    const dirConfig = {
      top: { dr: -1, dc: 0, opp: 'bottom' },
      bottom: { dr: 1, dc: 0, opp: 'top' },
      left: { dr: 0, dc: -1, opp: 'right' },
      right: { dr: 0, dc: 1, opp: 'left' }
    }

    const move = dirConfig[direction]
    if (!move) return

    const { r, c } = playerPos
    const currentCell = mazeData.cells[r]?.[c]
    const nr = r + move.dr
    const nc = c + move.dc

    // Check boundary or wall hit
    const isOutOfBounds = nr < 0 || nr >= mazeData.size || nc < 0 || nc >= mazeData.size
    const isWallBlocked = isOutOfBounds || currentCell?.walls?.[direction]

    if (isWallBlocked) {
      // Wall collision!
      // Official rule: Invisible walls remain hidden; candidate uses memory.
      setAttempts(prev => prev + 1)
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 320)

      // OFFICIAL RULE FROM SCREENSHOT 1:
      // "If you hit a wall, you will return to the beginning."
      setPlayerPos(mazeData.start)
      return
    }

    // Valid move
    const nextPos = { r: nr, c: nc }
    setPlayerPos(nextPos)

    // Check key pickup
    const hitKeyIndex = mazeData.keys.findIndex(
      k => k.r === nr && k.c === nc && !collectedKeys.some(ck => ck.r === k.r && ck.c === k.c)
    )
    let newCollected = collectedKeys
    if (hitKeyIndex !== -1) {
      newCollected = [...collectedKeys, mazeData.keys[hitKeyIndex]]
      setCollectedKeys(newCollected)
      showToast('Key Collected! 🔑')
    }

    // Check door reached
    if (nr === mazeData.door.r && nc === mazeData.door.c) {
      const allKeysCollected = newCollected.length >= mazeData.keys.length
      if (allKeysCollected) {
        // Solved! Calculate exact formula:
        // max(100, 1000 - attempts * 75 + floor(timeLeft / 2))
        const duration = mazeData.variant.timeLimit - timeLeft
        const calculatedScore = Math.max(
          100,
          Math.round(1000 - (attempts * 75) + Math.min(200, Math.floor(timeLeft / 2)))
        )
        setFinalScore(calculatedScore)
        setTimeTaken(duration)
        setPhase('COMPLETED')

        const payload = {
          gameType: 'memory_maze',
          variant: activeVariant,
          score: calculatedScore,
          timeTaken: duration,
          attempts,
          solved: true
        }

        if (onComplete) {
          onComplete(payload)
        }
      } else {
        showToast('Door is locked! Collect the key first.')
      }
    }
  }, [phase, playerPos, mazeData, collectedKeys, attempts, timeLeft, activeVariant, onComplete, showToast])

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) {
        e.preventDefault()
        movePlayer('top')
      } else if (['ArrowDown', 'KeyS'].includes(e.code)) {
        e.preventDefault()
        movePlayer('bottom')
      } else if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        e.preventDefault()
        movePlayer('left')
      } else if (['ArrowRight', 'KeyD'].includes(e.code)) {
        e.preventDefault()
        movePlayer('right')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [movePlayer])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Solution path lookup map: `${r},${c}` -> step number
  const solutionStepMap = useMemo(() => {
    const map = new Map()
    if (showSolution && mazeData.solution) {
      mazeData.solution.forEach(p => {
        map.set(`${p.r},${p.c}`, p.step)
      })
    }
    return map
  }, [showSolution, mazeData.solution])

  const optimalStepCount = mazeData.solution?.length || 7

  return (
    <div className="memory-maze-wrapper">
      {/* 8 Variant Selector Pills (Screenshot 2) */}
      {!isMock && (
        <div className="mm-variant-pills-container">
          {Object.values(MEMORY_MAZE_VARIANTS).map(v => (
            <button
              key={v.id}
              className={`mm-variant-pill ${activeVariant === v.id ? 'active' : ''}`}
              onClick={() => {
                if (onVariantChange) onVariantChange(v.id)
                loadMaze(v.id, true)
              }}
            >
              {v.name}
            </button>
          ))}
        </div>
      )}

      {/* Main Board Card (White Background, Screenshot 2 & 3) */}
      <div className="mm-board-card">
        {feedback && <div className="mm-wall-hit-toast">{feedback}</div>}

        {/* Solution Mode Top Banner (Screenshot 3) */}
        {showSolution && (
          <div className="mm-solution-banner">
            <div className="mm-solution-banner-text">
              <Sparkles size={16} color="#10b981" />
              <span>
                <strong>Solution Mode:</strong> Red borders show hidden walls • Green badges show optimal path ({optimalStepCount} steps).
              </span>
            </div>
            <button
              className="mm-solution-hide-btn"
              onClick={() => setShowSolution(false)}
            >
              Hide
            </button>
          </div>
        )}

        {/* Maze Grid Arena */}
        <div
          className={`mm-grid-container grid-size-${mazeData.size} ${isShaking ? 'shake' : ''}`}
          style={{
            gridTemplateColumns: `repeat(${mazeData.size}, 1fr)`,
            gridTemplateRows: `repeat(${mazeData.size}, 1fr)`
          }}
        >
          {mazeData.cells.map((row, r) =>
            row.map((cell, c) => {
              const isPlayerHere = playerPos.r === r && playerPos.c === c
              const isKeyHere = mazeData.keys.some(
                k => k.r === r && k.c === c && !collectedKeys.some(ck => ck.r === k.r && ck.c === k.c)
              )
              const isDoorHere = mazeData.door.r === r && mazeData.door.c === c

              const stepNumber = solutionStepMap.get(`${r},${c}`)
              const isSolutionPath = stepNumber !== undefined

              // Red walls are only revealed when Solution Mode is active
              const wallTop = showSolution && cell.walls.top
              const wallBottom = showSolution && cell.walls.bottom
              const wallLeft = showSolution && cell.walls.left
              const wallRight = showSolution && cell.walls.right

              const cellClasses = [
                'mm-cell',
                isPlayerHere ? 'is-player-cell' : '',
                isSolutionPath ? 'is-solution-cell' : '',
                wallTop ? 'wall-top-revealed' : '',
                wallBottom ? 'wall-bottom-revealed' : '',
                wallLeft ? 'wall-left-revealed' : '',
                wallRight ? 'wall-right-revealed' : ''
              ].filter(Boolean).join(' ')

              return (
                <div key={`${r}-${c}`} className={cellClasses}>
                  {/* Green Step Number Badge (Screenshot 3) */}
                  {isSolutionPath && stepNumber && (
                    <div className="mm-step-badge">{stepNumber}</div>
                  )}

                  {/* Player Token with Edge Chevrons (Screenshot 2) */}
                  {isPlayerHere && (
                    <>
                      <div className="mm-player-avatar" title="Player Position">
                        🚶
                      </div>

                      {/* 4 Directional Chevron Buttons Mounted Around Player Cell */}
                      {phase === 'PLAYING' && (
                        <>
                          <button
                            className="mm-chevron-btn mm-chevron-up"
                            aria-label="Move Up"
                            onClick={(e) => { e.stopPropagation(); movePlayer('top') }}
                          >
                            <ChevronUp size={18} />
                          </button>
                          <button
                            className="mm-chevron-btn mm-chevron-down"
                            aria-label="Move Down"
                            onClick={(e) => { e.stopPropagation(); movePlayer('bottom') }}
                          >
                            <ChevronDown size={18} />
                          </button>
                          <button
                            className="mm-chevron-btn mm-chevron-left"
                            aria-label="Move Left"
                            onClick={(e) => { e.stopPropagation(); movePlayer('left') }}
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button
                            className="mm-chevron-btn mm-chevron-right"
                            aria-label="Move Right"
                            onClick={(e) => { e.stopPropagation(); movePlayer('right') }}
                          >
                            <ChevronRight size={18} />
                          </button>
                        </>
                      )}
                    </>
                  )}

                  {/* Key Token (Screenshot 2) */}
                  {!isPlayerHere && isKeyHere && (
                    <div className="mm-key-icon" title="Collect Key">
                      🔑
                    </div>
                  )}

                  {/* Door Token (Screenshot 2) */}
                  {!isPlayerHere && isDoorHere && (
                    <div className="mm-door-icon" title="Exit Door">
                      🚪
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        {/* Bottom Status Bar (Screenshot 2 & 3) */}
        <div className="mm-bottom-bar">
          <div className="mm-bottom-left">
            <div className="mm-timer-circle" title="Time Remaining">
              {formatTime(timeLeft)}
            </div>

            <div className="mm-objective-text">
              <div>
                Collect <strong>{mazeData.keys.length} KEY</strong> then get to the <strong>DOOR</strong>
              </div>
              <div className="mm-attempts-counter">
                Attempts: {attempts}
              </div>
            </div>
          </div>

          <button
            className={`mm-show-solution-btn ${showSolution ? 'hide' : 'show'}`}
            onClick={() => setShowSolution(prev => !prev)}
          >
            {showSolution ? (
              <>
                <EyeOff size={16} /> Hide Solution
              </>
            ) : (
              <>
                <Eye size={16} /> Show Solution
              </>
            )}
          </button>
        </div>

        {/* Pre-Game Instructions Modal (Screenshot 1) */}
        {phase === 'INSTRUCTIONS' && (
          <div className="mm-instructions-overlay">
            <div className="mm-instructions-box">
              <h2 className="mm-instructions-title">MEMORY MAZE</h2>

              <div className="mm-instructions-body">
                <div>Move through the grid using up, down, left and right.</div>
                <div><strong>The walls are invisible.</strong></div>
                <div><strong>If you hit a wall, you will return to the beginning.</strong></div>
                <div>Remember where the walls are.</div>
                <div>Collect the <strong>KEY</strong> before entering the <strong>DOOR</strong>.</div>
                <div>Try to complete the maze in the <strong>fewest attempts</strong>.</div>
                <div style={{ fontStyle: 'italic', color: '#64748b' }}>You do not need to rush.</div>
              </div>

              <button
                className="mm-instructions-start-btn"
                onClick={() => setPhase('PLAYING')}
              >
                START
              </button>
            </div>
          </div>
        )}

        {/* Maze Solved! Modal (Screenshot 4) */}
        {phase === 'COMPLETED' && (
          <div className="mm-solved-overlay">
            <div className="mm-solved-box">
              <div className="mm-solved-trophy">
                <Trophy size={40} color="#f59e0b" />
              </div>

              <h2 className="mm-solved-title">Maze Solved!</h2>
              <p className="mm-solved-subtitle">
                You learned the invisible walls and unlocked the door.
              </p>

              {/* 3 Stacked Stat Cards */}
              <div className="mm-solved-stats-stack">
                <div className="mm-solved-stat-item">
                  <span className="mm-solved-stat-val orange">{attempts}</span>
                  <span className="mm-solved-stat-lbl">ATTEMPTS</span>
                </div>

                <div className="mm-solved-stat-item">
                  <span className="mm-solved-stat-val white">{timeTaken}s</span>
                  <span className="mm-solved-stat-lbl">TIME TAKEN</span>
                </div>

                <div className="mm-solved-stat-item">
                  <span className="mm-solved-stat-val sky">{finalScore}</span>
                  <span className="mm-solved-stat-lbl">SCORE</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mm-solved-actions">
                <button
                  className="mm-solved-play-btn"
                  onClick={() => loadMaze(activeVariant, true)}
                >
                  Play Again
                </button>

                <button
                  className="mm-solved-review-btn"
                  onClick={() => {
                    setShowSolution(true)
                    setPhase('PLAYING')
                  }}
                >
                  <Eye size={16} /> Review Solution
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Timeout Modal */}
        {phase === 'TIMEOUT' && (
          <div className="mm-solved-overlay">
            <div className="mm-solved-box">
              <div style={{ fontSize: 44 }}>⚠️</div>

              <h2 className="mm-solved-title">Time Expired</h2>
              <p className="mm-solved-subtitle">
                The countdown reached 0. Review the shortest solution path below to improve your spatial pathing.
              </p>

              <div className="mm-solved-stats-stack">
                <div className="mm-solved-stat-item">
                  <span className="mm-solved-stat-val orange">{attempts}</span>
                  <span className="mm-solved-stat-lbl">WALL HITS</span>
                </div>

                <div className="mm-solved-stat-item">
                  <span className="mm-solved-stat-val white">{collectedKeys.length}/{mazeData.keys.length}</span>
                  <span className="mm-solved-stat-lbl">KEYS FOUND</span>
                </div>
              </div>

              <div className="mm-solved-actions">
                <button
                  className="mm-solved-play-btn"
                  onClick={() => loadMaze(activeVariant, true)}
                >
                  <RotateCcw size={16} /> Try Again
                </button>

                <button
                  className="mm-solved-review-btn"
                  onClick={() => {
                    setShowSolution(true)
                    setPhase('PLAYING')
                  }}
                >
                  <Eye size={16} /> Review Solution
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
