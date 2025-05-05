import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/FloatingMenu.js'),
      name: 'FloatingMenu',
      fileName: (format) => `FloatingMenu.${format}.js`,
      formats: ['umd', 'es'],
    },
    outDir: 'dist',
  }
})
