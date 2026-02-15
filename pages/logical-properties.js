export function render() {
  return `
    <style>
      .lp-demo-area {
        padding: 1rem;
        border: 1px dashed var(--color-border);
        border-radius: var(--radius);
      }

      .lp-box {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding-block: 1rem;
        padding-inline: 2rem;
        margin-block-end: 1rem;
        border-inline-start: 4px solid var(--color-accent);
        font-size: 0.9rem;
      }

      .lp-box code {
        display: block;
        margin-block-start: 0.3rem;
        font-size: 0.78rem;
      }

      .lp-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-block-end: 1rem;
      }

      @media (max-width: 600px) {
        .lp-compare {
          grid-template-columns: 1fr;
        }
      }

      .lp-col-header {
        font-size: 0.82rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-text-muted);
        margin-block-end: 0.75rem;
      }

      .lp-physical .lp-item {
        border-left: 4px solid oklch(0.6 0.2 20);
        padding-left: 1rem;
        margin-bottom: 0.75rem;
      }

      .lp-logical .lp-item {
        border-inline-start: 4px solid oklch(0.6 0.2 150);
        padding-inline-start: 1rem;
        margin-block-end: 0.75rem;
      }

      .lp-item {
        font-size: 0.85rem;
        background: var(--color-surface-2);
        padding: 0.6rem;
        border-radius: 0 var(--radius) var(--radius) 0;
      }

      .lp-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.82rem;
        margin-block-end: 1rem;
      }

      .lp-table th, .lp-table td {
        padding: 0.5rem 0.75rem;
        text-align: left;
        border-block-end: 1px solid var(--color-border);
      }

      .lp-table th {
        color: var(--color-text-muted);
        font-weight: 600;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .lp-table code {
        color: var(--color-accent);
      }
    </style>

    <div class="page-header">
      <h1>Logical Properties</h1>
      <p class="subtitle">Direction-agnostic layout using <code>inline</code> and <code>block</code> axes.</p>
      <span class="badge">Baseline 2021</span>
    </div>

    <p class="info">
      Logical properties replace physical directions (left/right/top/bottom) with flow-relative
      ones (inline-start/inline-end/block-start/block-end). This is essential for internationalization —
      toggle the direction below to see logical properties adapt automatically.
    </p>

    <div class="demo-section">
      <h2>Toggle Writing Direction</h2>
      <div class="controls">
        <button class="btn active" id="lp-ltr-btn">LTR (English)</button>
        <button class="btn" id="lp-rtl-btn">RTL (Arabic/Hebrew)</button>
      </div>
      <div class="lp-demo-area" id="lp-demo" dir="ltr">
        <div class="lp-box">
          <strong>border-inline-start</strong> + <strong>padding-inline</strong>
          <code>border-inline-start: 4px solid accent;</code>
          <code>padding-inline: 2rem;</code>
        </div>
        <div class="lp-box">
          This border and padding follow the text direction. In LTR, <code>inline-start</code> is left.
          In RTL, it flips to right — automatically.
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Physical vs Logical</h2>
      <div class="lp-compare">
        <div class="lp-physical">
          <div class="lp-col-header">Physical (old)</div>
          <div class="lp-item"><code>margin-left: 1rem</code></div>
          <div class="lp-item"><code>padding-top: 1rem</code></div>
          <div class="lp-item"><code>border-right: 2px solid</code></div>
          <div class="lp-item"><code>width: 200px</code></div>
        </div>
        <div class="lp-logical">
          <div class="lp-col-header">Logical (new)</div>
          <div class="lp-item"><code>margin-inline-start: 1rem</code></div>
          <div class="lp-item"><code>padding-block-start: 1rem</code></div>
          <div class="lp-item"><code>border-inline-end: 2px solid</code></div>
          <div class="lp-item"><code>inline-size: 200px</code></div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Quick Reference</h2>
      <table class="lp-table">
        <thead>
          <tr><th>Physical</th><th>Logical</th><th>Axis</th></tr>
        </thead>
        <tbody>
          <tr><td>left / right</td><td><code>inline-start / inline-end</code></td><td>Inline</td></tr>
          <tr><td>top / bottom</td><td><code>block-start / block-end</code></td><td>Block</td></tr>
          <tr><td>width</td><td><code>inline-size</code></td><td>Inline</td></tr>
          <tr><td>height</td><td><code>block-size</code></td><td>Block</td></tr>
          <tr><td>margin-left</td><td><code>margin-inline-start</code></td><td>Inline</td></tr>
          <tr><td>padding-top</td><td><code>padding-block-start</code></td><td>Block</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

export function init() {
  const demo = document.getElementById('lp-demo');
  const ltrBtn = document.getElementById('lp-ltr-btn');
  const rtlBtn = document.getElementById('lp-rtl-btn');
  if (!demo || !ltrBtn || !rtlBtn) return;

  ltrBtn.addEventListener('click', () => {
    demo.dir = 'ltr';
    ltrBtn.classList.add('active');
    rtlBtn.classList.remove('active');
  });

  rtlBtn.addEventListener('click', () => {
    demo.dir = 'rtl';
    rtlBtn.classList.add('active');
    ltrBtn.classList.remove('active');
  });
}
