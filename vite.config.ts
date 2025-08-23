import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'router': ['react-router-dom'],
          'icons': ['lucide-react'],
          // Component chunks
          'components': [
            './src/components/sections/HeroSection.tsx',
            './src/components/sections/AboutSection.tsx',
            './src/components/sections/SkillsSection.tsx'
          ],
          'project-components': [
            './src/components/sections/ProjectsSection.tsx',
            './src/components/sections/ContactSection.tsx',
            './src/components/sections/Footer.tsx'
          ]
        }
      }
    },
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 400,
    // Enable source maps for debugging but keep them small
    sourcemap: false,
    // Aggressive minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    }
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['lucide-react'],
  },
  
  // Performance optimizations
  server: {
    fs: {
      strict: false
    }
  }
});
