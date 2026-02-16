function m(){return`
    <style>
      .ss-card-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .ss-card {
        background: var(--color-surface-2);
        border-radius: var(--radius);
        padding: 1rem 1.25rem;
        opacity: 1;
        translate: 0;
        transition: opacity 0.4s ease, translate 0.4s ease, background 0.3s ease;
      }
      @starting-style {
        .ss-card {
          opacity: 0;
          translate: -20px 0;
        }
      }
      .ss-card:hover {
        background: var(--color-surface);
      }
      .ss-card h4 {
        font-size: 0.9rem;
        margin-bottom: 0.25rem;
      }
      .ss-card p {
        font-size: 0.8rem;
        color: var(--color-text-muted);
      }

      .ss-controls {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
      }

      .ss-toast-area {
        position: relative;
        min-height: 200px;
        border: 2px dashed var(--color-border);
        border-radius: var(--radius);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-end;
        justify-content: flex-end;
      }
      .ss-toast {
        background: var(--color-accent);
        color: white;
        padding: 0.75rem 1.25rem;
        border-radius: var(--radius);
        font-size: 0.85rem;
        font-weight: 500;
        opacity: 1;
        translate: 0;
        scale: 1;
        transition: opacity 0.3s ease, translate 0.3s ease, scale 0.3s ease;
      }
      @starting-style {
        .ss-toast {
          opacity: 0;
          translate: 20px 0;
          scale: 0.9;
        }
      }

      .ss-dialog-wrap {
        position: relative;
        min-height: 250px;
        border: 2px dashed var(--color-border);
        border-radius: var(--radius);
        overflow: hidden;
      }
      .ss-dialog-backdrop {
        position: absolute;
        inset: 0;
        background: oklch(0 0 0 / 0.5);
        opacity: 1;
        display: grid;
        place-items: center;
        transition: opacity 0.3s ease;
      }
      @starting-style {
        .ss-dialog-backdrop {
          opacity: 0;
        }
      }
      .ss-dialog-box {
        background: var(--color-surface);
        border-radius: var(--radius);
        padding: 1.5rem;
        width: 80%;
        max-width: 300px;
        text-align: center;
        scale: 1;
        opacity: 1;
        transition: scale 0.3s ease, opacity 0.3s ease;
      }
      @starting-style {
        .ss-dialog-box {
          scale: 0.85;
          opacity: 0;
        }
      }
      .ss-dialog-box h4 {
        margin-bottom: 0.5rem;
      }
      .ss-dialog-box p {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        margin-bottom: 1rem;
      }

      .ss-hidden {
        display: none;
      }
    </style>

    <div class="page-header">
      <h1>@starting-style</h1>
      <p class="subtitle">Define entry animations for elements appearing in the DOM.</p>
      <span class="badge">Baseline 2024</span>
    </div>

    <p class="info">
      <code>@starting-style</code> specifies the initial values for properties when an element first appears (inserted into the DOM or changed from <code>display: none</code>). This enables pure CSS entry transitions without keyframe animations.
    </p>

    <div class="demo-section">
      <h2>List Entry Animation</h2>
      <p class="info">Click "Add Item" — each new card slides and fades in from the left.</p>
      <div class="ss-controls">
        <button class="btn" id="ss-add-btn">Add Item</button>
        <button class="btn" id="ss-clear-btn">Clear All</button>
      </div>
      <div class="ss-card-list" id="ss-list"></div>
    </div>

    <div class="demo-section">
      <h2>Toast Notifications</h2>
      <p class="info">Toasts slide in from the right with scale-up on entry.</p>
      <div class="ss-controls">
        <button class="btn" id="ss-toast-btn">Show Toast</button>
      </div>
      <div class="ss-toast-area" id="ss-toast-area"></div>
    </div>

    <div class="demo-section">
      <h2>Dialog Entry</h2>
      <p class="info">Backdrop fades in, dialog scales up — all with <code>@starting-style</code>.</p>
      <div class="ss-controls">
        <button class="btn" id="ss-dialog-btn">Show Dialog</button>
      </div>
      <div class="ss-dialog-wrap" id="ss-dialog-wrap"></div>
    </div>

    <div class="code-block">
      <pre>/* Entry animation for new elements */
.card {
  opacity: 1;
  translate: 0;
  transition: opacity 0.4s, translate 0.4s;
}

@starting-style {
  .card {
    opacity: 0;
    translate: -20px 0;
  }
}

/* The element starts at the @starting-style values
   and transitions to the normal values when it
   first appears in the DOM. */</pre>
    </div>
  `}function g(){const t=document.getElementById("ss-list"),o=document.getElementById("ss-add-btn"),n=document.getElementById("ss-clear-btn"),r=document.getElementById("ss-toast-area"),d=document.getElementById("ss-toast-btn"),a=document.getElementById("ss-dialog-wrap"),l=document.getElementById("ss-dialog-btn");let i=0;const c=["Notification received","Task completed","File uploaded","Settings saved","Message sent","Update available"];o&&t&&o.addEventListener("click",()=>{const s=document.createElement("div");s.className="ss-card";const e=c[i%c.length];s.innerHTML=`<h4>${e}</h4><p>Item #${++i} — appeared with @starting-style</p>`,t.appendChild(s)}),n&&t&&n.addEventListener("click",()=>{t.innerHTML="",i=0});let p=0;d&&r&&d.addEventListener("click",()=>{const s=document.createElement("div");s.className="ss-toast",s.textContent=`Toast #${++p} appeared!`,r.appendChild(s),setTimeout(()=>s.remove(),3e3)}),l&&a&&l.addEventListener("click",()=>{if(a.querySelector(".ss-dialog-backdrop"))return;const s=document.createElement("div");s.className="ss-dialog-backdrop",s.innerHTML=`
        <div class="ss-dialog-box">
          <h4>Confirm Action</h4>
          <p>This dialog appeared with a scale + fade entry animation using @starting-style.</p>
          <button class="btn ss-dialog-close">Close</button>
        </div>
      `,a.appendChild(s),s.addEventListener("click",e=>{(e.target===s||e.target.classList.contains("ss-dialog-close"))&&s.remove()})})}export{g as init,m as render};
