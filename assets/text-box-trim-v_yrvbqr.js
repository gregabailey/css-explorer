function e(){return`
    <style>
      .tb-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .tb-compare { grid-template-columns: 1fr; }
      }
      .tb-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .tb-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      .tb-button-row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
      }
      .tb-btn {
        display: inline-grid;
        place-items: center;
        padding: 0.75rem 1.5rem;
        border-radius: var(--radius);
        font-size: 1rem;
        font-weight: 600;
        color: white;
        background: oklch(0.55 0.2 260);
      }
      .tb-btn.trimmed {
        text-box: trim-both cap alphabetic;
      }

      .tb-heading-demo {
        display: flex;
        flex-direction: column;
        gap: 0;
      }
      .tb-heading-box {
        border: 2px dashed var(--color-border);
        background: oklch(0.6 0.22 260 / 0.08);
      }
      .tb-heading-box h2 {
        font-size: 2rem;
        line-height: 1.2;
      }
      .tb-heading-box.trimmed {
        text-box: trim-both cap alphabetic;
      }
      .tb-heading-box p {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        padding: 0.25rem 0.5rem;
        margin: 0;
      }

      .tb-icon-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        background: var(--color-surface-2);
        border-radius: var(--radius);
        margin-bottom: 0.75rem;
      }
      .tb-icon {
        width: 24px;
        height: 24px;
        background: oklch(0.6 0.2 150);
        border-radius: 4px;
        flex-shrink: 0;
      }
      .tb-icon-text {
        font-size: 1rem;
        font-weight: 600;
      }
      .tb-icon-text.trimmed {
        text-box: trim-both cap alphabetic;
      }

      .tb-values {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .tb-value-row {
        display: flex;
        align-items: baseline;
        gap: 0.75rem;
      }
      .tb-value-row code {
        background: var(--color-surface);
        padding: 0.25em 0.6em;
        border-radius: 4px;
        font-size: 0.85em;
        white-space: nowrap;
        min-width: 120px;
      }
      .tb-value-row span {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }
    </style>

    <div class="page-header">
      <h1>text-box-trim</h1>
      <p class="subtitle">Trim the invisible space above and below text for precise optical alignment.</p>
      <span class="badge">Chrome 133+ / Safari 18.2+</span>
    </div>

    <p class="info">
      Fonts include built-in space (half-leading) above and below glyphs that makes precise alignment
      difficult. <code>text-box-trim</code> removes this space from block edges, and <code>text-box-edge</code>
      defines what to trim to (cap height, x-height, baseline, etc.). The shorthand <code>text-box</code> combines both.
    </p>

    <div class="demo-section">
      <h2>Buttons — Without vs With Trimming</h2>
      <p class="info">Notice the extra vertical space inside the untrimmed button. Trimming makes the text optically centered.</p>
      <div class="tb-compare">
        <div class="tb-card">
          <h3>Default — extra space above & below</h3>
          <div class="tb-button-row">
            <div class="tb-btn">Button Text</div>
          </div>
        </div>
        <div class="tb-card">
          <h3>text-box: trim-both cap alphabetic</h3>
          <div class="tb-button-row">
            <div class="tb-btn trimmed">Button Text</div>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Heading — See the Trimmed Space</h2>
      <p class="info">The dashed border shows the text box. Trimming removes the gap between the border and the actual letters.</p>
      <div class="tb-compare">
        <div class="tb-card">
          <h3>Default</h3>
          <div class="tb-heading-box">
            <h2>Hello World</h2>
          </div>
        </div>
        <div class="tb-card">
          <h3>Trimmed</h3>
          <div class="tb-heading-box trimmed">
            <h2>Hello World</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Icon + Text Alignment</h2>
      <p class="info">Trimming makes text height match adjacent elements for perfect visual alignment.</p>
      <div class="tb-compare">
        <div class="tb-card">
          <h3>Default — text taller than icon</h3>
          <div class="tb-icon-row">
            <div class="tb-icon"></div>
            <span class="tb-icon-text">Settings</span>
          </div>
        </div>
        <div class="tb-card">
          <h3>Trimmed — matches icon height</h3>
          <div class="tb-icon-row">
            <div class="tb-icon"></div>
            <span class="tb-icon-text trimmed">Settings</span>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>text-box-edge Values</h2>
      <div class="tb-values">
        <div class="tb-value-row">
          <code>cap alphabetic</code>
          <span>Capital letter height to baseline — most common for UI text.</span>
        </div>
        <div class="tb-value-row">
          <code>ex alphabetic</code>
          <span>x-height to baseline — tighter, good for small badges.</span>
        </div>
        <div class="tb-value-row">
          <code>text text</code>
          <span>Ascender to descender — includes tall letters like 'h' and tails like 'g'.</span>
        </div>
        <div class="tb-value-row">
          <code>cap text</code>
          <span>Cap height to descender — includes descenders but trims above caps.</span>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Shorthand — most common usage */
.button {
  text-box: trim-both cap alphabetic;
}

/* Longhand equivalent */
.button {
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}

/* Trim only top for first element */
.first-heading {
  text-box: trim-start cap alphabetic;
}

/* x-height for compact badges */
.badge {
  text-box: trim-both ex alphabetic;
}</pre>
    </div>
  `}export{e as render};
