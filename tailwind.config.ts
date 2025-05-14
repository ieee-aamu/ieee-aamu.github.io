import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fdf6f5",
          100: "#f9e5e3",
          200: "#eebdb8",
          300: "#e2918a",
          400: "#d55e55",
          500: "#9e3b2d",
          600: "#872e23",
          700: "#6f221b",
          800: "#5a1914",
          900: "#49130f",
        },
      },
      fontFamily: {
        sans: ["Verdana", "Geneva", "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
