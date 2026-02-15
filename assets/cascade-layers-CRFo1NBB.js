function e(){return`
    <style>
      @layer reset, base, components, utilities;

      @layer reset {
        .cl-demo * {
          margin: 0;
          padding: 0;
        }
      }

      @layer base {
        .cl-demo .cl-box {
          padding: 1rem 1.5rem;
          border-radius: var(--radius);
          font-weight: 600;
          font-size: 0.9rem;
          margin-block-end: 0.5rem;
          transition: all 200ms ease;
        }
      }

      @layer components {
        .cl-demo .cl-box {
          background: oklch(0.45 0.15 260);
          color: white;
        }
        .cl-demo .cl-box.special {
          background: oklch(0.5 0.18 300);
        }
      }

      @layer utilities {
        .cl-demo .cl-highlight {
          background: oklch(0.55 0.2 150) !important;
        }
      }

      .cl-demo {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .cl-layer-viz {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-block-start: 1rem;
      }

      .cl-layer-bar {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.6rem 1rem;
        border-radius: var(--radius);
        background: var(--color-surface-2);
        font-size: 0.82rem;
        font-family: monospace;
      }

      .cl-layer-bar .cl-priority {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-size: 0.7rem;
        font-weight: 700;
        background: var(--color-accent-subtle);
        color: var(--color-accent);
      }

      .cl-layer-bar .cl-bar-fill {
        flex: 1;
        height: 6px;
        border-radius: 3px;
        background: var(--color-border);
      }

      .cl-layer-bar .cl-bar-fill span {
        display: block;
        height: 100%;
        border-radius: 3px;
        transition: width 300ms ease;
      }
    </style>

    <div class="page-header">
      <h1>Cascade Layers</h1>
      <p class="subtitle">Control cascade priority explicitly with <code>@layer</code>.</p>
      <span class="badge">Baseline 2022</span>
    </div>

    <p class="info">
      Cascade layers let you define explicit priority groups. Later layers win over earlier ones,
      regardless of selector specificity. This page declares four layers:
      <code>reset</code>, <code>base</code>, <code>components</code>, <code>utilities</code>.
    </p>

    <div class="demo-section">
      <h2>Layer Priority</h2>
      <div class="cl-layer-viz">
        <div class="cl-layer-bar">
          <span class="cl-priority">1</span>
          <code>@layer reset</code>
          <div class="cl-bar-fill"><span style="width:25%;background:oklch(0.5 0.1 250)"></span></div>
        </div>
        <div class="cl-layer-bar">
          <span class="cl-priority">2</span>
          <code>@layer base</code>
          <div class="cl-bar-fill"><span style="width:50%;background:oklch(0.5 0.15 260)"></span></div>
        </div>
        <div class="cl-layer-bar">
          <span class="cl-priority">3</span>
          <code>@layer components</code>
          <div class="cl-bar-fill"><span style="width:75%;background:oklch(0.5 0.18 300)"></span></div>
        </div>
        <div class="cl-layer-bar">
          <span class="cl-priority">4</span>
          <code>@layer utilities</code>
          <div class="cl-bar-fill"><span style="width:100%;background:oklch(0.55 0.2 150)"></span></div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Live Demo</h2>
      <div class="controls">
        <button class="btn" onclick="document.getElementById('cl-target').className='cl-box'">Base only</button>
        <button class="btn" onclick="document.getElementById('cl-target').className='cl-box special'">+ Component</button>
        <button class="btn" onclick="document.getElementById('cl-target').className='cl-box special cl-highlight'">+ Utility</button>
      </div>
      <div class="cl-demo">
        <div class="cl-box" id="cl-target">
          This box changes layers. Utilities always win — even without higher specificity.
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>@layer reset, base, components, utilities;

@layer components {
  .box { background: purple; }     /* specificity: 0-1-0 */
  .box.special { background: violet; }  /* specificity: 0-2-0 */
}

@layer utilities {
  .highlight { background: green; } /* specificity: 0-1-0, but WINS (later layer) */
}</pre>
    </div>
  `}export{e as render};
