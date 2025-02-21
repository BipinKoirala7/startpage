/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1c1c1c",
        surface:"#232323",
        primary: "#2f2f2f",
        secondary: "#27272a",
        tertiary: "#C6A5F1",
        neutral:"#666666",
        accent1: "#ffebcd",
        accent2: "#C94343",
        accent3: "#EB5E28",
        text:"#FFFCF2"
      },
    },
  },
  plugins: [],
};

// surface: "#2c2c2c",