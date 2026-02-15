export function render() {
  return `
    <style>
      .cf-fluid-text h2 {
        font-size: clamp(1.25rem, 3vw, 2.5rem);
        line-height: 1.2;
        margin-block-end: 0.5rem;
        font-weight: 700;
      }

      .cf-fluid-text p {
        font-size: clamp(0.85rem, 1.5vw, 1.1rem);
        color: var(--color-text-muted);
        line-height: 1.6;
        max-width: 65ch;
      }

      .cf-values {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
        margin-block: 1rem;
      }

      .cf-value-box {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1rem;
        text-align: center;
      }

      .cf-value-box .cf-label {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--color-text-muted);
        margin-block-end: 0.3rem;
        font-weight: 600;
      }

      .cf-value-box .cf-val {
        font-size: 1.1rem;
        font-family: monospace;
        color: var(--color-accent);
        font-weight: 700;
      }

      .cf-resize-demo {
        resize: horizontal;
        overflow: hidden;
        border: 2px dashed var(--color-border);
        padding: 1.5rem;
        min-width: 200px;
        max-width: 100%;
      }

      .cf-resize-inner {
        width: clamp(100px, 50%, 400px);
        height: 60px;
        background: linear-gradient(90deg, oklch(0.5 0.2 280), oklch(0.65 0.18 200));
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        font-size: 0.82rem;
        font-family: monospace;
        color: white;
      }

      .cf-spacing-demo {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .cf-spacing-bar {
        height: 40px;
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        padding-inline: 0.75rem;
        font-size: 0.78rem;
        font-family: monospace;
        color: white;
      }

      .cf-min-bar {
        width: min(300px, 100%);
        background: oklch(0.5 0.2 150);
      }

      .cf-max-bar {
        width: max(200px, 50%);
        background: oklch(0.5 0.2 280);
      }

      .cf-clamp-bar {
        width: clamp(150px, 60%, 400px);
        background: oklch(0.5 0.2 50);
      }

      .cf-viewport-label {
        font-size: 0.78rem;
        font-family: monospace;
        color: var(--color-accent);
        margin-block-start: 0.75rem;
      }
    </style>

    <div class="page-header">
      <h1>clamp(), min(), max()</h1>
      <p class="subtitle">CSS comparison functions for fluid, responsive values.</p>
      <span class="badge">Baseline 2020</span>
    </div>

    <p class="info">
      These math functions let you create responsive values without media queries.
      <code>clamp(min, preferred, max)</code> is especially powerful for fluid typography and spacing.
    </p>

    <div class="demo-section">
      <h2>Fluid Typography</h2>
      <p class="info">Resize your browser window — the text scales smoothly between min and max sizes.</p>
      <div class="cf-fluid-text">
        <h2>This heading uses clamp()</h2>
        <p>This paragraph text also scales fluidly. No media queries, no breakpoints — just smooth scaling between a minimum and maximum size based on the viewport width.</p>
      </div>
      <div class="cf-values">
        <div class="cf-value-box">
          <div class="cf-label">Min</div>
          <div class="cf-val">1.25rem</div>
        </div>
        <div class="cf-value-box">
          <div class="cf-label">Preferred</div>
          <div class="cf-val">3vw</div>
        </div>
        <div class="cf-value-box">
          <div class="cf-label">Max</div>
          <div class="cf-val">2.5rem</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Responsive Width with clamp()</h2>
      <p class="info">Drag the right edge to resize. The inner box uses <code>clamp(100px, 50%, 400px)</code>.</p>
      <div class="cf-resize-demo" id="cf-resize">
        <div class="cf-resize-inner" id="cf-inner">clamp(100px, 50%, 400px)</div>
        <div class="cf-viewport-label" id="cf-label"></div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Comparison</h2>
      <div class="cf-spacing-demo">
        <div class="cf-spacing-bar cf-min-bar">min(300px, 100%)</div>
        <div class="cf-spacing-bar cf-max-bar">max(200px, 50%)</div>
        <div class="cf-spacing-bar cf-clamp-bar">clamp(150px, 60%, 400px)</div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Fluid typography */
h1 {
  font-size: clamp(1.25rem, 3vw, 2.5rem);
}

/* Responsive width */
.container {
  width: clamp(300px, 80%, 1200px);
}

/* min() — pick the smaller value */
.sidebar {
  width: min(300px, 100%);
}

/* max() — pick the larger value */
.content {
  width: max(200px, 50%);
}</pre>
    </div>
  `;
}

export function init() {
  const resize = document.getElementById('cf-resize');
  const inner = document.getElementById('cf-inner');
  const label = document.getElementById('cf-label');
  if (!resize || !inner || !label) return;

  const ro = new ResizeObserver(entries => {
    for (const entry of entries) {
      const containerW = Math.round(entry.contentRect.width);
      const innerW = Math.round(inner.getBoundingClientRect().width);
      label.textContent = `Container: ${containerW}px → Inner: ${innerW}px`;
    }
  });
  ro.observe(resize);
}
