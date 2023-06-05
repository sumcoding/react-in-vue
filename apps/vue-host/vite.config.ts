import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({  
  plugins: [
    vue(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        reactRemoteOne: 'http://localhost:7001/assets/remoteEntry.js',
        reactRemoteTwo: 'http://localhost:7002/assets/remoteEntry.js',
        vueRemoteOne: 'http://localhost:7004/assets/remoteEntry.js',
        vueRemoteTwo: 'http://localhost:7005/assets/remoteEntry.js',
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext',
    minify: true,
    cssCodeSplit: true,
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
})
