module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e7f1f7',
          dark: '#009edd'
        },
        secondary: '#003755'
      }
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'cta': '#008cdd',
    }),
  },
  variants: {
    extend: {
      gradientColorStops: ['active', 'group-hover'],
      opacity: ['disabled'],
    }
  },
  plugins: [],
}
