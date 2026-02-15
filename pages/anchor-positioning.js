export function render() {
  return `
    <style>
      .ap-playground {
        position: relative;
        height: 400px;
        background: var(--color-surface-2);
        border-radius: var(--radius);
        overflow: hidden;
      }

      .ap-anchor {
        anchor-name: --my-anchor;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        background: linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.7 0.18 250));
        border-radius: var(--radius);
        cursor: grab;
        display: grid;
        place-items: center;
        font-weight: 700;
        font-size: 0.82rem;
        user-select: none;
        z-index: 2;
      }

      .ap-anchor:active {
        cursor: grabbing;
      }

      .ap-tooltip {
        position: absolute;
        position-anchor: --my-anchor;
        top: anchor(bottom);
        left: anchor(center);
        translate: -50% 8px;
        background: var(--color-bg);
        color: var(--color-text);
        padding: 0.6rem 1rem;
        border-radius: var(--radius);
        font-size: 0.82rem;
        white-space: nowrap;
        border: 1px solid var(--color-border);
        z-index: 1;
        pointer-events: none;
      }

      .ap-tooltip::before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 50%;
        translate: -50%;
        border: 6px solid transparent;
        border-bottom-color: var(--color-border);
      }

      .ap-label-top {
        position: absolute;
        position-anchor: --my-anchor;
        bottom: anchor(top);
        left: anchor(center);
        translate: -50% -8px;
        font-size: 0.7rem;
        color: var(--color-accent);
        font-family: monospace;
        pointer-events: none;
      }

      .ap-label-right {
        position: absolute;
        position-anchor: --my-anchor;
        top: anchor(center);
        left: anchor(right);
        translate: 8px -50%;
        font-size: 0.7rem;
        color: oklch(0.7 0.15 150);
        font-family: monospace;
        pointer-events: none;
      }

      .ap-hint {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        translate: -50%;
        font-size: 0.75rem;
        color: var(--color-text-muted);
      }

      /* Fallback for browsers without anchor positioning */
      @supports not (anchor-name: --a) {
        .ap-tooltip, .ap-label-top, .ap-label-right {
          display: none;
        }
        .ap-fallback {
          display: block !important;
        }
      }

      .ap-fallback {
        display: none;
        padding: 1rem;
        background: oklch(0.4 0.15 50 / 0.2);
        border: 1px solid oklch(0.6 0.15 50);
        border-radius: var(--radius);
        margin-block-end: 1rem;
        font-size: 0.85rem;
        color: oklch(0.8 0.1 50);
      }
    </style>

    <div class="page-header">
      <h1>Anchor Positioning</h1>
      <p class="subtitle">Position elements relative to anchor elements — no JavaScript positioning.</p>
      <span class="badge">Baseline 2026</span>
    </div>

    <p class="info">
      CSS Anchor Positioning lets you declare an element as an anchor with <code>anchor-name</code>,
      then position other elements relative to it using <code>position-anchor</code> and the
      <code>anchor()</code> function. Drag the box to see the tooltip follow.
    </p>

    <div class="ap-fallback">
      Your browser doesn't support CSS Anchor Positioning yet. Try Chrome 125+ or Firefox 147+.
    </div>

    <div class="demo-section">
      <h2>Drag the Anchor</h2>
      <div class="ap-playground" id="ap-playground">
        <div class="ap-anchor" id="ap-anchor">Drag me</div>
        <div class="ap-tooltip">I'm anchored below!</div>
        <div class="ap-label-top">anchor(top)</div>
        <div class="ap-label-right">anchor(right)</div>
        <div class="ap-hint">Drag the box around the playground</div>
      </div>
    </div>

    <div class="code-block">
      <pre>.anchor-element {
  anchor-name: --my-anchor;
}

.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  top: anchor(bottom);
  left: anchor(center);
  translate: -50% 8px;
}</pre>
    </div>
  `;
}

export function init() {
  const anchor = document.getElementById('ap-anchor');
  const playground = document.getElementById('ap-playground');
  if (!anchor || !playground) return;

  let dragging = false;
  let offsetX, offsetY;

  anchor.addEventListener('pointerdown', e => {
    dragging = true;
    const rect = anchor.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    anchor.setPointerCapture(e.pointerId);
    anchor.style.cursor = 'grabbing';
  });

  anchor.addEventListener('pointermove', e => {
    if (!dragging) return;
    const pgRect = playground.getBoundingClientRect();
    let x = e.clientX - pgRect.left - offsetX;
    let y = e.clientY - pgRect.top - offsetY;

    x = Math.max(0, Math.min(x, pgRect.width - anchor.offsetWidth));
    y = Math.max(0, Math.min(y, pgRect.height - anchor.offsetHeight));

    anchor.style.left = `${x}px`;
    anchor.style.top = `${y}px`;
    anchor.style.transform = 'none';
  });

  anchor.addEventListener('pointerup', () => {
    dragging = false;
    anchor.style.cursor = 'grab';
  });
}
