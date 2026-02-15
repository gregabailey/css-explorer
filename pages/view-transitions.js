export function render() {
  return `
    <style>
      .vt-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 1rem;
      }

      .vt-card {
        background: var(--color-surface-2);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 1rem;
        cursor: pointer;
        transition: border-color 200ms ease;
      }

      .vt-card:hover {
        border-color: var(--color-accent);
      }

      .vt-card-swatch {
        height: 80px;
        border-radius: 6px;
        margin-block-end: 0.75rem;
      }

      .vt-card h3 {
        font-size: 0.9rem;
        margin-block-end: 0.25rem;
      }

      .vt-card p {
        font-size: 0.78rem;
        color: var(--color-text-muted);
      }

      /* Expanded state */
      .vt-expanded {
        display: none;
        background: var(--color-surface-2);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 2rem;
      }

      .vt-expanded.visible {
        display: block;
      }

      .vt-expanded-swatch {
        height: 200px;
        border-radius: var(--radius);
        margin-block-end: 1.5rem;
      }

      .vt-expanded h2 {
        font-size: 1.5rem;
        margin-block-end: 0.5rem;
      }

      .vt-expanded p {
        color: var(--color-text-muted);
        font-size: 0.9rem;
        line-height: 1.6;
        margin-block-end: 1rem;
      }

      .vt-back {
        cursor: pointer;
      }

      /* View transition names */
      .vt-active-swatch {
        view-transition-name: vt-swatch;
      }

      .vt-active-title {
        view-transition-name: vt-title;
      }

      ::view-transition-old(vt-swatch),
      ::view-transition-new(vt-swatch) {
        animation-duration: 350ms;
        animation-timing-function: ease;
      }

      ::view-transition-old(vt-title),
      ::view-transition-new(vt-title) {
        animation-duration: 250ms;
      }
    </style>

    <div class="page-header">
      <h1>View Transitions</h1>
      <p class="subtitle">Native DOM-state transition animations.</p>
      <span class="badge">Baseline 2025</span>
    </div>

    <p class="info">
      The View Transitions API uses <code>document.startViewTransition()</code> to animate
      between DOM states. Assign <code>view-transition-name</code> to elements and the browser
      automatically tweens between old and new positions. Click a card below.
    </p>

    <div class="demo-section" id="vt-container">
      <h2>Click a card to expand</h2>
      <div class="vt-grid" id="vt-grid">
        <div class="vt-card" data-vt="0">
          <div class="vt-card-swatch" style="background:linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.7 0.18 250))"></div>
          <h3>Indigo Wave</h3>
          <p>Deep purple to sky blue</p>
        </div>
        <div class="vt-card" data-vt="1">
          <div class="vt-card-swatch" style="background:linear-gradient(135deg, oklch(0.5 0.22 20), oklch(0.7 0.2 50))"></div>
          <h3>Sunset Ember</h3>
          <p>Crimson to warm orange</p>
        </div>
        <div class="vt-card" data-vt="2">
          <div class="vt-card-swatch" style="background:linear-gradient(135deg, oklch(0.5 0.2 150), oklch(0.7 0.15 180))"></div>
          <h3>Forest Canopy</h3>
          <p>Emerald to teal</p>
        </div>
        <div class="vt-card" data-vt="3">
          <div class="vt-card-swatch" style="background:linear-gradient(135deg, oklch(0.5 0.2 330), oklch(0.7 0.18 350))"></div>
          <h3>Rose Quartz</h3>
          <p>Deep magenta to pink</p>
        </div>
      </div>

      <div class="vt-expanded" id="vt-expanded">
        <button class="btn vt-back" id="vt-back">← Back to grid</button>
        <div class="vt-expanded-swatch" id="vt-exp-swatch"></div>
        <h2 id="vt-exp-title"></h2>
        <p id="vt-exp-desc"></p>
        <p>The swatch and title animated smoothly between the grid and expanded views using <code>view-transition-name</code>. No manual animation code — the browser handled the tween.</p>
      </div>
    </div>

    <div class="code-block">
      <pre>// JavaScript
document.startViewTransition(() => {
  updateDOM();  // your DOM changes happen here
});

/* CSS */
.swatch {
  view-transition-name: hero-swatch;
}

::view-transition-old(hero-swatch),
::view-transition-new(hero-swatch) {
  animation-duration: 350ms;
}</pre>
    </div>
  `;
}

const items = [
  { title: 'Indigo Wave', desc: 'A gradient flowing from deep purple to sky blue.', bg: 'linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.7 0.18 250))' },
  { title: 'Sunset Ember', desc: 'Warm tones from crimson to bright orange.', bg: 'linear-gradient(135deg, oklch(0.5 0.22 20), oklch(0.7 0.2 50))' },
  { title: 'Forest Canopy', desc: 'Lush greens from emerald to teal.', bg: 'linear-gradient(135deg, oklch(0.5 0.2 150), oklch(0.7 0.15 180))' },
  { title: 'Rose Quartz', desc: 'Bold magenta softening into gentle pink.', bg: 'linear-gradient(135deg, oklch(0.5 0.2 330), oklch(0.7 0.18 350))' },
];

export function init() {
  const grid = document.getElementById('vt-grid');
  const expanded = document.getElementById('vt-expanded');
  const backBtn = document.getElementById('vt-back');

  if (!grid || !expanded) return;

  grid.addEventListener('click', e => {
    const card = e.target.closest('.vt-card');
    if (!card) return;
    const idx = Number(card.dataset.vt);
    const item = items[idx];

    const swatch = card.querySelector('.vt-card-swatch');
    const title = card.querySelector('h3');

    // Add transition names to the source elements
    swatch.classList.add('vt-active-swatch');
    title.classList.add('vt-active-title');

    const transition = document.startViewTransition?.(() => {
      grid.style.display = 'none';
      expanded.classList.add('visible');

      document.getElementById('vt-exp-swatch').style.background = item.bg;
      document.getElementById('vt-exp-swatch').classList.add('vt-active-swatch');
      document.getElementById('vt-exp-title').textContent = item.title;
      document.getElementById('vt-exp-title').classList.add('vt-active-title');
      document.getElementById('vt-exp-desc').textContent = item.desc;

      // Remove from source
      swatch.classList.remove('vt-active-swatch');
      title.classList.remove('vt-active-title');
    });

    if (!transition) {
      // Fallback for browsers without view transitions
      grid.style.display = 'none';
      expanded.classList.add('visible');
      document.getElementById('vt-exp-swatch').style.background = item.bg;
      document.getElementById('vt-exp-title').textContent = item.title;
      document.getElementById('vt-exp-desc').textContent = item.desc;
    }
  });

  backBtn.addEventListener('click', () => {
    const transition = document.startViewTransition?.(() => {
      expanded.classList.remove('visible');
      grid.style.display = '';

      document.getElementById('vt-exp-swatch').classList.remove('vt-active-swatch');
      document.getElementById('vt-exp-title').classList.remove('vt-active-title');
    });

    if (!transition) {
      expanded.classList.remove('visible');
      grid.style.display = '';
    }
  });
}
