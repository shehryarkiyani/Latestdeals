/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
      primary: {
        DEFAULT: "#72147E",
        dark: "#5A0064",
        darker: "#640053",
      },
      secondary: {
        DEFAULT: "#F0F2F5",
        dark: "#E4E6E9",
        darker: "#DEE0E3",
      },
      danger: {
        DEFAULT: "#FFBB00",
        dark: "#F2B200",
      },
      
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'segoe': ['"Segoe UI"'],
    },
  },
  plugins: [],
};
