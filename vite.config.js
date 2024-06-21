import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://youtube-backend-oi4y.onrender.com/api/v1'
    }
  }
})
