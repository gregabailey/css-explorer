export function render() {
  return `
    <style>
      .mf-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
      }
      .mf-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .mf-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      .mf-bar-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .mf-bar-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .mf-bar-row label {
        font-size: 0.75rem;
        font-family: monospace;
        color: var(--color-text-muted);
        min-width: 170px;
        text-align: right;
      }
      .mf-bar {
        height: 30px;
        border-radius: calc(var(--radius) - 2px);
        display: grid;
        place-items: center;
        font-size: 0.72rem;
        font-weight: 600;
        font-family: monospace;
        color: white;
        text-shadow: 0 1px 2px oklch(0 0 0 / 0.4);
      }

      /* round() demo */
      .mf-round-1 { width: round(77px, 25px); background: oklch(0.55 0.18 260); }
      .mf-round-2 { width: round(133px, 50px); background: oklch(0.55 0.18 260); }
      .mf-round-3 { width: round(up, 77px, 25px); background: oklch(0.6 0.18 200); }
      .mf-round-4 { width: round(down, 133px, 50px); background: oklch(0.6 0.18 200); }

      /* mod() demo */
      .mf-mod-1 { width: mod(250px, 100px); background: oklch(0.55 0.18 150); }
      .mf-mod-2 { width: mod(330px, 100px); background: oklch(0.55 0.18 150); }
      .mf-mod-3 { width: mod(175px, 50px); background: oklch(0.55 0.18 150); }

      /* rem() demo */
      .mf-rem-1 { width: 50px; background: oklch(0.55 0.18 30); }
      .mf-rem-2 { width: 30px; background: oklch(0.55 0.18 30); }
      .mf-rem-3 { width: 25px; background: oklch(0.55 0.18 30); }

      .mf-grid-demo {
        display: grid;
        gap: 4px;
        margin-top: 0.5rem;
      }
      .mf-grid-cell {
        height: 40px;
        border-radius: 4px;
        display: grid;
        place-items: center;
        font-size: 0.7rem;
        font-weight: 600;
        font-family: monospace;
      }
      .mf-grid-cell.filled {
        background: oklch(0.6 0.18 260 / 0.2);
        color: oklch(0.6 0.18 260);
      }
      .mf-grid-cell.empty {
        background: var(--color-surface);
        color: var(--color-text-muted);
      }

      .mf-slider-wrap {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .mf-slider-row {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .mf-slider-row label {
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--color-text-muted);
        min-width: 50px;
      }
      .mf-slider-row input[type="range"] {
        flex: 1;
        accent-color: var(--color-accent);
      }
      .mf-slider-row .mf-val {
        width: 100px;
        font-size: 0.78rem;
        font-family: monospace;
        color: var(--color-text-muted);
        text-align: right;
      }
      .mf-snap-box {
        height: 60px;
        border-radius: var(--radius);
        background: oklch(0.6 0.22 260);
        transition: width 200ms ease;
        display: grid;
        place-items: center;
        font-size: 0.8rem;
        font-weight: 600;
        font-family: monospace;
        color: white;
      }
    </style>

    <div class="page-header">
      <h1>round(), mod(), rem()</h1>
      <p class="subtitle">Stepped values, remainders, and modular arithmetic in CSS.</p>
      <span class="badge">Baseline 2024</span>
    </div>

    <p class="info">
      CSS now has proper math functions for rounding and remainders.
      <code>round()</code> snaps values to a grid, <code>mod()</code> gives the modulus (always positive),
      and <code>rem()</code> gives the remainder (sign matches the dividend). These are
      especially useful for snapping sizes to rhythm grids and creating cyclic patterns.
    </p>

    <div class="demo-section">
      <h2>round() — Snap Values to Steps</h2>
      <p class="info"><code>round(value, step)</code> rounds to the nearest multiple. Add <code>up</code> or <code>down</code> as a rounding strategy.</p>
      <div class="mf-bar-group">
        <div class="mf-bar-row">
          <label>round(77px, 25px)</label>
          <div class="mf-bar mf-round-1">75px</div>
        </div>
        <div class="mf-bar-row">
          <label>round(133px, 50px)</label>
          <div class="mf-bar mf-round-2">150px</div>
        </div>
        <div class="mf-bar-row">
          <label>round(up, 77px, 25px)</label>
          <div class="mf-bar mf-round-3">100px</div>
        </div>
        <div class="mf-bar-row">
          <label>round(down, 133px, 50px)</label>
          <div class="mf-bar mf-round-4">100px</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Interactive — Snap Width to Grid</h2>
      <p class="info">Drag the slider — the box width snaps to the nearest 50px step using <code>round()</code>.</p>
      <div class="mf-slider-wrap">
        <div class="mf-slider-row">
          <label>Width</label>
          <input type="range" id="mf-slider" min="50" max="350" value="200">
          <span class="mf-val" id="mf-val">round(200px, 50px) = 200px</span>
        </div>
        <div class="mf-snap-box" id="mf-snap-box" style="width: 200px">200px</div>
      </div>
    </div>

    <div class="demo-section">
      <h2>mod() — Modulus</h2>
      <p class="info"><code>mod(a, b)</code> returns the remainder, always with the sign of <code>b</code>. Great for cyclic patterns.</p>
      <div class="mf-bar-group">
        <div class="mf-bar-row">
          <label>mod(250px, 100px)</label>
          <div class="mf-bar mf-mod-1">50px</div>
        </div>
        <div class="mf-bar-row">
          <label>mod(330px, 100px)</label>
          <div class="mf-bar mf-mod-2">30px</div>
        </div>
        <div class="mf-bar-row">
          <label>mod(175px, 50px)</label>
          <div class="mf-bar mf-mod-3">25px</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>rem() — Remainder</h2>
      <p class="info"><code>rem(a, b)</code> returns the remainder with the sign of the dividend. Like <code>%</code> in most languages.</p>
      <div class="mf-bar-group">
        <div class="mf-bar-row">
          <label>rem(250px, 100px)</label>
          <div class="mf-bar mf-rem-1">50px</div>
        </div>
        <div class="mf-bar-row">
          <label>rem(330px, 100px)</label>
          <div class="mf-bar mf-rem-2">30px</div>
        </div>
        <div class="mf-bar-row">
          <label>rem(175px, 50px)</label>
          <div class="mf-bar mf-rem-3">25px</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Snap element width to 50px grid */
.element {
  width: round(var(--w), 50px);
}

/* Round up to next 8px for spacing rhythm */
.card {
  padding: round(up, 1.3rem, 8px);
}

/* Cyclic pattern — mod wraps around */
.item {
  /* Always 0–99px regardless of input */
  width: mod(var(--offset), 100px);
}

/* Snap columns to clean fractions */
.grid {
  grid-template-columns:
    repeat(auto-fill, round(nearest, 20%, 5%));
}</pre>
    </div>
  `;
}

export function init() {
  const slider = document.getElementById('mf-slider');
  const box = document.getElementById('mf-snap-box');
  const val = document.getElementById('mf-val');
  if (!slider || !box || !val) return;

  slider.addEventListener('input', () => {
    const raw = parseInt(slider.value);
    const step = 50;
    const snapped = Math.round(raw / step) * step;
    box.style.width = snapped + 'px';
    box.textContent = snapped + 'px';
    val.textContent = `round(${raw}px, ${step}px) = ${snapped}px`;
  });
}
