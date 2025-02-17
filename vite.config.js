import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  server: {
    port: 5173,
    strictPort: true, // Garante que ele não mude para outra porta
  },
})
