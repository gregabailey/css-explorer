export function render() {
  return `
    <style>
      .ata-accordion {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .ata-item {
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        overflow: hidden;
      }

      .ata-trigger {
        width: 100%;
        padding: 1rem 1.25rem;
        background: var(--color-surface-2);
        border: none;
        color: var(--color-text);
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      }

      .ata-trigger:hover {
        background: var(--color-border);
      }

      .ata-icon {
        transition: transform 300ms ease;
        font-size: 1.2rem;
        color: var(--color-text-muted);
      }

      .ata-item.open .ata-icon {
        transform: rotate(45deg);
      }

      .ata-content {
        height: 0;
        overflow: hidden;
        transition: height 400ms ease;
      }

      .ata-item.open .ata-content {
        height: auto;
      }

      .ata-content-inner {
        padding: 0 1.25rem 1.25rem;
        color: var(--color-text-muted);
        font-size: 0.88rem;
        line-height: 1.6;
      }

      /* Method 2: interpolate-size */
      .ata-slide {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        overflow: hidden;
        margin-block-end: 1rem;
      }

      .ata-slide-header {
        padding: 1rem;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .ata-slide-body {
        height: 0;
        overflow: hidden;
        transition: height 400ms ease;
      }

      .ata-slide.open .ata-slide-body {
        height: auto;
      }

      .ata-slide-body-inner {
        padding: 0 1rem 1rem;
        color: var(--color-text-muted);
        font-size: 0.88rem;
        line-height: 1.6;
      }

      .ata-old-way {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1rem 1.25rem;
        font-size: 0.85rem;
        color: var(--color-text-muted);
        border-inline-start: 3px solid oklch(0.6 0.2 20);
        margin-block-end: 1rem;
      }

      .ata-old-way strong {
        color: oklch(0.75 0.15 20);
      }
    </style>

    <div class="page-header">
      <h1>Animate to Auto</h1>
      <p class="subtitle">Transition <code>height</code> to and from <code>auto</code>.</p>
      <span class="badge">2024–2025</span>
    </div>

    <p class="info">
      One of the most requested CSS features: you can now transition an element's height from
      <code>0</code> to <code>auto</code> (or any intrinsic keyword). No more <code>max-height</code>
      hacks or JavaScript measurements.
    </p>

    <div class="ata-old-way">
      <strong>The old hack:</strong> <code>max-height: 0</code> → <code>max-height: 9999px</code>.
      This caused timing issues and visual glitches because the transition duration applied to the
      full max-height range, not the actual content height.
    </div>

    <div class="demo-section">
      <h2>Accordion</h2>
      <p class="info">Click to expand — height animates smoothly to <code>auto</code>.</p>
      <div class="ata-accordion" id="ata-accordion">
        <div class="ata-item">
          <button class="ata-trigger">
            <span>How does it work?</span>
            <span class="ata-icon">+</span>
          </button>
          <div class="ata-content">
            <div class="ata-content-inner">
              Browsers now support transitioning the <code>height</code> property between a fixed value (like <code>0</code>) and intrinsic sizing keywords like <code>auto</code>, <code>min-content</code>, and <code>max-content</code>. The browser calculates the actual height and creates a smooth transition.
            </div>
          </div>
        </div>
        <div class="ata-item">
          <button class="ata-trigger">
            <span>What about transition-behavior?</span>
            <span class="ata-icon">+</span>
          </button>
          <div class="ata-content">
            <div class="ata-content-inner">
              The <code>transition-behavior: allow-discrete</code> property enables transitions on properties that were previously non-animatable, like <code>display</code> and <code>visibility</code>. Combined with <code>@starting-style</code>, you can animate elements appearing from <code>display: none</code>.
            </div>
          </div>
        </div>
        <div class="ata-item">
          <button class="ata-trigger">
            <span>Browser support?</span>
            <span class="ata-icon">+</span>
          </button>
          <div class="ata-content">
            <div class="ata-content-inner">
              Animating to intrinsic sizing keywords is landing across browsers in 2024–2025. Chrome, Edge, and Safari have implementations shipping. Firefox support is following. The <code>interpolate-size</code> property or <code>calc-size()</code> function may be needed depending on the browser.
            </div>
          </div>
        </div>
        <div class="ata-item">
          <button class="ata-trigger">
            <span>Do I still need JavaScript?</span>
            <span class="ata-icon">+</span>
          </button>
          <div class="ata-content">
            <div class="ata-content-inner">
              For the basic expand/collapse pattern, you only need JavaScript to toggle a class. The actual animation is handled entirely by CSS. No measuring heights, no <code>requestAnimationFrame</code>, no FLIP technique — just <code>height: 0</code> → <code>height: auto</code> with a transition.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>.panel {
  height: 0;
  overflow: hidden;
  transition: height 400ms ease;
}

.panel.open {
  height: auto;  /* This transition now works! */
}

/* That's it. No max-height hack needed. */</pre>
    </div>
  `;
}

export function init() {
  const accordion = document.getElementById('ata-accordion');
  if (!accordion) return;

  accordion.addEventListener('click', e => {
    const trigger = e.target.closest('.ata-trigger');
    if (!trigger) return;

    const item = trigger.closest('.ata-item');
    item.classList.toggle('open');
  });
}
