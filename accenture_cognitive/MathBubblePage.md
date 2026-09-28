# MathBubblePage.jsx — Documentation

**Route:** `/cognitive/math-bubble` (alias `/cognitive/quick-fire-math`)
**Source:** `src/pages/MathBubblePage.jsx`

## Purpose
Page wrapper for the **Math Bubble** game: rapid ascending-order arithmetic.
Hosts 7 progressive sets, daily-challenge mode, per-set result modal, and
session persistence.

## Configuration
- `TOTAL_SETS = 7`
- Sets 1–5: 15 questions, 15 s per question
- Sets 6–7: 24 questions, 14 s per question, progressive difficulty
- URL params: `?set=<1..7>` selects initial set; `?mode=daily` enables daily mode.

## State
| State | Purpose |
|---|---|
| `activeSetNumber` | current set (synced to `?set=`) |
| `questionSet` | pre-generated questions via `generateQuestionSet(setNum)` |
| `currentQIndex` | index within the set |
| `setResults` | per-question result objects |
| `isSetComplete` | shows the results modal |
| `unlockedAchievements` | from `checkAchievements()` |

## Logic / Data Flow
1. `startSet(n)` → regenerates question set, resets state, updates URL param.
2. `MathBubble` fires `onComplete(result)` per question → appended to `setResults`.
3. When the last question finishes → `finishSet(allResults)`:
   - computes accuracy (correct/total × 100), totalScore (Σ `result.scoreData.totalScore`), avgTime;
   - calls `saveSessionResult({ gameType: 'math_bubble', setNumber, score, accuracy, correctCount, totalQuestions, avgTime, isDaily })`;
   - in daily mode: `updateDailyChallenge('math_bubble')` + achievement check.
4. Results modal lists each question (your selection vs. correct ascending order,
   or "(Timed Out)") with pass/fail coloring and per-question time.

## Dependencies
- `../games/MathBubble/{MathBubble, generator}`
- `../utils/cognitiveStorage` (`saveSessionResult`, `updateDailyChallenge`, `cognitiveStorage`)
- `../utils/achievements` (`checkAchievements`)
- `../components/cognitive/{GameHeader, GameInstructions}`, `cognitive.css`
- `SEO` + `seoConfig` (lucide-react icons)

## Actions in Results Modal
- **Retry Set N** → `startSet(activeSetNumber)`
- **Proceed to Set N+1** (if `< TOTAL_SETS`) → `startSet(activeSetNumber + 1)`
- **Return to Cognitive Hub** → `navigate('/cognitive')`

## Known Issues
- `MathBubble.jsx` header displays "of 5" regardless of the 7 sets supported here.
