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
      },
      boxShadow: {
        'pop-up': '1px 2px 10px rgba(169, 169, 169, 0.12)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
