// src/engines/assessment/index.js
// Assessment calculation and grading engine interface

export function calculateAssessmentScore(questions = [], answers = {}) {
  let score = 0
  let total = questions.length

  questions.forEach((q, idx) => {
    if (answers[idx] && q.correctAnswer && answers[idx] === q.correctAnswer) {
      score += 1
    }
  })

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0
  return {
    score,
    total,
    percentage,
    passed: percentage >= 60,
  }
}
