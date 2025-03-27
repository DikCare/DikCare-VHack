/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo color for active navigation
        secondary: "#10B981", // Emerald for success states
        danger: "#EF4444", // Red for alerts/danger states
      },
    },
  },
  plugins: [],
}