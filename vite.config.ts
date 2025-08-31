import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    // Enable code splitting for better loading performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framerMotion: ['framer-motion'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        }
      }
    },
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable sourcemaps for production debugging
    sourcemap: false,
    // Use esbuild for faster minification (default in Vite)
    minify: 'esbuild'
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lucide-react'],
  },
  
  // Add CSS code splitting
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
});
