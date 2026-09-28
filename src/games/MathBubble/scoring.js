// src/games/MathBubble/scoring.js
// Exact scoring formulas for Accenture Math Bubble Assessment

export const MATH_SCORING = {
  CORRECT_SELECTION: 100,
  QUESTION_COMPLETED: 250,
  INCORRECT_SELECTION: -50,
  SPEED_BONUS_MAX: 150,
}

export function calculateMathScore({
  isCorrect,
  isQuestionComplete = false,
  timeRemaining = 0,
  maxTime = 15,
  currentStreak = 0
}) {
  if (!isCorrect) {
    return MATH_SCORING.INCORRECT_SELECTION
  }

  let total = MATH_SCORING.CORRECT_SELECTION

  // Streak bonus for streak >= 3
  if (currentStreak >= 3) {
    total += Math.min(currentStreak * 15, 100)
  }

  // Question completed bonus
  if (isQuestionComplete) {
    total += MATH_SCORING.QUESTION_COMPLETED
  }

  // Speed bonus
  const ratio = Math.max(0, Math.min(1, timeRemaining / (maxTime || 15)))
  const speedBonus = Math.round(ratio * MATH_SCORING.SPEED_BONUS_MAX)
  total += speedBonus

  return total
}
