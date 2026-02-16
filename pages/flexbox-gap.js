export function render() {
  return `
    <style>
      .fg-demo-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
      }
      @media (max-width: 600px) {
        .fg-demo-row { grid-template-columns: 1fr; }
      }
      .fg-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .fg-panel h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      .fg-gap-demo {
        display: flex;
        flex-wrap: wrap;
        gap: var(--fg-gap, 1rem);
      }
      .fg-margin-demo {
        display: flex;
        flex-wrap: wrap;
      }
      .fg-margin-demo .fg-item {
        margin: calc(var(--fg-gap, 1rem) / 2);
      }

      .fg-item {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, oklch(0.6 0.18 250), oklch(0.7 0.15 300));
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        color: white;
        font-weight: 600;
        font-size: 0.8rem;
      }

      .fg-controls {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
      }
      .fg-controls label {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }
      .fg-controls input[type="range"] {
        width: 180px;
        accent-color: var(--color-accent);
      }
      .fg-controls .fg-value {
        font-family: monospace;
        font-size: 0.85rem;
        color: var(--color-accent);
        min-width: 3.5em;
      }

      .fg-direction-demo {
        display: flex;
        gap: 1rem;
        flex-direction: var(--fg-dir, row);
      }
      .fg-direction-demo.column {
        --fg-dir: column;
        height: 280px;
      }
      .fg-rowcol {
        display: flex;
        flex-wrap: wrap;
        row-gap: 2rem;
        column-gap: 0.5rem;
      }

      .fg-tag-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .fg-tag {
        padding: 0.4rem 0.85rem;
        border-radius: 999px;
        background: var(--color-surface-2);
        border: 1px solid var(--color-border);
        font-size: 0.8rem;
        color: var(--color-text);
        white-space: nowrap;
      }
    </style>

    <div class="page-header">
      <h1>Flexbox gap</h1>
      <p class="subtitle">Use <code>gap</code> in flex layouts — no more margin hacks.</p>
      <span class="badge">Baseline 2021</span>
    </div>

    <p class="info">
      The <code>gap</code> property (previously only for Grid) now works in Flexbox. It creates spacing between items without adding margins, so there's no extra space at the edges or need for negative-margin wrappers.
    </p>

    <div class="demo-section">
      <h2>gap vs. margin</h2>
      <div class="fg-controls">
        <label>Gap size:</label>
        <input type="range" id="fg-slider" min="0" max="40" value="16">
        <span class="fg-value" id="fg-label">16px</span>
      </div>
      <div class="fg-demo-row" id="fg-demo-row">
        <div class="fg-panel">
          <h3>gap (clean edges)</h3>
          <div class="fg-gap-demo" id="fg-gap">
            <div class="fg-item">1</div><div class="fg-item">2</div><div class="fg-item">3</div>
            <div class="fg-item">4</div><div class="fg-item">5</div><div class="fg-item">6</div>
          </div>
        </div>
        <div class="fg-panel">
          <h3>margin (extra space at edges)</h3>
          <div class="fg-margin-demo" id="fg-margin">
            <div class="fg-item">1</div><div class="fg-item">2</div><div class="fg-item">3</div>
            <div class="fg-item">4</div><div class="fg-item">5</div><div class="fg-item">6</div>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>row-gap &amp; column-gap</h2>
      <p class="info">You can set different values for row and column gaps.</p>
      <div class="fg-panel">
        <h3>row-gap: 2rem &middot; column-gap: 0.5rem</h3>
        <div class="fg-rowcol">
          <div class="fg-item">1</div><div class="fg-item">2</div><div class="fg-item">3</div>
          <div class="fg-item">4</div><div class="fg-item">5</div><div class="fg-item">6</div>
          <div class="fg-item">7</div><div class="fg-item">8</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Real-World: Tag Cloud</h2>
      <div class="fg-tag-cloud">
        <span class="fg-tag">CSS</span><span class="fg-tag">Flexbox</span>
        <span class="fg-tag">Grid</span><span class="fg-tag">gap</span>
        <span class="fg-tag">Modern Layout</span><span class="fg-tag">Responsive</span>
        <span class="fg-tag">No Hacks</span><span class="fg-tag">Clean Code</span>
        <span class="fg-tag">Semantic</span><span class="fg-tag">Accessible</span>
        <span class="fg-tag">Progressive</span><span class="fg-tag">Maintainable</span>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Simple gap in flex */
.toolbar {
  display: flex;
  gap: 1rem;
}

/* Different row and column gaps */
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.75rem;
  column-gap: 0.5rem;
}</pre>
    </div>
  `;
}

export function init() {
  const slider = document.getElementById('fg-slider');
  const label = document.getElementById('fg-label');
  const row = document.getElementById('fg-demo-row');
  if (!slider || !label || !row) return;

  slider.addEventListener('input', () => {
    const v = slider.value + 'px';
    label.textContent = v;
    row.style.setProperty('--fg-gap', v);
  });
}
