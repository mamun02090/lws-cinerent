/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js, jsx}", "./*.{html}", "./src/**/*"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        primary: "#00D991",
      },
    },
  },
  plugins: [],
};
