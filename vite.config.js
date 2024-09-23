import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2525 // change here
  },
  resolve: {
    alias: {
      '@models': '/src/models',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@sections': '/src/components/sections',
      '@staticServices': '/src/services',
    },
  },
});
