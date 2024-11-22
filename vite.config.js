import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@imgs': '/src/imgs', // A partir de agora você pode usar @imgs como a raiz das imagens
    },
  },
})
