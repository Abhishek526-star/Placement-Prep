# Cognitive Assessment Module – Documentation

Documentation for the Accenture-Style **Cognitive Assessment** section of the app
(routes `/cognitive/*`). All game state is client-side and persisted in `localStorage`.

---

## Route Map

| Route | Page Component | Doc |
|---|---|---|
| `/cognitive` | `src/pages/CognitiveDashboard.jsx` | (hub page) |
| `/cognitive/full-mock` (alias `/cognitive/assessment`) | `src/pages/FullCognitiveMock.jsx` | – |
| `/cognitive/math-bubble` (alias `/cognitive/quick-fire-math`) | `src/pages/MathBubblePage.jsx` | [MathBubblePage.md](MathBubblePage.md) |
| `/cognitive/memory-maze` | `src/pages/MemoryMazePage.jsx` | [MemoryMazePage.md](MemoryMazePage.md) |
| `/cognitive/results` | `src/pages/CognitiveResults.jsx` | [CognitiveResults.md](CognitiveResults.md) |

Routing is registered in `src/App.jsx` (lines 167–174).

## File → Doc Map

| Source File | Doc | Purpose |
|---|---|---|
| `src/pages/MathBubblePage.jsx` | [MathBubblePage.md](MathBubblePage.md) | Math Bubble game page (7 sets) |
| `src/pages/MemoryMazePage.jsx` | [MemoryMazePage.md](MemoryMazePage.md) | Memory Maze game page |
| `src/pages/CognitiveResults.jsx` | [CognitiveResults.md](CognitiveResults.md) | Results report page |
| `src/components/cognitive/cognitive.css` | [cognitive.css.md](cognitive.css.md) | Shared styles |
| `src/components/cognitive/GameHeader.jsx` | [GameHeader.md](GameHeader.md) | Score/sound/back header |
| `src/components/cognitive/GameInstructions.jsx` | [GameInstructions.md](GameInstructions.md) | Pre-game instructions modal |
| `src/components/cognitive/GameTransition.jsx` | [GameTransition.md](GameTransition.md) | Section transition screen |
| `src/games/MathBubble/MathBubble.jsx` | [MathBubble.md](MathBubble.md) | Bubble game engine |
| `src/games/MathBubble/generator.js` | [MathBubble.generator.md](MathBubble.generator.md) | Question generator |
| `src/games/MathBubble/scoring.js` | [MathBubble.scoring.md](MathBubble.scoring.md) | Scoring rules |
| `src/games/MathBubble/MathBubble.css` | [MathBubble.css.md](MathBubble.css.md) | Game styles |
| `src/games/MemoryMaze/MemoryMaze.jsx` | [MemoryMaze.md](MemoryMaze.md) | Maze game engine |
| `src/games/MemoryMaze/mazeGenerator.js` | [MemoryMaze.mazeGenerator.md](MemoryMaze.mazeGenerator.md) | Maze variants/generator |
| `src/games/MemoryMaze/MemoryMaze.css` | [MemoryMaze.css.md](MemoryMaze.css.md) | Game styles |

## Logic / Export Reference

- **[COGNITIVE_EXPORTS.md](COGNITIVE_EXPORTS.md)** – every exported function/constant
  from `cognitiveStorage.js`, `generator.js`, `scoring.js`, `mazeGenerator.js`,
  `achievements.js`, with signatures and consumers.

## Dependencies

- `react-router-dom` (`Link`, `Route`, `useNavigate`, `useSearchParams`, `useLocation`)
- `lucide-react` (icons)
- Tailwind utility classes (a few, mixed with inline styles)
- `localStorage` (no backend)

## Known Issues

1. `MemoryMaze.jsx` emits `gameType: 'memory-maze'` (hyphen) but
   `cognitiveStorage.saveSessionResult()` / `MemoryMazePage.jsx` expect
   `'memory_maze'` (underscore) → Memory Maze best scores may never persist.
2. `MathBubble.jsx` header hardcodes "Set {setNumber} of 5" while the app supports
   7 sets (`TOTAL_SETS = 7` in `MathBubblePage.jsx`).
3. `cognitiveStorage.js` still tracks `pathFinder` best scores, but Path Finder was
   removed (see "NO Path Finder" comment in `App.jsx`).
