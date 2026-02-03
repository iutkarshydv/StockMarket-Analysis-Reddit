/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wsb: {
          green: '#4ade80',
          red: '#f87171',
          blue: '#60a5fa',
        }
      }
    },
  },
  plugins: [],
}
