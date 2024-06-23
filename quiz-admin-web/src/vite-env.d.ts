/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'production'
  readonly MODE: 'development' | 'production'
  readonly GENERATE_SOURCEMAP: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}