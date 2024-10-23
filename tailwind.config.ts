import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      babyPowder: {
        DEFAULT: '#FFFFFA',
      },
      chineseBlack: {
        DEFAULT: '#161718',
      },
      middleGrey: {
        DEFAULT: '#8B8982',
      },
      palatinateBlue: {
        DEFAULT: '#2F52E0',
      },
      graniteGrey: {
        DEFAULT: '#65625A',
      },
      wageningenGreen: {
        DEFAULT: '#33B033',
      },
      ao: {
        DEFAULT: '#008000',
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
