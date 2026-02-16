export function render() {
  return `
    <style>
      .gaf-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-bottom: 1rem;
      }
      @media (max-width: 700px) {
        .gaf-compare { grid-template-columns: 1fr; }
      }
      .gaf-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
        overflow: hidden;
      }
      .gaf-panel h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.75rem;
      }
      .gaf-panel code {
        color: var(--color-accent);
        background: none;
        padding: 0;
      }

      .gaf-grid {
        display: grid;
        gap: 0.5rem;
        min-height: 70px;
      }
      .gaf-grid.fill {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      }
      .gaf-grid.fit {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      }

      .gaf-item {
        height: 60px;
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        font-weight: 600;
        font-size: 0.85rem;
        color: white;
        background: oklch(0.6 0.18 250);
      }

      .gaf-empty-track {
        height: 60px;
        border-radius: var(--radius);
        border: 2px dashed var(--color-border);
        display: grid;
        place-items: center;
        font-size: 0.7rem;
        color: var(--color-text-muted);
      }

      .gaf-controls {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        align-items: center;
      }
      .gaf-controls label {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        margin-right: 0.25rem;
      }
      .gaf-count {
        font-family: monospace;
        font-size: 0.85rem;
        color: var(--color-accent);
        min-width: 5em;
      }

      .gaf-track-viz {
        display: grid;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      .gaf-track-viz.fill-viz {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      }
      .gaf-track-viz.fit-viz {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      }
      .gaf-track {
        height: 36px;
        border-radius: 4px;
        display: grid;
        place-items: center;
        font-size: 0.7rem;
        font-weight: 600;
      }
      .gaf-track.filled {
        background: oklch(0.6 0.18 250 / 0.25);
        border: 1px solid oklch(0.6 0.18 250 / 0.5);
        color: oklch(0.7 0.18 250);
      }
      .gaf-track.empty {
        background: oklch(0.5 0 0 / 0.08);
        border: 1px dashed var(--color-border);
        color: var(--color-text-muted);
      }
      .gaf-track.collapsed {
        background: oklch(0.65 0.18 150 / 0.15);
        border: 1px solid oklch(0.65 0.18 150 / 0.4);
        color: oklch(0.7 0.18 150);
      }

      .gaf-label {
        font-size: 0.78rem;
        color: var(--color-text-muted);
        margin-bottom: 0.5rem;
      }

      .gaf-guidance {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 700px) {
        .gaf-guidance { grid-template-columns: 1fr; }
      }
      .gaf-guidance-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .gaf-guidance-card h3 {
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
        color: var(--color-text);
      }
      .gaf-guidance-card p {
        font-size: 0.82rem;
        color: var(--color-text-muted);
        line-height: 1.6;
      }
      .gaf-guidance-card code {
        font-size: 0.78rem;
      }
    </style>

    <div class="page-header">
      <h1>auto-fit vs auto-fill</h1>
      <p class="subtitle">Two keywords that look identical until columns go empty — then the difference matters.</p>
      <span class="badge">Grid Pattern</span>
    </div>

    <p class="info">
      Both <code>auto-fit</code> and <code>auto-fill</code> create as many columns as will fit in the container.
      The difference appears when there are <strong>fewer items than available columns</strong>:
      <code>auto-fill</code> keeps empty tracks (they take up space),
      while <code>auto-fit</code> collapses empty tracks to zero so items stretch to fill the row.
    </p>

    <div class="demo-section">
      <h2>Side-by-Side Comparison</h2>
      <p class="info">With few items, <code>auto-fill</code> leaves empty space on the right while <code>auto-fit</code> stretches items to fill the row. Add items to see the behavior converge.</p>
      <div class="gaf-controls">
        <label>Items:</label>
        <button class="btn" id="gaf-remove">−</button>
        <span class="gaf-count" id="gaf-count">3 items</span>
        <button class="btn" id="gaf-add">+</button>
      </div>
      <div class="gaf-compare">
        <div class="gaf-panel">
          <h3>auto-fill — <code>repeat(auto-fill, minmax(80px, 1fr))</code></h3>
          <div class="gaf-grid fill" id="gaf-fill"></div>
        </div>
        <div class="gaf-panel">
          <h3>auto-fit — <code>repeat(auto-fit, minmax(80px, 1fr))</code></h3>
          <div class="gaf-grid fit" id="gaf-fit"></div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>What's Happening Under the Hood</h2>
      <p class="info">Both keywords create the same number of tracks. The difference is what happens to <strong>empty</strong> ones.</p>
      <div class="gaf-compare" id="gaf-track-compare">
        <div class="gaf-panel">
          <h3>auto-fill tracks</h3>
          <p class="gaf-label" id="gaf-fill-label">5 tracks created — 2 empty (take up space)</p>
          <div id="gaf-fill-tracks"></div>
        </div>
        <div class="gaf-panel">
          <h3>auto-fit tracks</h3>
          <p class="gaf-label" id="gaf-fit-label">5 tracks created — 2 collapsed to 0px</p>
          <div id="gaf-fit-tracks"></div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>When to Use Which</h2>
      <div class="gaf-guidance">
        <div class="gaf-guidance-card">
          <h3>Use auto-fill when…</h3>
          <p>You want <strong>consistent column widths</strong> regardless of item count. Items stay at their minimum size and don't stretch. Good for image grids, card layouts where uniform sizing matters, or when you might lazy-load more items into empty slots.</p>
        </div>
        <div class="gaf-guidance-card">
          <h3>Use auto-fit when…</h3>
          <p>You want items to <strong>stretch and fill the row</strong>. With few items, they expand to use all available space. Good for navigation bars, feature grids, or any layout where you want items to feel "full-width" when there aren't many.</p>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* auto-fill: columns stay at minmax size, empty tracks preserved */
.grid-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

/* auto-fit: columns stretch when there are fewer items */
.grid-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* Both are identical when items fill all available columns.
   The difference only shows with fewer items than columns. */</pre>
    </div>
  `;
}

