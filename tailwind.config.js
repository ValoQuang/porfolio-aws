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
        headline: "54px",
        name: "29px",
      },
      padding: {
        navbar: "0px 48px 0px 48px;",
        main: "60px 80px 0px 80px;",
        link: "4.59px 3.204px 5.58px 3.6px",
        footer: "10px 72px 100px 72px;",
      },
      backgroundColor: {
        graph: "rgba(52,53,65,var(--tw-bg-opacity))",
      },
      darkMode: "class",
      width: {
        status: "480px",
      },
      height: {
        status: "329px",
      }
    },
  },
  plugins: [],
};
