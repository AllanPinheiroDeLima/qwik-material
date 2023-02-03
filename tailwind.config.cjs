/** @type {import('tailwindcss').Config} */


const {themeFromSourceColor, hexFromArgb, argbFromHex, redFromArgb, greenFromArgb, blueFromArgb} = require("@importantimport/material-color-utilities");
const CamelToDashCase = require("./src/utils/CamelToDashCase.cjs");

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    },
    extend: {
      colors: () => {
        const theme = themeFromSourceColor(argbFromHex("#9588B6"))
        const colors = {};

        const lightThemeVariables = theme.schemes.light.props;
        for (const key in lightThemeVariables) {
          const argbColor = lightThemeVariables[key];
          const red = redFromArgb(argbColor);
          const green = greenFromArgb(argbColor);
          const blue = blueFromArgb(argbColor);

          colors[CamelToDashCase(key)] = `rgb(${red}, ${green}, ${blue})`;
        }

        return {
          ...colors
        }
      },
    },
  },
  plugins: [

  ],
};
