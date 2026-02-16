export function render() {
  return `
    <style>
      .sf-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
      }
      .sf-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
        text-align: center;
      }
      .sf-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .sf-shape {
        width: 160px;
        height: 160px;
        margin: 0 auto 1rem;
        display: grid;
        place-items: center;
        color: white;
        font-size: 0.75rem;
        font-weight: 600;
        text-shadow: 0 1px 2px oklch(0 0 0 / 0.4);
      }
      .sf-shape.arrow {
        background: oklch(0.6 0.22 260);
        clip-path: shape(
          from 0% 0%,
          line to 70% 0%,
          line to 100% 50%,
          line to 70% 100%,
          line to 0% 100%,
          line to 30% 50%,
          close
        );
      }
      .sf-shape.wave {
        background: oklch(0.6 0.22 150);
        clip-path: shape(
          from 0% 0%,
          line to 100% 0%,
          line to 100% 70%,
          curve to 75% 90% with 90% 70%,
          curve to 50% 70% with 60% 90%,
          curve to 25% 90% with 40% 70%,
          curve to 0% 70% with 10% 90%,
          close
        );
      }
      .sf-shape.rounded-tab {
        background: oklch(0.6 0.22 30);
        clip-path: shape(
          from 20% 0%,
          line to 80% 0%,
          curve to 100% 30% with 100% 0%,
          line to 100% 100%,
          line to 0% 100%,
          line to 0% 30%,
          curve to 20% 0% with 0% 0%,
          close
        );
      }
      .sf-shape.diamond {
        background: oklch(0.6 0.22 300);
        clip-path: shape(
          from 50% 0%,
          curve to 100% 50% with 85% 0%,
          curve to 50% 100% with 100% 85%,
          curve to 0% 50% with 15% 100%,
          curve to 50% 0% with 0% 15%,
          close
        );
      }

      .sf-commands {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .sf-cmd {
        display: flex;
        align-items: baseline;
        gap: 0.75rem;
      }
      .sf-cmd code {
        background: var(--color-surface);
        padding: 0.25em 0.6em;
        border-radius: 4px;
        font-size: 0.85em;
        white-space: nowrap;
        min-width: 70px;
      }
      .sf-cmd span {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }

      .sf-compare {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 700px) {
        .sf-compare { grid-template-columns: 1fr; }
      }
      .sf-compare-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .sf-compare-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.75rem;
      }
      .sf-compare-card p {
        font-size: 0.82rem;
        color: var(--color-text-muted);
        line-height: 1.5;
      }
    </style>

    <div class="page-header">
      <h1>shape()</h1>
      <p class="subtitle">Responsive clip paths with CSS units, curves, and arcs — no SVG needed.</p>
      <span class="badge">Chrome 135+ / Safari 18.4+</span>
    </div>

    <p class="info">
      The <code>shape()</code> function defines complex clip paths using CSS-native commands.
      Unlike <code>path()</code> which uses SVG syntax with fixed pixels, <code>shape()</code> supports
      <code>%</code>, <code>rem</code>, <code>calc()</code>, and CSS variables — making shapes fully responsive.
    </p>

    <div class="demo-section">
      <h2>shape() vs polygon() vs path()</h2>
      <div class="sf-compare">
        <div class="sf-compare-card">
          <h3>polygon()</h3>
          <p>Straight lines only. No curves. Supports CSS units.</p>
        </div>
        <div class="sf-compare-card">
          <h3>path()</h3>
          <p>Full curves via SVG syntax. But px-only — not responsive.</p>
        </div>
        <div class="sf-compare-card">
          <h3>shape()</h3>
          <p>Full curves with CSS units, calc(), and variables. Best of both worlds.</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Available Commands</h2>
      <div class="sf-commands">
        <div class="sf-cmd"><code>line</code> <span>Straight line — <code>line to 100% 50%</code></span></div>
        <div class="sf-cmd"><code>hline</code> <span>Horizontal line — <code>hline to 200px</code></span></div>
        <div class="sf-cmd"><code>vline</code> <span>Vertical line — <code>vline to 100%</code></span></div>
        <div class="sf-cmd"><code>curve</code> <span>Bezier curve — <code>curve to 80px 80px with 160px 1px</code></span></div>
        <div class="sf-cmd"><code>smooth</code> <span>Auto-smooth curve — <code>smooth to 100px 100px</code></span></div>
        <div class="sf-cmd"><code>arc</code> <span>Elliptical arc — <code>arc to 80px 50px of 40px</code></span></div>
        <div class="sf-cmd"><code>move</code> <span>Reposition without drawing — <code>move to 50% 50%</code></span></div>
        <div class="sf-cmd"><code>close</code> <span>Close path back to start</span></div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Live Shapes</h2>
      <div class="sf-demo-grid">
        <div class="sf-card">
          <h3>Arrow</h3>
          <div class="sf-shape arrow">line commands</div>
        </div>
        <div class="sf-card">
          <h3>Wavy Bottom</h3>
          <div class="sf-shape wave">curve commands</div>
        </div>
        <div class="sf-card">
          <h3>Rounded Tab</h3>
          <div class="sf-shape rounded-tab">curve corners</div>
        </div>
        <div class="sf-card">
          <h3>Soft Diamond</h3>
          <div class="sf-shape diamond">curved edges</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Responsive arrow — all CSS units */
.arrow {
  clip-path: shape(
    from 0% 0%,
    line to 70% 0%,
    line to 100% 50%,
    line to 70% 100%,
    line to 0% 100%,
    line to 30% 50%,
    close
  );
}

/* Wavy bottom edge with curves */
.wave {
  clip-path: shape(
    from 0% 0%,
    line to 100% 0%,
    line to 100% 70%,
    curve to 50% 70% with 75% 100%,
    curve to 0% 70% with 25% 100%,
    close
  );
}

/* Use calc() and variables */
.notch {
  --depth: 20px;
  clip-path: shape(
    from 0% 0%,
    line to calc(50% - var(--depth)) 0%,
    line to 50% var(--depth),
    line to calc(50% + var(--depth)) 0%,
    line to 100% 0%,
    line to 100% 100%,
    line to 0% 100%,
    close
  );
}</pre>
    </div>
  `;
}
