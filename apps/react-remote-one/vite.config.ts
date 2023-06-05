import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'reactRemoteOne',
      filename: 'remoteEntry.js',
      remotes: {
        store: 'http://localhost:7003/assets/store.js'
      },
      exposes: {
        './component': './src/App.jsx',
        './bootstrap': './src/bootstrap.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
})
