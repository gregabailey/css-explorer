function e(){return`
    <style>
      .sda-progress {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: var(--color-accent);
        transform-origin: left;
        animation: sda-grow linear;
        animation-timeline: scroll();
        z-index: 1000;
      }

      @keyframes sda-grow {
        from { transform: scaleX(0); }
        to { transform: scaleX(1); }
      }

      .sda-scroll-area {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .sda-item {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 2rem;
        opacity: 0;
        transform: translateY(30px);
        animation: sda-reveal linear both;
        animation-timeline: view();
        animation-range: entry 0% entry 100%;
      }

      @keyframes sda-reveal {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .sda-item h3 {
        font-size: 1.1rem;
        margin-block-end: 0.5rem;
        color: var(--color-accent);
      }

      .sda-item p {
        color: var(--color-text-muted);
        font-size: 0.9rem;
        line-height: 1.6;
      }

      .sda-parallax-section {
        height: 300px;
        border-radius: var(--radius);
        overflow: hidden;
        position: relative;
        margin-block-end: 2rem;
      }

      .sda-parallax-bg {
        position: absolute;
        inset: -50% 0;
        background: linear-gradient(
          135deg,
          oklch(0.4 0.2 280) 0%,
          oklch(0.5 0.22 230) 33%,
          oklch(0.45 0.2 180) 66%,
          oklch(0.5 0.18 310) 100%
        );
        background-size: 200% 200%;
        animation: sda-parallax linear;
        animation-timeline: view();
      }

      @keyframes sda-parallax {
        from { transform: translateY(0); }
        to { transform: translateY(30%); }
      }

      .sda-parallax-text {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
        text-shadow: 0 2px 8px oklch(0 0 0 / 0.4);
      }
    </style>

    <div class="sda-progress"></div>

    <div class="page-header">
      <h1>Scroll-Driven Animations</h1>
      <p class="subtitle">Tie CSS animations to scroll position — no JavaScript.</p>
      <span class="badge">Baseline 2024</span>
    </div>

    <p class="info">
      The <code>animation-timeline</code> property links animations to scroll progress
      (<code>scroll()</code>) or element visibility (<code>view()</code>). The progress bar
      at the top of this page uses <code>scroll()</code>. The cards below fade in using <code>view()</code>.
    </p>

    <div class="demo-section">
      <h2>Parallax Effect — <code>view()</code></h2>
      <div class="sda-parallax-section">
        <div class="sda-parallax-bg"></div>
        <div class="sda-parallax-text">Scroll to see parallax</div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Scroll-Reveal Cards — <code>view()</code></h2>
      <p class="info">Scroll down to see each card animate into view.</p>
      <div class="sda-scroll-area">
        <div class="sda-item">
          <h3>scroll()</h3>
          <p>Tracks the scroll offset of a scroll container. The animation progresses as you scroll. Great for progress bars and parallax effects.</p>
        </div>
        <div class="sda-item">
          <h3>view()</h3>
          <p>Tracks an element's visibility as it crosses the scrollport. The animation plays as the element enters and exits the viewport.</p>
        </div>
        <div class="sda-item">
          <h3>animation-range</h3>
          <p>Controls when the animation starts and ends within the timeline. For example, "entry 0% entry 100%" plays only during the entry phase.</p>
        </div>
        <div class="sda-item">
          <h3>No JavaScript</h3>
          <p>All of these animations are pure CSS — no IntersectionObserver, no scroll event listeners, no requestAnimationFrame. Just CSS properties.</p>
        </div>
        <div class="sda-item">
          <h3>Performance</h3>
          <p>Scroll-driven animations run on the compositor thread, making them buttery smooth even on lower-end devices. No jank, no layout thrashing.</p>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Progress bar tied to page scroll */
.progress {
  animation: grow linear;
  animation-timeline: scroll();
}

/* Reveal on scroll into view */
.card {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}</pre>
    </div>
  `}export{e as render};
