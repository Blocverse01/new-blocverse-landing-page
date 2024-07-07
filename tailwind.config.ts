import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Grotesk", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        bv: {
          black: {
            1: "#1A1A1A",
          },
          blue: {
            1: "#13B3EF",
            2: "#01AEEF",
          },
          extras: {
            blue: "#13B3EF0A",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
