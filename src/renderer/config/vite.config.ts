import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export function getRendererConfig() {
  return defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@renderer': resolve(__dirname, './src')
      }
    }
  })
}
