function a(){const s=[{hue:280,label:"Violet"},{hue:230,label:"Blue"},{hue:180,label:"Teal"},{hue:150,label:"Green"},{hue:50,label:"Gold"},{hue:20,label:"Orange"},{hue:350,label:"Rose"},{hue:310,label:"Pink"}].map(e=>`
    <div class="ss-slide" style="background: linear-gradient(135deg, oklch(0.45 0.2 ${e.hue}), oklch(0.6 0.18 ${e.hue+30}))">
      <span class="ss-slide-label">${e.label}</span>
    </div>
  `).join("");return`
    <style>
      .ss-carousel {
        display: flex;
        gap: 1rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-padding-inline: 1rem;
        padding: 1rem;
        border-radius: var(--radius);
        background: var(--color-surface-2);
        scrollbar-width: thin;
      }

      .ss-slide {
        flex: 0 0 280px;
        height: 200px;
        border-radius: var(--radius);
        scroll-snap-align: start;
        display: grid;
        place-items: center;
      }

      .ss-slide-label {
        font-size: 1.25rem;
        font-weight: 700;
        color: white;
        text-shadow: 0 2px 8px oklch(0 0 0 / 0.3);
      }

      /* Vertical snap */
      .ss-vertical {
        height: 300px;
        overflow-y: auto;
        scroll-snap-type: y mandatory;
        border-radius: var(--radius);
        background: var(--color-surface-2);
        scrollbar-width: thin;
      }

      .ss-vertical-item {
        height: 300px;
        scroll-snap-align: start;
        display: grid;
        place-items: center;
        padding: 2rem;
      }

      .ss-vertical-item h3 {
        font-size: 1.5rem;
        margin-block-end: 0.5rem;
      }

      .ss-vertical-item p {
        color: var(--color-text-muted);
        font-size: 0.9rem;
        text-align: center;
        max-width: 300px;
      }

      .ss-proximity {
        display: flex;
        gap: 1rem;
        overflow-x: auto;
        scroll-snap-type: x proximity;
        scroll-padding-inline: 1rem;
        padding: 1rem;
        border-radius: var(--radius);
        background: var(--color-surface-2);
        scrollbar-width: thin;
      }

      .ss-proximity .ss-slide {
        flex: 0 0 180px;
        height: 120px;
        scroll-snap-align: center;
      }
    </style>

    <div class="page-header">
      <h1>Scroll Snap</h1>
      <p class="subtitle">Native, declarative snap points for scroll containers.</p>
      <span class="badge">Baseline 2021</span>
    </div>

    <p class="info">
      Scroll Snap provides native snap-to-item scrolling without JavaScript carousel libraries.
      Set <code>scroll-snap-type</code> on the container and <code>scroll-snap-align</code> on children.
    </p>

    <div class="demo-section">
      <h2>Horizontal — <code>mandatory</code></h2>
      <p class="info">Slides snap to the start edge. Swipe or scroll horizontally.</p>
      <div class="ss-carousel">
        ${s}
      </div>
    </div>

    <div class="demo-section">
      <h2>Horizontal — <code>proximity</code></h2>
      <p class="info">Snaps only when close to a snap point. More relaxed scrolling.</p>
      <div class="ss-proximity">
        ${s}
      </div>
    </div>

    <div class="demo-section">
      <h2>Vertical Snap</h2>
      <p class="info">Scroll down inside this container — each section snaps into place.</p>
      <div class="ss-vertical">
        <div class="ss-vertical-item" style="background:linear-gradient(to bottom, oklch(0.3 0.15 280), var(--color-surface-2))">
          <div>
            <h3>Section 1</h3>
            <p>Vertical scroll snapping works the same way — just change the axis to <code>y</code>.</p>
          </div>
        </div>
        <div class="ss-vertical-item" style="background:linear-gradient(to bottom, oklch(0.3 0.15 180), var(--color-surface-2))">
          <div>
            <h3>Section 2</h3>
            <p>Great for full-page section scrolling or vertical carousels.</p>
          </div>
        </div>
        <div class="ss-vertical-item" style="background:linear-gradient(to bottom, oklch(0.3 0.15 50), var(--color-surface-2))">
          <div>
            <h3>Section 3</h3>
            <p>All done with two CSS properties — no JavaScript needed.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 1rem;
}

.slide {
  flex: 0 0 280px;
  scroll-snap-align: start;
}</pre>
    </div>
  `}export{a as render};
