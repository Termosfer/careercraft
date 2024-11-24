import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression({
    algorithm: 'gzip',
    ext: '.gz',
    deleteOriginFile: false,
  })],
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
  },
  optimizeDeps: {
    include: ['react-progressbars-with-indicator'],
  },
});
