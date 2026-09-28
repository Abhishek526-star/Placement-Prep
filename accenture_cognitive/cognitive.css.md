# cognitive.css — Documentation

**Source:** `src/components/cognitive/cognitive.css`
**Imported by:** CognitiveDashboard, MathBubblePage, MemoryMazePage,
FullCognitiveMock, CognitiveResults, DailyChallengeCard.

## Purpose
Shared stylesheet for the cognitive section: game chrome (header, instructions,
transitions), the daily-challenge card, and shared buttons.

## Key Class Groups

### Game Header (used by GameHeader.jsx)
- `.game-header` — top bar: title/subtitle left, score + sound toggle + back right.
- Score/sound/back buttons use dark slate surfaces (`#0f172a` / `#1e293b` palette).

### Instructions (GameInstructions.jsx)
- Overlay + centered card classes for the pre-game instruction modal.

### Daily Challenge Card (DailyChallengeCard.jsx)
- `.dcc-*` classes: card container, flame/streak badge, completion state, and
  `.dcc-play-btn` (primary CTA linking to `/cognitive/math-bubble?mode=daily`).

### Shared Buttons
- `.pf-btn` — secondary/slate action button (e.g. "Retry Set").
- `.cmc-start-btn` — primary/gradient action button (e.g. "Proceed to Set N+1").

## Design Tokens
- Backgrounds: `#0f172a`, `#1e293b`, `#090d16`
- Borders: `#334155`, `#1e293b`
- Accents: sky `#38bdf8` / `#0284c7`, emerald `#10b981`, amber `#f59e0b`, rose `#f43f5e`
- Font: `JetBrains Mono` for numeric values
- Most pages supplement these classes with inline styles; only a handful of
  Tailwind utility classes (`text-sky-400`, `text-emerald-400`, `flex-shrink-0`, …)
  are used, so Tailwind is optional but recommended.

## Notes
- No CSS variables/theming layer — colors are hard-coded slate/sky palette.
