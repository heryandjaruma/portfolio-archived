/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neurablue: "#B4BDCB",
        neuraindigo: "#BAB4CB",
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
