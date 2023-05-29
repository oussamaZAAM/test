/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-500': "rgb(179, 198, 255, 1)",
        'main-400': "rgb(179, 198, 255, 0.75)",
        'main-300': "rgb(179, 198, 255, 0.5)",
        'main-200': "rgb(179, 198, 255, 0.25)",
        'main-100': "rgb(179, 198, 255, 0.1)",
      }
    },
  },
  plugins: [],
}
