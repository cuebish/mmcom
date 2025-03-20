/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f1942',
          light: '#1a2a5c',
        },
        secondary: {
          DEFAULT: '#8df7bd',
          dark: '#7de5ad',
        },
        background: {
          primary: '#ffffff',
          accent: '#E1F9FF',
          team: '#ebf4ff',
          gray: '#f0f2f3',
        },
      },
      fontFamily: {
        sans: [
          'Helvetica Now',
          'Montserrat',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif'
        ],
      },
      borderRadius: {
        'cta': '1rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};