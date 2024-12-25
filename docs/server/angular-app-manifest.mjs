
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 5337, hash: 'd99747fde2a81d337b0f7b27759aa1dcba13b94e3dc2f7e8c63a50dfc4985c84', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5521, hash: '45a206cb16e00c72c9a6d963bea0e6264f623b3f4a3bb227c43ec6668ec62010', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16545, hash: '0e8e676c9122cc89b19df149279c4814db162cf895703e49b70eb437365722a2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZUBEAW75.css': {size: 549, hash: 'D1xM0rBJJS8', text: () => import('./assets-chunks/styles-ZUBEAW75_css.mjs').then(m => m.default)}
  },
};
