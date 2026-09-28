# MathBubble.jsx (game engine) — Documentation

**Source:** `src/games/MathBubble/MathBubble.jsx`
**Consumers:** MathBubblePage, FullCognitiveMock.

## Purpose
Core Math Bubble game component. Displays exactly **3 floating arithmetic
bubbles**; the player must select them in **ascending value order** before the
timer expires.

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `question` | Question object | – | From `generator.js`; drives rendering |
| `setNumber` | number | 1 | Displayed in header |
| `questionNumber` | number | 1 | "Question N / M" |
| `totalQuestions` | number | 15 | Denominator in header |
| `soundEnabled` | bool | true | SFX toggle |
| `onComplete` | function | – | Fired once per question (answer or timeout) |

## State
- `selectedSequence` — bubble objects clicked, in order (max 3)
- `secondsRemaining` — countdown from `question.timeLimit`
- `isSubmitting` — locks input after 3rd pick / timeout

## Logic / Data Flow
1. **Reset on `question.id` change:** clears selection, resets timer, records
   `questionStartTimeRef`.
2. **Countdown:** `setInterval` (1 s); at 0 → `handleTimeout()`.
3. **Bubble click (`handleBubbleClick`):**
   - Click an already-selected bubble (before 3 chosen) → **undo** (deselect).
   - Once 3 are selected, further clicks ignored.
   - Plays `sound.playBubblePop(n)` per pick.
4. **On 3rd selection** (or timeout): stops timer, computes `timeTaken`
   (`Date.now() − start`, min 1 s), evaluates correctness (selected values equal
   `question.sortedAnswers`), calls `calculateMathScore()`, then after a short
   delay (300–400 ms) fires `onComplete(result)`.

### Result object emitted
```js
{
  question, isCorrect, timedOut,
  selectedOrder:  [expr, expr, expr],   // user's pick order
  selectedValues: [v1, v2, v3],
  expectedOrder:  [expr, expr, expr],   // ascending expressions
  expectedValues: question.sortedAnswers,
  timeTaken,                            // seconds
  scoreData: { totalScore, isCorrect }  // from scoring.js
}
```

## Step Hints (`getStepHint`)
0 picks → "Select 1st bubble (Lowest value)" → 2nd → 3rd → "Sequence Recorded ✓"

## UI
- Header: title "Math Bubble • Set N", question count, timer box.
- Instruction banner with 3 step-dots (`active`/`completed`).
- Arena: absolutely positioned bubbles (`question.bubbles[i].position`),
  order pill badge (#1/#2/#3) when selected, accessible `aria-label`s.

## Known Issue
- Header hardcodes "Set {setNumber} of 5" — app actually supports 7 sets.
