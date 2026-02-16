export function render() {
  return `
    <style>
      .tf-radial-wrap {
        display: flex;
        justify-content: center;
        padding: 2rem 0;
      }
      .tf-radial {
        position: relative;
        width: 280px;
        height: 280px;
      }
      .tf-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-accent);
        display: grid;
        place-items: center;
        color: white;
        font-weight: 700;
        font-size: 0.8rem;
        z-index: 2;
      }
      .tf-orbit-ring {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 1px dashed var(--color-border);
      }
      .tf-dot {
        --angle: calc(var(--i) * 1turn / var(--total));
        --radius: 120px;
        position: absolute;
        top: calc(50% - 20px + sin(var(--angle)) * var(--radius) * -1);
        left: calc(50% - 20px + cos(var(--angle)) * var(--radius));
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: oklch(0.65 0.18 calc(var(--i) * 360 / var(--total)));
        display: grid;
        place-items: center;
        color: white;
        font-weight: 600;
        font-size: 0.75rem;
        transition: all 0.4s ease;
      }

      .tf-controls {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        flex-wrap: wrap;
      }
      .tf-controls label {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }
      .tf-controls input[type="range"] {
        width: 140px;
        accent-color: var(--color-accent);
      }
      .tf-controls .tf-value {
        font-family: monospace;
        color: var(--color-accent);
        min-width: 2em;
        text-align: center;
      }

      .tf-wave-wrap {
        overflow: hidden;
        padding: 1rem 0;
      }
      .tf-wave {
        display: flex;
        gap: 4px;
        align-items: end;
        height: 120px;
        padding: 0 1rem;
      }
      .tf-wave-bar {
        flex: 1;
        min-width: 4px;
        background: var(--color-accent);
        border-radius: 2px 2px 0 0;
        transition: height 0.3s ease;
      }

      .tf-clock {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 2px solid var(--color-border);
        position: relative;
        margin: 0 auto;
      }
      .tf-clock-mark {
        --angle: calc(var(--h) * 30deg);
        position: absolute;
        top: calc(50% - 8px + sin(var(--angle) - 90deg) * 85px);
        left: calc(50% - 8px + cos(var(--angle) - 90deg) * 85px);
        width: 16px;
        height: 16px;
        display: grid;
        place-items: center;
        font-size: 0.6rem;
        color: var(--color-text-muted);
      }
      .tf-clock-hand {
        --angle: calc(var(--deg) * 1deg);
        position: absolute;
        bottom: 50%;
        left: calc(50% - 1.5px);
        width: 3px;
        height: var(--len, 70px);
        background: var(--color-accent);
        border-radius: 3px;
        transform-origin: bottom center;
        transform: rotate(var(--angle));
        transition: transform 1s ease;
      }
      .tf-clock-dot {
        position: absolute;
        top: calc(50% - 5px);
        left: calc(50% - 5px);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--color-accent);
      }
    </style>

    <div class="page-header">
      <h1>Trigonometric Functions</h1>
      <p class="subtitle">Use <code>sin()</code>, <code>cos()</code>, and <code>tan()</code> in CSS.</p>
      <span class="badge">Baseline 2023</span>
    </div>

    <p class="info">
      CSS now supports trigonometric functions — <code>sin()</code>, <code>cos()</code>, <code>tan()</code>, <code>asin()</code>, <code>acos()</code>, <code>atan()</code>, and <code>atan2()</code>. Combined with custom properties, these enable circular/radial layouts and wave patterns without JavaScript.
    </p>

    <div class="demo-section">
      <h2>Radial Menu</h2>
      <p class="info">Items are positioned in a circle using <code>sin()</code> and <code>cos()</code>. Adjust the count:</p>
      <div class="tf-controls">
        <label>Items:</label>
        <input type="range" id="tf-count" min="3" max="12" value="6">
        <span class="tf-value" id="tf-count-label">6</span>
      </div>
      <div class="tf-radial-wrap">
        <div class="tf-radial" id="tf-radial">
          <div class="tf-orbit-ring"></div>
          <div class="tf-center">Menu</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Sine Wave</h2>
      <p class="info">Bar heights follow a sine wave pattern using <code>sin()</code>.</p>
      <div class="tf-wave-wrap">
        <div class="tf-wave" id="tf-wave"></div>
      </div>
      <div class="tf-controls">
        <label>Phase:</label>
        <input type="range" id="tf-phase" min="0" max="628" value="0">
      </div>
    </div>

    <div class="demo-section">
      <h2>Clock Face</h2>
      <p class="info">Hour markers positioned using <code>sin()</code> and <code>cos()</code> with angle calculations.</p>
      <div class="tf-clock" id="tf-clock">
        <div class="tf-clock-hand" id="tf-hour-hand" style="--len: 50px; --deg: 0;"></div>
        <div class="tf-clock-hand" id="tf-min-hand" style="--len: 70px; --deg: 0; opacity: 0.6; width: 2px;"></div>
        <div class="tf-clock-dot"></div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Place items in a circle */
.item {
  --angle: calc(var(--i) * 1turn / var(--total));
  --radius: 120px;
  top:  calc(50% + sin(var(--angle)) * var(--radius));
  left: calc(50% + cos(var(--angle)) * var(--radius));
}

/* Sine wave height */
.bar {
  height: calc(50% + sin(var(--i) * 0.3rad) * 40%);
}

/* Also available: asin(), acos(), atan(), atan2() */</pre>
    </div>
  `;
}

export function init() {
  const radial = document.getElementById('tf-radial');
  const countSlider = document.getElementById('tf-count');
  const countLabel = document.getElementById('tf-count-label');
  const wave = document.getElementById('tf-wave');
  const phaseSlider = document.getElementById('tf-phase');
  const hourHand = document.getElementById('tf-hour-hand');
  const minHand = document.getElementById('tf-min-hand');

  if (!radial || !countSlider || !wave) return;

  function buildRadial(count) {
    radial.querySelectorAll('.tf-dot').forEach(d => d.remove());
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.className = 'tf-dot';
      dot.style.setProperty('--i', i);
      dot.style.setProperty('--total', count);
      dot.textContent = i + 1;
      radial.appendChild(dot);
    }
  }

  countSlider.addEventListener('input', () => {
    countLabel.textContent = countSlider.value;
    buildRadial(Number(countSlider.value));
  });
  buildRadial(6);

  // Sine wave
  const barCount = 40;
  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement('div');
    bar.className = 'tf-wave-bar';
    wave.appendChild(bar);
  }

  function updateWave(phase) {
    const bars = wave.querySelectorAll('.tf-wave-bar');
    bars.forEach((bar, i) => {
      const h = 50 + Math.sin(i * 0.3 + phase) * 40;
      bar.style.height = h + '%';
    });
  }
  updateWave(0);

  if (phaseSlider) {
    phaseSlider.addEventListener('input', () => {
      updateWave(Number(phaseSlider.value) / 100);
    });
  }

  // Clock
  if (hourHand && minHand) {
    function updateClock() {
      const now = new Date();
      const h = now.getHours() % 12;
      const m = now.getMinutes();
      hourHand.style.setProperty('--deg', h * 30 + m * 0.5);
      minHand.style.setProperty('--deg', m * 6);
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // Clock face markers
  const clock = document.getElementById('tf-clock');
  if (clock) {
    for (let h = 1; h <= 12; h++) {
      const mark = document.createElement('div');
      mark.className = 'tf-clock-mark';
      mark.style.setProperty('--h', h);
      mark.textContent = h;
      clock.appendChild(mark);
    }
  }
}
