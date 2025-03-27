import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/DikCare-VHack/PatientUserMobileApplication/",
  build: {
    outDir: "../docs/PatientUserMobileApplication/dist", // Ensure the build output is in docs/
  },
})
