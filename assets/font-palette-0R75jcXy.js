function e(){return`
    <style>
      @font-face {
        font-family: "Bungee Spice";
        src: url("https://fonts.gstatic.com/s/bungeespice/v14/nwpTtK2nIhxE0q-IwgSpZBqCzyQ-.woff2") format("woff2");
      }

      @font-palette-values --cool {
        font-family: "Bungee Spice";
        override-colors:
          0 oklch(0.6 0.25 250),
          1 oklch(0.7 0.2 200);
      }

      @font-palette-values --warm {
        font-family: "Bungee Spice";
        override-colors:
          0 oklch(0.65 0.28 30),
          1 oklch(0.7 0.25 60);
      }

      @font-palette-values --neon {
        font-family: "Bungee Spice";
        override-colors:
          0 oklch(0.75 0.3 150),
          1 oklch(0.8 0.25 320);
      }

      .fp-showcase {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .fp-row {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.5rem;
      }
      .fp-row h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.75rem;
      }
      .fp-text {
        font-family: "Bungee Spice", system-ui;
        font-size: 2.5rem;
        line-height: 1.2;
      }
      @media (max-width: 600px) {
        .fp-text { font-size: 1.5rem; }
      }
      .fp-text.default { font-palette: normal; }
      .fp-text.cool { font-palette: --cool; }
      .fp-text.warm { font-palette: --warm; }
      .fp-text.neon { font-palette: --neon; }
      .fp-text.dark-mode { font-palette: dark; }
      .fp-text.light-mode { font-palette: light; }

      .fp-emoji-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 1rem;
      }
      .fp-emoji-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1rem;
        text-align: center;
      }
      .fp-emoji-card h3 {
        font-size: 0.7rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.5rem;
      }
      .fp-emoji {
        font-size: 2.5rem;
        line-height: 1;
      }
      .fp-emoji.fp-dark { font-palette: dark; }
      .fp-emoji.fp-light { font-palette: light; }

      .fp-note {
        padding: 1rem;
        border-radius: var(--radius);
        background: var(--color-accent-subtle);
        font-size: 0.85rem;
        color: var(--color-text);
        margin-bottom: 1.5rem;
      }
    </style>

    <div class="page-header">
      <h1>font-palette</h1>
      <p class="subtitle">Recolor multi-color fonts with CSS — no image editing needed.</p>
      <span class="badge">Baseline 2022</span>
    </div>

    <p class="info">
      Color fonts (like COLRv1) contain multiple color layers per glyph.
      <code>font-palette</code> lets you switch between built-in palettes or define
      custom ones with <code>@font-palette-values</code> to override individual color slots.
    </p>

    <div class="fp-note">This demo uses <strong>Bungee Spice</strong>, a free COLRv1 color font from Google Fonts. If the font hasn't loaded yet, give it a moment.</div>

    <div class="demo-section">
      <h2>Custom Palettes</h2>
      <div class="fp-showcase">
        <div class="fp-row">
          <h3>Default palette</h3>
          <div class="fp-text default">Color Font</div>
        </div>
        <div class="fp-row">
          <h3>--cool (custom blues)</h3>
          <div class="fp-text cool">Color Font</div>
        </div>
        <div class="fp-row">
          <h3>--warm (custom oranges)</h3>
          <div class="fp-text warm">Color Font</div>
        </div>
        <div class="fp-row">
          <h3>--neon (custom green/pink)</h3>
          <div class="fp-text neon">Color Font</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Built-in Palettes</h2>
      <p class="info">Color fonts can define <code>light</code> and <code>dark</code> built-in palettes. Not all fonts include these.</p>
      <div class="fp-showcase">
        <div class="fp-row">
          <h3>font-palette: light</h3>
          <div class="fp-text light-mode">Light Mode</div>
        </div>
        <div class="fp-row">
          <h3>font-palette: dark</h3>
          <div class="fp-text dark-mode">Dark Mode</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Use a built-in palette */
h1 {
  font-palette: dark;
}

/* Define a custom palette */
@font-palette-values --brand {
  font-family: "Bungee Spice";
  override-colors:
    0 #ff6600,
    1 #ffcc00;
}

h1 {
  font-family: "Bungee Spice";
  font-palette: --brand;
}</pre>
    </div>
  `}export{e as render};
