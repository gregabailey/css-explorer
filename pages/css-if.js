export function render() {
  return `
    <style>
      .ci-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
      }
      .ci-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .ci-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      .ci-conditions {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .ci-condition {
        display: flex;
        align-items: baseline;
        gap: 0.75rem;
      }
      .ci-condition code {
        background: var(--color-surface);
        padding: 0.3em 0.7em;
        border-radius: 4px;
        font-size: 0.82em;
        white-space: nowrap;
      }
      .ci-condition span {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }

      .ci-example-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .ci-example {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        overflow: hidden;
      }
      .ci-example-header {
        padding: 1rem 1.25rem;
        border-bottom: 1px solid var(--color-border);
        font-size: 0.85rem;
        font-weight: 600;
      }
      .ci-example-code {
        padding: 1.25rem;
        font-family: monospace;
        font-size: 0.82rem;
        line-height: 1.8;
        white-space: pre-wrap;
        color: var(--color-text-muted);
      }

      .ci-anatomy {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.5rem;
        font-family: monospace;
        font-size: 0.85rem;
        line-height: 2.2;
      }
      .ci-anatomy .kw { color: oklch(0.7 0.18 260); }
      .ci-anatomy .fn { color: oklch(0.7 0.18 30); }
      .ci-anatomy .vl { color: oklch(0.7 0.18 150); }
      .ci-anatomy .cm { color: var(--color-text-muted); font-style: italic; }

      .ci-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 700px) {
        .ci-compare { grid-template-columns: 1fr; }
      }
      .ci-compare-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .ci-compare-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .ci-compare-code {
        font-family: monospace;
        font-size: 0.8rem;
        line-height: 1.8;
        white-space: pre-wrap;
        color: var(--color-text-muted);
      }
    </style>

    <div class="page-header">
      <h1>if()</h1>
      <p class="subtitle">Inline conditional values — branch on media, style, or support queries right in a property value.</p>
      <span class="badge">Chrome 137+</span>
    </div>

    <p class="info">
      The <code>if()</code> function evaluates conditions inline and returns the first matching value.
      It supports three condition types: <code>media()</code>, <code>style()</code>, and <code>supports()</code>.
      Conditions are separated by semicolons, with an optional <code>else</code> fallback.
    </p>

    <div class="demo-section">
      <h2>Syntax</h2>
      <div class="ci-anatomy">
        property: <span class="kw">if</span>(<br>
        &nbsp;&nbsp;<span class="fn">media</span>(width >= 768px): <span class="vl">1.5rem</span>;<br>
        &nbsp;&nbsp;<span class="fn">style</span>(--theme: dark): <span class="vl">black</span>;<br>
        &nbsp;&nbsp;<span class="fn">supports</span>(color: oklch(0 0 0)): <span class="vl">oklch(0.7 0.2 180)</span>;<br>
        &nbsp;&nbsp;<span class="kw">else</span>: <span class="vl">fallback</span><br>
        );
      </div>
    </div>

    <div class="demo-section">
      <h2>Three Condition Types</h2>
      <div class="ci-conditions">
        <div class="ci-condition">
          <code>media()</code>
          <span>Viewport and media conditions — like <code>@media</code> but inline.</span>
        </div>
        <div class="ci-condition">
          <code>style()</code>
          <span>Check custom property values on the element itself.</span>
        </div>
        <div class="ci-condition">
          <code>supports()</code>
          <span>Feature detection — like <code>@supports</code> but inline.</span>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Before & After</h2>
      <div class="ci-compare">
        <div class="ci-compare-card">
          <h3>Without if() — separate rule blocks</h3>
          <div class="ci-compare-code">.button {
  padding: 0.5rem 1rem;
}
@media (pointer: coarse) {
  .button {
    padding: 1rem 1.5rem;
  }
}</div>
        </div>
        <div class="ci-compare-card">
          <h3>With if() — one declaration</h3>
          <div class="ci-compare-code">.button {
  padding: if(
    media(pointer: coarse):
      1rem 1.5rem;
    else: 0.5rem 1rem
  );
}</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Examples</h2>
      <div class="ci-example-list">
        <div class="ci-example">
          <div class="ci-example-header">Status colors with style()</div>
          <div class="ci-example-code">.badge {
  background: if(
    style(--status: success): oklch(0.7 0.2 150);
    style(--status: error):   oklch(0.7 0.2 25);
    style(--status: warning): oklch(0.7 0.2 85);
    else: oklch(0.7 0 0)
  );
}</div>
        </div>
        <div class="ci-example">
          <div class="ci-example-header">Responsive font sizing with media()</div>
          <div class="ci-example-code">h1 {
  font-size: if(
    media(width >= 1200px): 3rem;
    media(width >= 768px):  2rem;
    else: 1.5rem
  );
}</div>
        </div>
        <div class="ci-example">
          <div class="ci-example-header">Progressive enhancement with supports()</div>
          <div class="ci-example-code">.element {
  color: if(
    supports(color: oklch(0 0 0)):
      oklch(0.65 0.2 260);
    else: #6366f1
  );
}</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Inline responsive values */
.card {
  padding: if(media(width >= 768px): 2rem; else: 1rem);
  gap: if(media(width >= 768px): 1.5rem; else: 0.75rem);
}

/* Theme switching via custom properties */
.card {
  --variant: info;
  background: if(
    style(--variant: success): green;
    style(--variant: danger):  red;
    else: blue
  );
}

/* Feature detection inline */
.gradient {
  background: if(
    supports(background: linear-gradient(in oklch, red, blue)):
      linear-gradient(in oklch, red, blue);
    else: linear-gradient(red, blue)
  );
}</pre>
    </div>
  `;
}
