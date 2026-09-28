# generator.js (MathBubble) — Documentation

**Source:** `src/games/MathBubble/generator.js`
**Consumers:** MathBubblePage (`generateQuestionSet`, `getSetTotalQuestions`,
`getSetTimeLimit`), FullCognitiveMock (`generateQuestionSet(2, 15)`),
MathBubble.jsx (via passed questions).

## Purpose
Question generator for the Math Bubble game. Produces sets of unique questions,
each with exactly 3 arithmetic bubbles.

## Critical Rules (enforced)
1. Exactly **3 bubbles** per question.
2. Each bubble = **two operands + one operator** (`+ − × ÷`).
3. Operands may be integers, decimals, or unicode fractions
   (½ ¼ ¾ ⅖ ⅗ ⅘ ⅓ ⅔ ⅛ — curated `FRACTION_PAIRS` dataset with precomputed values + aria text).
4. Set sizes/timers: sets 1–5 → 15 questions / 15 s; sets 6–7 → 24 questions / 14 s
   (progressive difficulty: easy → medium → hard → expert).
5. All 3 values in a question are unique with **separation ≥ 0.2**.
6. **No repeated questions within a set** (signature = sorted expressions joined
   by `' | '`, retried up to 100 attempts).

## Exports
| Export | Signature | Returns |
|---|---|---|
| `generateMathQuestion(setNumber, questionNumber, totalQuestions)` | – | single `Question` |
| `generateQuestionSet(setNumber = 1, totalQuestions = null)` | – | `Question[]` (unique set) |
| `getSetTotalQuestions(setNumber = 1)` | – | `24` (set ≥ 6) else `15` |
| `getSetTimeLimit(setNumber = 1)` | – | `14` (set ≥ 6) else `15` |
| `generateBubbleQuestion` | alias of `generateMathQuestion` | – |

## Question Shape
```js
{
  id: `q_set${s}_q${n}_${Date.now()}_${rand}`,
  setNumber, questionNumber, difficulty,
  bubbles: [{ id:'b1', expression, value, aria, position: {left, top, transform} } × 3],
  expressions: [3 strings],
  answers: [3 values unsorted],
  sortedAnswers: [lowest, middle, highest],
  timeLimit
}
```

## Layouts
`LAYOUT_PRESETS` — 4 randomized absolute-position triplets (percent coords with
`translate(-50%, -50%)`) so bubbles appear in varied triangle arrangements.

## Fallback
If generation fails, returns a fixed valid question:
`'2.5 + 1.5' (4)`, `'½ × 16' (8)`, `'15 - 3' (12)`.
