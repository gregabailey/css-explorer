export function render() {
  return `
    <style>
      @property --ap-hue {
        syntax: '<angle>';
        inherits: false;
        initial-value: 250deg;
      }
      @property --ap-progress {
        syntax: '<percentage>';
        inherits: false;
        initial-value: 0%;
      }

      .ap-gradient-box {
        width: 100%;
        height: 200px;
        border-radius: var(--radius);
        background: linear-gradient(135deg, oklch(0.6 0.2 var(--ap-hue)), oklch(0.8 0.15 calc(var(--ap-hue) + 60deg)));
        transition: --ap-hue 1s ease;
        display: grid;
        place-items: center;
        cursor: pointer;
      }
      .ap-gradient-box:hover {
        --ap-hue: 50deg;
      }
      .ap-gradient-label {
        color: white;
        font-weight: 600;
        font-size: 1.1rem;
        text-shadow: 0 1px 4px oklch(0 0 0 / 0.3);
        pointer-events: none;
      }

      .ap-progress-bar {
        width: 100%;
        height: 32px;
        border-radius: 999px;
        background: linear-gradient(90deg, oklch(0.65 0.2 150) var(--ap-progress), var(--color-surface-2) var(--ap-progress));
        transition: --ap-progress 1s ease;
        display: flex;
        align-items: center;
        padding: 0 1rem;
      }
      .ap-progress-bar.filled {
        --ap-progress: 75%;
      }
      .ap-progress-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: white;
        text-shadow: 0 1px 2px oklch(0 0 0 / 0.3);
      }

      .ap-demo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .ap-demo-grid { grid-template-columns: 1fr; }
      }
      .ap-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .ap-card h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      @property --ap-counter {
        syntax: '<integer>';
        inherits: false;
        initial-value: 0;
      }
      .ap-counter-demo {
        font-size: 3rem;
        font-weight: 700;
        font-family: monospace;
        color: var(--color-accent);
        text-align: center;
        counter-reset: num var(--ap-counter);
        transition: --ap-counter 2s ease;
      }
      .ap-counter-demo::after {
        content: counter(num);
      }
      .ap-counter-demo.counting {
        --ap-counter: 100;
      }

      @property --ap-color-temp {
        syntax: '<color>';
        inherits: false;
        initial-value: oklch(0.7 0.2 250);
      }
      .ap-color-box {
        padding: 1.5rem;
        border-radius: var(--radius);
        background: var(--ap-color-temp);
        transition: --ap-color-temp 0.8s ease;
        text-align: center;
        color: white;
        font-weight: 600;
        cursor: pointer;
      }
      .ap-color-box:hover {
        --ap-color-temp: oklch(0.7 0.2 30);
      }

      .ap-controls {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
        flex-wrap: wrap;
        justify-content: center;
      }
    </style>

    <div class="page-header">
      <h1>@property</h1>
      <p class="subtitle">Register custom properties with types, enabling animated gradients and more.</p>
      <span class="badge">Baseline 2024</span>
    </div>

    <p class="info">
      <code>@property</code> lets you register CSS custom properties with a defined syntax (type), initial value, and inheritance behavior. This unlocks transitions and animations on values that were previously not animatable — like gradient hues, percentages, and colors within gradients.
    </p>

    <div class="demo-section">
      <h2>Animated Gradient (hover)</h2>
      <p class="info">Without <code>@property</code>, gradients can't transition. With a typed <code>&lt;angle&gt;</code> property, the hue smoothly animates.</p>
      <div class="ap-gradient-box">
        <span class="ap-gradient-label">Hover to shift hue</span>
      </div>
    </div>

    <div class="demo-section">
      <h2>Animated Progress</h2>
      <p class="info">A <code>&lt;percentage&gt;</code> typed custom property enables smooth gradient-stop transitions.</p>
      <div class="ap-progress-bar" id="ap-progress">
        <span class="ap-progress-label">0%</span>
      </div>
      <div class="ap-controls">
        <button class="btn" id="ap-fill-btn">Animate to 75%</button>
        <button class="btn" id="ap-reset-btn">Reset</button>
      </div>
    </div>

    <div class="demo-section">
      <h2>More Typed Properties</h2>
      <div class="ap-demo-grid">
        <div class="ap-card">
          <h3>&lt;integer&gt; — Counter</h3>
          <div class="ap-counter-demo" id="ap-counter"></div>
          <div class="ap-controls">
            <button class="btn" id="ap-count-btn">Count to 100</button>
          </div>
        </div>
        <div class="ap-card">
          <h3>&lt;color&gt; — Smooth Color</h3>
          <div class="ap-color-box">Hover to change color</div>
          <p class="info" style="margin-top: 0.75rem;">The color transitions smoothly through oklch space.</p>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Register a typed custom property */
@property --hue {
  syntax: '&lt;angle&gt;';
  inherits: false;
  initial-value: 0deg;
}

/* Now it can be transitioned! */
.gradient-box {
  --hue: 250deg;
  background: linear-gradient(
    oklch(0.6 0.2 var(--hue)),
    oklch(0.8 0.15 calc(var(--hue) + 60deg))
  );
  transition: --hue 1s ease;
}
.gradient-box:hover {
  --hue: 50deg;  /* Smoothly animates! */
}

/* Available syntax types:
   &lt;angle&gt;, &lt;color&gt;, &lt;integer&gt;, &lt;length&gt;,
   &lt;number&gt;, &lt;percentage&gt;, &lt;length-percentage&gt;,
   &lt;resolution&gt;, &lt;time&gt;, &lt;url&gt;, &lt;image&gt;   */</pre>
    </div>
  `;
}

export function init() {
  const progress = document.getElementById('ap-progress');
  const fillBtn = document.getElementById('ap-fill-btn');
  const resetBtn = document.getElementById('ap-reset-btn');
  const counter = document.getElementById('ap-counter');
  const countBtn = document.getElementById('ap-count-btn');

  if (fillBtn && progress) {
    fillBtn.addEventListener('click', () => {
      progress.classList.add('filled');
      const label = progress.querySelector('.ap-progress-label');
      if (label) label.textContent = '75%';
    });
  }
  if (resetBtn && progress) {
    resetBtn.addEventListener('click', () => {
      progress.classList.remove('filled');
      const label = progress.querySelector('.ap-progress-label');
      if (label) label.textContent = '0%';
    });
  }
  if (countBtn && counter) {
    countBtn.addEventListener('click', () => {
      counter.classList.toggle('counting');
    });
  }
}
