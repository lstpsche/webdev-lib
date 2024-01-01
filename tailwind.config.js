/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/frontend/javascript/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
