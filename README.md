# CSS Explorer

Interactive explorer for modern CSS features from 2020 to 2025. Each feature has a live demo with editable examples and browser support info.

## Features covered

- **2020–2021** — `:is()` / `:where()`, `aspect-ratio`, `clamp()` / `min()` / `max()`, `content-visibility`, Flexbox gap, Logical Properties, Scroll Snap
- **2022** — `:focus-visible`, `accent-color`, Cascade Layers, Dynamic Viewport Units, `font-palette`, Individual Transforms, `overscroll-behavior`
- **2023** — `:has()` Selector, `:nth-child(of S)`, Color Spaces, Container Queries, CSS Nesting, `initial-letter`, `linear()` Easing, `round()` / `mod()` / `rem()`, Subgrid, Trig Functions
- **2024** — `@property`, `@scope`, `@starting-style`, Anchor Positioning, Animate to Auto, Details & Accordion, `field-sizing`, Popover API, Scroll Animations, Scrollbar Styling, `text-wrap`, `:user-valid` / `:user-invalid`
- **2025** — Custom `<select>`, `reading-flow`, `shape()`, `sibling-index()` / `sibling-count()`, `text-box-trim`, View Transitions
- **2025+** — `@function`, `if()`

## Patterns

- **Grid** — auto-fit vs auto-fill
- **Flexbox** — Scrollable Sidebar (min-height: 0 trick)
- **Text** — Wrapping & Overflow

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build and deploy

```bash
npm run build      # Production build to dist/
npm run preview    # Preview the production build locally
npm run deploy     # Build and deploy to GitHub Pages
```

## Tech

Vanilla JS with Vite. No frameworks. Each page is a JS module in `pages/` that exports a `render()` function returning HTML. Routing is hash-based (`#/page-name`).

## License

MIT
