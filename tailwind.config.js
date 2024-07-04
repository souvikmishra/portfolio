/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        github: '#211F1F',
        instagram: '#E4405F',
        twitter: '#000',
        linkedin: '#0A66C2',
      },
      screens: {
        tablet: '768px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
