export function render() {
  return `
    <style>
      .sg-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 1rem;
      }

      .sg-card {
        display: grid;
        grid-template-rows: subgrid;
        grid-row: span 3;
        background: var(--color-surface-2);
        border-radius: var(--radius);
        border: 1px solid var(--color-border);
        overflow: hidden;
      }

      .sg-card-img {
        aspect-ratio: 16/9;
        border-radius: 0;
      }

      .sg-card-img.grad-1 { background: linear-gradient(135deg, oklch(0.55 0.2 280), oklch(0.65 0.18 230)); }
      .sg-card-img.grad-2 { background: linear-gradient(135deg, oklch(0.55 0.2 20), oklch(0.65 0.18 50)); }
      .sg-card-img.grad-3 { background: linear-gradient(135deg, oklch(0.55 0.2 150), oklch(0.65 0.18 180)); }
      .sg-card-img.grad-4 { background: linear-gradient(135deg, oklch(0.55 0.2 330), oklch(0.65 0.18 300)); }

      .sg-card-title {
        padding: 0.75rem 1rem 0;
        font-weight: 600;
        font-size: 0.95rem;
      }

      .sg-card-desc {
        padding: 0.25rem 1rem 1rem;
        font-size: 0.82rem;
        color: var(--color-text-muted);
        line-height: 1.5;
      }

      /* Non-subgrid comparison */
      .sg-no-subgrid .sg-card {
        display: flex;
        flex-direction: column;
        grid-row: auto;
      }

      .sg-label {
        font-size: 0.82rem;
        color: var(--color-text-muted);
        margin-block-end: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    </style>

    <div class="page-header">
      <h1>Subgrid</h1>
      <p class="subtitle">Nested grids that inherit track sizing from parents.</p>
      <span class="badge">Baseline 2023</span>
    </div>

    <p class="info">
      With <code>grid-template-rows: subgrid</code>, child grid items align their internal
      rows to the parent grid's tracks. Notice how titles and descriptions align across cards
      even when content lengths differ.
    </p>

    <div class="demo-section">
      <h2>With Subgrid</h2>
      <div class="sg-label">Rows are aligned across cards</div>
      <div class="sg-grid">
        <div class="sg-card">
          <div class="sg-card-img grad-1"></div>
          <div class="sg-card-title">Short Title</div>
          <div class="sg-card-desc">Brief description.</div>
        </div>
        <div class="sg-card">
          <div class="sg-card-img grad-2"></div>
          <div class="sg-card-title">A Much Longer Card Title That Wraps</div>
          <div class="sg-card-desc">This card has a longer title, but the description row still aligns with the other cards.</div>
        </div>
        <div class="sg-card">
          <div class="sg-card-img grad-3"></div>
          <div class="sg-card-title">Medium Title</div>
          <div class="sg-card-desc">Medium length description for this particular card.</div>
        </div>
        <div class="sg-card">
          <div class="sg-card-img grad-4"></div>
          <div class="sg-card-title">Tiny</div>
          <div class="sg-card-desc">Small.</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Without Subgrid</h2>
      <div class="sg-label">Each card sizes independently — rows don't align</div>
      <div class="sg-grid sg-no-subgrid">
        <div class="sg-card">
          <div class="sg-card-img grad-1"></div>
          <div class="sg-card-title">Short Title</div>
          <div class="sg-card-desc">Brief description.</div>
        </div>
        <div class="sg-card">
          <div class="sg-card-img grad-2"></div>
          <div class="sg-card-title">A Much Longer Card Title That Wraps</div>
          <div class="sg-card-desc">This card has a longer title, but without subgrid, the rows don't align with neighbors.</div>
        </div>
        <div class="sg-card">
          <div class="sg-card-img grad-3"></div>
          <div class="sg-card-title">Medium Title</div>
          <div class="sg-card-desc">Medium length description for this particular card.</div>
        </div>
        <div class="sg-card">
          <div class="sg-card-img grad-4"></div>
          <div class="sg-card-title">Tiny</div>
          <div class="sg-card-desc">Small.</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid;  /* inherit parent's row tracks */
  grid-row: span 3;             /* card spans 3 rows: img, title, desc */
}</pre>
    </div>
  `;
}
