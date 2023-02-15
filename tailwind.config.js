/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          700: "hsla(0, 0%, 15%)",
          800: "hsla(0, 0%, 6%)",
          900: "hsla(0, 0%, 3%)",
          full: "hsla(0, 0%, 0%)",
        },
        gray1: "hsl(0, 0%, 8.5%)",
        gray2: "hsl(0, 0%, 11.0%)",
        gray3: "hsl(0, 0%, 13.6%)",
        gray4: "hsl(0, 0%, 15.8%)",
        gray5: "hsl(0, 0%, 17.9%)",
        gray6: "hsl(0, 0%, 20.5%)",
        gray7: "hsl(0, 0%, 24.3%)",
        gray8: "hsl(0, 0%, 31.2%)",
        gray9: "hsl(0, 0%, 43.9%)",
        gray10: "hsl(0, 0%, 49.4%)",
        gray11: "hsl(0, 0%, 62.8%)",
        gray12: "hsl(0, 0%, 93.0%)",
      },
    },
  },
  plugins: [],
};
