/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-1": "#33332d",
        "custom-2": "#ff5733",
        "custom-3": "#12a4d9",
      },
      textColor: {
        "custom-2": "#ff5733",
      },
      spacing: {
        1: "2rem",
      },
      fontFamily: {
        "ibm-plex-mono": ['"IBM Plex Mono"', "monospace"],
      },
      fontSize: {
        link: "20px",
        headline: "54px",
        name: "29px",
      },
      padding: {
        navbar: "20px 72px 20px 72px;",
        main: "150px 72px 50px 72px;",
        link: "4.59px 3.204px 5.58px 3.6px",
        footer: "90px 72px 90px 72px;",
      },
    },
  },
  plugins: [],
};