export function init() {
  let count = 3;
  const fillGrid = document.getElementById('gaf-fill');
  const fitGrid = document.getElementById('gaf-fit');
  const countLabel = document.getElementById('gaf-count');
  const addBtn = document.getElementById('gaf-add');
  const removeBtn = document.getElementById('gaf-remove');
  const fillTracks = document.getElementById('gaf-fill-tracks');
  const fitTracks = document.getElementById('gaf-fit-tracks');
  const fillLabel = document.getElementById('gaf-fill-label');
  const fitLabel = document.getElementById('gaf-fit-label');

  if (!fillGrid || !fitGrid) return;

  function renderGrids() {
    let html = '';
    for (let i = 1; i <= count; i++) {
      html += `<div class="gaf-item">${i}</div>`;
    }
    fillGrid.innerHTML = html;
    fitGrid.innerHTML = html;
    countLabel.textContent = `${count} item${count !== 1 ? 's' : ''}`;
  }

  function renderTracks() {
    // Estimate how many columns the container can fit
    // minmax(80px, 1fr) with 0.5rem (8px) gap
    const containerWidth = fillTracks.parentElement.clientWidth - 40; // padding
    const minCol = 80;
    const gap = 8;
    const totalCols = Math.max(1, Math.floor((containerWidth + gap) / (minCol + gap)));
    const filledCols = Math.min(count, totalCols);
    const emptyCols = Math.max(0, totalCols - filledCols);

    // auto-fill: show filled + empty tracks
    let fillHtml = '<div style="display:grid;grid-template-columns:repeat(' + totalCols + ',1fr);gap:0.5rem;">';
    for (let i = 0; i < filledCols; i++) {
      fillHtml += `<div class="gaf-track filled">col ${i + 1}</div>`;
    }
    for (let i = 0; i < emptyCols; i++) {
      fillHtml += `<div class="gaf-track empty">empty</div>`;
    }
    fillHtml += '</div>';
    fillTracks.innerHTML = fillHtml;

    // auto-fit: show filled tracks stretched, collapsed ones noted
    let fitHtml = '<div style="display:grid;grid-template-columns:repeat(' + filledCols + ',1fr);gap:0.5rem;">';
    for (let i = 0; i < filledCols; i++) {
      fitHtml += `<div class="gaf-track collapsed">col ${i + 1} (stretched)</div>`;
    }
    fitHtml += '</div>';
    fitTracks.innerHTML = fitHtml;

    // Labels
    if (emptyCols > 0) {
      fillLabel.textContent = `${totalCols} tracks created \u2014 ${emptyCols} empty (take up space)`;
      fitLabel.textContent = `${totalCols} tracks created \u2014 ${emptyCols} collapsed to 0px, ${filledCols} stretch to fill`;
    } else {
      fillLabel.textContent = `${totalCols} tracks created \u2014 all filled (identical to auto-fit)`;
      fitLabel.textContent = `${totalCols} tracks created \u2014 all filled (identical to auto-fill)`;
    }
  }

  addBtn.addEventListener('click', () => {
    if (count < 12) { count++; renderGrids(); renderTracks(); }
  });

  removeBtn.addEventListener('click', () => {
    if (count > 1) { count--; renderGrids(); renderTracks(); }
  });

  renderGrids();
  renderTracks();

  // Re-render track viz on resize since column count changes
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderTracks, 150);
  });
}
