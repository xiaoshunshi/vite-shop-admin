import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/vite-shop-admin',
  publicDir:'/vite-shop-admin',
  plugins: [vue()]
})
