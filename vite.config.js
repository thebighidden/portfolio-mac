import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '#components': '/src/components',
      '#constants': '/src/constants',
      '#context': '/src/context',
      '#store': '/src/store',
      '#hoc': '/src/hoc',
      '#hwindows': '/src/hwindows',
    }
  }
})
