/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extends: {
      colors:{
        main: '#E1A93B'
      }
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      primary: colors.slate,
      secondary: '#E1A93B',
      accent: '#F6F077',
      main: '#E1A93B',
      dark: '#496372'
    },
    fontFamily: {
      sans: ['Hind', 'sans-serif'],
      display: ['Saira Extra Condensed', 'sans-serif']
    },
    
  },
};
