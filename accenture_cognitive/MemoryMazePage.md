# MemoryMazePage.jsx — Documentation

**Route:** `/cognitive/memory-maze`
**Source:** `src/pages/MemoryMazePage.jsx`

## Purpose
Thin wrapper page for the **Memory Maze** spatial-memory game. Provides the game
header, instructions modal, and variant selection via URL.

## URL Params
- `?variant=<key>` — sets the initial maze variant (default `'find-the-key'`).
  Changing variants updates the query string via `setSearchParams`.

## State
| State | Purpose |
|---|---|
| `activeVariant` | current maze variant key (synced with URL) |
| `score` | accumulated score across completions on this page |
| `soundEnabled` | toggles SFX |
| `showInstructions` | controls `GameInstructions` modal |

## Logic / Data Flow
1. `MemoryMaze` (game engine) handles all maze rendering/movement internally.
2. On maze completion, engine calls `onComplete(result)` with
   `{ score, variant, timeTaken, attempts }`.
3. Page adds the score to its local accumulator and persists:
   `saveSessionResult({ gameType: 'memory_maze', variant, score, timeTaken, attempts })`.

## Dependencies
- `../games/MemoryMaze/MemoryMaze`
- `../utils/cognitiveStorage` (`saveSessionResult` — imported)
- `../components/cognitive/{GameHeader, GameInstructions}`, `cognitive.css`
- `SEO` + `seoConfig.memoryMaze`

## Known Issues / Bugs
1. **gameType mismatch:** `MemoryMaze.jsx` internally emits `gameType: 'memory-maze'`
   (hyphen) for its own completion payloads, while this page and
   `cognitiveStorage.saveSessionResult()` expect `'memory_maze'` (underscore).
   Best-score persistence for Memory Maze may therefore never trigger from the
   engine's own path.
2. `saveSessionResult` is used in `handleComplete` but is not imported in this
   file's import list (relies on it being in scope / needs verification).
