import { defineConfig } from 'vite'
import path from 'path'
// import react from '@vitejs/plugin-react-swc'
// import { pluginoptions } from '@mightymeld/runtime';

// const swcPlugins = [];

// if (process.env.MIGHTYMELD) {
//   swcPlugins.push(['@mightymeld/runtime/swc-plugin-mightymeld', pluginoptions()]);
// }

import react from "@vitejs/plugin-react";

const conditionalPlugins = [];

if (process.env.MIGHTYMELD) {
  conditionalPlugins.push("@mightymeld/runtime/babel-plugin-mightymeld");
}


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react({
      // plugins: swcPlugins
      babel: {
        plugins: [...conditionalPlugins],
      },
    })
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
