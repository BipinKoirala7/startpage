/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#141414",
        primary: "#171717",
        secondary: "#252422",
        tertiary: "#C6A5F1",
        neutral:"#403D39",
        accent1: "#ffebcd",
        accent2: "#C94343",
        accent3: "#EB5E28",
        text:"#FFFCF2"
      },
    },
  },
  plugins: [],
};
