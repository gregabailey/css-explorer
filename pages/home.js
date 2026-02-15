const features = [
  { route: 'clamp-functions', title: 'clamp() / min() / max()', year: '2020', desc: 'Fluid typography and responsive sizing without media queries.' },
  { route: 'scroll-snap', title: 'Scroll Snap', year: '2021', desc: 'Native declarative snap points for scroll containers.' },
  { route: 'logical-properties', title: 'Logical Properties', year: '2021', desc: 'Direction-agnostic layout with inline/block instead of left/right.' },
  { route: 'cascade-layers', title: 'Cascade Layers', year: '2022', desc: 'Explicit cascade priority with @layer — no more specificity wars.' },
  { route: 'color-spaces', title: 'Color Spaces', year: '2022', desc: 'oklch(), color-mix(), and light-dark() for modern color.' },
  { route: 'container-queries', title: 'Container Queries', year: '2023', desc: 'Style elements based on their container size, not the viewport.' },
  { route: 'nesting', title: 'CSS Nesting', year: '2023', desc: 'Native nesting of selectors — no preprocessor needed.' },
  { route: 'has-selector', title: ':has() Selector', year: '2023', desc: 'The "parent selector" — style elements based on their children.' },
  { route: 'subgrid', title: 'Subgrid', year: '2023', desc: 'Nested grids that inherit track sizing from parents.' },
  { route: 'scroll-driven-animations', title: 'Scroll Animations', year: '2023', desc: 'Tie CSS animations to scroll position natively.' },
  { route: 'anchor-positioning', title: 'Anchor Positioning', year: '2024', desc: 'Position elements relative to anchors — tooltips without JS.' },
  { route: 'popover-api', title: 'Popover API', year: '2024', desc: 'Declarative popovers with top-layer and light dismiss.' },
  { route: 'animate-to-auto', title: 'Animate to Auto', year: '2024', desc: 'Transition height to auto — no more max-height hacks.' },
  { route: 'view-transitions', title: 'View Transitions', year: '2025', desc: 'Native DOM-state transition animations.' },
];

export function render() {
  const cards = features.map(f => `
    <a href="#/${f.route}" class="home-card">
      <div class="year">${f.year}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </a>
  `).join('');

  return `
    <div class="page-header">
      <h1>CSS Explorer</h1>
      <p class="subtitle">Interactive demos of modern CSS features shipped between 2020 and 2025.</p>
    </div>
    <div class="home-grid">
      ${cards}
    </div>
  `;
}
