import react from '@vitejs/plugin-react'
import { createLogger, defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import { fileURLToPath } from 'url'
import { consola } from 'consola/browser'
import { nodePolyfills } from 'vite-plugin-node-polyfills'


const logger = createLogger()
logger.error = (msg, options) => {
  consola.error(msg)
}
logger.info = (msg, options) => {
  consola.info(msg)
}
logger.warn = (msg, options) => {
  if (msg.includes('vite:css') && msg.includes(' is empty')) return
  consola.warn(msg)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), nodePolyfills() ],
  css: {
    // open css index
    devSourcemap: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url))
      }
    ]
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
  },
  customLogger: logger,
  optimizeDeps: {
    exclude: ['fsevents']
  }
})
