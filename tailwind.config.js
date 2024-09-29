/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/frontend/javascript/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  darkmode: 'selector',
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
