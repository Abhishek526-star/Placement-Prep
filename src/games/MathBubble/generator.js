// src/games/MathBubble/generator.js
// Exact question generator for Accenture Math Bubble Assessment

const FRACTION_PAIRS = [
  { text: '½', value: 0.5, aria: 'half' },
  { text: '¼', value: 0.25, aria: 'one quarter' },
  { text: '¾', value: 0.75, aria: 'three quarters' },
  { text: '⅖', value: 0.4, aria: 'two fifths' },
  { text: '⅗', value: 0.6, aria: 'three fifths' },
  { text: '⅘', value: 0.8, aria: 'four fifths' },
  { text: '⅓', value: 0.333, aria: 'one third' },
  { text: '⅔', value: 0.667, aria: 'two thirds' },
  { text: '⅛', value: 0.125, aria: 'one eighth' },
]

export const LAYOUT_PRESETS = [
  // Triangle inverted
  [
    { left: '26%', top: '34%', transform: 'translate(-50%, -50%)' },
    { left: '74%', top: '34%', transform: 'translate(-50%, -50%)' },
    { left: '50%', top: '72%', transform: 'translate(-50%, -50%)' },
  ],
  // Triangle upward
  [
    { left: '50%', top: '28%', transform: 'translate(-50%, -50%)' },
    { left: '25%', top: '68%', transform: 'translate(-50%, -50%)' },
    { left: '75%', top: '68%', transform: 'translate(-50%, -50%)' },
  ],
  // Staggered Diagonal
  [
    { left: '24%', top: '50%', transform: 'translate(-50%, -50%)' },
    { left: '52%', top: '32%', transform: 'translate(-50%, -50%)' },
    { left: '76%', top: '68%', transform: 'translate(-50%, -50%)' },
  ],
  // Alternating Arc
  [
    { left: '28%', top: '64%', transform: 'translate(-50%, -50%)' },
    { left: '50%', top: '36%', transform: 'translate(-50%, -50%)' },
    { left: '72%', top: '64%', transform: 'translate(-50%, -50%)' },
  ],
]

export function getSetTotalQuestions(setNumber = 1) {
  return setNumber >= 6 ? 24 : 15
}

export function getSetTimeLimit(setNumber = 1) {
  return setNumber >= 6 ? 14 : 15
}

