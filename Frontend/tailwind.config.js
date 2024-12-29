/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the HTML file in the root
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript/TypeScript and JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#07ff88", // Custom primary green color
        lightGreen: "#E6F8E6", // Custom light green color
        darkGreen: "#008037", // Custom dark green color
        white: "#FFFFFF", // White (already default in Tailwind)
        darkGray: "#808080", // Custom dark gray color
        textBlack: "#2d2e2d", // Custom text black color
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Applying Poppins font family globally
      },
    },
  },
  plugins: [],
};
