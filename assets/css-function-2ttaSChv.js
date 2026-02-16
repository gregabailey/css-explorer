function e(){return`
    <style>
      .cf-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
      }
      .cf-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .cf-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .cf-swatch {
        height: 60px;
        border-radius: var(--radius);
        display: grid;
        place-items: center;
        font-size: 0.8rem;
        font-weight: 600;
        font-family: monospace;
        color: white;
        text-shadow: 0 1px 2px oklch(0 0 0 / 0.4);
        margin-bottom: 0.75rem;
      }

      .cf-anatomy {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.5rem;
        font-family: monospace;
        font-size: 0.85rem;
        line-height: 2;
      }
      .cf-anatomy .kw { color: oklch(0.7 0.18 260); }
      .cf-anatomy .fn { color: oklch(0.7 0.18 30); }
      .cf-anatomy .ty { color: oklch(0.7 0.18 150); }
      .cf-anatomy .cm { color: var(--color-text-muted); font-style: italic; }

      .cf-example-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .cf-example {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        overflow: hidden;
      }
      .cf-example-header {
        padding: 1rem 1.25rem;
        border-bottom: 1px solid var(--color-border);
        font-size: 0.85rem;
        font-weight: 600;
      }
      .cf-example-code {
        padding: 1.25rem;
        font-family: monospace;
        font-size: 0.82rem;
        line-height: 1.8;
        white-space: pre-wrap;
        color: var(--color-text-muted);
      }
    </style>

    <div class="page-header">
      <h1>@function</h1>
      <p class="subtitle">Define reusable custom functions in CSS — with parameters, defaults, and return types.</p>
      <span class="badge">Chrome 139+</span>
    </div>

    <p class="info">
      The <code>@function</code> at-rule lets you define custom CSS functions that accept parameters and
      return computed values. Function names use <code>--dashed-ident</code> syntax. The <code>result</code>
      descriptor sets the return value — the last <code>result</code> in source order wins, which enables
      conditional logic with nested <code>@media</code> rules.
    </p>

    <div class="demo-section">
      <h2>Anatomy of a Function</h2>
      <div class="cf-anatomy">
        <span class="kw">@function</span> <span class="fn">--name</span>(<span class="fn">--param</span>: default) <span class="kw">returns</span> <span class="ty">&lt;type&gt;</span> {<br>
        &nbsp;&nbsp;<span class="kw">result</span>: calc(var(--param) * 2);<br>
        }<br><br>
        <span class="cm">/* Call it */</span><br>
        .element {<br>
        &nbsp;&nbsp;width: <span class="fn">--name</span>(100px);<br>
        }
      </div>
    </div>

    <div class="demo-section">
      <h2>Examples</h2>
      <div class="cf-example-list">
        <div class="cf-example">
          <div class="cf-example-header">Fluid spacing with scale factor</div>
          <div class="cf-example-code">@function --space(--n: 1) returns &lt;length&gt; {
  result: calc(var(--n) * 0.25rem);
}

.card {
  padding: --space(4);       /* 1rem */
  margin-bottom: --space(6); /* 1.5rem */
  gap: --space(2);           /* 0.5rem */
}</div>
        </div>
        <div class="cf-example">
          <div class="cf-example-header">Color with opacity parameter</div>
          <div class="cf-example-code">@function --accent(--alpha: 1) returns &lt;color&gt; {
  result: oklch(0.65 0.2 260 / var(--alpha));
}

.bg     { background: --accent(); }
.subtle { background: --accent(--alpha: 0.1); }
.border { border: 2px solid --accent(--alpha: 0.3); }</div>
        </div>
        <div class="cf-example">
          <div class="cf-example-header">Responsive value with nested @media</div>
          <div class="cf-example-code">@function --responsive-size(--sm, --lg) returns &lt;length&gt; {
  @media (width < 768px) {
    result: var(--sm);
  }
  result: var(--lg);
}

h1 { font-size: --responsive-size(1.5rem, 3rem); }</div>
        </div>
        <div class="cf-example">
          <div class="cf-example-header">Negate helper</div>
          <div class="cf-example-code">@function --negate(--value) {
  result: calc(-1 * var(--value));
}

.pull-up { margin-top: --negate(2rem); }  /* -2rem */
.flip    { scale: --negate(1);         }  /* -1    */</div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Define a function */
@function --tint(--color, --amount: 50%) returns &lt;color&gt; {
  result: color-mix(in oklch, var(--color), white var(--amount));
}

/* Use it anywhere a value is expected */
.card {
  background: --tint(blue);
  border-color: --tint(blue, 20%);
}

/* Functions can call other functions */
@function --space(--n: 1) returns &lt;length&gt; {
  result: calc(var(--n) * 0.25rem);
}

@function --pad(--x: 4, --y: 2) {
  result: --space(var(--y)) --space(var(--x));
}</pre>
    </div>
  `}export{e as render};
