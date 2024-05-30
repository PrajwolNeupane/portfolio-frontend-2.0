import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        text: "text", // You will need a custom implementation for this
      },
      keyframes: {
        rotate: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "50%": { transform: "translate(-50%, -50%)", scale: "1 1.5" },
          "100%": { transform: "translate(-50%, -50%)] rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "rotate 20s linear infinite",
      },
      backgroundImage: {
        "mouse-gradient": "linear-gradient(to right,#FF4500,#FFFFFF)",
        "skill-gradient":
          "linear-gradient(to right bottom,#1A1A1A,#171717,#171717)",
      },
      colors: {
        "background-lighter": "#262626",
        background: "#1A1A1A",
        "background-darker": "#171717",
        main: "#FF4500",
        "main-lighter": "#FF7043",
        "main-darker": "#CC3700",
      },
      fontSize: {
        "7xl": "200px",
        "6xl": "150px",
        "5xl": "120px",
        "4xl": "80px",
        "3xl": "60px",
        "2xl": "50px",
        xl: "45px",
        lg: "40px",
        rg: "35px",
        md: "30px",
        sm: "24px",
        xs: "20px",
        "2xs": "18px",
        "3xs": "14px",
      },
      fontWeight: {
        bold: "800",
        semibold: "700",
        medium: "600",
        regular: "500",
        normal: "400",
        light: "300",
      },
    },
  },
  plugins: [],
};
export default config;
