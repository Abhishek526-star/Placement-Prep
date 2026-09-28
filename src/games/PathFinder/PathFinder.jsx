// src/games/PathFinder/PathFinder.jsx
// Interactive Accenture Path Finder Cognitive Game component

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import {
  RotateCw, Repeat, Check, Lightbulb, ChevronLeft, ChevronRight,
  Trophy, RotateCcw, AlertCircle, CheckCircle2, ArrowRight
} from 'lucide-react'
import {
  rotateBlock, flipBlock, validate, solve, cloneBlocks
} from './pathFinderLogic'
import { VARIANTS } from './pathFinderData'
import './PathFinder.css'

const INSTRUCTION_SLIDES = [
  'This practice exercise will provide you with instructions and practice items for a task designed to measure Image rotation ability.\n\nPlease take the time to read the instructions carefully and use the practice items to familiarize yourself with the task.',
  'Your goal is to create a path from the icon on the left to the icon on the right by rotating the tiles and changing the arrow directions. You should try to generate a path in the least number of moves.',
  'Tap or click on a tile to select it.',
  'Tap or click 🗘 to rotate the tile clockwise.',
  'Tap or click ⇆ to change the direction of the route.',
  'Arrow directions can point left, right, up, down, and around any angles of the tile path.',
  'Once the route is complete, select ✓. If you have successfully created a path, the task is complete. If you have not successfully created a path, you will be able to try again.',
  'Your goal is to create a valid path in the least number of moves. You do not need to rush. However, if you have been unable to find a valid path within the time limit, you will progress automatically to the next question.\n\nA timer is located at the bottom of the screen to indicate time remaining.',
  'The practice exercise will have 2 grids to solve.\n\nThe first grid will be one that you can replay, so you should take this opportunity to practice how to rotate and change arrow directions for all types of tile patterns.'
]

const ARROW_ROT = {
  right: 0,
  down: 90,
  left: 180,
  up: 270,
  upright: -45,
  downright: 45,
  downleft: 135,
  upleft: -135
}

