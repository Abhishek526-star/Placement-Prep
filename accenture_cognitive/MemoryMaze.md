# MemoryMaze.jsx (game engine) — Documentation

**Source:** `src/games/MemoryMaze/MemoryMaze.jsx`
**Consumers:** MemoryMazePage (standalone), FullCognitiveMock (`isMock`).

## Purpose
Spatial-memory maze game: navigate an N×N grid from start to collect keys and
reach the door, learning **hidden walls** through trial (attempt counting).

## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `variantKey` | string | `'find-the-key'` | Active maze variant |
| `onVariantChange` | function | – | Variant switch callback (page syncs URL) |
| `onComplete` | function | – | Fired on maze completion with result payload |
| `isMock` | bool | false | Hides variant nav inside the full mock |

## State
| State | Purpose |
|---|---|
| `phase` | `'INSTRUCTIONS' \| 'PLAYING' \| 'COMPLETED' \| 'TIMEOUT'` |
| `mazeData` | generated maze (`generateMemoryMaze(variantKey)`) |
| `timeLeft` | countdown from `variant.timeLimit` (~233 s) |
| `playerPos` | `{ r, c }` grid position |
| `collectedKeys` | keys picked up |
| `attempts` | wall-hit / failed-move count |
| `showSolution` | reveal optimal path after finish |
| `feedback` / `isShaking` | toast + shake animation on wall hit |

## Logic / Data Flow
1. `loadMaze(vKey)` regenerates the maze and resets all state (also syncs when
   `variantKey` prop changes).
2. Timer runs only in `PLAYING`; at 0 → `phase: 'TIMEOUT'`.
3. `movePlayer(dr, dc, direction)`:
   - blocked if out of bounds or `cells[r][c].walls.<dir>` → `attempts++`, shake + toast;
   - else update `playerPos`; collect keys / reach door → `phase: 'COMPLETED'`,
     fire `onComplete({ gameType: 'memory-maze', variant, score, timeTaken, attempts, ... })`.
4. **Score formula:** `max(100, 1000 − attempts × 75 + min(200, floor(timeLeft / 2)))`.
5. Completion/timeout modals offer **Play Again** (`loadMaze`) and
   **Review/Show Solution** (reveals `computeOptimalSolution` path, returns to `PLAYING`).

## Known Issue
Emits `gameType: 'memory-maze'` (hyphen) whereas `cognitiveStorage` /
`MemoryMazePage` expect `'memory_maze'` — best-score persistence mismatch.

## Styling
`MemoryMaze.css` (grid, player, walls, modals); lucide-react chevrons for
directional controls.
