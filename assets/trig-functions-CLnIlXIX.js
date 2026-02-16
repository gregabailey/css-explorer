function m(){return`
    <style>
      .tf-radial-wrap {
        display: flex;
        justify-content: center;
        padding: 2rem 0;
      }
      .tf-radial {
        position: relative;
        width: 280px;
        height: 280px;
      }
      .tf-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-accent);
        display: grid;
        place-items: center;
        color: white;
        font-weight: 700;
        font-size: 0.8rem;
        z-index: 2;
      }
      .tf-orbit-ring {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 1px dashed var(--color-border);
      }
      .tf-dot {
        --angle: calc(var(--i) * 1turn / var(--total));
        --radius: 120px;
        position: absolute;
        top: calc(50% - 20px + sin(var(--angle)) * var(--radius) * -1);
        left: calc(50% - 20px + cos(var(--angle)) * var(--radius));
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: oklch(0.65 0.18 calc(var(--i) * 360 / var(--total)));
        display: grid;
        place-items: center;
        color: white;
        font-weight: 600;
        font-size: 0.75rem;
        transition: all 0.4s ease;
      }

      .tf-controls {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        flex-wrap: wrap;
      }
      .tf-controls label {
        font-size: 0.85rem;
        color: var(--color-text-muted);
      }
      .tf-controls input[type="range"] {
        width: 140px;
        accent-color: var(--color-accent);
      }
      .tf-controls .tf-value {
        font-family: monospace;
        color: var(--color-accent);
        min-width: 2em;
        text-align: center;
      }

      .tf-wave-wrap {
        overflow: hidden;
        padding: 1rem 0;
      }
      .tf-wave {
        display: flex;
        gap: 4px;
        align-items: end;
        height: 120px;
        padding: 0 1rem;
      }
      .tf-wave-bar {
        flex: 1;
        min-width: 4px;
        background: var(--color-accent);
        border-radius: 2px 2px 0 0;
        transition: height 0.3s ease;
      }

      .tf-clock {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 2px solid var(--color-border);
        position: relative;
        margin: 0 auto;
      }
      .tf-clock-mark {
        --angle: calc(var(--h) * 30deg);
        position: absolute;
        top: calc(50% - 8px + sin(var(--angle) - 90deg) * 85px);
        left: calc(50% - 8px + cos(var(--angle) - 90deg) * 85px);
        width: 16px;
        height: 16px;
        display: grid;
        place-items: center;
        font-size: 0.6rem;
        color: var(--color-text-muted);
      }
      .tf-clock-hand {
        --angle: calc(var(--deg) * 1deg);
        position: absolute;
        bottom: 50%;
        left: calc(50% - 1.5px);
        width: 3px;
        height: var(--len, 70px);
        background: var(--color-accent);
        border-radius: 3px;
        transform-origin: bottom center;
        transform: rotate(var(--angle));
        transition: transform 1s ease;
      }
      .tf-clock-dot {
        position: absolute;
        top: calc(50% - 5px);
        left: calc(50% - 5px);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--color-accent);
      }
    </style>

    <div class="page-header">
      <h1>Trigonometric Functions</h1>
      <p class="subtitle">Use <code>sin()</code>, <code>cos()</code>, and <code>tan()</code> in CSS.</p>
      <span class="badge">Baseline 2023</span>
    </div>

    <p class="info">
      CSS now supports trigonometric functions — <code>sin()</code>, <code>cos()</code>, <code>tan()</code>, <code>asin()</code>, <code>acos()</code>, <code>atan()</code>, and <code>atan2()</code>. Combined with custom properties, these enable circular/radial layouts and wave patterns without JavaScript.
    </p>

    <div class="demo-section">
      <h2>Radial Menu</h2>
      <p class="info">Items are positioned in a circle using <code>sin()</code> and <code>cos()</code>. Adjust the count:</p>
      <div class="tf-controls">
        <label>Items:</label>
        <input type="range" id="tf-count" min="3" max="12" value="6">
        <span class="tf-value" id="tf-count-label">6</span>
      </div>
      <div class="tf-radial-wrap">
        <div class="tf-radial" id="tf-radial">
          <div class="tf-orbit-ring"></div>
          <div class="tf-center">Menu</div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Sine Wave</h2>
      <p class="info">Bar heights follow a sine wave pattern using <code>sin()</code>.</p>
      <div class="tf-wave-wrap">
        <div class="tf-wave" id="tf-wave"></div>
      </div>
      <div class="tf-controls">
        <label>Phase:</label>
        <input type="range" id="tf-phase" min="0" max="628" value="0">
      </div>
    </div>

    <div class="demo-section">
      <h2>Clock Face</h2>
      <p class="info">Hour markers positioned using <code>sin()</code> and <code>cos()</code> with angle calculations.</p>
      <div class="tf-clock" id="tf-clock">
        <div class="tf-clock-hand" id="tf-hour-hand" style="--len: 50px; --deg: 0;"></div>
        <div class="tf-clock-hand" id="tf-min-hand" style="--len: 70px; --deg: 0; opacity: 0.6; width: 2px;"></div>
        <div class="tf-clock-dot"></div>
      </div>
    </div>

    <div class="code-block">
      <pre>/* Place items in a circle */
.item {
  --angle: calc(var(--i) * 1turn / var(--total));
  --radius: 120px;
  top:  calc(50% + sin(var(--angle)) * var(--radius));
  left: calc(50% + cos(var(--angle)) * var(--radius));
}

/* Sine wave height */
.bar {
  height: calc(50% + sin(var(--i) * 0.3rad) * 40%);
}

/* Also available: asin(), acos(), atan(), atan2() */</pre>
    </div>
  `}function g(){const n=document.getElementById("tf-radial"),o=document.getElementById("tf-count"),f=document.getElementById("tf-count-label"),c=document.getElementById("tf-wave"),r=document.getElementById("tf-phase"),d=document.getElementById("tf-hour-hand"),l=document.getElementById("tf-min-hand");if(!n||!o||!c)return;function s(t){n.querySelectorAll(".tf-dot").forEach(e=>e.remove());for(let e=0;e<t;e++){const a=document.createElement("div");a.className="tf-dot",a.style.setProperty("--i",e),a.style.setProperty("--total",t),a.textContent=e+1,n.appendChild(a)}}o.addEventListener("input",()=>{f.textContent=o.value,s(Number(o.value))}),s(6);const u=40;for(let t=0;t<u;t++){const e=document.createElement("div");e.className="tf-wave-bar",c.appendChild(e)}function p(t){c.querySelectorAll(".tf-wave-bar").forEach((a,i)=>{const h=50+Math.sin(i*.3+t)*40;a.style.height=h+"%"})}if(p(0),r&&r.addEventListener("input",()=>{p(Number(r.value)/100)}),d&&l){let t=function(){const e=new Date,a=e.getHours()%12,i=e.getMinutes();d.style.setProperty("--deg",a*30+i*.5),l.style.setProperty("--deg",i*6)};t(),setInterval(t,1e3)}const v=document.getElementById("tf-clock");if(v)for(let t=1;t<=12;t++){const e=document.createElement("div");e.className="tf-clock-mark",e.style.setProperty("--h",t),e.textContent=t,v.appendChild(e)}}export{g as init,m as render};
