// vite.config.ts
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['chrome >= 64'],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
});