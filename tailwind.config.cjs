/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#000040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, .7)",
        dimBlue: "rgba(9, 151, 124, .1)",
        inputColor: "rgba(40, 52, 62, 0.07);",
        profileBoxShadow: "0px 4px 17px 2px rgba(0, 0, 0, 0.25);",
        hrColor: "#cfcdcd",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    
  },
  plugins: [],
  darkMode: "class",

}
