export function render() {
  return `
    <style>
      .nest-demo {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.5rem;

        & h3 {
          color: var(--color-accent);
          margin-block-end: 0.75rem;
          font-size: 1.1rem;
        }

        & p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-block-end: 0.5rem;
        }

        & .nest-tag {
          display: inline-block;
          padding: 0.2em 0.6em;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          background: var(--color-accent-subtle);
          color: var(--color-accent);
        }

        &:hover {
          outline: 2px solid var(--color-accent);
          outline-offset: 2px;
        }

        & .nest-inner {
          margin-block-start: 1rem;
          padding: 1rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius);

          & span {
            color: oklch(0.75 0.15 50);
            font-weight: 600;
          }
        }
      }

      .nest-compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      @media (max-width: 600px) {
        .nest-compare {
          grid-template-columns: 1fr;
        }
      }

      .nest-col h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        margin-block-end: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    </style>

    <div class="page-header">
      <h1>CSS Nesting</h1>
      <p class="subtitle">Native selector nesting — no preprocessor needed.</p>
      <span class="badge">Baseline 2023</span>
    </div>

    <p class="info">
      Write child rules inside parent rulesets using <code>&</code> to reference the parent.
      Works just like Sass/SCSS but natively in the browser.
    </p>

    <div class="demo-section">
      <h2>Live Nested Styles</h2>
      <div class="nest-demo">
        <h3>Nested Component</h3>
        <p>All these styles are defined using native CSS nesting. Hover the card to see the outline.</p>
        <span class="nest-tag">Nested</span>
        <div class="nest-inner">
          <span>Deeply nested</span> — this span is styled with two levels of nesting.
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Syntax Comparison</h2>
      <div class="nest-compare">
        <div class="nest-col">
          <h3>With Nesting</h3>
          <div class="code-block" style="margin:0">
            <pre>.card {
  padding: 1.5rem;

  & h3 {
    color: blue;
  }

  & p {
    color: gray;
  }

  &:hover {
    outline: 2px solid blue;
  }

  & .inner {
    border: 1px solid;

    & span {
      font-weight: bold;
    }
  }
}</pre>
          </div>
        </div>
        <div class="nest-col">
          <h3>Without Nesting</h3>
          <div class="code-block" style="margin:0">
            <pre>.card {
  padding: 1.5rem;
}
.card h3 {
  color: blue;
}
.card p {
  color: gray;
}
.card:hover {
  outline: 2px solid blue;
}
.card .inner {
  border: 1px solid;
}
.card .inner span {
  font-weight: bold;
}


</pre>
          </div>
        </div>
      </div>
    </div>
  `;
}
