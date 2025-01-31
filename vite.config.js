import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Si tu veux charger des variables globales ou des mixins, tu peux ajouter un "prependData"
        additionalData: `@import "./src/assets/styles/variables.scss";`
      }
    }
  }
  build: {
    outDir: 'dist',
  },
})
