/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
