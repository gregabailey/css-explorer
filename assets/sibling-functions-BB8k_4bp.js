function o(){return`
    <style>
      .si-stagger-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .si-stagger-item {
        padding: 0.75rem 1rem;
        border-radius: var(--radius);
        background: oklch(0.6 0.22 260 / 0.12);
        color: oklch(0.6 0.18 260);
        font-weight: 600;
        font-size: 0.9rem;
        opacity: 0;
        animation: si-fade-in 0.5s ease forwards;
        animation-delay: calc(sibling-index() * 0.1s);
      }
      @keyframes si-fade-in {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .si-rainbow-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
        gap: 0.4rem;
      }
      .si-rainbow-cell {
        aspect-ratio: 1;
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        font-size: 0.75rem;
        font-weight: 600;
        color: white;
        text-shadow: 0 1px 2px oklch(0 0 0 / 0.3);
        background: oklch(0.65 0.22 calc(sibling-index() * 30));
      }

      .si-equal-bar {
        display: flex;
        gap: 0.25rem;
        height: 50px;
      }
      .si-equal-segment {
        flex: 1;
        border-radius: 4px;
        background: oklch(0.6 0.18 260);
        display: grid;
        place-items: center;
        font-size: 0.7rem;
        font-weight: 600;
        color: white;
      }

      .si-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .si-compare { grid-template-columns: 1fr; }
      }
      .si-compare-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .si-compare-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .si-compare-code {
        font-family: monospace;
        font-size: 0.78rem;
        line-height: 1.7;
        white-space: pre-wrap;
        color: var(--color-text-muted);
      }

      .si-shrink-list {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }
      .si-shrink-item {
        height: 30px;
        border-radius: 4px;
        background: oklch(0.55 0.18 150);
        display: grid;
        place-items: center;
        font-size: 0.7rem;
        font-weight: 600;
        color: white;
        width: calc(100% - (sibling-index() - 1) * 8%);
      }

      .si-note {
        padding: 0.75rem 1rem;
        border-radius: var(--radius);
        background: var(--color-accent-subtle);
        font-size: 0.85rem;
        color: var(--color-text);
        margin-bottom: 1.5rem;
      }
    </style>

    <div class="page-header">
      <h1>sibling-index() / sibling-count()</h1>
      <p class="subtitle">Use an element's position and total sibling count as values in CSS calculations.</p>
      <span class="badge">Chrome 138+</span>
    </div>

    <p class="info">
      <code>sibling-index()</code> returns the element's 1-based position among its siblings.
      <code>sibling-count()</code> returns the total number of siblings. Both return <code>&lt;integer&gt;</code>
      values usable in <code>calc()</code>, <code>hsl()</code>, and anywhere a number is expected —
      replacing verbose <code>:nth-child</code> rules with a single declaration.
    </p>

    <div class="si-note">These demos require Chrome 138+ or Safari Technology Preview.</div>

    <div class="demo-section">
      <h2>Staggered Animation</h2>
      <p class="info">Each item's delay is <code>calc(sibling-index() * 0.1s)</code> — one line replaces N separate <code>:nth-child</code> rules.</p>
      <div class="si-stagger-list" id="si-stagger"></div>
    </div>

    <div class="demo-section">
      <h2>Before & After</h2>
      <div class="si-compare">
        <div class="si-compare-card">
          <h3>Old way — one rule per child</h3>
          <div class="si-compare-code">li:nth-child(1) { animation-delay: 0.1s; }
li:nth-child(2) { animation-delay: 0.2s; }
li:nth-child(3) { animation-delay: 0.3s; }
li:nth-child(4) { animation-delay: 0.4s; }
li:nth-child(5) { animation-delay: 0.5s; }
/* ...for every item */</div>
        </div>
        <div class="si-compare-card">
          <h3>New way — one line</h3>
          <div class="si-compare-code">li {
  animation-delay:
    calc(sibling-index() * 0.1s);
}

/* Works with any number of items.
   No need to know the count
   ahead of time. */</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Rainbow Colors</h2>
      <p class="info">Hue is distributed using <code>calc(sibling-index() * 30)</code> — each cell gets a unique color automatically.</p>
      <div class="si-rainbow-grid" id="si-rainbow"></div>
    </div>

    <div class="demo-section">
      <h2>Shrinking Bars</h2>
      <p class="info">Width is <code>calc(100% - (sibling-index() - 1) * 8%)</code> — creating a pyramid effect.</p>
      <div class="si-shrink-list" id="si-shrink"></div>
    </div>

    <div class="code-block">
      <pre>/* Staggered animation delay */
li {
  animation-delay: calc(sibling-index() * 0.1s);
}

/* Rainbow hue across siblings */
.item {
  background: oklch(0.65 0.22 calc(sibling-index() * 30));
}

/* Equal-width segments — adapts to any count */
.tab {
  width: calc(100% / sibling-count());
}

/* Reverse stagger (last item first) */
.item {
  --reverse: calc(sibling-count() - sibling-index());
  animation-delay: calc(var(--reverse) * 0.1s);
}</pre>
    </div>
  `}function t(){const a=document.getElementById("si-stagger"),s=document.getElementById("si-rainbow"),r=document.getElementById("si-shrink");if(a){let e="";for(let i=1;i<=6;i++)e+=`<div class="si-stagger-item">Item ${i} — delay: ${(i*.1).toFixed(1)}s</div>`;a.innerHTML=e}if(s){let e="";for(let i=1;i<=12;i++)e+=`<div class="si-rainbow-cell">${i}</div>`;s.innerHTML=e}if(r){let e="";for(let i=1;i<=8;i++)e+=`<div class="si-shrink-item">${i}</div>`;r.innerHTML=e}}export{t as init,o as render};
