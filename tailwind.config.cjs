/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#E8E8E8",
        bgSecondary: "#9C9C9C",
      },
    },
  },
  plugins: [require("daisyui")],
};
