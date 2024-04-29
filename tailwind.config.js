/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",

      },
      colors: {
        primary: "#B00013",
        secondary: "#EAEAEA",
      },
      fontFamily: {
        roboto: ["Roboto"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
