# scoring.js (MathBubble) — Documentation

**Source:** `src/games/MathBubble/scoring.js`
**Consumers:** MathBubble.jsx.

## Purpose
Point rules for the Math Bubble game.

## Exports

### `MATH_SCORING` (constants)
| Key | Value | Meaning |
|---|---|---|
| `CORRECT_SELECTION` | `100` | awarded when ascending order is correct |
| `QUESTION_COMPLETED` | `250` | bonus for completing a question correctly |
| `INCORRECT_SELECTION` | `-50` | penalty for wrong order |
| `SPEED_BONUS_MAX` | `150` | max speed bonus |

### `calculateMathScore({ isCorrect, isQuestionComplete, timeRemaining = 0, maxTime = 15, currentStreak = 0 }) => number`

**Formula**
- Correct: `100`
  - Streak bonus (if `currentStreak >= 3`): `+ min(currentStreak × 15, 100)`
  - Question complete: `+ 250`
  - Speed bonus: `+ round((timeRemaining / maxTime) × 150)`
- Incorrect: `-50`

**Examples**
- Correct, full time left (15/15), streak 5, complete:
  100 + 75 (streak) + 250 + 150 = **575**
- Wrong order: **−50**
- Timeout (`isCorrect: false`): **−50** (MathBubble sends `totalScore: 0` for pure timeouts)
