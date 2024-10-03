/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#DB4444",
        customWhite: "#F5F5F5",
        customYellow: "#FFAD33",
        customBlack: "#030406",
        customSlate: "#7D8184", // Corrected the spelling to 'customSlate'
      },
    },
  },
  plugins: [],
};
