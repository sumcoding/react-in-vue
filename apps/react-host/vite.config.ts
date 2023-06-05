import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'reactHost',
      filename: 'remoteEntry.js',
      remotes: {
        reactRemoteOne: 'http://localhost:7002/assets/remoteEntry.js',
        reactRemoteTwo: 'http://localhost:7001/assets/remoteEntry.js',
        vueRemoteOne: 'http://localhost:7004/assets/remoteEntry.js',
        vueRemoteTwo: 'http://localhost:7005/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
})
