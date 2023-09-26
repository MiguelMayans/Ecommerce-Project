/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "custom": ["Space Age"]
    },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "detail-color": "var(--detail-color)",
        "stroke-color": "var(--stroke-color)"
      },
    },
  },
  plugins: [],
}

