import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Dev: './' agar localhost normal. Build: '/LCGNAI2026/' sesuai server subdirectory
  base: command === 'build' ? '/LCGNAI2026/' : './',
  build: {
    // Nonaktifkan minifikasi CSS karena minifier bawaan (LightningCSS) 
    // selalu menghapus properti backdrop-filter saat produksi.
    cssMinify: false,
  },
}))

