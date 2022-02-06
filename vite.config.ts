import { defineConfig } from 'vite'
import tsconfigpaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigpaths()]
})
