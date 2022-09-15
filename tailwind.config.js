const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'custom-purple': '#6C63FF',
        'custom-purple-hover': '#7a63ff',
        'menu-dark': '#212121',
        'custom-black': '#181818',
        'custom-green': '#73C6B6',
        'custom-green-hover': '#73c6c5',
      },
      keyframes: {
        animate: {
          '0%, 100%': { top: '0' },
          '12%': { top: '0' },
          '17%': { top: '-5rem' },
          '29%': { top: '-5rem' },
          '33%': { top: '-10rem' },
          '45%': { top: '-10rem' },
          '50%': { top: '-15rem' },
          '62%': { top: '-15rem' },
          '66%': { top: '-20rem' },
          '78%': { top: '-20rem' },
          '83%': { top: '-25rem' },
          '95%': { top: '-25rem' },
        },
      },
      animation: {
        animated: 'animate 16s ease infinite',
      },
    },
    screens: {
      vs: '330px',
      sm: '500px',
      md: '890px',
    },
  },
};
