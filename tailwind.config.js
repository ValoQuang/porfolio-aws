/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      backgroundColor: {
        'custom-1': '#33332d',
        'custom-2': '#ff5733',
        'custom-3': '#12a4d9',
      },
      textColor: {
        'custom-1': '#fff', // Define a custom text color
        'custom-2': '#ff5733', // Define another custom text color
        // Add more custom text colors as needed
      },
      spacing: {
        '1': '2rem',
      },
      fontFamily: {
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

