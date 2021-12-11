module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#11133b",
        secondary: "#f3600c",
        yellow: "#fdd138",
        "success-color": "#30835d",
        "red-base": "#f53e46",
        "light-green": "#9ee6ce",
        "gray-dark": "#949494",
        "gray-light": "#e7e7e7",
        "gray-base": "#d9d9d9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
