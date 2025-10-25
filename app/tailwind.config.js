module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyanglow: '#00FFF0',
        purpleglow: '#8B5CF6',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
