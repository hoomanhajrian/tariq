import type { Config } from "tailwindcss";

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        green: "#7b876d",
        lightGreen: "#989e8b",
        pink: "#ddb8a6",
        cream: "#d49b7e",
        orange: "#c67f43",
        brown: "#893f04",
        textLight: "#fff",
        textDark: "#000",
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
        "25": "25%",
        "40": "40%",
        "50": "50%",
        "60": "60%",
        "70": "70%",
        "80": "80%",
        "90": "90%",
        "100": "100%",
        "65vh": "65vh",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
export default config;
