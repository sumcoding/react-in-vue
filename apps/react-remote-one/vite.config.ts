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
      // shared: {
      //   react: {
      //     generate: false,
      //     version: '^18.2.0',
      //     requiredVersion: '^18.2.0',
      //   }, 'react-dom': {}
      // }
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
    // rollupOptions: {
    //   // Externalize deps that shouldn't be bundled into the library
    //   external: ["react", "react-dom"],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       react: "React",
    //     },
    //   },
    // }
  }
})
