export function render() {
  return `
    <style>
      .iw-demo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .iw-demo { grid-template-columns: 1fr; }
      }
      .iw-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .iw-panel h3 {
        font-size: 0.9rem;
        margin-bottom: 1rem;
        color: var(--color-accent);
      }
      .iw-panel ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .iw-panel li {
        padding: 0.5rem 0.75rem;
        border-radius: 4px;
        margin-bottom: 0.25rem;
        font-size: 0.85rem;
        color: var(--color-text);
      }

      /* :is() demo — high specificity (matches highest selector) */
      :is(.iw-is-demo h2, .iw-is-demo h3, .iw-is-demo h4) {
        color: oklch(0.75 0.15 150);
        border-left: 3px solid oklch(0.75 0.15 150);
        padding-left: 0.75rem;
        margin-bottom: 0.5rem;
      }

      /* :where() demo — zero specificity */
      :where(.iw-where-demo h2, .iw-where-demo h3, .iw-where-demo h4) {
        color: oklch(0.75 0.15 250);
        border-left: 3px solid oklch(0.75 0.15 250);
        padding-left: 0.75rem;
        margin-bottom: 0.5rem;
      }
      /* This overrides :where() but NOT :is() */
      .iw-where-demo h3 {
        color: oklch(0.8 0.18 50);
        border-left-color: oklch(0.8 0.18 50);
      }
      .iw-is-demo h3 {
        color: oklch(0.75 0.15 150); /* same as :is() — can't override */
      }

      .iw-specificity {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 1rem;
      }
      .iw-spec-card {
        flex: 1;
        min-width: 180px;
        padding: 1rem;
        border-radius: var(--radius);
        background: var(--color-surface-2);
        text-align: center;
      }
      .iw-spec-card code {
        display: block;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
        color: var(--color-text-muted);
      }
      .iw-spec-card .value {
        font-size: 1.5rem;
        font-weight: 700;
      }
      .iw-spec-card .value.high { color: oklch(0.75 0.15 150); }
      .iw-spec-card .value.zero { color: oklch(0.75 0.15 250); }

      .iw-before {
        color: var(--color-text-muted);
        font-size: 0.85rem;
        background: var(--color-surface-2);
        padding: 1rem;
        border-radius: var(--radius);
        margin-bottom: 1rem;
      }
      .iw-after {
        color: var(--color-text);
        font-size: 0.85rem;
        background: var(--color-surface-2);
        padding: 1rem;
        border-radius: var(--radius);
      }
    </style>

    <div class="page-header">
      <h1>:is() and :where()</h1>
      <p class="subtitle">Simplify selectors with grouping pseudo-classes.</p>
      <span class="badge">Baseline 2021</span>
    </div>

    <p class="info">
      Both <code>:is()</code> and <code>:where()</code> accept a selector list and match any element that matches one of the selectors. The key difference: <code>:is()</code> takes the specificity of its most specific argument, while <code>:where()</code> always has zero specificity.
    </p>

    <div class="demo-section">
      <h2>Selector Simplification</h2>
      <div class="iw-before">
        <strong>Before:</strong><br>
        <code>article h2, article h3, article h4, section h2, section h3, section h4 { ... }</code>
      </div>
      <div class="iw-after">
        <strong>After:</strong><br>
        <code>:is(article, section) :is(h2, h3, h4) { ... }</code>
      </div>
    </div>

    <div class="demo-section">
      <h2>Specificity Difference</h2>
      <p class="info">The h3 below has a direct style rule. It overrides <code>:where()</code> (zero specificity) but not <code>:is()</code> (takes highest specificity).</p>
      <div class="iw-demo">
        <div class="iw-panel iw-is-demo">
          <h3>:is() — keeps specificity</h3>
          <h2>Heading 2 (green)</h2>
          <h3>Heading 3 (still green — :is wins)</h3>
          <h4>Heading 4 (green)</h4>
        </div>
        <div class="iw-panel iw-where-demo">
          <h3>:where() — zero specificity</h3>
          <h2>Heading 2 (blue)</h2>
          <h3>Heading 3 (orange — override wins)</h3>
          <h4>Heading 4 (blue)</h4>
        </div>
      </div>

      <div class="iw-specificity">
        <div class="iw-spec-card">
          <code>:is(.foo, #bar)</code>
          <div class="value high">(1,0,0)</div>
          <small>Takes #bar's specificity</small>
        </div>
        <div class="iw-spec-card">
          <code>:where(.foo, #bar)</code>
          <div class="value zero">(0,0,0)</div>
          <small>Always zero</small>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* :is() — takes the highest specificity of its arguments */
:is(h1, h2, h3) {
  color: green;         /* Specificity: (0, 0, 1) */
}

/* :where() — always zero specificity, great for defaults */
:where(h1, h2, h3) {
  color: blue;          /* Specificity: (0, 0, 0) */
}

/* Simplify deeply nested selectors */
:is(nav, aside, footer) :is(a, button):hover {
  text-decoration: underline;
}</pre>
    </div>
  `;
}
