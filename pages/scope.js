export function render() {
  return `
    <style>
      .sc-demo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .sc-demo-grid { grid-template-columns: 1fr; }
      }

      /* Basic @scope demo */
      @scope (.sc-card) {
        h3 { color: oklch(0.75 0.15 150); margin-bottom: 0.5rem; }
        p { color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.6; }
        a { color: var(--color-accent); text-decoration: none; }
        a:hover { text-decoration: underline; }
      }

      /* Scoped with lower boundary — styles stop at .sc-slot */
      @scope (.sc-wrapper) to (.sc-slot) {
        p {
          color: oklch(0.8 0.18 250);
          font-weight: 600;
          font-size: 0.9rem;
        }
      }

      .sc-card, .sc-unscoped {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .sc-card {
        border-left: 3px solid oklch(0.75 0.15 150);
      }
      .sc-unscoped {
        border-left: 3px solid var(--color-border);
      }
      .sc-unscoped h3 {
        color: var(--color-text);
        margin-bottom: 0.5rem;
      }
      .sc-unscoped p {
        color: var(--color-text-muted);
        font-size: 0.85rem;
        line-height: 1.6;
      }

      .sc-wrapper {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
        border-left: 3px solid oklch(0.8 0.18 250);
      }
      .sc-wrapper h3 {
        margin-bottom: 0.75rem;
        font-size: 0.9rem;
        color: var(--color-text-muted);
      }
      .sc-slot {
        background: var(--color-surface);
        border-radius: var(--radius);
        padding: 1rem;
        margin-top: 0.75rem;
        border: 2px dashed var(--color-border);
      }
      .sc-slot-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-text-muted);
        margin-bottom: 0.5rem;
      }
      .sc-slot p {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }

      .sc-theme-demo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      @media (max-width: 600px) {
        .sc-theme-demo { grid-template-columns: 1fr; }
      }
      @scope (.sc-light-theme) {
        .sc-themed-box {
          background: #f8f9fa;
          color: #1a1a2e;
          padding: 1rem;
          border-radius: var(--radius);
        }
        .sc-themed-box strong { color: #2d6a4f; }
      }
      @scope (.sc-dark-theme) {
        .sc-themed-box {
          background: #1a1a2e;
          color: #e1e4ed;
          padding: 1rem;
          border-radius: var(--radius);
        }
        .sc-themed-box strong { color: #95d5b2; }
      }
    </style>

    <div class="page-header">
      <h1>@scope</h1>
      <p class="subtitle">Scoped styles with upper and lower boundaries.</p>
      <span class="badge">Baseline 2025</span>
    </div>

    <p class="info">
      <code>@scope</code> lets you restrict styles to a subtree of the DOM, with an optional lower boundary where styles stop applying. This enables true component-scoped CSS without build tools or naming conventions.
    </p>

    <div class="demo-section">
      <h2>Basic Scoping</h2>
      <p class="info">The left card's styles are scoped — they don't leak to the right card.</p>
      <div class="sc-demo-grid">
        <div class="sc-card">
          <h3>Scoped Card</h3>
          <p>These styles come from <code>@scope (.sc-card)</code>. The heading is green and links are <a href="#">accented</a>.</p>
        </div>
        <div class="sc-unscoped">
          <h3>Unscoped Card</h3>
          <p>Same HTML structure, different wrapper class. The scoped styles don't apply here.</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Lower Boundary (Donut Scope)</h2>
      <p class="info">Styles apply from <code>.sc-wrapper</code> but stop at <code>.sc-slot</code> — creating a "donut" of styled content.</p>
      <div class="sc-wrapper">
        <h3>Component Wrapper</h3>
        <p>This paragraph IS styled (blue, bold) — it's inside the scope.</p>
        <p>This one too — still inside the upper boundary.</p>
        <div class="sc-slot">
          <div class="sc-slot-label">Slot (lower boundary)</div>
          <p>This paragraph is NOT styled by the scope — it's inside the lower boundary (.sc-slot). User-provided content goes here unstyled.</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Theming with @scope</h2>
      <div class="sc-theme-demo">
        <div class="sc-light-theme">
          <div class="sc-themed-box">
            <strong>Light theme</strong><br>
            Scoped to <code>.sc-light-theme</code>
          </div>
        </div>
        <div class="sc-dark-theme">
          <div class="sc-themed-box">
            <strong>Dark theme</strong><br>
            Scoped to <code>.sc-dark-theme</code>
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Basic scope */
@scope (.card) {
  h3 { color: green; }
  p { font-size: 0.9rem; }
}

/* Donut scope: styles stop at .slot */
@scope (.component) to (.slot) {
  p { color: blue; font-weight: bold; }
  /* p elements inside .slot are NOT affected */
}

/* Scope with proximity wins over specificity */
@scope (.dark) { a { color: lightblue; } }
@scope (.light) { a { color: darkblue; } }</pre>
    </div>
  `;
}
