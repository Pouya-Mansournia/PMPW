import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'site-verification-meta',
      transformIndexHtml() {
        const tags = [];
        if (process.env.GOOGLE_SITE_VERIFICATION) {
          tags.push({ tag: 'meta', attrs: { name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION }, injectTo: 'head' });
        }
        if (process.env.BING_SITE_VERIFICATION) {
          tags.push({ tag: 'meta', attrs: { name: 'msvalidate.01', content: process.env.BING_SITE_VERIFICATION }, injectTo: 'head' });
        }
        return { tags };
      }
    }
  ],
  server: { host: '0.0.0.0', port: 5173 },
  build: { outDir: 'dist', sourcemap: false }
});
