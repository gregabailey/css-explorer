function d(){return`
    <style>
      .sb-demo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .sb-demo-grid { grid-template-columns: 1fr; }
      }
      .sb-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .sb-panel h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      .sb-scroll-box {
        height: 180px;
        overflow-y: auto;
        padding: 0.75rem;
        border-radius: var(--radius);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        scrollbar-width: var(--sb-width, auto);
        scrollbar-color: var(--sb-thumb, var(--color-accent)) var(--sb-track, transparent);
      }
      .sb-scroll-box.thin {
        scrollbar-width: thin;
      }
      .sb-scroll-box.none {
        scrollbar-width: none;
      }
      .sb-filler {
        font-size: 0.85rem;
        line-height: 1.8;
        color: var(--color-text-muted);
      }

      .sb-color-controls {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        align-items: center;
      }
      .sb-color-controls label {
        font-size: 0.8rem;
        color: var(--color-text-muted);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .sb-color-controls input[type="color"] {
        width: 36px;
        height: 28px;
        border: 2px solid var(--color-border);
        border-radius: 4px;
        cursor: pointer;
        background: transparent;
        padding: 1px;
      }

      .sb-gutter-demo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      @media (max-width: 600px) {
        .sb-gutter-demo { grid-template-columns: 1fr; }
      }
      .sb-gutter-box {
        height: 150px;
        overflow-y: auto;
        padding: 0.75rem;
        border-radius: var(--radius);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        scrollbar-width: thin;
        scrollbar-color: var(--color-border) transparent;
      }
      .sb-gutter-stable {
        scrollbar-gutter: stable;
      }
      .sb-gutter-box h4 {
        font-size: 0.8rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.5rem;
      }

      .sb-width-demo {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
      }
      @media (max-width: 768px) {
        .sb-width-demo { grid-template-columns: 1fr; }
      }
      .sb-width-card {
        text-align: center;
      }
      .sb-width-card .sb-label {
        font-size: 0.8rem;
        color: var(--color-text-muted);
        margin-top: 0.5rem;
      }
    </style>

    <div class="page-header">
      <h1>Scrollbar Styling</h1>
      <p class="subtitle"><code>scrollbar-color</code>, <code>scrollbar-width</code>, and <code>scrollbar-gutter</code>.</p>
      <span class="badge">Baseline 2024–2025</span>
    </div>

    <p class="info">
      Standard CSS properties for styling scrollbars across browsers. <code>scrollbar-color</code> sets thumb and track colors, <code>scrollbar-width</code> controls thickness, and <code>scrollbar-gutter</code> reserves space to prevent layout shifts.
    </p>

    <div class="demo-section">
      <h2>Custom Colors</h2>
      <p class="info">Pick thumb and track colors for the scrollbar below.</p>
      <div class="sb-color-controls">
        <label>Thumb: <input type="color" id="sb-thumb-picker" value="#7c6ef5"></label>
        <label>Track: <input type="color" id="sb-track-picker" value="#1a1d27"></label>
      </div>
      <div class="sb-scroll-box" id="sb-color-box">
        <div class="sb-filler">
          Scroll down to see the styled scrollbar.<br><br>
          The scrollbar-color property takes two values: the thumb color and the track color.<br><br>
          This is a standard CSS property that works across all modern browsers, replacing vendor-specific pseudo-elements like ::-webkit-scrollbar.<br><br>
          Keep scrolling...<br><br>
          The colors update in real-time as you pick new ones above.<br><br>
          Much simpler than the old webkit approach which required multiple pseudo-elements.<br><br>
          End of content.
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Scrollbar Width</h2>
      <div class="sb-width-demo">
        <div class="sb-width-card">
          <div class="sb-scroll-box" style="height: 120px;">
            <div class="sb-filler">Default width scrollbar. This is the browser's standard scrollbar size. Scroll to see it.<br><br>More content...<br><br>And more...<br><br>End.</div>
          </div>
          <div class="sb-label"><code>auto</code> (default)</div>
        </div>
        <div class="sb-width-card">
          <div class="sb-scroll-box thin" style="height: 120px;">
            <div class="sb-filler">Thin scrollbar. Takes up less space but still visible and usable. Good for sidebars and panels.<br><br>More content...<br><br>And more...<br><br>End.</div>
          </div>
          <div class="sb-label"><code>thin</code></div>
        </div>
        <div class="sb-width-card">
          <div class="sb-scroll-box none" style="height: 120px;">
            <div class="sb-filler">Hidden scrollbar. Content is still scrollable! The scrollbar is just not visible. Use with care for accessibility.<br><br>More content...<br><br>And more...<br><br>End.</div>
          </div>
          <div class="sb-label"><code>none</code> (still scrollable)</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>scrollbar-gutter: stable</h2>
      <p class="info">Reserves space for the scrollbar so content doesn't shift when overflow changes. Click to toggle content length.</p>
      <div class="sb-gutter-demo">
        <div>
          <div class="sb-gutter-box" id="sb-no-gutter" style="height: 120px;">
            <h4>No gutter (default)</h4>
            <p class="sb-filler" id="sb-no-gutter-text">Short content. Click "Toggle" to add more.</p>
          </div>
        </div>
        <div>
          <div class="sb-gutter-box sb-gutter-stable" id="sb-with-gutter" style="height: 120px;">
            <h4>scrollbar-gutter: stable</h4>
            <p class="sb-filler" id="sb-with-gutter-text">Short content. Click "Toggle" to add more.</p>
          </div>
        </div>
      </div>
      <div style="margin-top: 0.75rem;">
        <button class="btn" id="sb-gutter-toggle">Toggle Content</button>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Scrollbar colors */
.container {
  scrollbar-color: #7c6ef5 transparent;
}

/* Thin scrollbar */
.sidebar {
  scrollbar-width: thin;
}

/* Hidden scrollbar (still scrollable) */
.carousel {
  scrollbar-width: none;
}

/* Prevent layout shift */
.content {
  scrollbar-gutter: stable;
}</pre>
    </div>
  `}function b(){const t=document.getElementById("sb-thumb-picker"),o=document.getElementById("sb-track-picker"),s=document.getElementById("sb-color-box"),l=document.getElementById("sb-gutter-toggle");if(t&&o&&s){let r=function(){s.style.scrollbarColor=`${t.value} ${o.value}`};t.addEventListener("input",r),o.addEventListener("input",r)}const a='Short content. Click "Toggle" to remove extra content.<br><br>Additional content that causes overflow.<br><br>Notice how the content shifts in the left box when the scrollbar appears, but stays stable in the right box.<br><br>More filler...<br><br>Even more...<br><br>End.',i='Short content. Click "Toggle" to add more.';let e=!1;l&&l.addEventListener("click",()=>{e=!e;const r=document.getElementById("sb-no-gutter-text"),c=document.getElementById("sb-with-gutter-text");r&&(r.innerHTML=e?a:i),c&&(c.innerHTML=e?a:i)})}export{b as init,d as render};
