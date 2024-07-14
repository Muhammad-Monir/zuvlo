/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1600px",
      },

      container: {
        center: true,
        screens: {
          "2xl": "1640px",
        },
      },
      colors: {
        textBlack: "#161613",
        textBlackV2: "#141414",
        lightBlack: "#333",
        pinkRed: "#F94F64",
      },
    },
  },
  plugins: [],
};
