export function render() {
  return `
    <style>
      .nc-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      .nc-item {
        padding: 0.75rem 1rem;
        border-radius: var(--radius);
        border: 2px solid var(--color-border);
        background: var(--color-surface-2);
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        transition: all 200ms ease;
      }
      .nc-item .nc-tag {
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 0.2em 0.6em;
        border-radius: 4px;
        background: var(--color-surface);
        color: var(--color-text-muted);
      }
      .nc-item.featured .nc-tag {
        background: oklch(0.55 0.18 260 / 0.15);
        color: oklch(0.65 0.18 260);
      }

      /* Demo 1: nth-child(odd of .featured) */
      .nc-demo1 .nc-item.featured:nth-child(odd of .featured) {
        border-color: oklch(0.65 0.18 260);
        background: oklch(0.65 0.18 260 / 0.08);
      }

      /* Demo 2: nth-child(3 of .task) */
      .nc-task-list .nc-item.task:nth-child(3 of .task) {
        border-color: oklch(0.6 0.2 150);
        background: oklch(0.6 0.2 150 / 0.08);
      }

      .nc-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      .nc-dot {
        aspect-ratio: 1;
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        font-size: 0.75rem;
        font-weight: 600;
        background: var(--color-surface-2);
        color: var(--color-text-muted);
        border: 2px solid var(--color-border);
        transition: all 200ms ease;
      }
      .nc-dot.active {
        background: oklch(0.55 0.18 260 / 0.12);
        color: oklch(0.65 0.18 260);
        border-color: transparent;
      }

      /* Demo 3: nth-child(-n+3 of .active) — first 3 active items */
      .nc-grid-demo .nc-dot.active:nth-child(-n+3 of .active) {
        border-color: oklch(0.6 0.22 30);
        background: oklch(0.6 0.22 30 / 0.15);
        color: oklch(0.6 0.22 30);
      }

      .nc-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .nc-compare { grid-template-columns: 1fr; }
      }
      .nc-compare-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .nc-compare-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      /* Old: nth-child(2) highlights 2nd overall */
      .nc-old .nc-item:nth-child(2) {
        border-color: oklch(0.6 0.2 30);
        background: oklch(0.6 0.2 30 / 0.08);
      }

      /* New: nth-child(2 of .featured) highlights 2nd featured */
      .nc-new .nc-item.featured:nth-child(2 of .featured) {
        border-color: oklch(0.65 0.18 260);
        background: oklch(0.65 0.18 260 / 0.08);
      }
    </style>

    <div class="page-header">
      <h1>:nth-child(of S)</h1>
      <p class="subtitle">Filter <code>:nth-child()</code> to match only elements of a given selector.</p>
      <span class="badge">Baseline 2023</span>
    </div>

    <p class="info">
      The new <code>:nth-child(An+B of S)</code> syntax adds a selector filter — so <code>:nth-child(2 of .featured)</code>
      selects the 2nd element that matches <code>.featured</code>, skipping non-matching siblings entirely.
      Previously you'd need JavaScript or awkward workarounds.
    </p>

    <div class="demo-section">
      <h2>Old vs New — Select 2nd Featured Item</h2>
      <div class="nc-compare">
        <div class="nc-compare-card">
          <h3>:nth-child(2) — counts all siblings</h3>
          <div class="nc-list nc-old">
            <div class="nc-item">Regular item</div>
            <div class="nc-item featured"><span class="nc-tag">Featured</span> Highlighted (2nd child overall)</div>
            <div class="nc-item featured"><span class="nc-tag">Featured</span> Not selected</div>
            <div class="nc-item">Regular item</div>
            <div class="nc-item featured"><span class="nc-tag">Featured</span> Not selected</div>
          </div>
        </div>
        <div class="nc-compare-card">
          <h3>:nth-child(2 of .featured) — counts only featured</h3>
          <div class="nc-list nc-new">
            <div class="nc-item">Regular item</div>
            <div class="nc-item featured"><span class="nc-tag">Featured</span> 1st featured — skipped</div>
            <div class="nc-item featured"><span class="nc-tag">Featured</span> 2nd featured — selected!</div>
            <div class="nc-item">Regular item</div>
            <div class="nc-item featured"><span class="nc-tag">Featured</span> 3rd featured — skipped</div>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Alternating Featured Items</h2>
      <p class="info"><code>:nth-child(odd of .featured)</code> stripes only the featured items, regardless of position in the list.</p>
      <div class="nc-list nc-demo1">
        <div class="nc-item">Regular item</div>
        <div class="nc-item featured"><span class="nc-tag">Featured</span> 1st featured (odd) — highlighted</div>
        <div class="nc-item">Regular item</div>
        <div class="nc-item featured"><span class="nc-tag">Featured</span> 2nd featured (even)</div>
        <div class="nc-item">Regular item</div>
        <div class="nc-item">Regular item</div>
        <div class="nc-item featured"><span class="nc-tag">Featured</span> 3rd featured (odd) — highlighted</div>
        <div class="nc-item featured"><span class="nc-tag">Featured</span> 4th featured (even)</div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Select 3rd Task</h2>
      <p class="info"><code>:nth-child(3 of .task)</code> finds the 3rd task, ignoring non-task items.</p>
      <div class="nc-list nc-task-list">
        <div class="nc-item">Note: sprint planning at 10am</div>
        <div class="nc-item task"><span class="nc-tag">Task</span> Fix login bug</div>
        <div class="nc-item task"><span class="nc-tag">Task</span> Update dependencies</div>
        <div class="nc-item">Note: deploy freeze Friday</div>
        <div class="nc-item task"><span class="nc-tag">Task</span> Write unit tests — this is #3!</div>
        <div class="nc-item task"><span class="nc-tag">Task</span> Review PR</div>
      </div>
    </div>

    <div class="demo-section">
      <h2>First 3 Active Items</h2>
      <p class="info"><code>:nth-child(-n+3 of .active)</code> selects the first 3 elements with class <code>.active</code>.</p>
      <div class="nc-grid nc-grid-demo">
        <div class="nc-dot">1</div>
        <div class="nc-dot active">2</div>
        <div class="nc-dot">3</div>
        <div class="nc-dot active">4</div>
        <div class="nc-dot">5</div>
        <div class="nc-dot active">6</div>
        <div class="nc-dot">7</div>
        <div class="nc-dot active">8</div>
        <div class="nc-dot">9</div>
        <div class="nc-dot active">10</div>
        <div class="nc-dot">11</div>
        <div class="nc-dot">12</div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Select the 2nd element matching .featured */
:nth-child(2 of .featured) {
  border-color: blue;
}

/* Stripe only featured items */
:nth-child(odd of .featured) {
  background: lightblue;
}

/* First 3 active items */
:nth-child(-n+3 of .active) {
  border-color: orange;
}

/* Last featured item */
:nth-last-child(1 of .featured) {
  font-weight: bold;
}</pre>
    </div>
  `;
}
