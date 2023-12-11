/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/preline/dist/*.js',
    "../resources/templates/**/*.{html,js}",
  ],
  plugins: [
    require('preline/plugin'),
  ],
}
