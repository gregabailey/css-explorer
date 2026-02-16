function e(){return`
    <style>
      .fs-demo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 600px) {
        .fs-demo-grid { grid-template-columns: 1fr; }
      }
      .fs-panel {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .fs-panel h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }

      .fs-input, .fs-textarea, .fs-select {
        font-family: inherit;
        font-size: 0.9rem;
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        background: var(--color-surface);
        color: var(--color-text);
        width: 100%;
        box-sizing: border-box;
      }
      .fs-input:focus, .fs-textarea:focus, .fs-select:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
      }

      .fs-content .fs-textarea,
      .fs-content .fs-input,
      .fs-content .fs-select {
        field-sizing: content;
        width: auto;
        min-width: 100px;
      }

      .fs-textarea {
        resize: vertical;
        min-height: 2.5em;
      }
      .fs-content .fs-textarea {
        resize: none;
      }

      .fs-row {
        margin-bottom: 1rem;
      }
      .fs-row:last-child {
        margin-bottom: 0;
      }
      .fs-row label {
        display: block;
        font-size: 0.8rem;
        color: var(--color-text-muted);
        margin-bottom: 0.4rem;
      }

      .fs-chat-demo {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
        max-width: 500px;
      }
      .fs-chat-messages {
        min-height: 100px;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .fs-chat-msg {
        padding: 0.5rem 0.75rem;
        border-radius: var(--radius);
        font-size: 0.85rem;
        max-width: 75%;
      }
      .fs-chat-msg.received {
        background: var(--color-surface);
        align-self: flex-start;
        color: var(--color-text);
      }
      .fs-chat-msg.sent {
        background: var(--color-accent);
        color: white;
        align-self: flex-end;
      }
      .fs-chat-input-row {
        display: flex;
        gap: 0.5rem;
        align-items: flex-end;
      }
      .fs-chat-input {
        font-family: inherit;
        font-size: 0.85rem;
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        background: var(--color-surface);
        color: var(--color-text);
        field-sizing: content;
        min-width: 0;
        flex: 1;
        max-height: 120px;
      }
      .fs-chat-input:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
      }
    </style>

    <div class="page-header">
      <h1>field-sizing: content</h1>
      <p class="subtitle">Auto-size form inputs to fit their content.</p>
      <span class="badge">Baseline 2024</span>
    </div>

    <p class="info">
      <code>field-sizing: content</code> makes form controls (textareas, inputs, selects) automatically grow and shrink to fit their content. No more fixed sizes or JavaScript auto-resize hacks.
    </p>

    <div class="demo-section">
      <h2>Fixed vs. Content-Sized</h2>
      <div class="fs-demo-grid">
        <div class="fs-panel">
          <h3>Default (fixed)</h3>
          <div class="fs-row">
            <label>Text input</label>
            <input type="text" class="fs-input" placeholder="Type here..." value="Hello">
          </div>
          <div class="fs-row">
            <label>Textarea</label>
            <textarea class="fs-textarea" placeholder="Type here...">Short text</textarea>
          </div>
          <div class="fs-row">
            <label>Select</label>
            <select class="fs-select">
              <option>Short</option>
              <option>A much longer option text</option>
              <option>Medium option</option>
            </select>
          </div>
        </div>
        <div class="fs-panel fs-content">
          <h3>field-sizing: content</h3>
          <div class="fs-row">
            <label>Text input (grows with typing)</label>
            <input type="text" class="fs-input" placeholder="Type here..." value="Hello">
          </div>
          <div class="fs-row">
            <label>Textarea (grows with lines)</label>
            <textarea class="fs-textarea" placeholder="Type here...">Short text</textarea>
          </div>
          <div class="fs-row">
            <label>Select (fits selected option)</label>
            <select class="fs-select">
              <option>Short</option>
              <option>A much longer option text</option>
              <option>Medium option</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Real-World: Chat Input</h2>
      <p class="info">The textarea grows as you type, just like messaging apps. Try adding multiple lines.</p>
      <div class="fs-chat-demo">
        <div class="fs-chat-messages">
          <div class="fs-chat-msg received">Hey! Have you tried the new CSS features?</div>
          <div class="fs-chat-msg sent">Yes! field-sizing is great</div>
          <div class="fs-chat-msg received">Right? No more JS resize hacks</div>
        </div>
        <div class="fs-chat-input-row">
          <textarea class="fs-chat-input" placeholder="Type a message..." rows="1"></textarea>
          <button class="btn">Send</button>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Auto-size all form controls */
textarea, select, input {
  field-sizing: content;
}

/* Chat input that grows with content */
.chat-input {
  field-sizing: content;
  min-width: 0;
  max-height: 120px;  /* Cap maximum growth */
}</pre>
    </div>
  `}export{e as render};
