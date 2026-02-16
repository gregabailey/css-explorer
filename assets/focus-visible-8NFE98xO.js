function e(){return`
    <style>
      .fv-demo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .fv-demo-grid { grid-template-columns: 1fr; }
      }
      .fv-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.5rem;
      }
      .fv-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .fv-card p {
        font-size: 0.82rem;
        color: var(--color-text-muted);
        margin-top: 1rem;
      }
      .fv-button-row {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      /* Demo buttons with :focus */
      .fv-btn-focus {
        padding: 0.6rem 1.2rem;
        border: 2px solid var(--color-border);
        border-radius: var(--radius);
        background: var(--color-surface);
        color: var(--color-text);
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 150ms ease;
      }
      .fv-btn-focus:focus {
        outline: 3px solid var(--color-accent);
        outline-offset: 2px;
      }

      /* Demo buttons with :focus-visible */
      .fv-btn-visible {
        padding: 0.6rem 1.2rem;
        border: 2px solid var(--color-border);
        border-radius: var(--radius);
        background: var(--color-surface);
        color: var(--color-text);
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 150ms ease;
      }
      .fv-btn-visible:focus {
        outline: none;
      }
      .fv-btn-visible:focus-visible {
        outline: 3px solid var(--color-accent);
        outline-offset: 2px;
      }

      .fv-input-row {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .fv-input {
        padding: 0.6rem 1rem;
        border: 2px solid var(--color-border);
        border-radius: var(--radius);
        background: var(--color-surface);
        color: var(--color-text);
        font-size: 0.9rem;
        transition: all 150ms ease;
      }
      .fv-input:focus {
        outline: none;
      }
      .fv-input:focus-visible {
        outline: 3px solid var(--color-accent);
        outline-offset: 2px;
        border-color: var(--color-accent);
      }

      .fv-hint {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        border-radius: var(--radius);
        background: var(--color-accent-subtle);
        font-size: 0.85rem;
        color: var(--color-text);
        margin-bottom: 1.5rem;
      }

      .fv-link-demo {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
      }
      .fv-link {
        color: var(--color-accent);
        text-decoration: underline;
        font-size: 0.95rem;
        padding: 0.25rem;
        border-radius: 4px;
      }
      .fv-link:focus {
        outline: none;
      }
      .fv-link:focus-visible {
        outline: 3px solid var(--color-accent);
        outline-offset: 2px;
      }
    </style>

    <div class="page-header">
      <h1>:focus-visible</h1>
      <p class="subtitle">Show focus rings for keyboard users, hide them for mouse clicks.</p>
      <span class="badge">Baseline 2022</span>
    </div>

    <p class="info">
      <code>:focus-visible</code> matches when an element is focused <strong>and</strong> the browser
      determines the focus should be visibly indicated — typically for keyboard navigation.
      This lets you remove distracting outlines on click while keeping accessibility for keyboard users.
    </p>

    <div class="fv-hint">Try clicking the buttons below, then press <strong>Tab</strong> to navigate with the keyboard.</div>

    <div class="demo-section">
      <h2>:focus vs :focus-visible</h2>
      <div class="fv-demo-grid">
        <div class="fv-card">
          <h3>:focus — always shows outline</h3>
          <div class="fv-button-row">
            <button class="fv-btn-focus">Click me</button>
            <button class="fv-btn-focus">Tab to me</button>
            <button class="fv-btn-focus">Or me</button>
          </div>
          <p>Outline appears on both click and keyboard focus.</p>
        </div>
        <div class="fv-card">
          <h3>:focus-visible — keyboard only</h3>
          <div class="fv-button-row">
            <button class="fv-btn-visible">Click me</button>
            <button class="fv-btn-visible">Tab to me</button>
            <button class="fv-btn-visible">Or me</button>
          </div>
          <p>Outline only appears when navigating by keyboard.</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Text Inputs</h2>
      <p class="info">Inputs <em>always</em> show <code>:focus-visible</code> because text entry implies keyboard use — even when clicked.</p>
      <div class="fv-input-row" style="max-width: 360px">
        <input class="fv-input" type="text" placeholder="Click or tab into this field">
        <input class="fv-input" type="email" placeholder="Email address">
      </div>
    </div>

    <div class="demo-section">
      <h2>Links</h2>
      <p class="info">Click these links — no outline. Tab to them — outline appears.</p>
      <div class="fv-link-demo">
        <a href="#/focus-visible" class="fv-link">Documentation</a>
        <a href="#/focus-visible" class="fv-link">Examples</a>
        <a href="#/focus-visible" class="fv-link">Browser support</a>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Remove default focus ring */
button:focus {
  outline: none;
}

/* Restore it for keyboard navigation */
button:focus-visible {
  outline: 3px solid blue;
  outline-offset: 2px;
}

/* Inputs always match :focus-visible */
input:focus-visible {
  outline: 3px solid blue;
  border-color: blue;
}</pre>
    </div>
  `}export{e as render};
