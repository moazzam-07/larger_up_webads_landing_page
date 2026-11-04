/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#141414',
          soft: '#262626',
        },
        primary: {
          DEFAULT: '#141414',
          foreground: '#ffffff',
        },
        canvas: {
          DEFAULT: '#ffffff',
          soft: '#f3f3f3',
        },
        field: '#f0f0f0',
        hairline: {
          DEFAULT: '#e0e0e0',
          soft: '#f0f0f0',
        },
        muted: {
          DEFAULT: '#707070',
          faint: '#adadad',
        },
        accent: {
          DEFAULT: '#0066ff',
          foreground: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        sm: '16px',
        md: '24px',
        full: '9999px',
      },
      spacing: {
        'section': '80px',
        'section-lg': '120px',
      },
      letterSpacing: {
        tightest: '-0.02em',
      }
    },
  },
  plugins: [],
}

