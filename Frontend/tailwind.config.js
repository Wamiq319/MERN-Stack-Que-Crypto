/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the HTML file in the root
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript/TypeScript and JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#b9e622", // Custom primary green color
        secondaryBlue: "#366ce3", //Custom blue color
        darkGreen: "#008037", // Custom dark green color
        white: "#FFFFFF", // White (already default in Tailwind)
        darkGray: "#808080", // Custom dark gray color
        textBlack: "#2d2e2d", // Custom text black color
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Applying Poppins font family globally
      },
      transformOrigin: {
        center: "50% 50%",
      },
      rotate: {
        y: "180deg",
      },
    },
  },
  plugins: [],
};
