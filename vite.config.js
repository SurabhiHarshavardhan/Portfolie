import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // Dynamic port: reads from process.env.PORT or .env PORT, fallback to 3000
  // strictPort: false ensures if the port is occupied, it dynamically picks the next available port
  const port = parseInt(env.PORT || process.env.PORT || '3000', 10)

  return {
    plugins: [react()],
    server: {
      port: port,
      strictPort: false,
      host: true
    },
    preview: {
      port: port,
      strictPort: false,
      host: true
    }
  }
})

