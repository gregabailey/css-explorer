# CLAUDE.md

## Project overview

CSS Explorer — interactive demos of modern CSS features (2020–2025+). Vanilla JS + Vite, no frameworks. Deployed to GitHub Pages.

## Commands

- `npm run dev` — start dev server (usually localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run deploy` — build + deploy to GitHub Pages via gh-pages

Always execute commands directly. Never tell me to run them myself.

## Workflow

- After making changes, run `npm run build` to verify before saying you're done
- When I say "push and deploy", do all three: commit, push, and `npm run deploy`
- Keep commits focused — one logical change per commit

## Architecture

- **Routing**: hash-based (`#/page-name`), defined in `main.js`
- **Pages**: each file in `pages/` exports `render()` → HTML string, optionally `init()` for post-render DOM setup
- **Layout**: static shell in `index.html` (sidebar nav + `#main-content`), styles in `style.css`
- **Home**: `pages/home.js` has a `features` array that drives the card grid

## Adding a new page

Update **all 5 places** — missing any one breaks the site:

1. `pages/{route}.js` — new page module
2. `main.js` — add route to the `routes` object
3. `index.html` — add nav link in the correct year group
4. `pages/home.js` — add entry to the `features` array
5. `README.md` — add to the "Features covered" list

## Page file conventions

- Export `render()` returning a template literal with `<style>`, `.page-header`, `.demo-section`(s), `.code-block`
- Page-scoped CSS classes use a short prefix to avoid collisions (e.g., `fp-` for font-palette, `ac-` for accent-color)
- `.page-header` contains `<h1>`, `<p class="subtitle">`, and `<span class="badge">` for browser support
- Use CSS custom properties from `style.css` (`--color-surface-2`, `--color-text-muted`, `--color-accent`, `--radius`, etc.)
- If the page needs JS interactivity, export `init()` — it runs after `render()` HTML is injected into the DOM

## Sorting order

Within each year group, sort items: **symbol/colon-prefixed first** (`:has()`, `@property`), **then alphabetical**. This applies to the sidebar nav, home page cards, and README.

## Environment

- macOS, zsh
- `gh` CLI installed and authenticated
- Node/npm available

## Style notes

- Dark theme only (color-scheme: dark)
- Colors use `oklch()` throughout
- Global classes: `.demo-section`, `.code-block`, `.info`, `.controls`, `.btn`, `.badge`
