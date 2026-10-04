import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aufahanif.supsub.my.id',
  // Emit scripts as files, never inline, so the CSP in nginx.conf can stay script-src 'self'
  vite: { build: { assetsInlineLimit: 0 } },
});
