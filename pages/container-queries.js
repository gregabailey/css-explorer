export function render() {
  return `
    <style>
      .cq-wrapper {
        container-type: inline-size;
        container-name: card-container;
        resize: horizontal;
        overflow: hidden;
        border: 2px dashed var(--color-border);
        padding: 1.5rem;
        min-width: 200px;
        max-width: 100%;
      }
      .cq-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1rem;
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr;
      }
      .cq-card-img {
        width: 100%;
        aspect-ratio: 16/9;
        background: linear-gradient(135deg, oklch(0.6 0.2 280), oklch(0.7 0.18 200));
        border-radius: 6px;
      }
      .cq-card-body h3 {
        font-size: 1rem;
        margin-block-end: 0.4rem;
      }
      .cq-card-body p {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }
      .cq-size-label {
        font-size: 0.75rem;
        color: var(--color-accent);
        font-family: monospace;
        margin-block-start: 0.75rem;
      }
      @container card-container (min-width: 400px) {
        .cq-card {
          grid-template-columns: 150px 1fr;
          align-items: center;
        }
        .cq-card-img {
          aspect-ratio: 1;
        }
      }
      @container card-container (min-width: 600px) {
        .cq-card {
          grid-template-columns: 200px 1fr;
          padding: 1.5rem;
        }
        .cq-card-body h3 {
          font-size: 1.25rem;
        }
      }
    </style>

    <div class="page-header">
      <h1>Container Queries</h1>
      <p class="subtitle">Style elements based on their container's size, not the viewport.</p>
      <span class="badge">Baseline 2023</span>
    </div>

    <p class="info">
      Drag the right edge of the box below to resize it. The card layout adapts based on the
      container width using <code>@container</code> rules — no media queries involved.
    </p>

    <div class="demo-section">
      <h2>Resizable Container</h2>
      <div class="cq-wrapper" id="cq-wrapper">
        <div class="cq-card">
          <div class="cq-card-img"></div>
          <div class="cq-card-body">
            <h3>Adaptive Card</h3>
            <p>This card changes layout at 400px and 600px container width. The component adapts to its context, not the viewport.</p>
          </div>
        </div>
        <div class="cq-size-label" id="cq-size-label"></div>
      </div>
    </div>

    <div class="code-block">
      <pre>.wrapper {
  container-type: inline-size;
  container-name: card-container;
}

@container card-container (min-width: 400px) {
  .card { grid-template-columns: 150px 1fr; }
}

@container card-container (min-width: 600px) {
  .card { grid-template-columns: 200px 1fr; }
}</pre>
    </div>
  `;
}

export function init() {
  const wrapper = document.getElementById('cq-wrapper');
  const label = document.getElementById('cq-size-label');
  if (!wrapper || !label) return;

  const ro = new ResizeObserver(entries => {
    for (const entry of entries) {
      label.textContent = `Container width: ${Math.round(entry.contentRect.width)}px`;
    }
  });
  ro.observe(wrapper);
}
