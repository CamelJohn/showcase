import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
      interval: 1000,
    },
    middlewareMode: false,
  },
  resolve: {
    alias: {
      '@mocks': path.resolve(__dirname, 'apps/storefront/src/mocks'),
    },
  },
  publicDir: 'public',
});
