import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx,js,jsx,css,html}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
