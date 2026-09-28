# MathBubble.css — Documentation

**Source:** `src/games/MathBubble/MathBubble.css`
**Consumers:** `src/games/MathBubble/MathBubble.jsx`.

## Purpose
Styling for the Math Bubble game arena and chrome.

## Key Classes
| Class | Used for |
|---|---|
| `.math-bubble-container` | Root wrapper (`role="region"`) |
| `.mb-header` / `.mb-header-left` / `.mb-header-right` | Top bar layout |
| `.mb-title` | "Math Bubble • Set N" label |
| `.mb-q-count` | Question counter |
| `.mb-timer-box` | ⏱️ countdown pill |
| `.mb-instruction-banner` / `.mb-instruction-text` / `.mb-instruction-highlight` | Objective hint row |
| `.mb-steps-indicator` / `.mb-step-dot` (`.active` / `.completed`) | 3-dot selection progress |
| `.mb-arena` | Relative container where bubbles are absolutely positioned |
| `.math-bubble` (`.selected`) | Individual bubble button (position from `bubble.position`) |
| `.mb-order-pill` | Badge showing pick order (1/2/3) on selected bubbles |
| `.mb-expression` | Expression text (e.g. `½ + ¾`) |
| `.mb-order-label` | "Option N" / "Selection #N" caption |

## Palette
Matches the section theme: dark slate containers (`#0f172a`/`#1e293b`),
sky accents (`#38bdf8`), gradient highlights for selected bubbles.
