function o(){return`
    <style>
      .ob-demo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .ob-demo-grid { grid-template-columns: 1fr; }
      }
      .ob-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .ob-panel h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.75rem;
      }
      .ob-outer {
        height: 200px;
        overflow-y: auto;
        border: 2px solid var(--color-border);
        border-radius: var(--radius);
        padding: 1rem;
        background: var(--color-surface);
        scrollbar-width: thin;
        scrollbar-color: var(--color-border) transparent;
      }
      .ob-inner {
        height: 150px;
        overflow-y: auto;
        border: 2px solid var(--color-accent);
        border-radius: var(--radius);
        padding: 0.75rem;
        margin-bottom: 0.75rem;
        background: oklch(0.7 0.18 250 / 0.08);
        scrollbar-width: thin;
        scrollbar-color: var(--color-accent) transparent;
      }
      .ob-inner.contain {
        overscroll-behavior: contain;
      }
      .ob-inner.none {
        overscroll-behavior: none;
      }
      .ob-filler {
        font-size: 0.85rem;
        line-height: 1.8;
        color: var(--color-text-muted);
      }
      .ob-label {
        display: inline-block;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      .ob-label.auto-l { background: oklch(0.5 0.15 50 / 0.3); color: oklch(0.85 0.15 50); }
      .ob-label.contain-l { background: oklch(0.5 0.15 150 / 0.3); color: oklch(0.85 0.15 150); }
      .ob-label.none-l { background: oklch(0.5 0.15 250 / 0.3); color: oklch(0.85 0.15 250); }

      .ob-modal-demo {
        position: relative;
        height: 300px;
        border: 2px solid var(--color-border);
        border-radius: var(--radius);
        overflow: hidden;
      }
      .ob-modal-bg {
        height: 100%;
        overflow-y: auto;
        padding: 1rem;
        scrollbar-width: thin;
        scrollbar-color: var(--color-border) transparent;
      }
      .ob-modal-bg .ob-filler {
        height: 600px;
      }
      .ob-modal-overlay {
        position: absolute;
        inset: 0;
        background: oklch(0 0 0 / 0.5);
        display: grid;
        place-items: center;
      }
      .ob-modal-box {
        width: 80%;
        max-height: 180px;
        overflow-y: auto;
        background: var(--color-surface);
        border-radius: var(--radius);
        padding: 1rem;
        border: 1px solid var(--color-border);
        overscroll-behavior: contain;
        scrollbar-width: thin;
        scrollbar-color: var(--color-accent) transparent;
      }
    </style>

    <div class="page-header">
      <h1>overscroll-behavior</h1>
      <p class="subtitle">Control scroll chaining between nested scroll containers.</p>
      <span class="badge">Baseline 2022</span>
    </div>

    <p class="info">
      <code>overscroll-behavior</code> controls what happens when you reach the boundary of a scrollable area. By default (<code>auto</code>), scrolling chains to the parent. Use <code>contain</code> to stop chaining, or <code>none</code> to also prevent overscroll effects like pull-to-refresh.
    </p>

    <div class="demo-section">
      <h2>Scroll Chaining Comparison</h2>
      <p class="info">Scroll each inner box to the bottom, then keep scrolling. Watch what happens to the outer container.</p>
      <div class="ob-demo-grid">
        <div class="ob-panel">
          <h3>auto (default)</h3>
          <div class="ob-outer">
            <span class="ob-label auto-l">overscroll-behavior: auto</span>
            <div class="ob-inner">
              <div class="ob-filler">
                Scroll me down...<br><br>
                Keep going...<br><br>
                Almost there...<br><br>
                When you hit the bottom, scrolling chains to the outer container.<br><br>
                This is the default behavior.<br><br>
                Bottom reached!
              </div>
            </div>
            <div class="ob-filler">
              Outer container content below.<br><br>
              If you kept scrolling the inner box, you ended up scrolling this outer content too — that's scroll chaining.<br><br>
              More outer content...<br><br>
              Even more...
            </div>
          </div>
        </div>

        <div class="ob-panel">
          <h3>contain</h3>
          <div class="ob-outer">
            <span class="ob-label contain-l">overscroll-behavior: contain</span>
            <div class="ob-inner contain">
              <div class="ob-filler">
                Scroll me down...<br><br>
                Keep going...<br><br>
                Almost there...<br><br>
                When you hit the bottom, scrolling STOPS. No chaining!<br><br>
                The outer container stays put.<br><br>
                Bottom reached!
              </div>
            </div>
            <div class="ob-filler">
              Outer container content below.<br><br>
              This content won't scroll when you're inside the inner box — scroll is contained.<br><br>
              More outer content...<br><br>
              Even more...
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Real-World: Modal Dialog</h2>
      <p class="info">The modal's scroll is contained — scrolling inside it won't scroll the page behind it.</p>
      <div class="ob-modal-demo">
        <div class="ob-modal-bg">
          <div class="ob-filler">
            Background page content that scrolls...<br>
            This simulates your main page content.
          </div>
        </div>
        <div class="ob-modal-overlay">
          <div class="ob-modal-box">
            <strong>Modal Content</strong><br><br>
            This modal uses <code>overscroll-behavior: contain</code>.<br><br>
            Scroll inside me and the background won't scroll.<br><br>
            This is the pattern you want for modals, drawers, dropdowns, and any overlay with scrollable content.<br><br>
            More content here...<br><br>
            And more...<br><br>
            Keep scrolling — the background stays put!
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Prevent scroll chaining from modal to body */
.modal-content {
  overflow-y: auto;
  overscroll-behavior: contain;
}

/* Prevent pull-to-refresh on a chat app */
body {
  overscroll-behavior-y: none;
}

/* Values:
   auto    — default, scroll chains to parent
   contain — no chaining, but local overscroll effects
   none    — no chaining AND no overscroll effects */</pre>
    </div>
  `}export{o as render};
