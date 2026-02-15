function e(){return`
    <style>
      .has-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 400px;
      }

      .has-field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        padding: 1rem;
        border-radius: var(--radius);
        border: 2px solid var(--color-border);
        background: var(--color-surface-2);
        transition: all 200ms ease;
      }

      .has-field:has(input:focus) {
        border-color: var(--color-accent);
        background: var(--color-accent-subtle);
      }

      .has-field:has(input:not(:placeholder-shown)) {
        border-color: oklch(0.65 0.18 150);
      }

      .has-field:has(input:not(:placeholder-shown)):has(input:focus) {
        border-color: var(--color-accent);
      }

      .has-field label {
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--color-text-muted);
        transition: color 200ms ease;
      }

      .has-field:has(input:focus) label {
        color: var(--color-accent);
      }

      .has-field input {
        background: transparent;
        border: none;
        color: var(--color-text);
        font-size: 1rem;
        outline: none;
        padding: 0.25rem 0;
      }

      .has-field input::placeholder {
        color: var(--color-text-muted);
        opacity: 0.5;
      }

      .has-card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        margin-block-start: 1rem;
      }

      .has-card {
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        overflow: hidden;
        transition: all 200ms ease;
      }

      .has-card:has(input:checked) {
        border-color: var(--color-accent);
        box-shadow: 0 0 0 1px var(--color-accent);
      }

      .has-card-body {
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .has-card-body input[type="checkbox"] {
        accent-color: var(--color-accent);
        width: 18px;
        height: 18px;
      }

      .has-card:has(input:checked) .has-card-body {
        background: var(--color-accent-subtle);
      }
    </style>

    <div class="page-header">
      <h1>:has() Selector</h1>
      <p class="subtitle">Style parent elements based on their children's state.</p>
      <span class="badge">Baseline 2023</span>
    </div>

    <p class="info">
      The <code>:has()</code> pseudo-class lets you select an element based on what it contains.
      It's often called the "parent selector" — something CSS developers wanted for decades.
    </p>

    <div class="demo-section">
      <h2>Form Fields — Parent reacts to child focus</h2>
      <div class="has-form">
        <div class="has-field">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name">
        </div>
        <div class="has-field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com">
        </div>
        <div class="has-field">
          <label>Message</label>
          <input type="text" placeholder="Say something">
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Cards — Container reacts to checkbox</h2>
      <p class="info" style="margin-block-end:0.5rem">Check the boxes to see the parent card respond.</p>
      <div class="has-card-grid">
        <div class="has-card">
          <div class="has-card-body">
            <input type="checkbox" id="hc1"><label for="hc1">Option Alpha</label>
          </div>
        </div>
        <div class="has-card">
          <div class="has-card-body">
            <input type="checkbox" id="hc2"><label for="hc2">Option Beta</label>
          </div>
        </div>
        <div class="has-card">
          <div class="has-card-body">
            <input type="checkbox" id="hc3"><label for="hc3">Option Gamma</label>
          </div>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Parent highlights when child input is focused */
.field:has(input:focus) {
  border-color: blue;
  background: lightblue;
}

/* Card highlights when its checkbox is checked */
.card:has(input:checked) {
  border-color: blue;
  box-shadow: 0 0 0 1px blue;
}</pre>
    </div>
  `}export{e as render};
