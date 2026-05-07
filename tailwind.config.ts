import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        proteum: {
          // Backgrounds & surfaces
          void: "#050810",
          deep: "#0B1228",
          surface: "#111A33",
          "surface-hi": "#1A2547",

          // Sapphire (primary action / brand)
          sapphire: "#2563EB",
          "sapphire-glow": "#60A5FA",
          "sapphire-deep": "#1D4ED8",

          // Chrome (silver, metallic moments)
          chrome: "#E8ECF2",
          "chrome-mid": "#C8CDD6",
          "chrome-low": "#6B7180",

          // Data accent
          cyan: "#5EEAD4",

          // Reserved gold (earned moments only)
          gold: "#C9A961",
          "gold-dim": "#8C7843",

          // Text
          bone: "#F5F2EA",
          mist: "#A0A8B8",
          "mist-low": "#6B7180",

          // Legacy aliases retained as transitional pointers — DO NOT use in new code
          black: "#050810",
          line: "#1A2547",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Hero scale — Fraunces light at extreme sizes, optical sizing handled inline
        "hero-xl": ["clamp(2.75rem, 7vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero-lg": ["clamp(2.5rem, 5.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        // Section / display
        "display-xl": ["clamp(2.5rem, 5.5vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      backgroundImage: {
        "chrome-gradient":
          "linear-gradient(135deg, #6B7180 0%, #C8CDD6 25%, #E8ECF2 50%, #C8CDD6 75%, #6B7180 100%)",
        "sapphire-gradient": "linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)",
        "sapphire-gradient-hover": "linear-gradient(180deg, #60A5FA 0%, #2563EB 100%)",
        "glass-gradient":
          "linear-gradient(145deg, rgba(26, 37, 71, 0.45) 0%, rgba(11, 18, 40, 0.65) 100%)",
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "scanlines":
          "repeating-linear-gradient(135deg, rgba(232,236,242,0.03) 0px, rgba(232,236,242,0.03) 1px, transparent 1px, transparent 6px)",
      },
      boxShadow: {
        // Depth tiers
        "elev-1": "0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(232,236,242,0.04)",
        "elev-2": "0 8px 32px rgba(5, 8, 16, 0.4), inset 0 1px 0 rgba(232, 236, 242, 0.04)",
        "elev-3": "0 20px 56px rgba(5, 8, 16, 0.55), inset 0 1px 0 rgba(232, 236, 242, 0.06)",
        // Sapphire CTA
        "sapphire": "0 4px 16px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        "sapphire-hover": "0 8px 24px rgba(37, 99, 235, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        // Glow halo
        "glow-sapphire": "0 0 60px -8px rgba(96, 165, 250, 0.55)",
        "glow-cyan": "0 0 40px -8px rgba(94, 234, 212, 0.25)",
        "glow-gold": "0 0 40px -10px rgba(201, 169, 97, 0.45)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) both",
        "fade-in": "fadeIn 0.7s ease-out both",
        "breathe": "breathe 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "drift": "drift 24s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "count-up": "countUp 1.6s cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -1%, 0) scale(1.05)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "luxe": "cubic-bezier(0.2, 0.8, 0.2, 1)",
        "luxe-in": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      letterSpacing: {
        eyebrow: "0.18em",
        "eyebrow-tight": "0.15em",
        wordmark: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
