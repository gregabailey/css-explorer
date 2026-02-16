export function render() {
  return `
    <style>
      .cs-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
      }
      .cs-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .cs-panel h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .cs-panel label {
        display: block;
        font-size: 0.8rem;
        color: var(--color-text-muted);
        margin-bottom: 0.4rem;
      }

      /* Base styled select */
      .cs-select {
        appearance: base-select;
        font-family: inherit;
        font-size: 0.9rem;
        padding: 0.6rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        background: var(--color-surface);
        color: var(--color-text);
        cursor: pointer;
        width: 100%;
      }
      .cs-select:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
      }

      .cs-select::picker-icon {
        color: var(--color-text-muted);
        transition: rotate 0.2s ease;
      }
      .cs-select:open::picker-icon {
        rotate: 180deg;
      }

      .cs-select::picker(select) {
        appearance: base-select;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 0.25rem;
        box-shadow: 0 8px 24px oklch(0 0 0 / 0.3);
      }

      .cs-select option {
        padding: 0.5rem 0.75rem;
        border-radius: 4px;
        margin: 2px 0;
      }
      .cs-select option:hover {
        background: var(--color-accent-subtle);
      }
      .cs-select option:checked {
        background: var(--color-accent);
        color: white;
      }

      /* Color dot inside option */
      .cs-dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 0.4rem;
        flex-shrink: 0;
      }

      /* Fallback demo */
      .cs-fallback-note {
        background: oklch(0.5 0.15 50 / 0.15);
        border: 1px solid oklch(0.7 0.15 50 / 0.3);
        border-radius: var(--radius);
        padding: 1rem;
        font-size: 0.85rem;
        color: oklch(0.85 0.1 50);
        margin-bottom: 1.5rem;
      }

      .cs-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .cs-compare { grid-template-columns: 1fr; }
      }

      .cs-native-select {
        font-family: inherit;
        font-size: 0.9rem;
        padding: 0.6rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        background: var(--color-surface);
        color: var(--color-text);
        width: 100%;
      }

      .cs-row {
        margin-bottom: 1.25rem;
      }
      .cs-row:last-child {
        margin-bottom: 0;
      }
    </style>

    <div class="page-header">
      <h1>Customizable &lt;select&gt;</h1>
      <p class="subtitle">Fully styleable native select elements with <code>appearance: base-select</code>.</p>
      <span class="badge">2025 (Chrome 135+)</span>
    </div>

    <p class="info">
      The new <code>appearance: base-select</code> value opts a <code>&lt;select&gt;</code> into full CSS customization — styled dropdowns, rich HTML inside options, and full keyboard/accessibility support, all without JavaScript.
    </p>

    <div class="cs-fallback-note">
      Note: Customizable <code>&lt;select&gt;</code> requires Chrome 135+ or a supporting browser. If styles don't appear, your browser may not support <code>appearance: base-select</code> yet. The selects will still work as native elements.
    </div>

    <div class="demo-section">
      <h2>Styled Selects</h2>
      <div class="cs-demo-grid">
        <div class="cs-panel">
          <h3>Basic Styled</h3>
          <div class="cs-row">
            <label>Choose a framework</label>
            <select class="cs-select">
              <option>React</option>
              <option>Vue</option>
              <option>Svelte</option>
              <option>Angular</option>
              <option>Solid</option>
            </select>
          </div>
          <div class="cs-row">
            <label>Font size</label>
            <select class="cs-select">
              <option>Small (12px)</option>
              <option selected>Medium (14px)</option>
              <option>Large (16px)</option>
              <option>Extra Large (18px)</option>
            </select>
          </div>
        </div>

        <div class="cs-panel">
          <h3>With Color Indicators</h3>
          <div class="cs-row">
            <label>Status</label>
            <select class="cs-select" id="cs-status-select">
              <button><selectedcontent></selectedcontent></button>
            </select>
          </div>
          <div class="cs-row">
            <label>Priority</label>
            <select class="cs-select" id="cs-priority-select">
              <button><selectedcontent></selectedcontent></button>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Before &amp; After</h2>
      <div class="cs-compare">
        <div class="cs-panel">
          <h3>Default select</h3>
          <select class="cs-native-select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <p class="info" style="margin-top: 0.75rem;">OS-rendered, minimal styling possible.</p>
        </div>
        <div class="cs-panel">
          <h3>appearance: base-select</h3>
          <select class="cs-select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <p class="info" style="margin-top: 0.75rem;">Fully styled dropdown, same accessibility.</p>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Opt into customizable select — BOTH are required */
select,
select::picker(select) {
  appearance: base-select;
}

/* Style the dropdown picker */
select::picker(select) {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.2);
}

/* Style individual options */
option {
  padding: 0.5rem;
  border-radius: 4px;
}
option:checked {
  background: var(--accent);
  color: white;
}

/* Rich HTML content inside options */
&lt;select style="appearance: base-select"&gt;
  &lt;button&gt;
    &lt;selectedcontent&gt;&lt;/selectedcontent&gt;
  &lt;/button&gt;
  &lt;option&gt;
    &lt;span class="dot green"&gt;&lt;/span&gt;Active
  &lt;/option&gt;
&lt;/select&gt;</pre>
    </div>
  `;
}

export function init() {
  // Build color dot options via DOM APIs so the parser doesn't strip spans
  const statusItems = [
    { color: '#40a02b', label: 'Active' },
    { color: '#df8e1d', label: 'Pending' },
    { color: '#e64553', label: 'Inactive' },
    { color: '#8b90a5', label: 'Draft' },
  ];

  const priorityItems = [
    { color: '#e64553', label: 'Critical' },
    { color: '#df8e1d', label: 'High' },
    { color: '#04a5e5', label: 'Medium' },
    { color: '#8b90a5', label: 'Low' },
  ];

  function buildOptions(selectId, items) {
    const select = document.getElementById(selectId);
    if (!select) return;
    items.forEach((item, i) => {
      const option = document.createElement('option');
      option.value = item.label;
      const dot = document.createElement('span');
      dot.className = 'cs-dot';
      dot.style.background = item.color;
      option.appendChild(dot);
      option.appendChild(document.createTextNode(item.label));
      if (i === 0) option.selected = true;
      select.appendChild(option);
    });
  }

  buildOptions('cs-status-select', statusItems);
  buildOptions('cs-priority-select', priorityItems);
}
