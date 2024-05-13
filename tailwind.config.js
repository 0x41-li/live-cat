/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        comic: ["Comic Sans", "sans-serif"],
      },
      colors: {
        primary: "#FF66C4",
        secondary: "#38B6FF",
      },
    },
  },
  plugins: [],
};
