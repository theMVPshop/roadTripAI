import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  env: {
    SECRET_KEY: process.env.VITE_SECRET_KEY,
  },
})
