/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      colors: {
        primary: '#112C4A',
        secondary: '#61C36C',
        footer: '#87A1FF',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      blur: {
        '3xl': '64px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 