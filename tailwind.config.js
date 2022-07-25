module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        sapphire: {
          50: '#f5f6fa',
          100: '#ebedf4',
          200: '#ccd1e4',
          300: '#adb5d3',
          400: '#707eb2',
          500: '#324691',
          600: '#2d3f83',
          700: '#26356d',
          800: '#1e2a57',
          900: '#192247'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
