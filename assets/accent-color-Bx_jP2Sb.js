function l(){return`
    <style>
      .ac-controls {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
      }
      .ac-controls label {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }
      .ac-color-input {
        width: 48px;
        height: 36px;
        border: 2px solid var(--color-border);
        border-radius: var(--radius);
        cursor: pointer;
        background: transparent;
        padding: 2px;
      }
      .ac-form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .ac-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1.25rem;
      }
      .ac-card h3 {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .ac-card label {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
        font-size: 0.9rem;
        cursor: pointer;
      }
      .ac-card input[type="checkbox"],
      .ac-card input[type="radio"] {
        width: 1.2em;
        height: 1.2em;
        accent-color: var(--ac-color, var(--color-accent));
      }
      .ac-card input[type="range"] {
        width: 100%;
        accent-color: var(--ac-color, var(--color-accent));
      }
      .ac-card progress {
        width: 100%;
        accent-color: var(--ac-color, var(--color-accent));
        height: 1.2em;
      }
      .ac-swatch-row {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-top: 1rem;
      }
      .ac-swatch {
        width: 40px;
        height: 40px;
        border-radius: var(--radius);
        cursor: pointer;
        border: 2px solid transparent;
        transition: border-color var(--transition);
      }
      .ac-swatch:hover, .ac-swatch.active {
        border-color: var(--color-text);
      }
    </style>

    <div class="page-header">
      <h1>accent-color</h1>
      <p class="subtitle">Style native form controls with a single property.</p>
      <span class="badge">Baseline 2022</span>
    </div>

    <p class="info">
      The <code>accent-color</code> property lets you set the tint color for native UI controls — checkboxes, radio buttons, range sliders, and progress bars — without replacing them with custom elements.
    </p>

    <div class="demo-section">
      <h2>Pick an Accent Color</h2>
      <div class="ac-controls">
        <label>Choose color:</label>
        <input type="color" class="ac-color-input" id="ac-picker" value="#7c6ef5">
        <div class="ac-swatch-row" id="ac-swatches">
          <div class="ac-swatch active" style="background: #7c6ef5" data-color="#7c6ef5"></div>
          <div class="ac-swatch" style="background: #e64553" data-color="#e64553"></div>
          <div class="ac-swatch" style="background: #40a02b" data-color="#40a02b"></div>
          <div class="ac-swatch" style="background: #df8e1d" data-color="#df8e1d"></div>
          <div class="ac-swatch" style="background: #ea76cb" data-color="#ea76cb"></div>
          <div class="ac-swatch" style="background: #04a5e5" data-color="#04a5e5"></div>
        </div>
      </div>

      <div class="ac-form-grid" id="ac-form">
        <div class="ac-card">
          <h3>Checkboxes</h3>
          <label><input type="checkbox" checked> Notifications</label>
          <label><input type="checkbox" checked> Dark mode</label>
          <label><input type="checkbox"> Sounds</label>
        </div>
        <div class="ac-card">
          <h3>Radio Buttons</h3>
          <label><input type="radio" name="ac-plan" checked> Free</label>
          <label><input type="radio" name="ac-plan"> Pro</label>
          <label><input type="radio" name="ac-plan"> Enterprise</label>
        </div>
        <div class="ac-card">
          <h3>Range Slider</h3>
          <input type="range" min="0" max="100" value="65">
          <input type="range" min="0" max="100" value="30">
        </div>
        <div class="ac-card">
          <h3>Progress</h3>
          <progress value="75" max="100"></progress>
          <progress value="40" max="100"></progress>
        </div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Apply to all form controls */
:root {
  accent-color: #7c6ef5;
}

/* Or target specific elements */
input[type="checkbox"] {
  accent-color: hotpink;
}

progress {
  accent-color: limegreen;
}</pre>
    </div>
  `}function s(){const c=document.getElementById("ac-picker"),t=document.getElementById("ac-form"),r=document.getElementById("ac-swatches");if(!c||!t||!r)return;function o(a){t.style.setProperty("--ac-color",a),c.value=a,r.querySelectorAll(".ac-swatch").forEach(e=>{e.classList.toggle("active",e.dataset.color===a)})}c.addEventListener("input",a=>o(a.target.value)),r.addEventListener("click",a=>{const e=a.target.closest(".ac-swatch");e&&o(e.dataset.color)})}export{s as init,l as render};
