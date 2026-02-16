export function render() {
  return `
    <style>
      /* ── Shared demo boxes ── */
      .txw-box {
        background: var(--color-surface-2);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 1rem;
        font-size: 0.85rem;
        line-height: 1.6;
        color: var(--color-text);
        overflow: visible;
      }
      .txw-box-label {
        display: block;
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--color-accent);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.5rem;
      }
      .txw-narrow {
        max-width: 220px;
      }

      /* ── Section 2: overflow-wrap vs word-break ── */
      .txw-wrap-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
      }
      @media (max-width: 800px) {
        .txw-wrap-grid { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 480px) {
        .txw-wrap-grid { grid-template-columns: 1fr; }
      }
      .txw-wrap-grid .txw-box {
        min-width: 0;
      }

      /* ── Interactive word-break demo ── */
      .txw-interactive-wrap {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
      }
      @media (max-width: 600px) {
        .txw-interactive-wrap { flex-direction: column; }
      }
      .txw-interactive-controls {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        flex-shrink: 0;
      }
      .txw-interactive-result {
        flex: 1;
        min-width: 0;
      }
      .txw-interactive-result .txw-box {
        max-width: 260px;
      }

      /* ── Section 3: white-space ── */
      .txw-ws-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
      }
      @media (max-width: 768px) {
        .txw-ws-grid { grid-template-columns: 1fr 1fr; }
      }
      @media (max-width: 480px) {
        .txw-ws-grid { grid-template-columns: 1fr; }
      }
      .txw-ws-grid .txw-box {
        min-width: 0;
        height: 140px;
        overflow: auto;
      }
      .txw-ws-sample {
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 0.78rem;
      }
      .txw-ws-desc {
        font-size: 0.72rem;
        color: var(--color-text-muted);
        margin-top: 0.5rem;
        font-style: italic;
      }

      /* ── Section 4: Truncation ── */
      .txw-trunc-pair {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .txw-trunc-pair { grid-template-columns: 1fr; }
      }
      .txw-trunc-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .txw-trunc-panel h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .txw-trunc-demo {
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 1rem;
        margin-bottom: 1rem;
        max-width: 300px;
      }
      .txw-trunc-text {
        font-size: 0.85rem;
        color: var(--color-text);
        line-height: 1.6;
      }
      .txw-trunc-text.single-line {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .txw-trunc-text.multi-line {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }

      .txw-toggle-row {
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        margin-bottom: 0.75rem;
      }
      .txw-toggle {
        padding: 0.3rem 0.7rem;
        border-radius: 4px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        color: var(--color-text-muted);
        font-size: 0.75rem;
        cursor: pointer;
        transition: all var(--transition);
      }
      .txw-toggle.active {
        background: var(--color-accent-subtle);
        border-color: var(--color-accent);
        color: var(--color-accent);
      }
      .txw-toggle.off {
        text-decoration: line-through;
        opacity: 0.5;
      }

      /* ── Section 5: Hyphens ── */
      .txw-hyphens-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
      }
      @media (max-width: 600px) {
        .txw-hyphens-grid { grid-template-columns: 1fr; }
      }
      .txw-hyphens-grid .txw-box {
        max-width: 180px;
      }
      .txw-hyphens-note {
        margin-top: 1rem;
        padding: 0.75rem 1rem;
        background: oklch(0.5 0.15 60 / 0.1);
        border-left: 3px solid oklch(0.7 0.15 60);
        border-radius: 0 var(--radius) var(--radius) 0;
        font-size: 0.82rem;
        color: var(--color-text-muted);
      }

      /* ── Section 6: Layout gotchas ── */
      .txw-layout-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 700px) {
        .txw-layout-grid { grid-template-columns: 1fr; }
      }
      .txw-layout-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .txw-layout-panel h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.75rem;
      }

      /* Label badges (reused from flex-scroll-sidebar) */
      .txw-label {
        display: inline-block;
        font-size: 0.7rem;
        font-weight: 600;
        padding: 0.15em 0.5em;
        border-radius: 4px;
        margin-bottom: 0.75rem;
      }
      .txw-label.broken {
        background: oklch(0.5 0.2 25 / 0.15);
        color: oklch(0.7 0.18 25);
      }
      .txw-label.fixed {
        background: oklch(0.5 0.2 150 / 0.15);
        color: oklch(0.7 0.18 150);
      }

      /* Flex demo inside layout gotchas */
      .txw-flex-broken {
        display: flex;
        gap: 1rem;
      }
      .txw-flex-broken .txw-flex-card {
        flex: 1;
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 0.75rem;
        font-size: 0.78rem;
        color: var(--color-text);
        line-height: 1.5;
      }
      .txw-flex-fixed {
        display: flex;
        gap: 1rem;
      }
      .txw-flex-fixed .txw-flex-card {
        flex: 1;
        min-width: 0;
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 0.75rem;
        font-size: 0.78rem;
        color: var(--color-text);
        line-height: 1.5;
        overflow-wrap: break-word;
      }

      /* Grid demo inside layout gotchas */
      .txw-grid-broken {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      .txw-grid-broken .txw-grid-cell {
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 0.75rem;
        font-size: 0.78rem;
        color: var(--color-text);
        line-height: 1.5;
      }
      .txw-grid-fixed {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 1rem;
      }
      .txw-grid-fixed .txw-grid-cell {
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 0.75rem;
        font-size: 0.78rem;
        color: var(--color-text);
        line-height: 1.5;
        overflow-wrap: break-word;
      }

      /* ── Section 7: Quick reference ── */
      .txw-ref-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.82rem;
      }
      .txw-ref-table th {
        text-align: left;
        padding: 0.6rem 0.75rem;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-text-muted);
        border-bottom: 2px solid var(--color-border);
      }
      .txw-ref-table td {
        padding: 0.6rem 0.75rem;
        border-bottom: 1px solid var(--color-border);
        color: var(--color-text);
      }
      .txw-ref-table td code {
        font-size: 0.78rem;
      }
      .txw-ref-table tr:last-child td {
        border-bottom: none;
      }

      /* Compare code panels */
      .txw-compare-code {
        font-family: monospace;
        font-size: 0.78rem;
        line-height: 1.7;
        white-space: pre-wrap;
        color: var(--color-text-muted);
      }
      .txw-highlight {
        color: var(--color-accent);
      }
    </style>

    <div class="page-header">
      <h1>Text Wrapping & Overflow</h1>
      <p class="subtitle">Everything CSS offers for controlling how text wraps, breaks, truncates, and overflows — in block, flex, and grid layouts.</p>
      <span class="badge">Pattern</span>
    </div>

    <p class="info">
      Text wrapping in CSS involves at least five properties that interact in non-obvious ways:
      <code>overflow-wrap</code>, <code>word-break</code>, <code>white-space</code>,
      <code>text-overflow</code>, and <code>hyphens</code>. On top of that, flexbox and grid
      layouts add their own wrinkle — <code>min-width: auto</code> can prevent text from wrapping
      at all. This page covers every property, their differences, and the layout gotchas.
    </p>

    <!-- ── Section 2: overflow-wrap vs word-break ── -->
    <div class="demo-section">
      <h2>overflow-wrap vs word-break</h2>
      <p class="info">
        These two properties both deal with breaking long words, but they work differently.
        <code>overflow-wrap: break-word</code> only breaks when a word is too long for its container.
        <code>word-break: break-all</code> breaks between <em>any</em> two characters, even short words.
      </p>
      <div class="txw-wrap-grid">
        <div class="txw-box txw-narrow">
          <span class="txw-box-label">Default (overflows)</span>
          <div style="overflow-wrap: normal; word-break: normal;">https://example.com/very-long-path/that-keeps-going/and-never-stops</div>
        </div>
        <div class="txw-box txw-narrow">
          <span class="txw-box-label">overflow-wrap: break-word</span>
          <div style="overflow-wrap: break-word;">https://example.com/very-long-path/that-keeps-going/and-never-stops</div>
        </div>
        <div class="txw-box txw-narrow">
          <span class="txw-box-label">word-break: break-all</span>
          <div style="word-break: break-all;">https://example.com/very-long-path/that-keeps-going/and-never-stops</div>
        </div>
        <div class="txw-box txw-narrow">
          <span class="txw-box-label">overflow-wrap: anywhere</span>
          <div style="overflow-wrap: anywhere;">https://example.com/very-long-path/that-keeps-going/and-never-stops</div>
        </div>
      </div>
    </div>

    <!-- ── Interactive word-break demo ── -->
    <div class="demo-section">
      <h2>Interactive — Try Each Property</h2>
      <p class="info">Toggle different wrapping strategies on the same long text to see how each one breaks differently.</p>
      <div class="txw-interactive-wrap">
        <div class="txw-interactive-controls" id="txw-wrap-controls">
          <button class="btn active" data-prop="none">Default (no wrapping fix)</button>
          <button class="btn" data-prop="overflow-wrap: break-word">overflow-wrap: break-word</button>
          <button class="btn" data-prop="overflow-wrap: anywhere">overflow-wrap: anywhere</button>
          <button class="btn" data-prop="word-break: break-all">word-break: break-all</button>
        </div>
        <div class="txw-interactive-result">
          <div class="txw-box" id="txw-wrap-result">Supercalifragilisticexpialidocious and https://example.com/api/v2/users/authentication/oauth2/callback?redirect_uri=https://myapp.test are both unbreakable by default.</div>
        </div>
      </div>
    </div>

    <!-- ── Section 3: white-space ── -->
    <div class="demo-section">
      <h2>white-space Modes</h2>
      <p class="info">
        <code>white-space</code> controls two things at once: whether whitespace is collapsed and whether text wraps.
        All six cards below use the same source text (with spaces, tabs, and newlines).
      </p>
      <div class="txw-ws-grid" id="txw-ws-grid">
        <div class="txw-box">
          <span class="txw-box-label">normal</span>
          <div class="txw-ws-sample" style="white-space: normal;">Hello    world.
  This has    extra   spaces
and newlines.   Tabs	too.</div>
          <div class="txw-ws-desc">Collapse whitespace, wrap at edge</div>
        </div>
        <div class="txw-box">
          <span class="txw-box-label">nowrap</span>
          <div class="txw-ws-sample" style="white-space: nowrap;">Hello    world.
  This has    extra   spaces
and newlines.   Tabs	too.</div>
          <div class="txw-ws-desc">Collapse whitespace, never wrap</div>
        </div>
        <div class="txw-box">
          <span class="txw-box-label">pre</span>
          <div class="txw-ws-sample" style="white-space: pre;">Hello    world.
  This has    extra   spaces
and newlines.   Tabs	too.</div>
          <div class="txw-ws-desc">Preserve whitespace, never wrap</div>
        </div>
        <div class="txw-box">
          <span class="txw-box-label">pre-wrap</span>
          <div class="txw-ws-sample" style="white-space: pre-wrap;">Hello    world.
  This has    extra   spaces
and newlines.   Tabs	too.</div>
          <div class="txw-ws-desc">Preserve whitespace, wrap at edge</div>
        </div>
        <div class="txw-box">
          <span class="txw-box-label">pre-line</span>
          <div class="txw-ws-sample" style="white-space: pre-line;">Hello    world.
  This has    extra   spaces
and newlines.   Tabs	too.</div>
          <div class="txw-ws-desc">Collapse spaces (keep newlines), wrap</div>
        </div>
        <div class="txw-box">
          <span class="txw-box-label">break-spaces</span>
          <div class="txw-ws-sample" style="white-space: break-spaces;">Hello    world.
  This has    extra   spaces
and newlines.   Tabs	too.</div>
          <div class="txw-ws-desc">Like pre-wrap, trailing spaces can wrap</div>
        </div>
      </div>
    </div>

    <!-- ── Section 4: Truncation ── -->
    <div class="demo-section">
      <h2>Truncation Patterns</h2>
      <p class="info">Two essential patterns: single-line ellipsis (requires three properties working together) and multi-line clamping.</p>
      <div class="txw-trunc-pair">
        <div class="txw-trunc-panel">
          <h3>Single-line ellipsis</h3>
          <p class="info" style="font-size: 0.78rem; margin-bottom: 0.75rem;">All three properties are required. Toggle any one off to see it break.</p>
          <div class="txw-toggle-row" id="txw-ellipsis-toggles">
            <button class="txw-toggle active" data-prop="overflow">overflow: hidden</button>
            <button class="txw-toggle active" data-prop="white-space">white-space: nowrap</button>
            <button class="txw-toggle active" data-prop="text-overflow">text-overflow: ellipsis</button>
          </div>
          <div class="txw-trunc-demo">
            <div class="txw-trunc-text single-line" id="txw-ellipsis-demo">This is a long sentence that should be truncated with an ellipsis when it overflows the container width.</div>
          </div>
        </div>
        <div class="txw-trunc-panel">
          <h3>Multi-line clamp</h3>
          <p class="info" style="font-size: 0.78rem; margin-bottom: 0.75rem;">Choose how many lines to show before truncating.</p>
          <div class="txw-toggle-row" id="txw-clamp-controls">
            <button class="txw-toggle" data-lines="1">1 line</button>
            <button class="txw-toggle" data-lines="2">2 lines</button>
            <button class="txw-toggle active" data-lines="3">3 lines</button>
            <button class="txw-toggle" data-lines="4">4 lines</button>
            <button class="txw-toggle" data-lines="5">5 lines</button>
          </div>
          <div class="txw-trunc-demo">
            <div class="txw-trunc-text multi-line" id="txw-clamp-demo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Section 5: Hyphens ── -->
    <div class="demo-section">
      <h2>hyphens</h2>
      <p class="info"><code>hyphens: auto</code> lets the browser insert hyphens at syllable breaks — but only if the <code>lang</code> attribute is set on the element or an ancestor.</p>
      <div class="txw-hyphens-grid">
        <div class="txw-box" style="max-width: 180px;">
          <span class="txw-box-label">hyphens: none</span>
          <div lang="en" style="hyphens: none;">Internationalization and accessibility are fundamental responsibilities for developers.</div>
        </div>
        <div class="txw-box" style="max-width: 180px;">
          <span class="txw-box-label">hyphens: auto + lang="en"</span>
          <div lang="en" style="hyphens: auto;">Internationalization and accessibility are fundamental responsibilities for developers.</div>
        </div>
        <div class="txw-box" style="max-width: 180px;">
          <span class="txw-box-label">hyphens: auto (no lang)</span>
          <div style="hyphens: auto;">Internationalization and accessibility are fundamental responsibilities for developers.</div>
        </div>
      </div>
      <div class="txw-hyphens-note">
        <strong>Gotcha:</strong> The third box has <code>hyphens: auto</code> but no <code>lang</code> attribute — the browser doesn't know which language dictionary to use, so no hyphens appear. Always set <code>lang</code> on your <code>&lt;html&gt;</code> element.
      </div>
    </div>

    <!-- ── Section 6: Layout gotchas ── -->
    <div class="demo-section">
      <h2>Layout Gotchas — Flexbox & Grid</h2>
      <p class="info">
        Flex and grid items default to <code>min-width: auto</code>, which means they refuse to shrink
        below their content's minimum width. A long word or URL will push the item wider than its track,
        and <code>overflow-wrap</code> can't help because the item never actually overflows — it just grows.
        The fix: <code>min-width: 0</code> on flex/grid items, or <code>minmax(0, 1fr)</code> for grid tracks.
      </p>

      <h3 style="font-size: 0.85rem; margin-bottom: 1rem; margin-top: 1.5rem;">Flexbox</h3>
      <div class="txw-layout-grid">
        <div>
          <span class="txw-label broken">Broken</span>
          <div class="txw-layout-panel">
            <div class="txw-flex-broken">
              <div class="txw-flex-card">Normal short text.</div>
              <div class="txw-flex-card">https://example.com/api/v2/users/very-long-endpoint-path/callback</div>
            </div>
            <div class="txw-compare-code" style="margin-top: 0.75rem;">.card {
  flex: 1;
  <span class="txw-highlight">/* min-width defaults to auto */</span>
}</div>
          </div>
        </div>
        <div>
          <span class="txw-label fixed">Fixed</span>
          <div class="txw-layout-panel">
            <div class="txw-flex-fixed">
              <div class="txw-flex-card">Normal short text.</div>
              <div class="txw-flex-card">https://example.com/api/v2/users/very-long-endpoint-path/callback</div>
            </div>
            <div class="txw-compare-code" style="margin-top: 0.75rem;">.card {
  flex: 1;
  <span class="txw-highlight">min-width: 0;</span>
  <span class="txw-highlight">overflow-wrap: break-word;</span>
}</div>
          </div>
        </div>
      </div>

      <h3 style="font-size: 0.85rem; margin-bottom: 1rem; margin-top: 1.5rem;">Grid</h3>
      <div class="txw-layout-grid">
        <div>
          <span class="txw-label broken">Broken</span>
          <div class="txw-layout-panel">
            <div class="txw-grid-broken">
              <div class="txw-grid-cell">Normal text.</div>
              <div class="txw-grid-cell">https://example.com/api/v2/users/very-long-endpoint-path/callback</div>
            </div>
            <div class="txw-compare-code" style="margin-top: 0.75rem;">.grid {
  grid-template-columns: <span class="txw-highlight">1fr 1fr</span>;
  <span class="txw-highlight">/* items have min-width: auto */</span>
}</div>
          </div>
        </div>
        <div>
          <span class="txw-label fixed">Fixed</span>
          <div class="txw-layout-panel">
            <div class="txw-grid-fixed">
              <div class="txw-grid-cell">Normal text.</div>
              <div class="txw-grid-cell">https://example.com/api/v2/users/very-long-endpoint-path/callback</div>
            </div>
            <div class="txw-compare-code" style="margin-top: 0.75rem;">.grid {
  grid-template-columns: <span class="txw-highlight">minmax(0, 1fr) minmax(0, 1fr)</span>;
}
.cell {
  <span class="txw-highlight">overflow-wrap: break-word;</span>
}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Section 7: Quick reference ── -->
    <div class="demo-section">
      <h2>Quick Reference</h2>
      <table class="txw-ref-table">
        <thead>
          <tr>
            <th>Goal</th>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Break long words when needed</td>
            <td><code>overflow-wrap</code></td>
            <td><code>break-word</code></td>
          </tr>
          <tr>
            <td>Break between any characters</td>
            <td><code>word-break</code></td>
            <td><code>break-all</code></td>
          </tr>
          <tr>
            <td>Prevent all wrapping</td>
            <td><code>white-space</code></td>
            <td><code>nowrap</code></td>
          </tr>
          <tr>
            <td>Single-line ellipsis</td>
            <td><code>text-overflow</code> + <code>overflow</code> + <code>white-space</code></td>
            <td><code>ellipsis</code> + <code>hidden</code> + <code>nowrap</code></td>
          </tr>
          <tr>
            <td>Multi-line truncation</td>
            <td><code>-webkit-line-clamp</code> + <code>display</code></td>
            <td>N lines + <code>-webkit-box</code></td>
          </tr>
          <tr>
            <td>Auto-hyphenate</td>
            <td><code>hyphens</code></td>
            <td><code>auto</code> (requires <code>lang</code> attr)</td>
          </tr>
          <tr>
            <td>Fix flex/grid overflow</td>
            <td><code>min-width</code></td>
            <td><code>0</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ── Section 8: Code block ── -->
    <div class="code-block">
      <pre>/* Break long words gracefully */
.text {
  overflow-wrap: break-word;
}

/* Single-line truncation (all 3 required) */
.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* Multi-line truncation */
.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

/* Auto-hyphenation (requires lang attr on HTML) */
.hyphenate {
  hyphens: auto;
}

/* Fix flex items refusing to shrink */
.flex-child {
  min-width: 0;
  overflow-wrap: break-word;
}

/* Fix grid items — use minmax(0, 1fr) */
.grid {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}
.grid-child {
  overflow-wrap: break-word;
}</pre>
    </div>
  `;
}

