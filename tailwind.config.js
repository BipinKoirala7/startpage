/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        surface: "var(--surface-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        neutral: "var(--neutral-color)",
        accent1: "var(--accent-color1)",
        accent2: "var(--accent-color2)",
        accent3: "var(--accent-color3)",
        text: "var(--text-color)"
      },
    },
  },
  plugins: [],
};

        // tertiary: "#27272a",
        // tertiary: "#27272a",
// surface: "#2c2c2c",

// {
//   background: "#171717",
//   surface:"#1c1c1c",
//   primary: "#232323",
//   secondary: "#2f2f2f",
//   tertiary: "#27272a",
//   neutral:"#666666",
//   accent1: "#ffebcd",
//   accent2: "#C94343",
//   accent3: "#EB5E28",
//   text:"#FFFCF2"
// }