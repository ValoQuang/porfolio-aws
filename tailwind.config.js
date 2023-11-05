/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        1: "2rem",
      },
      fontFamily: {
        "ibm-plex-mono": ['"IBM Plex Mono"', "monospace"],
      },
      fontSize: {
        20: "20px",
        headline: "54px",
        name: "29px",
      },
      padding: {
        navbar: "20px 72px 20px 72px;",
        main: "150px 72px 150px 72px;",
        link: "4.59px 3.204px 5.58px 3.6px",
        footer: "10px 72px 100px 72px;",
      },
      width: {
        "custom": "600px",
      },
      darkMode: "class",
    },
  },
  plugins: [],
};