function getDifficultyForSet(setNumber) {
  if (setNumber <= 2) return 'easy'
  if (setNumber <= 4) return 'medium'
  if (setNumber === 5) return 'hard'
  return 'expert'
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateSingleBubble(difficulty) {
  const useFraction = (difficulty === 'hard' || difficulty === 'expert') && Math.random() < 0.4
  const useDecimal = (difficulty === 'medium' || difficulty === 'hard') && Math.random() < 0.35

  const operators = difficulty === 'easy'
    ? ['+', '-']
    : difficulty === 'medium'
    ? ['+', '-', '×']
    : ['+', '-', '×', '÷']

  const op = operators[Math.floor(Math.random() * operators.length)]

  if (useFraction) {
    const frac = FRACTION_PAIRS[Math.floor(Math.random() * FRACTION_PAIRS.length)]
    if (op === '+') {
      const intVal = randInt(1, 10)
      return {
        expression: `${intVal} + ${frac.text}`,
        value: Number((intVal + frac.value).toFixed(3)),
        aria: `${intVal} plus ${frac.aria}`
      }
    } else if (op === '×') {
      const mul = [2, 4, 8, 10, 12, 16][randInt(0, 5)]
      return {
        expression: `${frac.text} × ${mul}`,
        value: Number((frac.value * mul).toFixed(3)),
        aria: `${frac.aria} multiplied by ${mul}`
      }
    }
  }

  if (useDecimal) {
    if (op === '+') {
      const a = Number((randInt(1, 9) + 0.5).toFixed(1))
      const b = randInt(1, 9)
      return {
        expression: `${a} + ${b}`,
        value: Number((a + b).toFixed(2)),
        aria: `${a} plus ${b}`
      }
    } else if (op === '-') {
      const a = randInt(5, 15)
      const b = Number((randInt(1, 4) + 0.5).toFixed(1))
      return {
        expression: `${a} − ${b}`,
        value: Number((a - b).toFixed(2)),
        aria: `${a} minus ${b}`
      }
    }
  }

  // Integer arithmetic
  if (op === '+') {
    const maxVal = difficulty === 'easy' ? 12 : 25
    const a = randInt(1, maxVal)
    const b = randInt(1, maxVal)
    return {
      expression: `${a} + ${b}`,
      value: a + b,
      aria: `${a} plus ${b}`
    }
  }

  if (op === '-') {
    const maxVal = difficulty === 'easy' ? 20 : 40
    const a = randInt(6, maxVal)
    const b = randInt(1, a - 1)
    return {
      expression: `${a} − ${b}`,
      value: a - b,
      aria: `${a} minus ${b}`
    }
  }

  if (op === '×') {
    const a = randInt(2, 9)
    const b = randInt(2, 9)
    return {
      expression: `${a} × ${b}`,
      value: a * b,
      aria: `${a} times ${b}`
    }
  }

  // op === '÷'
  const b = randInt(2, 8)
  const mul = randInt(2, 8)
  const a = b * mul
  return {
    expression: `${a} ÷ ${b}`,
    value: mul,
    aria: `${a} divided by ${b}`
  }
}

export function generateMathQuestion(setNumber = 1, questionNumber = 1, totalQuestions = 15) {
  const difficulty = getDifficultyForSet(setNumber)
  const timeLimit = getSetTimeLimit(setNumber)

  for (let attempt = 0; attempt < 50; attempt++) {
    const b1 = generateSingleBubble(difficulty)
    const b2 = generateSingleBubble(difficulty)
    const b3 = generateSingleBubble(difficulty)

    // Separation check: all 3 values must differ by at least 0.2
    const diff12 = Math.abs(b1.value - b2.value)
    const diff23 = Math.abs(b2.value - b3.value)
    const diff13 = Math.abs(b1.value - b3.value)

    if (diff12 >= 0.2 && diff23 >= 0.2 && diff13 >= 0.2) {
      const layout = LAYOUT_PRESETS[Math.floor(Math.random() * LAYOUT_PRESETS.length)]
      const bubbles = [
        { id: 'b1', ...b1, position: layout[0] },
        { id: 'b2', ...b2, position: layout[1] },
        { id: 'b3', ...b3, position: layout[2] },
      ]

      const answers = [b1.value, b2.value, b3.value]
      const sortedAnswers = [...answers].sort((x, y) => x - y)

      return {
        id: `q_set${setNumber}_${questionNumber}_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        setNumber,
        questionNumber,
        totalQuestions,
        difficulty,
        bubbles,
        expressions: [b1.expression, b2.expression, b3.expression],
        answers,
        sortedAnswers,
        timeLimit
      }
    }
  }

  // Fallback fixed valid question if generation retries exceed
  const fallbackLayout = LAYOUT_PRESETS[0]
  return {
    id: `q_set${setNumber}_${questionNumber}_fallback`,
    setNumber,
    questionNumber,
    totalQuestions,
    difficulty,
    bubbles: [
      { id: 'b1', expression: '2.5 + 1.5', value: 4, aria: '2.5 plus 1.5', position: fallbackLayout[0] },
      { id: 'b2', expression: '½ × 16', value: 8, aria: 'half times 16', position: fallbackLayout[1] },
      { id: 'b3', expression: '15 − 3', value: 12, aria: '15 minus 3', position: fallbackLayout[2] },
    ],
    expressions: ['2.5 + 1.5', '½ × 16', '15 − 3'],
    answers: [4, 8, 12],
    sortedAnswers: [4, 8, 12],
    timeLimit
  }
}

export function generateQuestionSet(setNumber = 1, totalQuestions = null) {
  const count = totalQuestions || getSetTotalQuestions(setNumber)
  const questions = []
  const signatures = new Set()

  for (let i = 1; i <= count; i++) {
    let q = null
    for (let attempt = 0; attempt < 50; attempt++) {
      const candidate = generateMathQuestion(setNumber, i, count)
      const sig = [...candidate.expressions].sort().join(' | ')
      if (!signatures.has(sig)) {
        signatures.add(sig)
        q = candidate
        break
      }
    }
    if (!q) {
      q = generateMathQuestion(setNumber, i, count)
    }
    questions.push(q)
  }

  return questions
}

export const generateBubbleQuestion = generateMathQuestion
