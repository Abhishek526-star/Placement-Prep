# mazeGenerator.js (MemoryMaze) — Documentation

**Source:** `src/games/MemoryMaze/mazeGenerator.js`
**Consumers:** MemoryMaze.jsx.

## Purpose
Generates **validated, 100% solvable** memory mazes per variant, including an
optimal solution path used by the "Show Solution" feature.

## Exports

### `MEMORY_MAZE_VARIANTS`
Config map keyed by variant id (e.g. `'find-the-key'`). Each config defines at
least: `id`, `gridSize`, `timeLimit` (~233 s), plus gameplay modifiers.
Consumed by MemoryMaze.jsx's variant navigation bar (hidden when `isMock`).

### `generateMemoryMaze(variantKey = 'find-the-key')`
```js
() => {
  variant: config,
  size: gridSize,
  cells: Cell[][],       // cells[r][c]
  start: { r, c },
  keys: [{ r, c }, ...],
  door: { r, c },
  solution: Path         // optimal route (computeOptimalSolution)
}
```
**Cell shape:** `{ walls: { top, bottom, left, right }, ... }` — walls are hidden
from the player and discovered by collision.

**Generation pipeline:**
1. Pick config (`MEMORY_MAZE_VARIANTS[variantKey]`, fallback `'find-the-key'`).
2. Build the grid, carve walls, place start / keys / door.
3. Validate solvability; on failure, clean up and attach
   `computeOptimalSolution(cleanCells, size, start, keys, door)` as a guaranteed
   fallback path before returning.
