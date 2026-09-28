# MemoryMaze.css — Documentation

**Source:** `src/games/MemoryMaze/MemoryMaze.css`
**Consumers:** `src/games/MemoryMaze/MemoryMaze.jsx`.

## Purpose
Styling for the Memory Maze game: grid board, player/keys/door tokens, movement
controls, feedback toasts, and result modals.

## Key Class Groups
| Class pattern | Used for |
|---|---|
| `.mm-*` board classes | Maze grid container, cell walls (top/bottom/left/right borders), start/keys/door tiles |
| Player / movement | Player token positioning, directional button bar (lucide chevrons) |
| `.mm-variant-nav` | Variant selector buttons (hidden when `isMock`) |
| Toast / feedback | Wall-hit toast + shake animation classes |
| `.mm-result-overlay` / `.mm-result-box` | COMPLETED and TIMEOUT modals |
| `.mm-stats-grid` / `.mm-stat-card` / `.mm-stat-val` / `.mm-stat-lbl` | Attempts / Time Taken / Score cards |
| `.mm-action-btn` / `.mm-secondary-btn` | "Play Again" / "Review Solution" buttons |

## Palette
Dark slate maze surfaces with amber door/key accents, orange attempt counters,
sky timer values — consistent with `cognitive.css` tokens.
