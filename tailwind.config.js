/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5348ce",
        darkprimary: "#352ba5",
        lightprimary: "#887dfd",
        blu: "#006af9",
        darkblu: "#004096",
        lightblu: "#4896ff",
        turq: "#14c8c8",
        darkturq: "#13a6a6",
        lightturq: "#67e9e9",
      },
      fontFamily: {
        display: ["Inter"],
        body: ["Roboto"],
        code: ["Fira Code"],
      },
    },
  },
  plugins: [],
};
