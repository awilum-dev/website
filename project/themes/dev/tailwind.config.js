module.exports = {
  content: ["./assets/src/**/*.{html,js,css}", "./**/*.html", "../../**/*.md"],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('prettier-plugin-tailwindcss')
  ]
}
