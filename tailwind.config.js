/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },

    colors: {
      blue: '#1fb6ff',
      purple: {
        100: '#292738',
        200: '#363447',
      },
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#dfb160',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [],
};
