import { from } from "node:stream/iter";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInDown:{
        "0%":{transform: "translateY(-200%)",opacity:"0"},
        "100%":{transform: "translateY(0)",opacity: "1"},
        },
      },
      animation: {
        'wiggle': "wiggle 1s ease-in-out infinite",
        'fade-in-up': "fade-in-up 0.5s ease-out downwards",
        'slideInDown':"slideInDown 3s ease-out",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        ink: "#141414",
        paper: "#F7F6F3",
        line: "#E4E2DC",
        muted: "#6F6D67",
      },
      borderRadius: {
        card: "20px",
        pill: "999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
