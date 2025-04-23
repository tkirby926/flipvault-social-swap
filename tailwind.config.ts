
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        pressstart: ['"Press Start 2P"', "cursive"],
        inter: ['Inter', "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#000",
        foreground: "#FFF",
        primary: {
          DEFAULT: "#8B5CF6", // purple, 80s accent
          foreground: "#FFF",
        },
        accent: {
          DEFAULT: "#1EAEDB",
        },
        card: {
          DEFAULT: "#FFF",
          foreground: "#222",
        },
        // retain existing for reference
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "slide-down-fade": {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "typewriter": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-70px)"},
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(70px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.6) rotate(-10deg)" },
          "80%": { opacity: "1", transform: "scale(1.12) rotate(2deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        "slide-down-fade": "slide-down-fade 1s cubic-bezier(0.6,0.05,0.1,0.9) both",
        "typewriter": "typewriter 2s steps(40,end) 0.2s both",
        "slide-in-left": "slide-in-left 1s cubic-bezier(0.7,0.01,0.1,1) both",
        "slide-in-right": "slide-in-right 1s cubic-bezier(0.7,0.01,0.1,1) both",
        "pop-in": "pop-in 0.7s cubic-bezier(0.4,2,0.6,1) both",
        "fade-up": "fade-up 0.8s cubic-bezier(0.65,0,0.35,1) both"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

