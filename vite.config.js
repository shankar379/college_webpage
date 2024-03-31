import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      inputs: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'Login/index.html'),
      }
    }
  }
})
