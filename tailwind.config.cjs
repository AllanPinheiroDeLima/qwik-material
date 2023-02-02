/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#f00"
      },
    },
  },
  plugins: [

  ],
};
