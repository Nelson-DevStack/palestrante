/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#E59E57",
      },
      backgroundImage: {
        mainColorBg: "url('./src/assets/bg3.svg')",
      },
    },
  },
  plugins: [],
};
