import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/DikCare-VHack/PatientUserMobileApplication/', // Correct base path for GitHub Pages
  build: {
    outDir: '../docs/PatientUserMobileApplication/dist', // Output to the correct location
    emptyOutDir: true, // Ensures old files are removed before building
  },
  plugins: [react()],
})
