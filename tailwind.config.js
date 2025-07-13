/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glitch1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-2px, -2px)" },
          "40%": { transform: "translate(2px, 2px)" },
        },
        glitch2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(2px, -2px)" },
          "40%": { transform: "translate(-2px, 2px)" },
        },
      },
      animation: {
        glitch1: "glitch1 1s infinite",
        glitch2: "glitch2 1s infinite",
      },
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#010103",
          200: "#0E0E10",
          300: "#1C1C21",
          500: "#3A3A49",
          600: "#1A1A1A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#E4E4E6",
          700: "#D6D9E9",
          600: "#AFB0B6",
          500: "#62646C",
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
