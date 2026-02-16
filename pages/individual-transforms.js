export function render() {
  return `
    <style>
      .it-demo-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }
      @media (max-width: 768px) {
        .it-demo-grid { grid-template-columns: 1fr; }
      }
      .it-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.5rem;
        text-align: center;
      }
      .it-card h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1.25rem;
      }
      .it-box-wrap {
        height: 120px;
        display: grid;
        place-items: center;
        margin-bottom: 1rem;
      }
      .it-box {
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, oklch(0.6 0.18 250), oklch(0.7 0.15 300));
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        color: white;
        font-weight: 600;
        font-size: 0.75rem;
        transition: translate 0.5s ease, rotate 0.5s ease, scale 0.5s ease;
      }
      .it-box.translate-active { translate: 30px -20px; }
      .it-box.rotate-active { rotate: 45deg; }
      .it-box.scale-active { scale: 1.4; }

      .it-slider-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        justify-content: center;
      }
      .it-slider-row label {
        font-size: 0.8rem;
        color: var(--color-text-muted);
        min-width: 2.5em;
        text-align: right;
      }
      .it-slider-row input[type="range"] {
        width: 100px;
        accent-color: var(--color-accent);
      }
      .it-slider-row .it-val {
        font-family: monospace;
        font-size: 0.8rem;
        color: var(--color-accent);
        min-width: 4em;
      }

      .it-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }
      @media (max-width: 600px) {
        .it-compare { grid-template-columns: 1fr; }
      }
      .it-compare-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .it-compare-panel h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .it-compare-box {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, oklch(0.55 0.2 150), oklch(0.7 0.15 180));
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        margin: 1rem auto;
        color: white;
        font-weight: 600;
        font-size: 0.7rem;
        text-align: center;
      }
      .it-compare-box.old-hover:hover {
        transform: translateY(-5px) rotate(5deg) scale(1.1);
      }
      .it-compare-box.new-hover {
        translate: 0;
        rotate: 0deg;
        scale: 1;
        transition: translate 0.3s, rotate 0.3s, scale 0.3s;
      }
      .it-compare-box.new-hover:hover {
        translate: 0 -5px;
        rotate: 5deg;
        scale: 1.1;
      }

      .it-compose-demo {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1rem;
      }
      .it-compose-item {
        width: 70px;
        height: 70px;
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        color: white;
        font-size: 0.65rem;
        font-weight: 600;
        text-align: center;
        transition: translate 0.4s, rotate 0.4s, scale 0.4s;
      }
      .it-compose-item:nth-child(1) { background: oklch(0.6 0.2 0); translate: 0; }
      .it-compose-item:nth-child(2) { background: oklch(0.6 0.2 60); rotate: 0deg; }
      .it-compose-item:nth-child(3) { background: oklch(0.6 0.2 120); scale: 1; }
      .it-compose-item:nth-child(4) { background: oklch(0.6 0.2 180); translate: 0; rotate: 0deg; }
      .it-compose-item:nth-child(5) { background: oklch(0.6 0.2 240); translate: 0; rotate: 0deg; scale: 1; }

      .it-compose-item:nth-child(1):hover { translate: 0 -15px; }
      .it-compose-item:nth-child(2):hover { rotate: 180deg; }
      .it-compose-item:nth-child(3):hover { scale: 1.5; }
      .it-compose-item:nth-child(4):hover { translate: 10px 0; rotate: -15deg; }
      .it-compose-item:nth-child(5):hover { translate: 0 -10px; rotate: 10deg; scale: 1.2; }
    </style>

    <div class="page-header">
      <h1>Individual Transforms</h1>
      <p class="subtitle">Animate <code>translate</code>, <code>rotate</code>, and <code>scale</code> independently.</p>
      <span class="badge">Baseline 2022</span>
    </div>

    <p class="info">
      Instead of overriding the entire <code>transform</code> shorthand, you can now use individual <code>translate</code>, <code>rotate</code>, and <code>scale</code> properties. This makes it easy to animate or change just one transform without rewriting others.
    </p>

    <div class="demo-section">
      <h2>Independent Properties</h2>
      <p class="info">Toggle each property — they compose without interfering.</p>
      <div class="it-demo-grid">
        <div class="it-card">
          <h3>translate</h3>
          <div class="it-box-wrap">
            <div class="it-box" id="it-translate">A</div>
          </div>
          <button class="btn" id="it-toggle-translate">Toggle</button>
        </div>
        <div class="it-card">
          <h3>rotate</h3>
          <div class="it-box-wrap">
            <div class="it-box" id="it-rotate">B</div>
          </div>
          <button class="btn" id="it-toggle-rotate">Toggle</button>
        </div>
        <div class="it-card">
          <h3>scale</h3>
          <div class="it-box-wrap">
            <div class="it-box" id="it-scale">C</div>
          </div>
          <button class="btn" id="it-toggle-scale">Toggle</button>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Old vs. New (hover me)</h2>
      <div class="it-compare">
        <div class="it-compare-panel">
          <h3>transform shorthand</h3>
          <div class="it-compare-box old-hover">Hover me</div>
          <p class="info">Must rewrite the entire <code>transform</code> on hover.</p>
        </div>
        <div class="it-compare-panel">
          <h3>individual properties</h3>
          <div class="it-compare-box new-hover">Hover me</div>
          <p class="info">Each property transitions independently.</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Composable (hover each)</h2>
      <div class="it-compose-demo">
        <div class="it-compose-item">translate</div>
        <div class="it-compose-item">rotate</div>
        <div class="it-compose-item">scale</div>
        <div class="it-compose-item">translate<br>+ rotate</div>
        <div class="it-compose-item">all three</div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Individual transform properties */
.card {
  translate: 0;
  rotate: 0deg;
  scale: 1;
  transition: translate 0.3s, rotate 0.3s, scale 0.3s;
}
.card:hover {
  translate: 0 -10px;  /* Only affects position */
  rotate: 5deg;         /* Only affects rotation */
  scale: 1.05;          /* Only affects size */
}

/* Old way — must rewrite everything */
.card-old:hover {
  transform: translateY(-10px) rotate(5deg) scale(1.05);
}</pre>
    </div>
  `;
}

export function init() {
  const translateBox = document.getElementById('it-translate');
  const rotateBox = document.getElementById('it-rotate');
  const scaleBox = document.getElementById('it-scale');

  document.getElementById('it-toggle-translate')?.addEventListener('click', () => {
    translateBox?.classList.toggle('translate-active');
  });
  document.getElementById('it-toggle-rotate')?.addEventListener('click', () => {
    rotateBox?.classList.toggle('rotate-active');
  });
  document.getElementById('it-toggle-scale')?.addEventListener('click', () => {
    scaleBox?.classList.toggle('scale-active');
  });
}
