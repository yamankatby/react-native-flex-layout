module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
