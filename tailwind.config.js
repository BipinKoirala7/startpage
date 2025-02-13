/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: " #191A22",
        primary: "#21232D",
        secondary: "#A6F1C9",
        tertiary:"#C6A5F1",
        input: " #16171E",
        accent1: "#ffebcd",
        accent2: "#C94343ff",
      },
    },
  },
  plugins: [],
};