export function init() {
  // ── Interactive word-break toggle ──
  const wrapControls = document.getElementById('txw-wrap-controls');
  const wrapResult = document.getElementById('txw-wrap-result');
  if (wrapControls && wrapResult) {
    wrapControls.addEventListener('click', e => {
      const btn = e.target.closest('.btn');
      if (!btn) return;
      wrapControls.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const prop = btn.dataset.prop;
      wrapResult.style.overflowWrap = '';
      wrapResult.style.wordBreak = '';
      if (prop === 'overflow-wrap: break-word') {
        wrapResult.style.overflowWrap = 'break-word';
      } else if (prop === 'overflow-wrap: anywhere') {
        wrapResult.style.overflowWrap = 'anywhere';
      } else if (prop === 'word-break: break-all') {
        wrapResult.style.wordBreak = 'break-all';
      }
    });
  }

  // ── Single-line ellipsis toggles ──
  const ellipsisToggles = document.getElementById('txw-ellipsis-toggles');
  const ellipsisDemo = document.getElementById('txw-ellipsis-demo');
  if (ellipsisToggles && ellipsisDemo) {
    const state = { overflow: true, 'white-space': true, 'text-overflow': true };

    function applyEllipsis() {
      ellipsisDemo.style.overflow = state.overflow ? 'hidden' : 'visible';
      ellipsisDemo.style.whiteSpace = state['white-space'] ? 'nowrap' : 'normal';
      ellipsisDemo.style.textOverflow = state['text-overflow'] ? 'ellipsis' : 'clip';
    }

    ellipsisToggles.addEventListener('click', e => {
      const btn = e.target.closest('.txw-toggle');
      if (!btn) return;
      const prop = btn.dataset.prop;
      state[prop] = !state[prop];
      btn.classList.toggle('active', state[prop]);
      btn.classList.toggle('off', !state[prop]);
      applyEllipsis();
    });
  }

  // ── Multi-line clamp controls ──
  const clampControls = document.getElementById('txw-clamp-controls');
  const clampDemo = document.getElementById('txw-clamp-demo');
  if (clampControls && clampDemo) {
    clampControls.addEventListener('click', e => {
      const btn = e.target.closest('.txw-toggle');
      if (!btn) return;
      clampControls.querySelectorAll('.txw-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      clampDemo.style.webkitLineClamp = btn.dataset.lines;
    });
  }
}
