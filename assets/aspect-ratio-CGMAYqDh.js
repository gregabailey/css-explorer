function a(){return`
    <style>
      .ar-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
      }
      .ar-box {
        aspect-ratio: var(--ratio, 1);
        background: linear-gradient(135deg, oklch(0.6 0.18 250), oklch(0.7 0.15 300));
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        color: white;
        font-weight: 600;
        font-size: 0.9rem;
        position: relative;
        overflow: hidden;
      }
      .ar-box::after {
        content: attr(data-ratio);
        position: absolute;
        bottom: 0.5rem;
        right: 0.75rem;
        font-size: 0.75rem;
        opacity: 0.7;
      }
      .ar-box.square { --ratio: 1 / 1; }
      .ar-box.video { --ratio: 16 / 9; }
      .ar-box.photo { --ratio: 4 / 3; }
      .ar-box.portrait { --ratio: 3 / 4; }
      .ar-box.ultra { --ratio: 21 / 9; }
      .ar-box.golden { --ratio: 1.618 / 1; }

      .ar-resize-demo {
        resize: horizontal;
        overflow: hidden;
        border: 2px dashed var(--color-border);
        padding: 1.5rem;
        min-width: 200px;
        max-width: 100%;
      }
      .ar-resize-inner {
        aspect-ratio: 16 / 9;
        background: linear-gradient(135deg, oklch(0.55 0.2 150), oklch(0.7 0.15 180));
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        color: white;
        font-weight: 600;
        width: 100%;
      }

      .ar-old-hack {
        position: relative;
        width: 100%;
        padding-top: 56.25%; /* 16:9 */
        background: var(--color-surface-2);
        border-radius: var(--radius);
        border: 2px dashed var(--color-border);
      }
      .ar-old-hack span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        color: var(--color-text-muted);
        font-size: 0.85rem;
      }

      .ar-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      .ar-compare > div > p {
        margin-bottom: 0.75rem;
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }
      @media (max-width: 600px) {
        .ar-compare { grid-template-columns: 1fr; }
      }
    </style>

    <div class="page-header">
      <h1>aspect-ratio</h1>
      <p class="subtitle">Maintain proportional sizing without padding hacks.</p>
      <span class="badge">Baseline 2021</span>
    </div>

    <p class="info">
      The <code>aspect-ratio</code> property sets a preferred aspect ratio for an element, which will be used to calculate auto sizes. No more <code>padding-top</code> hacks.
    </p>

    <div class="demo-section">
      <h2>Common Ratios</h2>
      <div class="ar-grid">
        <div class="ar-box square" data-ratio="1 / 1">Square</div>
        <div class="ar-box video" data-ratio="16 / 9">Video</div>
        <div class="ar-box photo" data-ratio="4 / 3">Photo</div>
        <div class="ar-box portrait" data-ratio="3 / 4">Portrait</div>
        <div class="ar-box ultra" data-ratio="21 / 9">Ultrawide</div>
        <div class="ar-box golden" data-ratio="1.618 / 1">Golden</div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Responsive — Drag to Resize</h2>
      <p class="info">The box maintains 16:9 at any width.</p>
      <div class="ar-resize-demo">
        <div class="ar-resize-inner">16 / 9 at any width</div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Before &amp; After</h2>
      <div class="ar-compare">
        <div>
          <p>Old way: <code>padding-top: 56.25%</code></p>
          <div class="ar-old-hack"><span>padding-top hack</span></div>
        </div>
        <div>
          <p>New way: <code>aspect-ratio: 16 / 9</code></p>
          <div class="ar-resize-inner" style="height: auto;">aspect-ratio: 16/9</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>.video-embed {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.avatar {
  aspect-ratio: 1;       /* Square */
  border-radius: 50%;
}

/* Old padding hack (no longer needed) */
.video-old {
  position: relative;
  padding-top: 56.25%;   /* 9 / 16 = 0.5625 */
}</pre>
    </div>
  `}export{a as render};
