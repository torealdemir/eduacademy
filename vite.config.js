import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// repo adını buraya yaz: /patikaacademy/
export default defineConfig({
  plugins: [react()],
  base: '/eduacademy/',
})
