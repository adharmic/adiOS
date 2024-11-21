import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cobalt: "var(--cobalt)",
        lavender: "var(--lavender)",
        valley: "var(--valley)",
        sand: "var(--sand)",
      },
    },
  },
  plugins: [],
} satisfies Config;
