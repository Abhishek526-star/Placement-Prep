# CognitiveResults.jsx — Documentation

**Route:** `/cognitive/results`
**Source:** `src/pages/CognitiveResults.jsx`

## Purpose
Assessment report page for the cognitive mock. Renders score, performance band,
per-round breakdown, and competency ratings, plus next-step CTAs.

## Data Source
- Session is read from router state: `location.state?.session`
- Fallback: latest stored session `getCognitiveStats().recentSessions[0]`

Session fields used: `score`, `accuracy`, `round1` (math: `accuracy`, `avgTime`),
`round2` (maze: `solvedCount`, `totalPuzzles`, `avgEfficiency`).

## Logic

### Grade bands
| Score | Band | Color |
|---|---|---|
| ≥ 1200 | Exceptional | `#10b981` |
| ≥ 800 | Advanced | `#a855f7` |
| < 400 | Developing | `#f59e0b` |
| else | Proficient | `#38bdf8` |

### Competency ratings (0–100%)
| Metric | Formula |
|---|---|
| Arithmetic Speed | `min(100, 100 − round1.avgTime × 5)` (default 75) |
| Working Memory | `round1.accuracy` (fallback session accuracy) |
| Spatial Orientation | `round2.solvedCount / totalPuzzles × 100` (default 80) |
| Rotation Efficiency | `round2.avgEfficiency` (default 70) |
| Cognitive Stamina | `(accuracy + round2.avgEfficiency) / 2` |

## UI Sections
1. Top banner: trophy icon, "Assessment Report", performance band pill.
2. Score grid with per-round stats.
3. Competency bars (animated width, gradient `#0284c7 → #38bdf8`).

## CTAs
- **Launch Coding Round** → `/practice` (green gradient)
- **Retake Assessment** → `/cognitive/assessment`
- **Cognitive Hub** → `/cognitive`

## Dependencies
- `react-router-dom` (`useLocation`, `useNavigate`, `Link`)
- `lucide-react`, `../utils/cognitiveStorage` (`getCognitiveStats`),
  `../components/cognitive/cognitive.css`
