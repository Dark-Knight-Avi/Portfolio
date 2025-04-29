import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from 'vite-plugin-prerender'
import ssr from 'vite-plugin-ssr/plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), ssr(),
    prerender({
      staticDir: 'dist',
      routes: ['/', '/#about', '/#experience', '/#work', '/#reviews', '/#contact']
    })
  ],
})
