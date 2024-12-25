
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tutorial-angularjudit/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/tutorial-angularjudit"
  }
],
  assets: {
    'index.csr.html': {size: 5359, hash: '56fcf26f167db18396af48e5245a02ea18a9162650b72cc72c3a1eb563e66b75', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5543, hash: '50f64d95f4a16efdaa8704ac835e4fc17baff5c512aceee415d8793c02ed9614', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16567, hash: '97cfe70dc56e3fb8732e11abf0122b8d1b35b1bf6e664230f9603a841f374c0f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZUBEAW75.css': {size: 549, hash: 'D1xM0rBJJS8', text: () => import('./assets-chunks/styles-ZUBEAW75_css.mjs').then(m => m.default)}
  },
};
