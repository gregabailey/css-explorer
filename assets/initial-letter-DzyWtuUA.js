function r(){return`
    <style>
      .il-demo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .il-demo-grid { grid-template-columns: 1fr; }
      }
      .il-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.5rem;
      }
      .il-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .il-text {
        font-size: 0.9rem;
        line-height: 1.7;
        color: var(--color-text);
      }
      .il-text::first-letter {
        initial-letter: var(--il-size, 3);
        font-weight: 700;
        margin-right: 0.5rem;
        color: var(--color-accent);
      }

      .il-text-2::first-letter {
        initial-letter: 2;
        font-weight: 700;
        margin-right: 0.4rem;
        color: oklch(0.7 0.2 150);
      }
      .il-text-4::first-letter {
        initial-letter: 4;
        font-weight: 700;
        margin-right: 0.5rem;
        color: oklch(0.7 0.2 30);
        font-family: Georgia, serif;
      }
      .il-text-styled::first-letter {
        initial-letter: 3;
        font-weight: 700;
        margin-right: 0.5rem;
        background: linear-gradient(135deg, oklch(0.6 0.2 250), oklch(0.7 0.18 300));
        color: white;
        padding: 0.2rem 0.6rem;
        border-radius: 4px;
      }
      .il-text-serif::first-letter {
        initial-letter: 3;
        font-family: Georgia, 'Times New Roman', serif;
        font-weight: 400;
        margin-right: 0.6rem;
        color: oklch(0.8 0.15 50);
        font-style: italic;
      }

      .il-controls {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
        flex-wrap: wrap;
      }
      .il-controls label {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }
      .il-controls input[type="range"] {
        width: 140px;
        accent-color: var(--color-accent);
      }
      .il-controls .il-val {
        font-family: monospace;
        color: var(--color-accent);
        min-width: 1.5em;
      }

      .il-magazine {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 2rem;
        columns: 2;
        column-gap: 2rem;
        column-rule: 1px solid var(--color-border);
      }
      @media (max-width: 600px) {
        .il-magazine { columns: 1; }
      }
      .il-magazine p {
        font-size: 0.85rem;
        line-height: 1.8;
        color: var(--color-text);
        margin-bottom: 1rem;
      }
      .il-magazine p:first-of-type::first-letter {
        initial-letter: 4;
        font-family: Georgia, serif;
        font-weight: 700;
        margin-right: 0.5rem;
        color: var(--color-accent);
      }
    </style>

    <div class="page-header">
      <h1>initial-letter</h1>
      <p class="subtitle">Native drop caps without float hacks.</p>
      <span class="badge">2023 (No Firefox)</span>
    </div>

    <p class="info">
      The <code>initial-letter</code> property sizes and sinks the first letter of a block container, creating drop cap effects. The value specifies how many lines the letter should span.
    </p>

    <div class="demo-section">
      <h2>Different Sizes</h2>
      <div class="il-demo-grid">
        <div class="il-card">
          <h3>initial-letter: 2</h3>
          <p class="il-text il-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div class="il-card">
          <h3>initial-letter: 4</h3>
          <p class="il-text il-text-4">Cascading Style Sheets have evolved dramatically since their inception. Modern CSS can handle layouts, animations, and interactive experiences that once required JavaScript.</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Styled Drop Caps</h2>
      <div class="il-demo-grid">
        <div class="il-card">
          <h3>With background</h3>
          <p class="il-text il-text-styled">Web typography has entered a new era. With initial-letter, designers can create magazine-quality drop caps using pure CSS, no floats or absolute positioning needed.</p>
        </div>
        <div class="il-card">
          <h3>Serif italic</h3>
          <p class="il-text il-text-serif">Once upon a time, creating drop caps on the web required complicated CSS hacks involving floats, line-height adjustments, and font-size calculations. Those days are over.</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Interactive Size</h2>
      <div class="il-controls">
        <label>Lines to span:</label>
        <input type="range" id="il-slider" min="2" max="6" value="3" step="1">
        <span class="il-val" id="il-val">3</span>
      </div>
      <div class="il-card">
        <p class="il-text" id="il-interactive">The initial-letter property makes it trivial to create beautiful drop caps. The value tells the browser how many lines the first letter should span. This creates a classic typographic effect seen in books and magazines for centuries, now achievable with a single CSS property.</p>
      </div>
    </div>

    <div class="demo-section">
      <h2>Magazine Layout</h2>
      <div class="il-magazine">
        <p>Typography on the web has long been constrained by the limitations of CSS. While print designers have enjoyed precise control over every typographic detail for decades, web developers had to rely on workarounds and hacks to achieve similar effects.</p>
        <p>The initial-letter property is one of many modern CSS features that bring the web closer to print-quality typography. Combined with features like text-wrap: balance and font-variation settings, the gap between print and web typography continues to narrow.</p>
        <p>These improvements matter because good typography enhances readability and creates a more engaging reading experience for users across all devices and screen sizes.</p>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Basic drop cap — spans 3 lines */
p::first-letter {
  initial-letter: 3;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* Styled drop cap */
.article::first-letter {
  initial-letter: 4;
  font-family: Georgia, serif;
  color: var(--accent);
  background: var(--surface);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}</pre>
    </div>
  `}function a(){const e=document.getElementById("il-slider"),i=document.getElementById("il-val"),t=document.getElementById("il-interactive");!e||!i||!t||e.addEventListener("input",()=>{i.textContent=e.value,t.style.setProperty("--il-size",e.value)})}export{a as init,r as render};
