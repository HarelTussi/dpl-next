module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: " #0a0a0a",
          90: "#424242",
          80: "#616161",
          70: "#757575",
          60: "#9e9e9e",
          50: "#e0e0e0",
          40: "#e0e0e0",
          30: "#ededed",
          20: "#f5f5f5",
          10: "#ffffff",
        },
        success: {
          50: "#01b047",
          100: "#e9faf0",
        },
        error: {
          50: "#ff0202",
          100: "#fff1f1",
        },
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
      maxWidth: {
        "36ch": "36ch",
        "54ch": "54ch",
      },
      spacing: {
        "-10px": "-10px",
        "-2px": "-2px",
        "-1px": "-1px",
        "1px": "1px",
        "96px": "96px",
      },
      height: {
        160: "40rem",
      },
    },
  },
  plugins: [],
};
