import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': resolve(__dirname, "./src"),
      '@comp': resolve(__dirname, "./src/components"),
      '@svg': resolve(__dirname, "./src/svg")
    }
  }
})
