/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./presets.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
