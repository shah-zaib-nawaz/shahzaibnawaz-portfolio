import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#090909",
        panel: "#101010",
        ink: "#f2efeb",
        muted: "#a09c9a",
        brandRed: "#ef4151",
        btnRed: "#ca2032",
        line: "#292323",
      },
      fontFamily: {
        body: ["var(--font-manrope)", "Manrope", "sans-serif"],
        display: ["var(--font-anton)", "Anton", "Impact", "sans-serif"],
        handwriting: ["var(--font-caveat)", "Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
