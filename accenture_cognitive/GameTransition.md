# GameTransition.jsx — Documentation

**Source:** `src/components/cognitive/GameTransition.jsx`

## Purpose
Animated inter-section transition screen for the full cognitive mock
(`FullCognitiveMock.jsx`), shown between game sections (e.g. maze summary →
math section) to mimic the pacing of the real assessment.

## Props (as consumed by FullCognitiveMock)
| Prop | Type | Description |
|---|---|---|
| section info / label | string/props | Which section is starting next |
| `onDone` / timer | function / number | Auto-advances to the next stage after the animation |

## Behavior
- Presentational: renders a full-width animated panel (countdown / progress bar /
  "Next section" messaging).
- Unmounts itself (or is unmounted by parent) when the countdown completes.

## Styling
Dark slate overlay from `cognitive.css` with inline animation styles.
