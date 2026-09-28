// src/pages/PathFinderPage.jsx
// Dedicated page for Accenture Cognitive Assessment: Path Finder

import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import PathFinder from '../games/PathFinder/PathFinder'
import GameHeader from '../components/cognitive/GameHeader'
import GameInstructions from '../components/cognitive/GameInstructions'
import { saveCognitiveSessionToDB } from '../services/cognitiveService'
import '../components/cognitive/cognitive.css'

export default function PathFinderPage() {
  const { companySlug = 'accenture' } = useParams()
  const [searchParams] = useSearchParams()

  const variantParam = searchParams.get('variant') || '3x3'
  const [accumulatedScore, setAccumulatedScore] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [showInstructions, setShowInstructions] = useState(false)

  const handleSaveSession = async (sessionData) => {
    // sessionData: { gameType: 'path_finder', variant, score, timeTaken, attempts, solved, details }
    setAccumulatedScore(prev => prev + (sessionData.score || 0))

    await saveCognitiveSessionToDB({
      gameType: 'path_finder',
      variant: sessionData.variant || variantParam,
      variantName: sessionData.details?.variantName || '3×3 Standard',
      gridSize: sessionData.details?.gridSize || 9,
      score: sessionData.score || 0,
      timeTaken: sessionData.timeTaken || 0,
      attempts: sessionData.attempts || 0,
      solved: sessionData.solved ?? true,
      details: {
        ...sessionData.details,
        companySlug
      }
    })
  }

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '16px 20px', width: '100%' }}>
      {/* Game Header with brand badge, accumulated score, sound toggle, instructions */}
      <GameHeader
        title="Path Finder Assessment – Cognitive Practice"
        subtitle="Accenture-Style Cognitive Round • Spatial Image Rotation"
        score={accumulatedScore}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(prev => !prev)}
        onOpenRules={() => setShowInstructions(true)}
        backUrl={`/${companySlug}/cognitive`}
      />

      {/* Interactive Path Finder Engine */}
      <PathFinder
        initialVariant={variantParam}
        onSaveSession={handleSaveSession}
      />

      {/* On-Demand Instructions Modal */}
      <GameInstructions
        gameType="path_finder"
        isOpen={showInstructions}
        onStart={() => setShowInstructions(false)}
      />
    </div>
  )
}
