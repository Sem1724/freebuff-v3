import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// VITE_BASE diisi otomatis oleh GitHub Actions (mis. "/nama-repo/").
// Untuk repo bernama <username>.github.io atau domain sendiri, biarkan "/".
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
  server: { port: 5173, strictPort: false },
})
