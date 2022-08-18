module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./_includes/**/*.{js,ts,jsx,tsx}",
    "./_layouts/**/*.{js,ts,jsx,tsx}",
    "./_blog/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        hint: "#696F8C",
        primary: "#1C0732",
        success: "#51BD93",
        accent: "#878ede",
        litmus: "#5b44ba",
        bg1: "#1c0732",
        disabled: "#BCB9C6",
        highlight: "#F7F8FA",
        overlay: "rgba(0,0,0,0.5)",
        backdrop: "rgba(0,0,0,0.8)",
        intuit: "#000000",
        orange: "#000000",
        lenskart: "#005797",
        anutanetworks: "#03B5B0"
      },
      backgroundImage: theme => ({
        halodoc: "url('/adoptersPage/halodocHero.webp')",
        kitopi: "url('/adoptersPage/kitopiHero.webp')"
      }),

      height: {
        200: "200px",
        300: "300px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
}
