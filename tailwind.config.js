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
        silver: "#7a7a7a", //Text color
        aquaHaze: "#f4f8f9", //bookmark button
        doveGray: "#707070",
        keppel: "#3cb4ab", //acitve button
        surfieGreen: "#157a74", //disabled button
        alabaster: "#fafafa", // main bg
      },
      backgroundImage: {
        headerDesktop: "url('/src/assets/img/header-desktop.jpg')",
        headerMobile: "url('/src/assets/img/header-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
