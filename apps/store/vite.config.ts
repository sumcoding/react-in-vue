import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'store',
      filename: 'store.js',
      exposes: {
        './xoid': './src/store-xoid.js',
      },
      shared: ['xoid']
    })
  ],
  build: {
    target: 'esnext',
    minify: true,
    cssCodeSplit: true,
  }
})
