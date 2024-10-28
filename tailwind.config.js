/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Crimson Pro", "serif"],
        lora: ["Lora", "serif"],
      },
      colors: {
        tealCustom: "#008080", // Add custom teal color
        lightBlue: "#E1EBEE", // Custom light blue/grey color
        lightCyan: "#E0FFFF",
      },
    },
  },
  plugins: [],
};
