import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  css: {
    // open css index
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@': '/src',
      src: '/src'
    }
  },
  json: {
    namedExports: true,
    stringify: true
  },
  build: {
    outDir: 'build',
    manifest: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {}
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
