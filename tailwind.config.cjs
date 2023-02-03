/** @type {import('tailwindcss').Config} */


const {themeFromSourceColor, hexFromArgb, argbFromHex} = require("@importantimport/material-color-utilities");
const CamelToDashCase = require("./src/utils/CamelToDashCase.cjs");

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
          colors[CamelToDashCase(key)] = hexFromArgb(lightThemeVariables[key]);
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
