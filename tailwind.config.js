/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        wildSand: "#f6f6f6", //border section
        silverChalice: "#a0a0a0",
        silver: "#cbcbcb", //Text color
        aquaHaze: "#f4f8f9", //bookmark button
        doveGray: "#707070",
        keppel: "#3cb4ab", //acitve button
        surfieGreen: "#157a74", //disabled button
        alabaster: "#fafafa", // main bg
      },
    },
  },
  plugins: [],
};
