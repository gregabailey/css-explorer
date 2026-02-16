function s(){return`
    <style>
      .cv-demo-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-height: 350px;
        overflow-y: auto;
        border: 2px solid var(--color-border);
        border-radius: var(--radius);
        padding: 1rem;
      }
      .cv-item {
        padding: 1.25rem;
        border-radius: var(--radius);
        background: var(--color-surface-2);
        border: 1px solid var(--color-border);
      }
      .cv-item h3 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      .cv-item p {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        line-height: 1.6;
      }
      .cv-item.optimized {
        content-visibility: auto;
        contain-intrinsic-size: auto 120px;
      }

      .cv-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .cv-compare { grid-template-columns: 1fr; }
      }
      .cv-compare-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .cv-compare-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      .cv-values {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .cv-value-row {
        display: flex;
        align-items: baseline;
        gap: 0.75rem;
      }
      .cv-value-row code {
        background: var(--color-surface);
        padding: 0.25em 0.6em;
        border-radius: 4px;
        font-size: 0.85em;
        white-space: nowrap;
        min-width: 80px;
      }
      .cv-value-row span {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }

      .cv-cis-demo {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
      }
      .cv-cis-box {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        border: 2px dashed var(--color-border);
        display: grid;
        place-items: center;
        font-family: monospace;
        font-size: 0.8rem;
        color: var(--color-text-muted);
        content-visibility: auto;
      }
      .cv-cis-box.no-hint {
        contain-intrinsic-size: auto 0px;
        min-height: 80px;
      }
      .cv-cis-box.fixed-hint {
        contain-intrinsic-size: 200px 100px;
      }
      .cv-cis-box.auto-hint {
        contain-intrinsic-size: auto 100px;
      }
    </style>

    <div class="page-header">
      <h1>content-visibility</h1>
      <p class="subtitle">Skip rendering of off-screen content for faster page loads.</p>
      <span class="badge">Baseline 2022</span>
    </div>

    <p class="info">
      <code>content-visibility: auto</code> tells the browser to skip layout and painting for elements
      that are off-screen. Combined with <code>contain-intrinsic-size</code> to reserve space, it can
      dramatically speed up initial rendering of long pages without changing what the user sees.
    </p>

    <div class="demo-section">
      <h2>Property Values</h2>
      <div class="cv-values">
        <div class="cv-value-row">
          <code>visible</code>
          <span>Default — no optimization, element renders normally.</span>
        </div>
        <div class="cv-value-row">
          <code>auto</code>
          <span>Browser skips rendering when off-screen, renders when scrolled into view.</span>
        </div>
        <div class="cv-value-row">
          <code>hidden</code>
          <span>Content is never rendered — like <code>display: none</code> but preserves state.</span>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Scrollable List with <code>content-visibility: auto</code></h2>
      <p class="info">Each card below uses <code>content-visibility: auto</code>. Items off-screen are skipped by the rendering engine until you scroll to them.</p>
      <div class="cv-demo-list" id="cv-list"></div>
    </div>

    <div class="demo-section">
      <h2>contain-intrinsic-size</h2>
      <p class="info">When the browser skips rendering, it doesn't know the element's size. Use <code>contain-intrinsic-size</code> to provide a placeholder size so scrollbars and layout stay stable.</p>
      <div class="cv-compare">
        <div class="cv-compare-card">
          <h3>Without placeholder size</h3>
          <p class="info" style="margin:0;font-size:0.82rem">Skipped elements collapse to 0 height — scrollbar jumps as you scroll.</p>
        </div>
        <div class="cv-compare-card">
          <h3>With contain-intrinsic-size</h3>
          <p class="info" style="margin:0;font-size:0.82rem">Elements reserve estimated height — smooth, stable scrolling.</p>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Skip rendering of off-screen sections */
.card {
  content-visibility: auto;
  contain-intrinsic-size: auto 200px;
}

/* "auto" keyword remembers the real size after
   the element has been rendered once — so the
   placeholder size is only used on first load. */

/* Permanently hide content (preserves state) */
.collapsed-panel {
  content-visibility: hidden;
}</pre>
    </div>
  `}function r(){const i=document.getElementById("cv-list");if(!i)return;const o=[];for(let e=1;e<=30;e++)o.push(`
      <div class="cv-item optimized">
        <h3>Section ${e}</h3>
        <p>This content uses content-visibility: auto. When scrolled off-screen, the browser skips its layout and paint work entirely, improving performance on long pages with many sections.</p>
      </div>
    `);i.innerHTML=o.join("")}export{r as init,s as render};
