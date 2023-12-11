/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/preline/dist/*.js',
    "../resources/templates/**/*.{html,js}",
  ],
  plugins: [
    require('preline/plugin'),
  ],
}
