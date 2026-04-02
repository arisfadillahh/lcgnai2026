import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    // Nonaktifkan minifikasi CSS karena minifier bawaan (LightningCSS) 
    // selalu menghapus properti backdrop-filter saat produksi.
    cssMinify: false,
  },
})

