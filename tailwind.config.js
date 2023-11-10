/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts, js}"],
  theme: {
    extend: {
      colors: {
        'nosferatu-950': '#20212b',
        'tr': '#F3D482',
        'ct': '#8aacdf',
      },
      fontFamily: {
        sans: ['"Inter", "Open Sans"', 'ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwind-dracula")("dracula")],
};
