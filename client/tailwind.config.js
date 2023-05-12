/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "verde": "#39b183",
        "verde-dark": "#339e75",
        "verde-light": "#42c291",
      },
    },
  },
  plugins: [],
}

