
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  base: '/kedai-pikul/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },

  server: {
    // HMR configuration
    hmr: process.env.DISABLE_HMR !== 'true',

    // Disable file watching when required
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
