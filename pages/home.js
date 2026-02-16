const features = [
  // 2020–2021
  { route: 'is-where', title: ':is() / :where()', year: '2021', desc: 'Simplify selectors with grouping pseudo-classes.' },
  { route: 'aspect-ratio', title: 'aspect-ratio', year: '2021', desc: 'Maintain proportional sizing without padding hacks.' },
  { route: 'clamp-functions', title: 'clamp() / min() / max()', year: '2020', desc: 'Fluid typography and responsive sizing without media queries.' },
  { route: 'flexbox-gap', title: 'Flexbox gap', year: '2021', desc: 'Use gap in flex layouts — no more margin hacks.' },
  { route: 'logical-properties', title: 'Logical Properties', year: '2021', desc: 'Direction-agnostic layout with inline/block instead of left/right.' },
  { route: 'scroll-snap', title: 'Scroll Snap', year: '2020', desc: 'Native declarative snap points for scroll containers.' },
  // 2022
  { route: 'accent-color', title: 'accent-color', year: '2022', desc: 'Style native form controls with a single property.' },
  { route: 'cascade-layers', title: 'Cascade Layers', year: '2022', desc: 'Explicit cascade priority with @layer — no more specificity wars.' },
  { route: 'individual-transforms', title: 'Individual Transforms', year: '2022', desc: 'Animate translate, rotate, and scale independently.' },
  { route: 'overscroll-behavior', title: 'overscroll-behavior', year: '2022', desc: 'Control scroll chaining between nested containers.' },
  // 2023
  { route: 'color-spaces', title: 'Color Spaces', year: '2023', desc: 'oklch(), color-mix(), and light-dark() for modern color.' },
  { route: 'has-selector', title: ':has() Selector', year: '2023', desc: 'The "parent selector" — style elements based on their children.' },
  { route: 'container-queries', title: 'Container Queries', year: '2023', desc: 'Style elements based on their container size, not the viewport.' },
  { route: 'nesting', title: 'CSS Nesting', year: '2023', desc: 'Native nesting of selectors — no preprocessor needed.' },
  { route: 'initial-letter', title: 'initial-letter', year: '2023', desc: 'Native drop caps without float hacks.' },
  { route: 'subgrid', title: 'Subgrid', year: '2023', desc: 'Nested grids that inherit track sizing from parents.' },
  { route: 'trig-functions', title: 'Trig Functions', year: '2023', desc: 'Use sin(), cos(), tan() for circular layouts and waves.' },
  // 2024
  { route: 'at-property', title: '@property', year: '2024', desc: 'Typed custom properties — animate gradients and more.' },
  { route: 'scope', title: '@scope', year: '2024', desc: 'Scoped styles with upper and lower boundaries.' },
  { route: 'starting-style', title: '@starting-style', year: '2024', desc: 'Define entry animations for elements appearing in the DOM.' },
  { route: 'anchor-positioning', title: 'Anchor Positioning', year: '2024', desc: 'Position elements relative to anchors — tooltips without JS.' },
  { route: 'animate-to-auto', title: 'Animate to Auto', year: '2024', desc: 'Transition height to auto — no more max-height hacks.' },
  { route: 'details-styling', title: 'Details & Accordion', year: '2024', desc: 'Style and animate details with exclusive accordion behavior.' },
  { route: 'field-sizing', title: 'field-sizing: content', year: '2024', desc: 'Auto-size form inputs to fit their content.' },
  { route: 'popover-api', title: 'Popover API', year: '2024', desc: 'Declarative popovers with top-layer and light dismiss.' },
  { route: 'scroll-driven-animations', title: 'Scroll Animations', year: '2024', desc: 'Tie CSS animations to scroll position natively.' },
  { route: 'scrollbar-styling', title: 'Scrollbar Styling', year: '2024', desc: 'Standard scrollbar-color, scrollbar-width, and scrollbar-gutter.' },
  { route: 'text-wrap', title: 'text-wrap: balance', year: '2024', desc: 'Smarter line breaking for headings and paragraphs.' },
  // 2025
  { route: 'custom-select', title: 'Custom <select>', year: '2025', desc: 'Fully styleable native select with appearance: base-select.' },
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
