export function render() {
  return `
    <style>
      .rf-demo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 700px) {
        .rf-demo-grid { grid-template-columns: 1fr; }
      }
      .rf-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .rf-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      .rf-flex-demo {
        display: flex;
        flex-direction: row-reverse;
        gap: 0.5rem;
      }
      .rf-flex-demo.with-flow {
        reading-flow: flex-visual;
      }
      .rf-flex-item {
        padding: 0.75rem 1rem;
        border-radius: var(--radius);
        background: var(--color-surface);
        border: 2px solid var(--color-border);
        font-size: 0.85rem;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
        transition: all 150ms ease;
        flex: 1;
      }
      .rf-flex-item:focus {
        outline: none;
      }
      .rf-flex-item:focus-visible {
        border-color: var(--color-accent);
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
        background: var(--color-accent-subtle);
      }

      .rf-grid-demo {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto auto;
        gap: 0.5rem;
      }
      .rf-grid-demo.with-flow {
        reading-flow: grid-rows;
      }
      .rf-grid-item {
        padding: 0.75rem;
        border-radius: var(--radius);
        background: var(--color-surface);
        border: 2px solid var(--color-border);
        font-size: 0.8rem;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
        transition: all 150ms ease;
      }
      .rf-grid-item:focus {
        outline: none;
      }
      .rf-grid-item:focus-visible {
        border-color: var(--color-accent);
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
        background: var(--color-accent-subtle);
      }
      .rf-grid-item.span-2 {
        grid-column: span 2;
      }
      .rf-grid-item.tall {
        grid-row: span 2;
      }

      .rf-values {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .rf-value-row {
        display: flex;
        align-items: baseline;
        gap: 0.75rem;
      }
      .rf-value-row code {
        background: var(--color-surface);
        padding: 0.25em 0.6em;
        border-radius: 4px;
        font-size: 0.85em;
        white-space: nowrap;
        min-width: 120px;
      }
      .rf-value-row span {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }

      .rf-hint {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        border-radius: var(--radius);
        background: var(--color-accent-subtle);
        font-size: 0.85rem;
        color: var(--color-text);
        margin-bottom: 1.5rem;
      }

      .rf-order-label {
        display: flex;
        gap: 0.25rem;
        font-size: 0.75rem;
        color: var(--color-text-muted);
        margin-top: 0.5rem;
        font-family: monospace;
      }
      .rf-order-label span {
        flex: 1;
        text-align: center;
      }
    </style>

    <div class="page-header">
      <h1>reading-flow</h1>
      <p class="subtitle">Make keyboard focus follow visual layout order in flex and grid containers.</p>
      <span class="badge">Chrome 137+</span>
    </div>

    <p class="info">
      When you reorder items visually with <code>flex-direction: row-reverse</code>, <code>order</code>,
      or grid placement, keyboard Tab order still follows the DOM. <code>reading-flow</code> fixes this —
      focus navigation matches what the user sees on screen.
    </p>

    <div class="rf-hint">Press <strong>Tab</strong> to navigate the demos below — notice the focus order difference.</div>

    <div class="demo-section">
      <h2>Flexbox — Reversed Direction</h2>
      <p class="info">Both rows use <code>flex-direction: row-reverse</code>, but only the right one has <code>reading-flow: flex-visual</code>.</p>
      <div class="rf-demo-grid">
        <div class="rf-card">
          <h3>Default — Tab follows DOM order</h3>
          <div class="rf-flex-demo">
            <button class="rf-flex-item" tabindex="0">A</button>
            <button class="rf-flex-item" tabindex="0">B</button>
            <button class="rf-flex-item" tabindex="0">C</button>
          </div>
          <div class="rf-order-label"><span>C</span><span>B</span><span>A</span></div>
        </div>
        <div class="rf-card">
          <h3>reading-flow: flex-visual</h3>
          <div class="rf-flex-demo with-flow">
            <button class="rf-flex-item" tabindex="0">A</button>
            <button class="rf-flex-item" tabindex="0">B</button>
            <button class="rf-flex-item" tabindex="0">C</button>
          </div>
          <div class="rf-order-label"><span>C</span><span>B</span><span>A</span></div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Grid — Complex Layout</h2>
      <p class="info">Items span multiple cells. <code>reading-flow: grid-rows</code> makes Tab follow the visual row order.</p>
      <div class="rf-demo-grid">
        <div class="rf-card">
          <h3>Default — DOM order</h3>
          <div class="rf-grid-demo">
            <button class="rf-grid-item span-2" tabindex="0">1: Header</button>
            <button class="rf-grid-item tall" tabindex="0">2: Sidebar</button>
            <button class="rf-grid-item span-2" tabindex="0">3: Content</button>
          </div>
        </div>
        <div class="rf-card">
          <h3>reading-flow: grid-rows</h3>
          <div class="rf-grid-demo with-flow">
            <button class="rf-grid-item span-2" tabindex="0">1: Header</button>
            <button class="rf-grid-item tall" tabindex="0">2: Sidebar</button>
            <button class="rf-grid-item span-2" tabindex="0">3: Content</button>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Property Values</h2>
      <div class="rf-values">
        <div class="rf-value-row"><code>normal</code> <span>Default — focus follows DOM source order.</span></div>
        <div class="rf-value-row"><code>flex-visual</code> <span>Flex: follow visual order accounting for writing mode.</span></div>
        <div class="rf-value-row"><code>flex-flow</code> <span>Flex: follow the flex-flow direction.</span></div>
        <div class="rf-value-row"><code>grid-rows</code> <span>Grid: follow visual order row by row.</span></div>
        <div class="rf-value-row"><code>grid-columns</code> <span>Grid: follow visual order column by column.</span></div>
        <div class="rf-value-row"><code>grid-order</code> <span>Grid: follow the <code>order</code> property on children.</span></div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Flex: focus follows visual order */
.toolbar {
  display: flex;
  flex-direction: row-reverse;
  reading-flow: flex-visual;
}

/* Grid: focus follows row layout */
.dashboard {
  display: grid;
  grid-template-areas:
    "header header sidebar"
    "content content sidebar";
  reading-flow: grid-rows;
}

/* Grid: focus follows column layout */
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  reading-flow: grid-columns;
}</pre>
    </div>
  `;
}
