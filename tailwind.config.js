/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#2b2b2b",
        primary: "#005E7F",
        accent: "#ffc139",
      },
      backgroundImage: {
        "banner-desk": "url('/dist/img/cinet-banner-desktop.svg')",
        "categ-1": "url('/dist/IMG/categories-drama.jpg')",
        "categ-2": "url('/dist/IMG/categories-cartoons.jpg')",
        "categ-3": "url('/dist/IMG/categories-horror.jpg')",
        "categ-4": "url('/dist/IMG/categories-sci-fi.jpg')",
        "categ-5": "url('/dist/IMG/categories-comedy.jpg')",
      },
    },
  },
  plugins: [],
};
