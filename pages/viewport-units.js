export function render() {
  return `
    <style>
      .vu-comparison {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
      }
      .vu-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .vu-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .vu-bar-track {
        background: var(--color-surface);
        border-radius: var(--radius);
        padding: 0.5rem;
        margin-bottom: 0.75rem;
      }
      .vu-bar {
        height: 36px;
        border-radius: calc(var(--radius) - 2px);
        display: grid;
        place-items: center;
        font-size: 0.75rem;
        font-weight: 600;
        font-family: monospace;
        color: white;
        text-shadow: 0 1px 2px oklch(0 0 0 / 0.4);
        transition: width 0.4s ease;
      }
      .vu-bar.vh  { background: oklch(0.55 0.15 250); width: 80%; }
      .vu-bar.svh { background: oklch(0.55 0.18 150); width: 70%; }
      .vu-bar.lvh { background: oklch(0.55 0.18 30);  width: 90%; }
      .vu-bar.dvh { background: oklch(0.6 0.22 300);  width: 80%; }

      .vu-phone {
        width: 220px;
        height: 400px;
        border: 3px solid var(--color-border);
        border-radius: 24px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: var(--color-surface-2);
        position: relative;
      }
      .vu-phone-url-bar {
        background: var(--color-surface);
        padding: 0.5rem 0.75rem;
        font-size: 0.7rem;
        color: var(--color-text-muted);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
        transition: all 0.4s ease;
      }
      .vu-phone-url-bar.hidden {
        margin-top: -34px;
      }
      .vu-phone-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 8px;
        overflow: hidden;
      }
      .vu-phone-box {
        border-radius: 6px;
        display: grid;
        place-items: center;
        font-size: 0.65rem;
        font-weight: 600;
        font-family: monospace;
        color: white;
        text-shadow: 0 1px 2px oklch(0 0 0 / 0.4);
        transition: height 0.4s ease;
        flex-shrink: 0;
      }
      .vu-phone-box.svh-box { background: oklch(0.55 0.18 150); }
      .vu-phone-box.dvh-box { background: oklch(0.6 0.22 300); }
      .vu-phone-box.lvh-box { background: oklch(0.55 0.18 30); }

      .vu-toggle-row {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        margin-bottom: 1.5rem;
      }

      .vu-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.88rem;
      }
      .vu-table th, .vu-table td {
        padding: 0.75rem 1rem;
        text-align: left;
        border-bottom: 1px solid var(--color-border);
      }
      .vu-table th {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-text-muted);
      }
      .vu-table code {
        background: var(--color-surface-2);
        padding: 0.15em 0.4em;
        border-radius: 4px;
        font-size: 0.85em;
      }
    </style>

    <div class="page-header">
      <h1>Dynamic Viewport Units</h1>
      <p class="subtitle"><code>dvh</code>, <code>svh</code>, <code>lvh</code> — viewport units that handle mobile browser chrome.</p>
      <span class="badge">Baseline 2022</span>
    </div>

    <p class="info">
      On mobile browsers, the viewport height changes as the URL bar shows or hides.
      The classic <code>vh</code> unit doesn't account for this — <code>100vh</code> can overflow
      the visible area. The new dynamic units fix this: <code>svh</code> is the smallest viewport,
      <code>lvh</code> is the largest, and <code>dvh</code> updates live as the chrome retracts.
    </p>

    <div class="demo-section">
      <h2>Unit Overview</h2>
      <div class="vu-comparison">
        <div class="vu-card">
          <h3>vh — classic</h3>
          <div class="vu-bar-track"><div class="vu-bar vh">100vh</div></div>
          <p class="info" style="margin:0;font-size:0.82rem">Fixed size based on initial viewport. May overflow on mobile.</p>
        </div>
        <div class="vu-card">
          <h3>svh — small</h3>
          <div class="vu-bar-track"><div class="vu-bar svh">100svh</div></div>
          <p class="info" style="margin:0;font-size:0.82rem">Smallest possible viewport (URL bar visible). Always fits.</p>
        </div>
        <div class="vu-card">
          <h3>lvh — large</h3>
          <div class="vu-bar-track"><div class="vu-bar lvh">100lvh</div></div>
          <p class="info" style="margin:0;font-size:0.82rem">Largest possible viewport (URL bar hidden). May overflow when bar is shown.</p>
        </div>
        <div class="vu-card">
          <h3>dvh — dynamic</h3>
          <div class="vu-bar-track"><div class="vu-bar dvh">100dvh</div></div>
          <p class="info" style="margin:0;font-size:0.82rem">Updates live as the browser chrome shows/hides. Best for full-height layouts.</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Simulated Mobile Browser</h2>
      <p class="info">Toggle the URL bar to see how each unit responds to changing viewport height.</p>
      <div class="vu-toggle-row">
        <button class="btn active" id="vu-show-bar">URL bar visible</button>
        <button class="btn" id="vu-hide-bar">URL bar hidden</button>
      </div>
      <div class="vu-phone" id="vu-phone">
        <div class="vu-phone-url-bar" id="vu-url-bar">example.com</div>
        <div class="vu-phone-content">
          <div class="vu-phone-box svh-box" id="vu-svh-box">100svh</div>
          <div class="vu-phone-box dvh-box" id="vu-dvh-box">100dvh</div>
          <div class="vu-phone-box lvh-box" id="vu-lvh-box">100lvh</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>All New Units</h2>
      <table class="vu-table">
        <tr><th>Unit</th><th>Based on</th><th>Updates dynamically</th></tr>
        <tr><td><code>svh</code> / <code>svw</code></td><td>Small viewport</td><td>No — always smallest</td></tr>
        <tr><td><code>lvh</code> / <code>lvw</code></td><td>Large viewport</td><td>No — always largest</td></tr>
        <tr><td><code>dvh</code> / <code>dvw</code></td><td>Dynamic viewport</td><td>Yes — resizes live</td></tr>
        <tr><td><code>svmin</code> / <code>svmax</code></td><td>Small viewport min/max</td><td>No</td></tr>
        <tr><td><code>lvmin</code> / <code>lvmax</code></td><td>Large viewport min/max</td><td>No</td></tr>
        <tr><td><code>dvmin</code> / <code>dvmax</code></td><td>Dynamic viewport min/max</td><td>Yes</td></tr>
      </table>
    </div>

    <div class="code-block">
      <pre>/* Full-height hero that always fits on mobile */
.hero {
  height: 100dvh;
}

/* Safe minimum — never overflows */
.sidebar {
  height: 100svh;
}

/* Use large viewport for backgrounds */
.bg-image {
  min-height: 100lvh;
}</pre>
    </div>
  `;
}

