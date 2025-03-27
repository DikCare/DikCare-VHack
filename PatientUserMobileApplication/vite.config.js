import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DikCare-VHack/PatientUserMobileApplication/', // Replace 'dikcare' with your repository name
})
