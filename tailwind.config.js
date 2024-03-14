/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      section: "0 8px 0 0 rgba(0, 0, 0, 0.15)",
      button: "inset 0 -4px 0 0 rgba(0, 0, 0, 0.09);",
    },
  },
  plugins: [],
};
