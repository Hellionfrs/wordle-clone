/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "letter-fade": "letter-fade 0.5s ease forwards",
        "number-elevator": "number-elevator 0.5s ease forwards",
        "show-up": "show-up 1s ease forwards",
      },
      keyframes: {
        "letter-fade": {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        "number-elevator": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        "show-up": {
          "0%": { opacity: "0", transform: "translateY(0px)" },
          "100%": { opacity: "1", transform: "translateY(20px)" },
        },
      },
    },
  },
  plugins: [],
};
