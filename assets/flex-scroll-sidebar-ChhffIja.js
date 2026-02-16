function l(){return`
    <style>
      .fss-demo-wrap {
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        overflow: hidden;
        height: 420px;
        display: flex;
        flex-direction: column;
      }

      /* Shared layout pieces */
      .fss-header {
        background: oklch(0.25 0.02 260);
        padding: 0.6rem 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--color-text);
        border-bottom: 1px solid var(--color-border);
        flex-shrink: 0;
      }
      .fss-footer {
        background: oklch(0.25 0.02 260);
        padding: 0.5rem 1rem;
        font-size: 0.7rem;
        color: var(--color-text-muted);
        border-top: 1px solid var(--color-border);
        flex-shrink: 0;
      }
      .fss-main {
        flex: 1;
        display: flex;
        overflow: hidden;
      }
      .fss-sidebar {
        width: 160px;
        flex-shrink: 0;
        background: oklch(0.2 0.01 260);
        border-right: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
      }
      .fss-sidebar-header {
        padding: 0.6rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-accent);
        border-bottom: 1px solid var(--color-border);
        flex-shrink: 0;
      }
      .fss-sidebar-list {
        flex: 1;
        padding: 0.25rem 0;
      }
      .fss-sidebar-item {
        padding: 0.35rem 0.75rem;
        font-size: 0.72rem;
        color: var(--color-text-muted);
        white-space: nowrap;
      }
      .fss-sidebar-item:nth-child(3) {
        color: var(--color-accent);
        background: var(--color-accent-subtle);
      }
      .fss-content {
        flex: 1;
        padding: 1rem;
        font-size: 0.75rem;
        color: var(--color-text-muted);
        line-height: 1.6;
      }

      /* Broken version: sidebar list overflows */
      .fss-broken .fss-sidebar-list {
        overflow: visible;
      }

      /* Fixed version: min-height: 0 + overflow-y: auto */
      .fss-fixed .fss-sidebar-list {
        min-height: 0;
        overflow-y: auto;
      }
      .fss-fixed .fss-content {
        min-height: 0;
        overflow-y: auto;
      }

      /* Also need min-height: 0 on .fss-main for the fix to work */
      .fss-fixed .fss-main {
        min-height: 0;
      }

      /* Compare layout */
      .fss-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 700px) {
        .fss-compare { grid-template-columns: 1fr; }
      }
      .fss-compare-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .fss-compare-panel h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .fss-compare-code {
        font-family: monospace;
        font-size: 0.78rem;
        line-height: 1.7;
        white-space: pre-wrap;
        color: var(--color-text-muted);
      }
      .fss-highlight {
        color: var(--color-accent);
      }

      /* Label badges */
      .fss-label {
        display: inline-block;
        font-size: 0.7rem;
        font-weight: 600;
        padding: 0.15em 0.5em;
        border-radius: 4px;
        margin-bottom: 0.75rem;
      }
      .fss-label.broken {
        background: oklch(0.5 0.2 25 / 0.15);
        color: oklch(0.7 0.18 25);
      }
      .fss-label.fixed {
        background: oklch(0.5 0.2 150 / 0.15);
        color: oklch(0.7 0.18 150);
      }

      .fss-explanation {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
        margin-bottom: 1.5rem;
      }
      .fss-explanation h3 {
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
      }
      .fss-explanation p {
        font-size: 0.82rem;
        color: var(--color-text-muted);
        line-height: 1.6;
      }

      .fss-steps {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 1rem;
      }
      .fss-step {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
      }
      .fss-step-num {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: var(--color-accent-subtle);
        color: var(--color-accent);
        font-size: 0.75rem;
        font-weight: 700;
        display: grid;
        place-items: center;
      }
      .fss-step-text {
        font-size: 0.82rem;
        color: var(--color-text-muted);
        line-height: 1.5;
      }
      .fss-step-text code {
        color: var(--color-accent);
        font-size: 0.78rem;
      }
    </style>

    <div class="page-header">
      <h1>Scrollable Flex Sidebar</h1>
      <p class="subtitle">A fixed sidebar header with a scrollable list inside a header/main/footer layout — and the <code>min-height: 0</code> trick that makes it work.</p>
      <span class="badge">Flexbox Pattern</span>
    </div>

    <p class="info">
      Flex items in a column layout default to <code>min-height: auto</code>, which means they
      refuse to shrink smaller than their content. The fix: add <code>min-height: 0</code> to
      <strong>every flex item at every level</strong> between the height-constrained container
      and the element with <code>overflow-y: auto</code>. Miss one level and the whole thing
      breaks. In this layout: <code>.app</code> (fixed height) → <code>.main</code> (needs
      <code>min-height: 0</code>) → <code>.sidebar</code> → <code>.sidebar-list</code> (needs
      <code>min-height: 0</code> + <code>overflow-y: auto</code>).
    </p>

    <div class="demo-section">
      <h2>Broken vs Fixed</h2>
      <p class="info">Both layouts are identical except for two CSS properties. The broken version overflows its container; the fixed version scrolls.</p>
      <div class="fss-compare">
        <div>
          <span class="fss-label broken">Broken</span>
          <div class="fss-demo-wrap fss-broken" id="fss-broken"></div>
        </div>
        <div>
          <span class="fss-label fixed">Fixed</span>
          <div class="fss-demo-wrap fss-fixed" id="fss-fixed"></div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Why It Breaks</h2>
      <div class="fss-explanation">
        <p>
          In a flex column layout, each flex child has an implicit <code>min-height: auto</code>.
          This prevents it from shrinking below the size of its content. When you set
          <code>flex: 1</code> on the main area, it <em>wants</em> to shrink to fit the container —
          but <code>min-height: auto</code> says "no, I must be at least as tall as my children."
          The content overflows instead of scrolling.
        </p>
        <div class="fss-steps">
          <div class="fss-step">
            <div class="fss-step-num">1</div>
            <div class="fss-step-text"><code>.app</code> has a fixed height (<code>100vh</code>) and is a flex column. Its children are <code>.header</code>, <code>.main</code>, and <code>.footer</code>.</div>
          </div>
          <div class="fss-step">
            <div class="fss-step-num">2</div>
            <div class="fss-step-text"><code>.main</code> uses <code>flex: 1</code> to fill the space between header and footer. It's a flex row containing <code>.sidebar</code> and <code>.content</code>.</div>
          </div>
          <div class="fss-step">
            <div class="fss-step-num">3</div>
            <div class="fss-step-text"><code>.sidebar</code> is a flex column. Its children are <code>.sidebar-header</code> (fixed) and <code>.sidebar-list</code> (<code>flex: 1</code>).</div>
          </div>
          <div class="fss-step">
            <div class="fss-step-num">4</div>
            <div class="fss-step-text"><code>.main</code> has implicit <code>min-height: auto</code>, so it grows to fit its children instead of staying within <code>.app</code>. Same for <code>.sidebar-list</code> — it won't shrink below its 20 items, so <code>overflow-y: auto</code> has no effect.</div>
          </div>
          <div class="fss-step">
            <div class="fss-step-num">5</div>
            <div class="fss-step-text"><strong>Fix:</strong> Add <code>min-height: 0</code> at every level between the constrained container and the scrollable element. Here that's <code>.main</code> (so it stays inside <code>.app</code>) and <code>.sidebar-list</code> (so it stays inside <code>.sidebar</code>). Skip either one and it breaks. Finally, <code>overflow-y: auto</code> on <code>.sidebar-list</code> enables scrolling.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Before &amp; After</h2>
      <div class="fss-compare">
        <div class="fss-compare-panel">
          <h3>Broken — content overflows</h3>
          <div class="fss-compare-code">.main {
  flex: 1;
  display: flex;
  <span class="fss-highlight">/* min-height defaults to auto */</span>
}

.sidebar-list {
  flex: 1;
  <span class="fss-highlight">/* overflow doesn't work because
     min-height: auto prevents
     shrinking below content */</span>
  overflow-y: auto;
}</div>
        </div>
        <div class="fss-compare-panel">
          <h3>Fixed — sidebar scrolls</h3>
          <div class="fss-compare-code">.main {
  flex: 1;
  display: flex;
  <span class="fss-highlight">min-height: 0;</span>
}

.sidebar-list {
  flex: 1;
  <span class="fss-highlight">min-height: 0;</span>
  overflow-y: auto;
}</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Full pattern: header / main / footer with scrollable sidebar */
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header, .footer { flex-shrink: 0; }

.main {
  flex: 1;
  display: flex;
  min-height: 0; /* Key: allow main to shrink */
}

.sidebar {
  width: 250px;
  display: flex;
  flex-direction: column;
}

.sidebar-header { flex-shrink: 0; }

.sidebar-list {
  flex: 1;
  min-height: 0;    /* Key: allow list to shrink */
  overflow-y: auto;  /* Now scrolling works */
}</pre>
    </div>
  `}function n(){const i=["Dashboard","Analytics","Reports","Users","Settings","Billing","Integrations","API Keys","Webhooks","Logs","Alerts","Team","Permissions","Audit Trail","Support","Docs","Changelog","Status","Feedback","Account"];function e(t){const a=i.map((d,r)=>`<div class="fss-sidebar-item">${d}</div>`).join("");t.innerHTML=`
      <div class="fss-header">My App</div>
      <div class="fss-main">
        <div class="fss-sidebar">
          <div class="fss-sidebar-header">Navigation</div>
          <div class="fss-sidebar-list">${a}</div>
        </div>
        <div class="fss-content">
          <p>This is the main content area. The sidebar on the left has a fixed "Navigation" header and a list of items below it.</p>
          <br>
          <p>In the broken version, the sidebar list overflows past the footer because flex items default to <code>min-height: auto</code> — they refuse to shrink below their content size.</p>
          <br>
          <p>In the fixed version, adding <code>min-height: 0</code> to the flex items in the chain allows them to shrink, and <code>overflow-y: auto</code> enables scrolling.</p>
        </div>
      </div>
      <div class="fss-footer">Footer — always pinned to bottom</div>
    `}const s=document.getElementById("fss-broken"),o=document.getElementById("fss-fixed");s&&e(s),o&&e(o)}export{n as init,l as render};
