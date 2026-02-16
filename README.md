# CSS Explorer

Interactive explorer for modern CSS features from 2020 to 2025. Each feature has a live demo with editable examples and browser support info.

## Features covered

- **2020-2021** — `clamp()` / `min()` / `max()`, Scroll Snap, Logical Properties
- **2022** — Cascade Layers, Color Spaces
- **2023** — Container Queries, CSS Nesting, `:has()` Selector, Subgrid, Scroll-Driven Animations
- **2024** — Anchor Positioning, Popover API, Animate to Auto
- **2025** — View Transitions

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
