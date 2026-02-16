function i(){return`
    <style>
      .tw-demo-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }
      @media (max-width: 768px) {
        .tw-demo-grid { grid-template-columns: 1fr; }
      }
      .tw-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .tw-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .tw-heading {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.3;
        color: var(--color-text);
        margin-bottom: 0.75rem;
      }
      .tw-heading.normal { text-wrap: wrap; }
      .tw-heading.balance { text-wrap: balance; }
      .tw-heading.pretty { text-wrap: pretty; }

      .tw-body-text {
        font-size: 0.85rem;
        line-height: 1.7;
        color: var(--color-text-muted);
      }
      .tw-body-text.balance { text-wrap: balance; }
      .tw-body-text.pretty { text-wrap: pretty; }

      .tw-resize-wrap {
        resize: horizontal;
        overflow: hidden;
        border: 2px dashed var(--color-border);
        padding: 1.5rem;
        min-width: 200px;
        max-width: 100%;
      }
      .tw-resize-heading {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 1.3;
        color: var(--color-text);
      }

      .tw-controls {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
      }

      .tw-orphan-demo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .tw-orphan-demo { grid-template-columns: 1fr; }
      }
      .tw-orphan-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .tw-orphan-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.75rem;
      }
      .tw-orphan-text {
        font-size: 0.9rem;
        line-height: 1.7;
        color: var(--color-text);
        max-width: 32ch;
      }
      .tw-orphan-text.pretty { text-wrap: pretty; }
    </style>

    <div class="page-header">
      <h1>text-wrap: balance / pretty</h1>
      <p class="subtitle">Smarter line breaking for headings and paragraphs.</p>
      <span class="badge">Baseline 2024</span>
    </div>

    <p class="info">
      <code>text-wrap: balance</code> distributes text evenly across lines — great for headings so you don't get a single orphan word on the last line. <code>text-wrap: pretty</code> optimizes paragraph text to avoid orphans on the last line.
    </p>

    <div class="demo-section">
      <h2>Heading Comparison</h2>
      <div class="tw-demo-grid">
        <div class="tw-card">
          <h3>text-wrap: wrap (default)</h3>
          <div class="tw-heading normal">CSS features that make the web better for everyone</div>
        </div>
        <div class="tw-card">
          <h3>text-wrap: balance</h3>
          <div class="tw-heading balance">CSS features that make the web better for everyone</div>
        </div>
        <div class="tw-card">
          <h3>text-wrap: pretty</h3>
          <div class="tw-heading pretty">CSS features that make the web better for everyone</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Interactive — Drag to Resize</h2>
      <p class="info">Resize the container to see how <code>balance</code> keeps lines even at any width.</p>
      <div class="tw-controls" id="tw-controls">
        <button class="btn active" data-mode="balance">balance</button>
        <button class="btn" data-mode="pretty">pretty</button>
        <button class="btn" data-mode="wrap">wrap (default)</button>
      </div>
      <div class="tw-resize-wrap">
        <div class="tw-resize-heading" id="tw-resize-text" style="text-wrap: balance;">
          Modern CSS is shipping features faster than ever before and it's amazing
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Avoiding Orphans with pretty</h2>
      <p class="info"><code>text-wrap: pretty</code> prevents a single word on the last line of a paragraph.</p>
      <div class="tw-orphan-demo">
        <div class="tw-orphan-card">
          <h3>Default wrapping</h3>
          <p class="tw-orphan-text">Container queries let you style components based on their container's size rather than the viewport. This is a game-changer for component-based design.</p>
        </div>
        <div class="tw-orphan-card">
          <h3>text-wrap: pretty</h3>
          <p class="tw-orphan-text pretty">Container queries let you style components based on their container's size rather than the viewport. This is a game-changer for component-based design.</p>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Balance headings — even line lengths */
h1, h2, h3 {
  text-wrap: balance;
}

/* Pretty paragraphs — avoid orphan words */
p {
  text-wrap: pretty;
}

/* Note: balance is limited to ~6 lines for performance.
   For longer text, use pretty instead. */</pre>
    </div>
  `}function n(){const e=document.getElementById("tw-controls"),a=document.getElementById("tw-resize-text");!e||!a||e.addEventListener("click",r=>{const t=r.target.closest(".btn");t&&(e.querySelectorAll(".btn").forEach(o=>o.classList.remove("active")),t.classList.add("active"),a.style.textWrap=t.dataset.mode)})}export{n as init,i as render};
