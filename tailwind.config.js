/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'nosferatu-950': '#20212b',
      }
    },
  },
  plugins: [require("tailwind-dracula")("dracula")],
};
