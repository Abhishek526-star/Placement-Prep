// src/pages/MemoryMazePage.jsx
// Memory Maze Spatial Memory Game Page for Accenture Cognitive Round

import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import MemoryMaze from '../games/MemoryMaze/MemoryMaze'
import { MEMORY_MAZE_VARIANTS } from '../games/MemoryMaze/mazeGenerator'
import GameHeader from '../components/cognitive/GameHeader'
import GameInstructions from '../components/cognitive/GameInstructions'
import { saveCognitiveSessionToDB } from '../services/cognitiveService'
import '../components/cognitive/cognitive.css'

export default function MemoryMazePage() {
  const { companySlug = 'accenture' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const variantParam = searchParams.get('variant') || 'find-the-key'
  const [activeVariant, setActiveVariant] = useState(variantParam)
  const [accumulatedScore, setAccumulatedScore] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [showInstructions, setShowInstructions] = useState(false)

  const handleVariantChange = (newVariant) => {
    setActiveVariant(newVariant)
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      next.set('variant', newVariant)
      return next
    })
  }

  const handleComplete = async (result) => {
    // result: { gameType: 'memory_maze', variant, score, timeTaken, attempts, solved }
    setAccumulatedScore(prev => prev + (result.score || 0))

    const variantKey = result.variant || activeVariant
    const variantObj = MEMORY_MAZE_VARIANTS[variantKey]

    await saveCognitiveSessionToDB({
      gameType: 'memory_maze',
      variant: variantKey,
      variantName: variantObj?.name || 'Find the Key',
      gridSize: variantObj?.gridSize || 3,
      keyCount: variantObj?.keyCount || 1,
      score: result.score || 0,
      timeTaken: result.timeTaken || 0,
      attempts: result.attempts || 0,
      solved: result.solved ?? true
    })
  }

  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '16px 20px', width: '100%' }}>
      {/* Game Header matching Screenshot 1 & 2 */}
      <GameHeader
        title="Memory Assessment Game – Cognitive Practice"
        subtitle="Accenture-Style Cognitive Round • Memory Maze Game"
        score={accumulatedScore}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(prev => !prev)}
        onOpenRules={() => setShowInstructions(true)}
        backUrl={`/${companySlug}/cognitive`}
      />

      {/* Maze Engine with built-in initial rules modal, variant pills, and solution mode */}
      <MemoryMaze
        variantKey={activeVariant}
        onVariantChange={handleVariantChange}
        onComplete={handleComplete}
        isMock={false}
      />

      {/* On-Demand Instructions Modal */}
      <GameInstructions
        gameType="memory_maze"
        isOpen={showInstructions}
        onStart={() => setShowInstructions(false)}
      />
    </div>
  )
}
