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
    },
    screens: {
      md: '890px',
    },
  },
};
