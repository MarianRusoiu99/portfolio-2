# Install Terser (optional - for better compression)

If you want to use Terser instead of esbuild for minification:

```bash
npm install --save-dev terser
```

Then update vite.config.ts:

```typescript
build: {
  minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true
    }
  }
}
```

## Current Configuration (Recommended)

The current setup uses esbuild which is:
- ✅ Faster build times
- ✅ No additional dependencies 
- ✅ Built into Vite
- ✅ Good minification results
- ✅ Better for CI/CD environments
