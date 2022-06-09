import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
console.log(process.env.NODE_ENV)
const isPro = process.env.NODE_ENV === 'production'
// https://vitejs.dev/config/
export default defineConfig({
  base:isPro ? '/vite-shop-admin/':'/',
  plugins: [vue()]
})
