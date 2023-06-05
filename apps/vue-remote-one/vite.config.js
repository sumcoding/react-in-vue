import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'vueRemoteOne',
      filename: 'remoteEntry.js',
      remotes: {
        store: 'http://localhost:7003/assets/store.js',
      },
      exposes: {
        './bootstrap': './src/bootstrap.js',
        './component': './src/App.vue'
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
