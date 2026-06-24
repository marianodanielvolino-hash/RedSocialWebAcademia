import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: '../wordpress-theme/red-social-academia/assets',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: 'js/frs-portal.js',
        chunkFileNames: 'js/frs-portal-chunk.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/frs-portal.css';
          }
          return '[name].[ext]';
        }
      }
    }
  }
})
