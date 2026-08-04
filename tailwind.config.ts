import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFA",
        card: "#FFFFFF",
        ink: "#111827",
        muted: "#6B7280",
        line: "#E5E7EB",
        accent: {
          DEFAULT: "#FF7A00",
          soft: "#FFF1E3",
        },
        indigo: {
          DEFAULT: "#4F46E5",
          soft: "#EEF0FE",
        },
        success: "#10B981",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "20px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(17, 24, 39, 0.04), 0 12px 32px -12px rgba(17, 24, 39, 0.10)",
        lift: "0 8px 24px rgba(255, 122, 0, 0.12), 0 24px 48px -16px rgba(79, 70, 229, 0.16)",
        glow: "0 0 0 1px rgba(255,122,0,0.15), 0 0 24px rgba(255,122,0,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        spinSlow: "spinSlow 12s linear infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
