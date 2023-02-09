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
      },
    },
  },
  plugins: [],
};
