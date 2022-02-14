import { defineConfig } from 'vite'
import tsconfigpaths from 'vite-tsconfig-paths'

const isProduction = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigpaths()],
  base: isProduction ? '/Password-Generator-Devjam/' : '/'
})
