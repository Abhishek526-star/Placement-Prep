# GameInstructions.jsx — Documentation

**Source:** `src/components/cognitive/GameInstructions.jsx`
**Consumers:** MathBubblePage, MemoryMazePage.

## Purpose
Pre-game instruction modal. Shows how to play the selected cognitive game before
it starts (or on demand via a help icon).

## Props
| Prop | Type | Description |
|---|---|---|
| `gameType` | string | Key selecting the instruction copy: `'math_bubble'` \| `'memory_maze'` |
| `isOpen` | bool | Renders the overlay when true |
| `onStart` | function | "Start" button handler — parent closes the modal |

## Logic
- Static, per-`gameType` instruction content (objective, controls, scoring tips,
  time limits) defined inside the component.
- Overlay blocks interaction until `onStart` fires.

## Styling
Overlay + card classes from `cognitive.css`; lucide-react icons for visuals.
