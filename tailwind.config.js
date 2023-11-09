/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts, js}"],
  theme: {
    extend: {
      colors: {
        'nosferatu-950': '#20212b',
      },
      fontFamily: {
        sans: ['"Inter", "Open Sans"', 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwind-dracula")("dracula")],
};
