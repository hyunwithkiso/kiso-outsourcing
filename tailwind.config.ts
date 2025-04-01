import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
        pretendard: ["Pretendard", "sans-serif"], // globals.css 에서 import 확인 필요
      },
      colors: {
        "kiso-black": "#000000",
        "kiso-white": "#FFFFFF",
        "kiso-light-gray": "#E0E0E0",
        "kiso-dark-gray": "#8A8A8A",
      },
      animation: {
        "fade-in-slow": "fadeIn 1.5s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-delay-1": "fadeIn 1s ease-out 0.3s forwards",
        "fade-in-delay-2": "fadeIn 1s ease-out 0.6s forwards",
        "fade-in-delay-3": "fadeIn 1s ease-out 0.9s forwards",
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
