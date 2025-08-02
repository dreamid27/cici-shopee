// @ts-ignore
import tailwindcss from '@tailwindcss/vite'
import path, { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': path.resolve(__dirname, './src/renderer')
      }
    },
    plugins: [react(), tailwindcss()]
  }
})
