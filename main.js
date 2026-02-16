const mainContent = document.getElementById('main-content');
const sidebar = document.getElementById('sidebar');
const navToggle = document.querySelector('.nav-toggle');

const routes = {
  '/': () => import('./pages/home.js'),
  '/container-queries': () => import('./pages/container-queries.js'),
  '/cascade-layers': () => import('./pages/cascade-layers.js'),
  '/nesting': () => import('./pages/nesting.js'),
  '/has-selector': () => import('./pages/has-selector.js'),
  '/subgrid': () => import('./pages/subgrid.js'),
  '/scroll-driven-animations': () => import('./pages/scroll-driven-animations.js'),
  '/view-transitions': () => import('./pages/view-transitions.js'),
  '/anchor-positioning': () => import('./pages/anchor-positioning.js'),
  '/color-spaces': () => import('./pages/color-spaces.js'),
  '/logical-properties': () => import('./pages/logical-properties.js'),
  '/popover-api': () => import('./pages/popover-api.js'),
  '/scroll-snap': () => import('./pages/scroll-snap.js'),
  '/clamp-functions': () => import('./pages/clamp-functions.js'),
  '/animate-to-auto': () => import('./pages/animate-to-auto.js'),
  '/aspect-ratio': () => import('./pages/aspect-ratio.js'),
  '/is-where': () => import('./pages/is-where.js'),
  '/accent-color': () => import('./pages/accent-color.js'),
  '/flexbox-gap': () => import('./pages/flexbox-gap.js'),
  '/overscroll-behavior': () => import('./pages/overscroll-behavior.js'),
  '/scope': () => import('./pages/scope.js'),
  '/trig-functions': () => import('./pages/trig-functions.js'),
  '/individual-transforms': () => import('./pages/individual-transforms.js'),
  '/text-wrap': () => import('./pages/text-wrap.js'),
  '/initial-letter': () => import('./pages/initial-letter.js'),
  '/at-property': () => import('./pages/at-property.js'),
  '/starting-style': () => import('./pages/starting-style.js'),
  '/field-sizing': () => import('./pages/field-sizing.js'),
  '/details-styling': () => import('./pages/details-styling.js'),
  '/scrollbar-styling': () => import('./pages/scrollbar-styling.js'),
  '/custom-select': () => import('./pages/custom-select.js'),
};

async function navigate() {
  const hash = location.hash.slice(1) || '/';
  const loader = routes[hash];

  if (!loader) {
    mainContent.innerHTML = `<div class="page-header"><h1>404</h1><p class="subtitle">Page not found. <a href="#/">Go home</a></p></div>`;
    return;
  }

  const module = await loader();
  mainContent.innerHTML = module.render();

  if (module.init) {
    module.init();
  }

  // Update active nav link
  sidebar.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${hash}`);
  });

  // Close mobile nav
  sidebar.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');

  // Scroll to top
  mainContent.scrollTo?.({ top: 0 });
  window.scrollTo({ top: 0 });
}

// Mobile nav toggle
navToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

window.addEventListener('hashchange', navigate);
navigate();
