import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// GitHub Pages serves the site from /<repo-name>/. Change this if the repo is renamed.
const BASE = '/kav-kachol/';

// CSP is injected only into the production build: in dev, Vite injects CSS through
// <style> tags, which this policy would block.
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ');

function cspPlugin() {
  return {
    name: 'inject-csp',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        '<!--CSP-->',
        `<meta http-equiv="Content-Security-Policy" content="${CSP}">`
      );
    },
  };
}

export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    cspPlugin(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: [
        'icons/favicon-32.png',
        'icons/apple-touch-icon.png',
        'icons/icon-192.png',
        'icons/icon-512.png',
        'icons/icon-512-maskable.png',
      ],
      manifest: {
        // Explicit app identity. Without it Chrome uses start_url, and a stale record from an
        // earlier install attempt made Android report "already installed" with no app present.
        id: `${BASE}app`,
        name: 'קו כחול — חוקי ההוקי',
        short_name: 'קו כחול',
        description: 'לימוד חוקי הוקי קרח בעברית',
        lang: 'he',
        dir: 'rtl',
        start_url: BASE,
        scope: BASE,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#EEF3F6',
        theme_color: '#132235',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Everything the app needs is static, so precache it all: the app works fully offline.
        globPatterns: ['**/*.{js,css,html,png,svg,woff,woff2}'],
        cleanupOutdatedCaches: true,
        navigateFallback: `${BASE}index.html`,
      },
    }),
  ],
});
