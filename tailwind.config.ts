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
        'primary':'rgba(2, 13, 16, 0.2)',
        'secondary':'#d5c9c9',
        'borderColor':'rgba(2, 13, 16, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
