/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#691a74",
        secondary: "#FED33C",
        primaryalt: "#ff7ba7",
        mainalt: "#7D7D7D",
        mainRed: "#E30613",
        main: "#434344",
        main2: "#F3F3F3",
        main3: "#B5B5B5",
        green: "#4CA735"
      },
      fontFamily: {
        'oxanium': ["Oxanium", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
