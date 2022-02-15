module.exports = {
  content: ['./components/**/*.tsx', './public/**/*.html', './src/**/*.tsx'],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      inset: {
        "17": "68px",
        "18": "72px",
        "19": "76px"
      }
    },
  },
  plugins: [],
}