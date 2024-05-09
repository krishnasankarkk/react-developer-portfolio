/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'light': '#DBE2EF',
      'dark': '#101010',
      'transparent': '#101010BB',
      'blue': '#0088ee',
      'green': '#16fff3',
    },
  },
  plugins: [],
}

