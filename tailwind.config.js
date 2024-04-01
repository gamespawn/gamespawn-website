/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ["var(--font-russo)"],
        monda: ["var(--font-monda)"],
        start: ["var(--font-start)"],
      },
      colors: {
        game: {
          black: "#1E1E1E",
          "blue-100": "#00BDEC",
          "blue-200": "#0099C2",
          "blue-300": "#008EBA",
          "blue-400": "#08789A",
        },
      },
    },
  },
  plugins: [],
};