function ArrowSvg({ dir, cellSize }) {
  if (!dir) return null
  const deg = ARROW_ROT[dir] ?? 0
  const size = Math.max(12, Math.round(cellSize * 0.52))
  return (
    <svg
      className="pf-arrow-svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ transform: `rotate(${deg}deg)` }}
    >
      <path
        d="M5 12h11M13 7l5 5-5 5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StartIcon({ size }) {
  return (
    <svg viewBox="0 0 40 40" style={{ width: size, height: size }} className="pf-side-icon">
      <path
        fill="currentColor"
        d="M8 22c0-6 4-12 12-14 0 0-2 6-2 10l4 2 4-2c0-4-2-10-2-10 8 2 12 8 12 14 0 2-1 4-2 5l2 3H8l2-3c-1-1-2-3-2-5z"
      />
      <circle cx="20" cy="14" r="3" fill="currentColor" />
    </svg>
  )
}

function EndIcon({ size }) {
  return (
    <svg viewBox="0 0 40 40" style={{ width: size, height: size }} className="pf-side-icon">
      <circle cx="18" cy="20" r="12" fill="currentColor" />
      <circle cx="14" cy="16" r="3" fill="#cbd5e1" opacity="0.65" />
      <circle cx="22" cy="23" r="2" fill="#cbd5e1" opacity="0.65" />
      <circle cx="30" cy="12" r="4" fill="currentColor" />
    </svg>
  )
}

export default function PathFinder({
  initialVariant = '3x3',
  onSaveSession,
  onFinishGame
}) {
  const [variantId, setVariantId] = useState(initialVariant)
  const [stage, setStage] = useState('instructions') // 'instructions' | 'practice' | 'game' | 'results'
  const [slide, setSlide] = useState(0)
  const [gameIndex, setGameIndex] = useState(0)

  // Current variant reference
  const currentVariant = useMemo(() => {
    return VARIANTS.find(v => v.id === variantId) || VARIANTS[0]
  }, [variantId])

  // Board state
  const [activePuzzle, setActivePuzzle] = useState(null)
  const [blocks, setBlocks] = useState([])
  const [selectedBlockId, setSelectedBlockId] = useState(null)
  const [moves, setMoves] = useState(0)
  const [seconds, setSeconds] = useState(240)
  const [highlightCells, setHighlightCells] = useState([])
  const [isShaking, setIsShaking] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [successModal, setSuccessModal] = useState(null)
  const [solutionModal, setSolutionModal] = useState(null)

  // Accumulated metrics
  const [totalScore, setTotalScore] = useState(0)
  const [totalMoves, setTotalMoves] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())

  // Cell dimensions
  const blocksCount = activePuzzle ? activePuzzle.blocksCount : 3
  const cellSize = blocksCount === 5 ? 20 : blocksCount === 4 ? 28 : 42
  const iconSize = Math.max(26, Math.min(38, cellSize - 2))

  // Initialize board for given puzzle
  const initBoard = useCallback((puzzle) => {
    setActivePuzzle(puzzle)
    setBlocks(cloneBlocks(puzzle.blocks))
    setSelectedBlockId(null)
    setMoves(0)
    setSeconds(puzzle.timeLimit || 240)
    setHighlightCells([])
    setIsShaking(false)
    setIsAnimating(false)
    setSuccessModal(null)
    setSolutionModal(null)
    setStartTime(Date.now())
  }, [])

  // Start practice stage
  const startPractice = useCallback(() => {
    setStage('practice')
    initBoard(currentVariant.data.practice)
  }, [currentVariant, initBoard])

  // Start official game stage
  const startGame = useCallback(() => {
    setStage('game')
    setGameIndex(0)
    setTotalScore(0)
    setTotalMoves(0)
    initBoard(currentVariant.data.games[0])
  }, [currentVariant, initBoard])

  // Change variant
  const handleSelectVariant = (id) => {
    setVariantId(id)
    setStage('instructions')
    setSlide(0)
  }

  // Timer tick
  useEffect(() => {
    if (stage !== 'practice' && stage !== 'game') return
    if (isAnimating || successModal || solutionModal) return

    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          handleTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [stage, isAnimating, successModal, solutionModal])

  // Handle time up
  const handleTimeUp = () => {
    if (stage === 'practice') {
      startGame()
    } else {
      advanceGame(0, false)
    }
  }

  // Cell click -> select block
  const handleCellClick = (blockId) => {
    if (isAnimating) return
    setSelectedBlockId(blockId)
  }

  // Rotate selected block (90 deg CW)
  const handleRotate = () => {
    if (!selectedBlockId || isAnimating) return
    setBlocks(prev =>
      prev.map(b => (b.id === selectedBlockId ? rotateBlock(b) : b))
    )
    setMoves(m => m + 1)
  }

  // Flip selected block (reverse route direction)
  const handleFlip = () => {
    if (!selectedBlockId || isAnimating) return
    setBlocks(prev =>
      prev.map(b => (b.id === selectedBlockId ? flipBlock(b) : b))
    )
    setMoves(m => m + 1)
  }

  // Submit and validate
  const handleSubmit = () => {
    if (!activePuzzle || isAnimating) return
    const res = validate(activePuzzle, blocks)

    if (!res.valid) {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 450)
      return
    }

    // Solution is valid: animate path sequentially
    setIsAnimating(true)
    const path = res.path || []
    setHighlightCells([])

    let step = 0
    const stepInterval = setInterval(() => {
      if (step < path.length) {
        const c = path[step]
        setHighlightCells(prev => [...prev, `${c.row},${c.col}`])
        step++
      } else {
        clearInterval(stepInterval)
        setTimeout(() => {
          setIsAnimating(false)
          handleRoundSolved(moves)
        }, 400)
      }
    }, 240)
  }

  // Handle solved
  const handleRoundSolved = (movesTaken) => {
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000))
    const earnedScore = Math.max(0, 100 - 2 * movesTaken)

    // Save session telemetry to database/service
    if (onSaveSession) {
      onSaveSession({
        gameType: 'path_finder',
        variant: variantId,
        score: earnedScore,
        timeTaken: timeSpent,
        attempts: movesTaken,
        solved: true,
        details: {
          variantName: currentVariant.label,
          gridSize: activePuzzle.gridSize,
          moves: movesTaken,
          minMoves: activePuzzle.minMoves,
          stage,
          gameIndex: stage === 'game' ? gameIndex + 1 : 1,
          totalGames: stage === 'game' ? currentVariant.data.games.length : 1
        }
      })
    }

    setSuccessModal({
      moves: movesTaken,
      score: earnedScore,
      timeTaken: timeSpent
    })
  }

  // Advance game or finish
  const advanceGame = (earnedScore, solved = true) => {
    const nextTotalScore = totalScore + earnedScore
    const nextTotalMoves = totalMoves + moves
    setTotalScore(nextTotalScore)
    setTotalMoves(nextTotalMoves)

    const totalGames = currentVariant.data.games.length
    const nextIndex = gameIndex + 1

    if (nextIndex < totalGames) {
      setGameIndex(nextIndex)
      initBoard(currentVariant.data.games[nextIndex])
    } else {
      setStage('results')
      if (onFinishGame) {
        onFinishGame({
          totalScore: nextTotalScore,
          totalMoves: nextTotalMoves,
          variantId
        })
      }
    }
  }

  // Show DFS Solution
  const handleShowSolution = () => {
    if (!activePuzzle || isAnimating) return
    const sol = solve(activePuzzle, blocks)
    if (!sol || !sol.valid) {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 450)
      return
    }

    const hlSet = new Set(sol.path.map(p => `${p.row},${p.col}`))
    setSolutionModal({
      blocks: sol.blocks,
      hlSet,
      pathLength: sol.path.length
    })
  }

  // Instruction Slide Carousel
  const renderInstructions = () => {
    const isFirst = slide === 0
    const isLast = slide === INSTRUCTION_SLIDES.length - 1
    const showPreview = slide >= 1 && slide <= 7

    return (
      <div className="pf-instr-wrap">
        <div className="pf-instr-card">
          <p className="pf-instr-text">{INSTRUCTION_SLIDES[slide]}</p>

          {!isFirst && (
            <button
              className="pf-instr-nav prev"
              onClick={() => setSlide(s => Math.max(0, s - 1))}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {!isLast && (
            <button
              className="pf-instr-nav next"
              onClick={() => setSlide(s => Math.min(INSTRUCTION_SLIDES.length - 1, s + 1))}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div className="pf-dots">
            {INSTRUCTION_SLIDES.map((_, idx) => (
              <span
                key={idx}
                className={`pf-dot ${idx === slide ? 'on' : ''}`}
                onClick={() => setSlide(idx)}
              />
            ))}
          </div>

          <div className="pf-instr-actions">
            <button
              className="pf-dark-btn"
              onClick={() => {
                if (isLast) startPractice()
                else setSlide(s => s + 1)
              }}
            >
              {isLast ? 'Start Practice' : 'Next'}
              <ArrowRight size={16} />
            </button>

            {!isLast && (
              <button className="pf-skip-btn" onClick={startPractice}>
                Skip to Practice
              </button>
            )}
          </div>
        </div>

        {/* Board preview on slides 2..8 */}
        {showPreview && currentVariant?.data?.practice && (
          <div className="pf-preview">
            {renderBoard(currentVariant.data.practice.blocks, currentVariant.data.practice, 'block_1_1', [])}
          </div>
        )}
      </div>
    )
  }

  // Board Renderer
  const renderBoard = (renderBlocks, puzzle, selId, hlList) => {
    if (!puzzle) return null
    const n = puzzle.gridSize
    const hlSet = new Set(hlList)

    const cellMap = {}
    renderBlocks.forEach(b => {
      b.cells.forEach(c => {
        cellMap[`${c.row},${c.col}`] = { ...c, blockId: b.id }
      })
    })

    const startRow = puzzle.startCell.row
    const endRow = puzzle.endCell.row

    return (
      <div className="pf-boardrow">
        {/* Left Side: Start Icon */}
        <div
          className="pf-side"
          style={{
            width: iconSize + 8,
            height: n * cellSize,
            paddingTop: startRow * cellSize + (cellSize - iconSize) / 2
          }}
        >
          <StartIcon size={iconSize} />
        </div>

        {/* Center Grid */}
        <div className="pf-grid">
          <div
            className="pf-gridin"
            style={{
              gridTemplateColumns: `repeat(${n}, ${cellSize}px)`,
              gridTemplateRows: `repeat(${n}, ${cellSize}px)`
            }}
          >
            {Array.from({ length: n }).map((_, r) =>
              Array.from({ length: n }).map((__, c) => {
                const key = `${r},${c}`
                const cell = cellMap[key]
                const isDark = cell?.isDark
                const isSelected = selId && cell?.blockId === selId
                const isHl = hlSet.has(key)
                const isSepR = (c + 1) % 3 === 0 && c + 1 < n
                const isSepB = (r + 1) % 3 === 0 && r + 1 < n

                return (
                  <button
                    key={key}
                    type="button"
                    disabled={!isDark || isAnimating}
                    onClick={() => isDark && handleCellClick(cell.blockId)}
                    className={`pf-cell ${isDark ? 'dark' : ''} ${isSelected ? 'sel' : ''} ${isHl ? 'hl' : ''} ${isSepR ? 'sepr' : ''} ${isSepB ? 'sepb' : ''}`}
                    style={{ width: cellSize, height: cellSize }}
                  >
                    {isDark && cell?.arrow && (
                      <ArrowSvg dir={cell.arrow} cellSize={cellSize} />
                    )}
                  </button>
                )
              })
            )}
          </div>
        </div>

        {/* Right Side: End Icon */}
        <div
          className="pf-side"
          style={{
            width: iconSize + 8,
            height: n * cellSize,
            paddingTop: endRow * cellSize + (cellSize - iconSize) / 2
          }}
        >
          <EndIcon size={iconSize} />
        </div>
      </div>
    )
  }

  // Timer ring math
  const timeLimit = activePuzzle?.timeLimit || 240
  const timerRadius = 22
  const timerCircumference = 2 * Math.PI * timerRadius
  const timerOffset = timerCircumference - (seconds / timeLimit) * timerCircumference
  const isTimeCritical = seconds <= 60
  const timerColor = isTimeCritical ? '#dc2626' : '#f97316'

  // Format time mm:ss
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  return (
    <div className="pf-container">
      {/* Variant Selector Tabs */}
      <div className="pf-tabs" role="tablist">
        {VARIANTS.map(v => (
          <button
            key={v.id}
            role="tab"
            aria-selected={variantId === v.id}
            className={`pf-tab ${variantId === v.id ? 'on' : ''}`}
            onClick={() => handleSelectVariant(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Main Playing Card */}
      <div className="pf-card">
        <div className="pf-stage">
          {stage === 'instructions' && renderInstructions()}

          {(stage === 'practice' || stage === 'game') && activePuzzle && (
            <div className="pf-game-wrap">
              {/* Section & Stage Header */}
              {stage === 'game' && currentVariant.data.games.length > 1 && (
                <div className="pf-section">
                  Section 2 of 2 — Puzzle {gameIndex + 1} of {currentVariant.data.games.length}{' '}
                  <span className="pf-sectiondots">
                    {Array.from({ length: currentVariant.data.games.length }).map((_, i) =>
                      i === gameIndex ? '● ' : '○ '
                    )}
                  </span>
                </div>
              )}

              {/* Game Board Box */}
              <div className={`pf-boardbox ${isShaking ? 'shake' : ''}`}>
                {renderBoard(blocks, activePuzzle, selectedBlockId, highlightCells)}
              </div>

              {/* Controls Bar */}
              <div className="pf-controls">
                {/* Timer Ring */}
                <div className="pf-timer-ring-wrap" title="Time remaining">
                  <svg className="pf-timer-ring-svg" width="54" height="54">
                    <circle
                      cx="27"
                      cy="27"
                      r={timerRadius}
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="27"
                      cy="27"
                      r={timerRadius}
                      fill="none"
                      stroke={timerColor}
                      strokeWidth="3.5"
                      strokeDasharray={timerCircumference}
                      strokeDashoffset={timerOffset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="pf-timetext" style={{ color: isTimeCritical ? '#dc2626' : undefined }}>
                    {formatTime(seconds)}
                  </span>
                </div>

                {/* Rotate 90 CW */}
                <button
                  className="pf-ctl"
                  disabled={!selectedBlockId || isAnimating}
                  onClick={handleRotate}
                  title="Rotate selected tile 90° clockwise"
                >
                  <RotateCw size={20} />
                </button>

                {/* Flip route direction */}
                <button
                  className="pf-ctl"
                  disabled={!selectedBlockId || isAnimating}
                  onClick={handleFlip}
                  title="Change direction of route (Flip)"
                >
                  <Repeat size={20} />
                </button>

                {/* Submit / Validate */}
                <button
                  className="pf-ctl pf-submit"
                  disabled={isAnimating}
                  onClick={handleSubmit}
                  title="Validate and submit path"
                >
                  <Check size={20} />
                  <span>Submit</span>
                </button>

                {/* Show Solution (enabled in practice) */}
                {stage === 'practice' && (
                  <button
                    className="pf-ctl pf-solution"
                    disabled={isAnimating}
                    onClick={handleShowSolution}
                    title="Preview valid solution"
                  >
                    <Lightbulb size={20} />
                  </button>
                )}
              </div>

              {/* Moves & Instruction Hint */}
              <div className="pf-meta">
                <span className="pf-moves">
                  Moves: <strong>{moves}</strong>
                  {activePuzzle.minMoves ? ` (Target: ${activePuzzle.minMoves})` : ''}
                </span>
              </div>
            </div>
          )}

          {/* Results Screen */}
          {stage === 'results' && (
            <div className="pf-results">
              <div className="pf-modal-ic" style={{ background: '#fef3c7', color: '#d97706' }}>
                <Trophy size={32} />
              </div>
              <h2>Assessment Complete!</h2>
              <p>You successfully navigated and solved all stages for {currentVariant.label}.</p>

              <div className="pf-stats-grid">
                <div className="pf-stat-box">
                  <span className="pf-stat-label">Total Score</span>
                  <span className="pf-stat-val" style={{ color: '#16a34a' }}>{totalScore}</span>
                </div>
                <div className="pf-stat-box">
                  <span className="pf-stat-label">Total Moves</span>
                  <span className="pf-stat-val">{totalMoves}</span>
                </div>
              </div>

              <div className="pf-results-actions">
                <button className="pf-continue-btn" onClick={startPractice}>
                  <RotateCcw size={18} />
                  <span>Practice Again</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {successModal && (
        <div className="pf-modal-backdrop">
          <div className="pf-modal-card">
            <div className="pf-modal-ic">
              <CheckCircle2 size={34} />
            </div>
            <h3 className="pf-modal-title">Great! You Found the Path</h3>
            <p className="pf-modal-desc">
              Solved in <strong>{successModal.moves}</strong> move(s) in {successModal.timeTaken}s.
              {stage === 'game' ? ` Round score: +${successModal.score} pts` : ''}
            </p>
            <button
              className="pf-continue-btn"
              onClick={() => {
                setSuccessModal(null)
                if (stage === 'practice') {
                  startGame()
                } else {
                  advanceGame(successModal.score)
                }
              }}
            >
              <span>{stage === 'practice' ? 'Enter Official Assessment' : 'Continue'}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Solution Preview Modal */}
      {solutionModal && activePuzzle && (
        <div className="pf-modal-backdrop" onClick={() => setSolutionModal(null)}>
          <div className="pf-modal-card pf-sol-card" onClick={e => e.stopPropagation()}>
            <h3 className="pf-modal-title">Solution Path</h3>
            <p className="pf-modal-desc">
              Path length: {solutionModal.pathLength} cells. This is one valid solution for this board.
            </p>
            <div className="pf-sol-board">
              {renderBoard(solutionModal.blocks, activePuzzle, null, Array.from(solutionModal.hlSet))}
            </div>
            <button className="pf-continue-btn" onClick={() => setSolutionModal(null)}>
              Close Solution
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
