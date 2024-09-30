/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/frontend/javascript/**/*.{js,jsx}"],
  important: true,
  theme: {
    extend: {},
  },
  darkmode: 'selector',
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
