// vite.config.ts
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
  },
  plugins: [
    legacy({
      targets: ['chrome >= 64'], // expected compatible browser target range
      renderLegacyChunks: true, // need to generate legacy browser compatible chunks (default true)
      modernPolyfills: true, // no need to generate polyfills block for modern browsers (default false)
    }),
  ],
});