/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../resources/templates/*.html",
    "../resources/templates/**/*.html",
  ],
  theme: {
    extend: {

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
