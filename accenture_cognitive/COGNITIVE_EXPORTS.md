# COGNITIVE_EXPORTS.md — Cognitive Logic Export Reference

Complete reference of every export from the cognitive module's logic files, with
signatures, return shapes, and where they are consumed.

---

## 1. `src/utils/cognitiveStorage.js`

Internal singleton: `cognitiveStorage` — localStorage wrapper, key prefix
`'frontend-assessment-cognitive-'`.

| Export | Signature | Returns | Consumers |
|---|---|---|---|
| `cognitiveStorage` | object (get/set, getStreak, updateStreakActivity, getDailyChallengeStatus, updateDailyChallenge, getSessionsHistory, saveSessionResult, getBestScores, updateBestScore) | – | internal + stats |
| `getCognitiveStats()` | `() => Stats` | `{ totalXP, gamesPlayed, accuracy, bestScores: { memory_maze, math_bubble, path_finder, full_assessment }, streak, recentSessions }` | CognitiveDashboard, CognitiveResults |
| `saveSessionResult(session)` | `(session: { gameType, score, accuracy?, timeTaken?, ... }) => savedSession` | Adds `id: 'sess_<ts>'`, `timestamp`; updates best score per `gameType` (`memory_maze` \| `math_bubble` \| `path_finder` \| `full_assessment`/`full_cognitive_mock`); dispatches `window` event `accenture-activity-updated` | MathBubblePage, MemoryMazePage |
| `getDailyChallenge()` | `() => { game: 'math_bubble'\|'path_finder', streak, completed }` | Alternates game by day-of-month parity (`day % 2`) | DailyChallengeCard |
| `updateDailyChallenge(game)` | `(game) => status` | Marks `mathCompleted` / `pathCompleted` true; sets `allCompleted` when both | MathBubblePage (daily mode) |

**localStorage keys** (prefixed `frontend-assessment-cognitive-`):
`streak`, `daily-challenge`, `sessions-history` (last 30), `best-scores`.

## 2. `src/games/MathBubble/generator.js`

| Export | Signature | Returns | Consumers |
|---|---|---|---|
| `generateMathQuestion(setNumber, questionNumber, totalQuestions)` | see `generateBubbleQuestion` | `Question` | generateQuestionSet |
| `generateQuestionSet(setNumber = 1, totalQuestions = null)` | `() => Question[]` | Set of 15 (sets 1–5) or 24 (sets 6–7) unique questions, enforced by sorted-expression signature retry (≤100 attempts) | MathBubblePage, FullCognitiveMock (`generateQuestionSet(2, 15)`) |
| `getSetTotalQuestions(setNumber = 1)` | `() => 24 \| 15` | – | MathBubblePage |
| `getSetTimeLimit(setNumber = 1)` | `() => 14 \| 15` | seconds per question | generator internals / pages |
| `generateBubbleQuestion` | alias of `generateMathQuestion` | – | – |

**Question shape:**
```js
{
  id: 'q_set1_1_<ts>_<rand>',
  setNumber, questionNumber, difficulty: 'easy'|'medium'|'hard'|'expert',
  bubbles: [ // EXACTLY 3
    { id: 'b1', expression: '½ + ¾', value: 1.25, aria: '...', position: { left, top, transform } }
  ],
  expressions: ['...','...','...'],
  answers: [v1, v2, v3],          // unsorted
  sortedAnswers: [low, mid, high],// ascending
  timeLimit: 15 | 14
}
```
Constraints: exactly 3 bubbles; each = 2 operands + 1 operator (+ − × ÷, unicode
fractions ½ ¾ ⅔ ⅛ …); unique values with separation ≥ 0.2; non-repeating within a set.

## 3. `src/games/MathBubble/scoring.js`

| Export | Value / Signature | Notes |
|---|---|---|
| `MATH_SCORING.CORRECT_SELECTION` | `100` | per correct answer |
| `MATH_SCORING.QUESTION_COMPLETED` | `250` | all 3 picked ascending |
| `MATH_SCORING.INCORRECT_SELECTION` | `-50` | wrong order / timeout |
| `MATH_SCORING.SPEED_BONUS_MAX` | `150` | scaled by `timeRemaining / maxTime` |
| `calculateMathScore({ isCorrect, isQuestionComplete, timeRemaining = 0, maxTime = 15, currentStreak = 0 })` | `=> number` | streak ≥ 3 adds `min(streak × 15, 100)`; wrong answers always −50 |

Consumers: `MathBubble.jsx` (per answer).

## 4. `src/games/MemoryMaze/mazeGenerator.js`

| Export | Signature | Returns | Consumers |
|---|---|---|---|
| `MEMORY_MAZE_VARIANTS` | `{ 'find-the-key': { id, gridSize, timeLimit, ... }, ... }` | variant configs | MemoryMaze.jsx (variant nav), MemoryMazePage |
| `generateMemoryMaze(variantKey = 'find-the-key')` | `() => { variant, size, cells, start, keys, door, solution }` | Validated, 100% solvable maze; falls back to `computeOptimalSolution` path on validation failure | MemoryMaze.jsx |

`cells[r][c]` = `{ walls: { top, bottom, left, right }, ... }` per-cell wall map.

## 5. `src/utils/achievements.js`

| Export | Signature | Notes |
|---|---|---|
| `ACHIEVEMENTS_LIST` | `[{ id, title, description, ... }]` | Rendered on CognitiveDashboard |
| `checkAchievements()` | `() => newlyUnlocked[]` | Called after set completion (MathBubblePage) |
| `getUnlockedAchievements()` | `() => { [id]: true }` map | CognitiveDashboard grid |

## Cross-Cutting Event

`window.dispatchEvent(new CustomEvent('accenture-activity-updated', { detail: { type: 'cognitive', session } }))`
— fired by `saveSessionResult()` for external listeners (gamification/telemetry).
