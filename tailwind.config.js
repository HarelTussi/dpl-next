module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#0A0A0A",
        gray: "#E0E0E0",
      },
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      borderWidth: {
        0.5: "0.5px",
      },
      lineHeight: {
        10: "40px",
        11: "44px",
        12: "48px",
        13: "52px",
        14: "56px",
        15: "60px",
        16: "64px",
        17: "68px",
        18: "72px",
      },
    },
  },
  plugins: [],
};
