import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: 'vueRemoteOne',
      filename: 'remoteEntry.js',
      remotes: {
        store: 'http://localhost:7003/assets/store.js',
      },
      exposes: {
        './bootstrap': './src/bootstrap.js',
        './component': './src/App.jsx'
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext',
    minify: true,
    cssCodeSplit: true,
  }
})
