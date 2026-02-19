import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gf: {
          lime: "#C7FF1A",
          ink: "#0B0F12"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)"
      }
    },
  },
  plugins: [],
} satisfies Config;
