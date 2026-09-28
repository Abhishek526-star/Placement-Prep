# GameHeader.jsx — Documentation

**Source:** `src/components/cognitive/GameHeader.jsx`
**Consumers:** MathBubblePage, MemoryMazePage (FullCognitiveMock renders its own headers).

## Purpose
Reusable top bar for cognitive games: title, subtitle, live score, sound toggle,
and back-navigation.

## Props
| Prop | Type | Description |
|---|---|---|
| `title` | string | Game title (left) |
| `subtitle` | string | Small badge text, e.g. "Accenture-Style Cognitive Round • Math Bubble" |
| `score` | number | Current score display |
| `soundEnabled` | bool | Controls Volume2/VolumeX icon |
| `onToggleSound` | function | Toggles sound |
| `backUrl` | string | Back arrow link target (usually `/cognitive`) |

## Behavior
- Pure presentational; no internal state.
- Icons from `lucide-react`: `Volume2`, `VolumeX`, `Flame`, `Zap`, `ArrowLeft`.
- Back button uses react-router `Link` to `backUrl`.

## Styling
Uses classes from `cognitive.css` plus inline styles; dark slate surfaces.
