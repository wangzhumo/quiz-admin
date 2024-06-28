/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px'
      },
      colors: {
        'black-main': '#1A1B1C',
        'black-second': '#333333',
        'black-hover': '#555555',
        secondary: '#999999',
        line: '#333333',
        'line-hover': '#555555'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false
  }
}
