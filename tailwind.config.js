/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'russo': ['Russo One', 'sans-serif'],
      },
      colors: {
        primary: "#1a1a1a", // Updated based on the image color
        secondary: "#1a1a1a",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
