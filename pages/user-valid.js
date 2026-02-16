export function render() {
  return `
    <style>
      .uv-form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        max-width: 400px;
      }
      .uv-field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }
      .uv-field label {
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--color-text-muted);
      }
      .uv-field input, .uv-field select {
        padding: 0.6rem 1rem;
        border: 2px solid var(--color-border);
        border-radius: var(--radius);
        background: var(--color-surface);
        color: var(--color-text);
        font-size: 0.95rem;
        transition: all 200ms ease;
      }
      .uv-field .uv-msg {
        font-size: 0.78rem;
        min-height: 1.2em;
        transition: all 200ms ease;
      }

      /* :user-valid / :user-invalid — only after interaction */
      .uv-field input:user-valid {
        border-color: oklch(0.6 0.2 150);
      }
      .uv-field input:user-valid + .uv-msg {
        color: oklch(0.6 0.2 150);
      }
      .uv-field input:user-invalid {
        border-color: oklch(0.6 0.22 25);
      }
      .uv-field input:user-invalid + .uv-msg {
        color: oklch(0.6 0.22 25);
      }

      .uv-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .uv-compare { grid-template-columns: 1fr; }
      }
      .uv-compare-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .uv-compare-card h3 {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      /* Old :valid/:invalid — fires immediately */
      .uv-old-field input:valid {
        border-color: oklch(0.6 0.2 150);
      }
      .uv-old-field input:invalid {
        border-color: oklch(0.6 0.22 25);
      }

      /* New :user-valid/:user-invalid — only after interaction */
      .uv-new-field input:user-valid {
        border-color: oklch(0.6 0.2 150);
      }
      .uv-new-field input:user-invalid {
        border-color: oklch(0.6 0.22 25);
      }

      .uv-old-field, .uv-new-field {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        margin-bottom: 0.75rem;
      }
      .uv-old-field label, .uv-new-field label {
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--color-text-muted);
      }
      .uv-old-field input, .uv-new-field input {
        padding: 0.6rem 1rem;
        border: 2px solid var(--color-border);
        border-radius: var(--radius);
        background: var(--color-surface);
        color: var(--color-text);
        font-size: 0.95rem;
        transition: all 200ms ease;
      }

      .uv-hint {
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
    </style>

    <div class="page-header">
      <h1>:user-valid / :user-invalid</h1>
      <p class="subtitle">Validate form fields only after the user has interacted with them.</p>
      <span class="badge">Baseline 2024</span>
    </div>

    <p class="info">
      <code>:valid</code> and <code>:invalid</code> match immediately on page load — showing errors
      before the user has typed anything. <code>:user-valid</code> and <code>:user-invalid</code>
      only match after the user has interacted with the field (typed, blurred, or submitted),
      giving a much better experience.
    </p>

    <div class="demo-section">
      <h2>Side-by-Side: Old vs New</h2>
      <p class="info">Notice how the left fields show red borders immediately, while the right fields wait until you interact.</p>
      <div class="uv-compare">
        <div class="uv-compare-card">
          <h3>:valid / :invalid — immediate</h3>
          <div class="uv-old-field">
            <label>Email (required)</label>
            <input type="email" required placeholder="you@example.com">
          </div>
          <div class="uv-old-field">
            <label>URL (required)</label>
            <input type="url" required placeholder="https://...">
          </div>
        </div>
        <div class="uv-compare-card">
          <h3>:user-valid / :user-invalid — after interaction</h3>
          <div class="uv-new-field">
            <label>Email (required)</label>
            <input type="email" required placeholder="you@example.com">
          </div>
          <div class="uv-new-field">
            <label>URL (required)</label>
            <input type="url" required placeholder="https://...">
          </div>
        </div>
      </div>
    </div>

    <div class="uv-hint">Type in the fields above, then click away — the right side only validates after you interact.</div>

    <div class="demo-section">
      <h2>Full Form Example</h2>
      <p class="info">All fields use <code>:user-valid</code> / <code>:user-invalid</code>. Try typing invalid values, then correcting them.</p>
      <div class="uv-form">
        <div class="uv-field">
          <label>Name (required)</label>
          <input type="text" required placeholder="Your full name" minlength="2">
          <span class="uv-msg">At least 2 characters</span>
        </div>
        <div class="uv-field">
          <label>Email (required)</label>
          <input type="email" required placeholder="you@example.com">
          <span class="uv-msg">Must be a valid email</span>
        </div>
        <div class="uv-field">
          <label>Age (18–120)</label>
          <input type="number" min="18" max="120" placeholder="25">
          <span class="uv-msg">Must be between 18 and 120</span>
        </div>
        <div class="uv-field">
          <label>Website</label>
          <input type="url" placeholder="https://yoursite.com">
          <span class="uv-msg">Must be a valid URL</span>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Only show validation after user interaction */
input:user-valid {
  border-color: green;
}

input:user-invalid {
  border-color: red;
}

/* Compare with old behavior — fires immediately */
input:valid   { border-color: green; }
input:invalid { border-color: red; }

/* Combine with sibling selectors for messages */
input:user-invalid + .error-msg {
  display: block;
  color: red;
}</pre>
    </div>
  `;
}
