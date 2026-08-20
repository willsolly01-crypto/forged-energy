import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07070a",
        panel: "#0e0e12",
        gold: {
          DEFAULT: "#F2B705",
          400: "#F5C518",
          500: "#F2B705",
          600: "#D99E00",
        },
        lime: {
          DEFAULT: "#C6FF3D",
          400: "#C6FF3D",
          500: "#AEEB1F",
        },
        ember: {
          DEFAULT: "#FF7A1A",
          400: "#FF8C3D",
          500: "#FF7A1A",
          600: "#E85F00",
        },
        success: "#2ECC71",
        warning: "#E74C3C",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px -10px rgba(242,183,5,0.35)",
        limeglow: "0 0 60px -10px rgba(198,255,61,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(242,183,5,0.12), transparent 60%)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(-3deg)" },
          "50%": { transform: "translateY(-18px) rotate(1deg)" },
        },
        sparkle: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.85)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        sparkle: "sparkle 2.2s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
