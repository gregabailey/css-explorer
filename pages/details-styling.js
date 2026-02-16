export function render() {
  return `
    <style>
      .ds-accordion {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        interpolate-size: allow-keywords;
      }
      .ds-accordion details {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        overflow: hidden;
      }
      .ds-accordion summary {
        padding: 1rem 1.25rem;
        cursor: pointer;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
      }
      .ds-accordion summary::-webkit-details-marker {
        display: none;
      }
      .ds-accordion summary::after {
        content: '+';
        font-size: 1.2rem;
        font-weight: 300;
        color: var(--color-text-muted);
        transition: transform 0.3s ease;
      }
      .ds-accordion details[open] summary::after {
        content: '−';
      }
      .ds-accordion details::details-content {
        transition: height 0.3s ease;
        height: 0;
        overflow: hidden;
      }
      .ds-accordion details[open]::details-content {
        height: auto;
      }
      .ds-accordion .ds-content {
        padding: 0 1.25rem 1rem;
        font-size: 0.85rem;
        color: var(--color-text-muted);
        line-height: 1.7;
      }

      .ds-exclusive details {
        border-left: 3px solid var(--color-accent);
      }
      .ds-exclusive details[open] {
        background: oklch(0.7 0.18 250 / 0.08);
      }

      .ds-styled-accordion details {
        border-left: 3px solid transparent;
        transition: border-color 0.3s ease, background 0.3s ease;
      }
      .ds-styled-accordion details:nth-child(1) { --ds-hue: 250; }
      .ds-styled-accordion details:nth-child(2) { --ds-hue: 150; }
      .ds-styled-accordion details:nth-child(3) { --ds-hue: 30; }
      .ds-styled-accordion details:nth-child(4) { --ds-hue: 330; }
      .ds-styled-accordion details[open] {
        border-left-color: oklch(0.7 0.18 var(--ds-hue));
        background: oklch(0.7 0.18 var(--ds-hue) / 0.08);
      }
      .ds-styled-accordion details[open] summary {
        color: oklch(0.8 0.15 var(--ds-hue));
      }

      .ds-demo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .ds-demo-grid { grid-template-columns: 1fr; }
      }
      .ds-panel h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
    </style>

    <div class="page-header">
      <h1>::details-content &amp; Exclusive Accordion</h1>
      <p class="subtitle">Style and animate details elements, with exclusive open behavior.</p>
      <span class="badge">Baseline 2024</span>
    </div>

    <p class="info">
      The <code>::details-content</code> pseudo-element lets you target and animate the content inside <code>&lt;details&gt;</code>. Combined with the <code>name</code> attribute, multiple details elements can form an exclusive accordion — only one open at a time.
    </p>

    <div class="demo-section">
      <h2>Exclusive Accordion</h2>
      <p class="info">These share <code>name="faq"</code> — opening one closes the others automatically.</p>
      <div class="ds-accordion ds-exclusive">
        <details name="faq" open>
          <summary>What is an exclusive accordion?</summary>
          <div class="ds-content">
            When multiple <code>&lt;details&gt;</code> elements share the same <code>name</code> attribute, the browser ensures only one is open at a time. Opening one automatically closes any other with the same name. No JavaScript required.
          </div>
        </details>
        <details name="faq">
          <summary>How does ::details-content work?</summary>
          <div class="ds-content">
            The <code>::details-content</code> pseudo-element targets the content area of a details element (everything except the summary). You can use it to animate the opening/closing with CSS transitions on height, opacity, or other properties.
          </div>
        </details>
        <details name="faq">
          <summary>Do I still need JavaScript for accordions?</summary>
          <div class="ds-content">
            For basic exclusive accordion behavior, no. The <code>name</code> attribute handles mutual exclusion natively. You might still want JS for more complex behaviors like animations on close or programmatic control.
          </div>
        </details>
        <details name="faq">
          <summary>What about accessibility?</summary>
          <div class="ds-content">
            Native <code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> elements are fully accessible out of the box. Screen readers announce them as expandable sections, and they work with keyboard navigation. This is a major advantage over custom accordion implementations.
          </div>
        </details>
      </div>
    </div>

    <div class="demo-section">
      <h2>Styled Accordion</h2>
      <p class="info">Each panel gets a unique color accent using custom properties.</p>
      <div class="ds-accordion ds-styled-accordion">
        <details>
          <summary>Container Queries</summary>
          <div class="ds-content">Style components based on their container size, not the viewport. This fundamentally changes how we think about responsive component design.</div>
        </details>
        <details>
          <summary>CSS Nesting</summary>
          <div class="ds-content">Native nesting in CSS eliminates the need for preprocessors like Sass for this common pattern. Write more organized, readable stylesheets directly.</div>
        </details>
        <details>
          <summary>Anchor Positioning</summary>
          <div class="ds-content">Position tooltips, dropdowns, and popovers relative to other elements without JavaScript calculations. The browser handles repositioning automatically.</div>
        </details>
        <details>
          <summary>View Transitions</summary>
          <div class="ds-content">Create smooth animated transitions between DOM states or even between pages. Previously required complex JavaScript animation libraries.</div>
        </details>
      </div>
    </div>

    <div class="demo-section">
      <h2>Independent vs. Exclusive</h2>
      <div class="ds-demo-grid">
        <div class="ds-panel">
          <h3>Independent (no name)</h3>
          <div class="ds-accordion">
            <details>
              <summary>Panel A</summary>
              <div class="ds-content">Can be open alongside other panels.</div>
            </details>
            <details>
              <summary>Panel B</summary>
              <div class="ds-content">Multiple panels can be open simultaneously.</div>
            </details>
            <details>
              <summary>Panel C</summary>
              <div class="ds-content">Try opening all three at once.</div>
            </details>
          </div>
        </div>
        <div class="ds-panel">
          <h3>Exclusive (name="ex")</h3>
          <div class="ds-accordion ds-exclusive">
            <details name="ex">
              <summary>Panel A</summary>
              <div class="ds-content">Only one can be open at a time.</div>
            </details>
            <details name="ex">
              <summary>Panel B</summary>
              <div class="ds-content">Opening this closes Panel A.</div>
            </details>
            <details name="ex">
              <summary>Panel C</summary>
              <div class="ds-content">Opening this closes whichever was open.</div>
            </details>
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Exclusive accordion — only one open at a time */
&lt;details name="faq"&gt;
  &lt;summary&gt;Question 1&lt;/summary&gt;
  &lt;p&gt;Answer 1&lt;/p&gt;
&lt;/details&gt;
&lt;details name="faq"&gt;
  &lt;summary&gt;Question 2&lt;/summary&gt;
  &lt;p&gt;Answer 2&lt;/p&gt;
&lt;/details&gt;

/* Animate open/close with ::details-content */
.accordion {
  interpolate-size: allow-keywords;
}
details::details-content {
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}
details[open]::details-content {
  height: auto;
}</pre>
    </div>
  `;
}
