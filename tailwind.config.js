module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        app: {
          'primary-green': '#07A098',
          'primary-blue': '#0EB4F6',
          'body-gray': '#686868'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