export function init() {
  const showBtn = document.getElementById('vu-show-bar');
  const hideBtn = document.getElementById('vu-hide-bar');
  const urlBar = document.getElementById('vu-url-bar');
  const svhBox = document.getElementById('vu-svh-box');
  const dvhBox = document.getElementById('vu-dvh-box');
  const lvhBox = document.getElementById('vu-lvh-box');
  if (!showBtn || !hideBtn || !urlBar) return;

  // Heights when URL bar is visible (small viewport)
  const SMALL_SVH = '105px';
  const SMALL_DVH = '105px';
  const SMALL_LVH = '130px';

  // Heights when URL bar is hidden (large viewport)
  const LARGE_SVH = '105px';
  const LARGE_DVH = '130px';
  const LARGE_LVH = '130px';

  function setBarVisible(visible) {
    urlBar.classList.toggle('hidden', !visible);
    showBtn.classList.toggle('active', visible);
    hideBtn.classList.toggle('active', !visible);

    if (visible) {
      svhBox.style.height = SMALL_SVH;
      dvhBox.style.height = SMALL_DVH;
      lvhBox.style.height = SMALL_LVH;
    } else {
      svhBox.style.height = LARGE_SVH;
      dvhBox.style.height = LARGE_DVH;
      lvhBox.style.height = LARGE_LVH;
    }
  }

  showBtn.addEventListener('click', () => setBarVisible(true));
  hideBtn.addEventListener('click', () => setBarVisible(false));

  // Set initial state
  setBarVisible(true);
}
