/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      animation: {
        flip: "flip 2s linear infinite",
      },
      keyframes: {
        flip: {
          "0%, 100%": { transform: "rotate(0)" },
          "50%": { transform: "rotate(180deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
