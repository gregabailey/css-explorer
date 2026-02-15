export function render() {
  return `
    <style>
      .pop-demo-row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-block-end: 1rem;
      }

      [popover] {
        background: var(--color-surface);
        color: var(--color-text);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 1.5rem;
        max-width: 320px;
        box-shadow: 0 8px 32px oklch(0 0 0 / 0.4);
      }

      [popover]::backdrop {
        background: oklch(0 0 0 / 0.4);
      }

      [popover] h3 {
        font-size: 1rem;
        margin-block-end: 0.5rem;
      }

      [popover] p {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        line-height: 1.5;
        margin-block-end: 0.75rem;
      }

      .pop-close {
        float: right;
        background: none;
        border: none;
        color: var(--color-text-muted);
        cursor: pointer;
        font-size: 1.2rem;
        padding: 0;
        line-height: 1;
      }

      .pop-close:hover {
        color: var(--color-text);
      }

      .pop-feature-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-block-start: 1rem;
      }

      .pop-feature {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }

      .pop-feature-check {
        color: oklch(0.65 0.2 150);
        font-weight: 700;
        flex-shrink: 0;
      }
    </style>

    <div class="page-header">
      <h1>Popover API</h1>
      <p class="subtitle">Declarative popovers with top-layer and light dismiss.</p>
      <span class="badge">Baseline 2024</span>
    </div>

    <p class="info">
      The HTML <code>popover</code> attribute gives you declarative overlays with built-in top-layer
      promotion, light-dismiss behavior, and focus management. No JavaScript required for basic use.
    </p>

    <div class="demo-section">
      <h2>Auto Popover (light dismiss)</h2>
      <p class="info">Click outside or press Escape to close.</p>
      <div class="pop-demo-row">
        <button class="btn" popovertarget="pop-auto">Open Auto Popover</button>
      </div>
      <div id="pop-auto" popover>
        <button class="pop-close" popovertarget="pop-auto" popovertargetaction="hide">&times;</button>
        <h3>Auto Popover</h3>
        <p>This popover uses <code>popover="auto"</code> (the default). It closes when you click outside it or press Escape. Only one auto popover can be open at a time.</p>
      </div>
    </div>

    <div class="demo-section">
      <h2>Manual Popover (explicit close)</h2>
      <p class="info">Must be closed with the button — clicking outside won't dismiss it.</p>
      <div class="pop-demo-row">
        <button class="btn" popovertarget="pop-manual">Open Manual Popover</button>
      </div>
      <div id="pop-manual" popover="manual">
        <button class="pop-close" popovertarget="pop-manual" popovertargetaction="hide">&times;</button>
        <h3>Manual Popover</h3>
        <p>This uses <code>popover="manual"</code>. It won't close on outside click or Escape. You must explicitly close it. Multiple manual popovers can coexist.</p>
      </div>
    </div>

    <div class="demo-section">
      <h2>Key Features</h2>
      <div class="pop-feature-list">
        <div class="pop-feature">
          <span class="pop-feature-check">✓</span>
          <span><strong>Top layer</strong> — renders above all other content, no z-index needed</span>
        </div>
        <div class="pop-feature">
          <span class="pop-feature-check">✓</span>
          <span><strong>Light dismiss</strong> — auto popovers close on outside click or Escape</span>
        </div>
        <div class="pop-feature">
          <span class="pop-feature-check">✓</span>
          <span><strong>Focus management</strong> — focus is trapped and restored automatically</span>
        </div>
        <div class="pop-feature">
          <span class="pop-feature-check">✓</span>
          <span><strong>No JavaScript</strong> — basic show/hide works with HTML attributes only</span>
        </div>
        <div class="pop-feature">
          <span class="pop-feature-check">✓</span>
          <span><strong>::backdrop</strong> — style the overlay behind the popover</span>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>&lt;button popovertarget="my-popover"&gt;Open&lt;/button&gt;

&lt;div id="my-popover" popover&gt;
  &lt;p&gt;I'm a popover!&lt;/p&gt;
&lt;/div&gt;

/* No JavaScript needed! */

/* Style the backdrop */
[popover]::backdrop {
  background: oklch(0 0 0 / 0.4);
}</pre>
    </div>
  `;
}
