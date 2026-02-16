export function render() {
  return `
    <style>
      .le-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
      }
      .le-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .le-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .le-track {
        height: 8px;
        background: var(--color-surface);
        border-radius: 4px;
        position: relative;
        margin-bottom: 0.75rem;
      }
      .le-ball {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      .le-ball.bounce {
        background: oklch(0.6 0.22 30);
        animation: le-slide 1.5s infinite;
        animation-timing-function: linear(
          0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141, 0.191, 0.25,
          0.316, 0.391, 0.472, 0.562, 0.66, 0.765, 0.878, 1,
          0.878, 0.765, 0.66, 0.562, 0.472, 0.391, 0.316, 0.25,
          0.191, 0.141, 0.098, 0.063, 0.035, 0.016, 0.004, 0
        );
      }

      .le-ball.spring {
        background: oklch(0.6 0.22 150);
        animation: le-slide 1.5s infinite;
        animation-timing-function: linear(
          0, 0.009, 0.035, 0.078, 0.141, 0.223, 0.326, 0.45, 0.594,
          0.757, 0.938, 1.1, 1.15, 1.1, 1, 0.938, 0.95, 1, 1.01, 1
        );
      }

      .le-ball.elastic {
        background: oklch(0.6 0.22 260);
        animation: le-slide 1.5s infinite;
        animation-timing-function: linear(
          0, 0.002, 0.01, 0.03, 0.06, 0.11, 0.17, 0.25, 0.35, 0.46,
          0.59, 0.73, 0.88, 1.04, 1.16, 1.20, 1.16, 1.08, 1, 0.95,
          0.93, 0.95, 1, 1.02, 1
        );
      }

      .le-ball.ease-ref {
        background: var(--color-text-muted);
        animation: le-slide 1.5s ease infinite;
        opacity: 0.5;
      }

      @keyframes le-slide {
        from { left: 0; }
        to { left: calc(100% - 28px); }
      }

      .le-curve-wrap {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
      }
      .le-curve-label {
        font-size: 0.75rem;
        font-family: monospace;
        color: var(--color-text-muted);
      }

      .le-controls {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
      }

      .le-compare-row {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .le-compare-item {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .le-compare-item label {
        font-size: 0.82rem;
        font-family: monospace;
        color: var(--color-text-muted);
        min-width: 80px;
        text-align: right;
      }
      .le-compare-track {
        flex: 1;
        height: 8px;
        background: var(--color-surface);
        border-radius: 4px;
        position: relative;
      }
      .le-compare-ball {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        animation: le-slide-sm 2s infinite;
      }
      @keyframes le-slide-sm {
        from { left: 0; }
        to { left: calc(100% - 24px); }
      }
      .le-compare-ball.cb-ease { background: var(--color-text-muted); animation-timing-function: ease; }
      .le-compare-ball.cb-linear { background: oklch(0.6 0.18 200); animation-timing-function: linear; }
      .le-compare-ball.cb-bounce {
        background: oklch(0.6 0.22 30);
        animation-timing-function: linear(
          0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141, 0.191, 0.25,
          0.316, 0.391, 0.472, 0.562, 0.66, 0.765, 0.878, 1,
          0.878, 0.765, 0.66, 0.562, 0.472, 0.391, 0.316, 0.25,
          0.191, 0.141, 0.098, 0.063, 0.035, 0.016, 0.004, 0
        );
      }
      .le-compare-ball.cb-spring {
        background: oklch(0.6 0.22 150);
        animation-timing-function: linear(
          0, 0.009, 0.035, 0.078, 0.141, 0.223, 0.326, 0.45, 0.594,
          0.757, 0.938, 1.1, 1.15, 1.1, 1, 0.938, 0.95, 1, 1.01, 1
        );
      }
    </style>

    <div class="page-header">
      <h1>linear() Easing</h1>
      <p class="subtitle">Define custom easing curves with a list of points — bounce, spring, elastic, and more.</p>
      <span class="badge">Baseline 2023</span>
    </div>

    <p class="info">
      The <code>linear()</code> function defines an easing by specifying output values at evenly-spaced points.
      The browser interpolates linearly between them. This unlocks bounce, spring, and elastic effects
      that were previously impossible with CSS alone.
    </p>

    <div class="demo-section">
      <h2>Custom Easings</h2>
      <div class="le-demo-grid">
        <div class="le-card">
          <h3>Bounce</h3>
          <div class="le-track"><div class="le-ball bounce"></div></div>
          <p class="info" style="margin:0;font-size:0.82rem">Simulates a ball bouncing — value rises to 1 then falls back multiple times.</p>
        </div>
        <div class="le-card">
          <h3>Spring</h3>
          <div class="le-track"><div class="le-ball spring"></div></div>
          <p class="info" style="margin:0;font-size:0.82rem">Overshoots the target and oscillates before settling — like a spring.</p>
        </div>
        <div class="le-card">
          <h3>Elastic</h3>
          <div class="le-track"><div class="le-ball elastic"></div></div>
          <p class="info" style="margin:0;font-size:0.82rem">Stretchy overshoot with a snap-back — like pulling a rubber band.</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Side-by-Side Comparison</h2>
      <p class="info">Watch how <code>linear()</code> easings compare to the built-in <code>ease</code> and <code>linear</code> keywords.</p>
      <div class="le-compare-row">
        <div class="le-compare-item">
          <label>ease</label>
          <div class="le-compare-track"><div class="le-compare-ball cb-ease"></div></div>
        </div>
        <div class="le-compare-item">
          <label>linear</label>
          <div class="le-compare-track"><div class="le-compare-ball cb-linear"></div></div>
        </div>
        <div class="le-compare-item">
          <label>bounce</label>
          <div class="le-compare-track"><div class="le-compare-ball cb-bounce"></div></div>
        </div>
        <div class="le-compare-item">
          <label>spring</label>
          <div class="le-compare-track"><div class="le-compare-ball cb-spring"></div></div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Bounce easing */
.element {
  animation: slide 1s linear(
    0, 0.004, 0.016, 0.035, 0.063, 0.098,
    0.141, 0.191, 0.25, 0.316, 0.391, 0.472,
    0.562, 0.66, 0.765, 0.878, 1, 0.878,
    0.765, 0.66, 0.562, 0.472, 0.391, 0.316,
    0.25, 0.191, 0.141, 0.098, 0.063, 0
  );
}

/* Spring — overshoots then settles */
.element {
  transition: transform 0.5s linear(
    0, 0.009, 0.035, 0.078, 0.141, 0.223,
    0.326, 0.45, 0.594, 0.757, 0.938,
    1.1, 1.15, 1.1, 1, 0.95, 1
  );
}

/* Works with transitions too */
.button:hover {
  scale: 1.1;
  transition: scale 0.4s linear(
    0, 0.25, 0.59, 1.04, 1.16, 1.08, 1
  );
}</pre>
    </div>
  `;
}
