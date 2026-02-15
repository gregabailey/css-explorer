export function render() {
  return `
    <style>
      .cs-palette {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        gap: 0.5rem;
        margin-block-end: 1rem;
      }

      .cs-swatch {
        aspect-ratio: 1;
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        font-size: 0.65rem;
        font-family: monospace;
        color: white;
        text-shadow: 0 1px 3px oklch(0 0 0 / 0.5);
        font-weight: 600;
      }

      .cs-slider-group {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-block-end: 1.5rem;
      }

      .cs-slider-row {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .cs-slider-row label {
        width: 90px;
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--color-text-muted);
      }

      .cs-slider-row input[type="range"] {
        flex: 1;
        accent-color: var(--color-accent);
      }

      .cs-slider-row .cs-val {
        width: 60px;
        font-size: 0.78rem;
        font-family: monospace;
        color: var(--color-text-muted);
        text-align: right;
      }

      .cs-preview {
        height: 100px;
        border-radius: var(--radius);
        margin-block-end: 0.75rem;
        display: grid;
        place-items: center;
        font-family: monospace;
        font-size: 0.85rem;
        color: white;
        text-shadow: 0 1px 3px oklch(0 0 0 / 0.5);
        transition: background 100ms ease;
      }

      .cs-mix-demo {
        display: grid;
        grid-template-columns: 1fr auto 1fr auto 1fr;
        align-items: center;
        gap: 0.75rem;
        margin-block-end: 1rem;
      }

      .cs-mix-swatch {
        height: 80px;
        border-radius: var(--radius);
      }

      .cs-mix-label {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--color-text-muted);
      }

      .cs-ld-demo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      .cs-ld-box {
        padding: 1.5rem;
        border-radius: var(--radius);
        text-align: center;
        font-weight: 600;
      }

      .cs-ld-light {
        background: white;
        color: light-dark(#1a1a2e, #e0e0e0);
        border: 1px solid #ddd;
      }

      .cs-ld-dark {
        background: #1a1a2e;
        color: light-dark(#1a1a2e, #e0e0e0);
      }
    </style>

    <div class="page-header">
      <h1>Color Spaces & Functions</h1>
      <p class="subtitle"><code>oklch()</code>, <code>color-mix()</code>, and <code>light-dark()</code>.</p>
      <span class="badge">Baseline 2022–2024</span>
    </div>

    <p class="info">
      CSS now supports perceptually uniform color spaces like <code>oklch()</code> and functions
      like <code>color-mix()</code> for blending colors in any color space — no preprocessor needed.
    </p>

    <div class="demo-section">
      <h2>OKLCH Color Picker</h2>
      <div class="cs-preview" id="cs-preview">oklch(0.65 0.2 250)</div>
      <div class="cs-slider-group">
        <div class="cs-slider-row">
          <label>Lightness</label>
          <input type="range" id="cs-l" min="0" max="100" value="65">
          <span class="cs-val" id="cs-l-val">0.65</span>
        </div>
        <div class="cs-slider-row">
          <label>Chroma</label>
          <input type="range" id="cs-c" min="0" max="40" value="20">
          <span class="cs-val" id="cs-c-val">0.20</span>
        </div>
        <div class="cs-slider-row">
          <label>Hue</label>
          <input type="range" id="cs-h" min="0" max="360" value="250">
          <span class="cs-val" id="cs-h-val">250°</span>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>OKLCH Hue Wheel</h2>
      <div class="cs-palette" id="cs-hue-palette"></div>
    </div>

    <div class="demo-section">
      <h2>color-mix()</h2>
      <p class="info">Mix two colors natively in the browser using any color space.</p>
      <div class="cs-mix-demo">
        <div class="cs-mix-swatch" style="background: oklch(0.6 0.25 30)"></div>
        <span class="cs-mix-label">+</span>
        <div class="cs-mix-swatch" style="background: oklch(0.6 0.25 260)"></div>
        <span class="cs-mix-label">=</span>
        <div class="cs-mix-swatch" style="background: color-mix(in oklch, oklch(0.6 0.25 30), oklch(0.6 0.25 260))"></div>
      </div>
      <div class="code-block" style="margin:0">
        <pre>color-mix(in oklch, oklch(0.6 0.25 30), oklch(0.6 0.25 260))</pre>
      </div>
    </div>

    <div class="code-block">
      <pre>/* OKLCH — perceptually uniform */
.element {
  color: oklch(0.7 0.18 250);
}

/* Mix colors in any color space */
.mixed {
  background: color-mix(in oklch, red, blue);
}

/* Automatic light/dark mode */
.adaptive {
  color: light-dark(#333, #eee);
}</pre>
    </div>
  `;
}

export function init() {
  const lSlider = document.getElementById('cs-l');
  const cSlider = document.getElementById('cs-c');
  const hSlider = document.getElementById('cs-h');
  const preview = document.getElementById('cs-preview');
  const palette = document.getElementById('cs-hue-palette');

  if (!lSlider || !cSlider || !hSlider) return;

  function updatePreview() {
    const l = lSlider.value / 100;
    const c = cSlider.value / 100;
    const h = hSlider.value;
    const color = `oklch(${l} ${c} ${h})`;
    preview.style.background = color;
    preview.textContent = color;
    document.getElementById('cs-l-val').textContent = l.toFixed(2);
    document.getElementById('cs-c-val').textContent = c.toFixed(2);
    document.getElementById('cs-h-val').textContent = `${h}°`;
  }

  lSlider.addEventListener('input', updatePreview);
  cSlider.addEventListener('input', updatePreview);
  hSlider.addEventListener('input', updatePreview);

  // Generate hue palette
  if (palette) {
    let html = '';
    for (let h = 0; h < 360; h += 24) {
      html += `<div class="cs-swatch" style="background:oklch(0.65 0.2 ${h})">${h}°</div>`;
    }
    palette.innerHTML = html;
  }
}
