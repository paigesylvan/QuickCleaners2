/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/layout.{js,jsx,ts,tsx}",
    './src/pages/**/*.{html,js,ts}',
    './src/components/**/*.{html,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
