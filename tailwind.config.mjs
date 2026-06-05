/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // cinematic warm-dark gallery
        noir: "#100D0B",        // deepest background
        coal: "#171311",        // panel background
        smoke: "#211C19",       // raised surface
        line: "#2E2723",        // hairline borders
        bone: "#F3EDE4",        // primary text (warm off-white)
        ash: "#A89B8E",         // secondary text
        mute: "#6B5F54",        // tertiary text
        // single warm accent + supporting
        ember: "#E9743D",       // primary accent (warm amber-coral)
        "ember-soft": "#F0A06B",
        gold: "#D9B25F",        // refined secondary
        sage: "#8FA37E",        // calm tertiary
        cream: "#FBF7F0",       // light section
        ink: "#1A1512",         // text on cream
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: { "3xl": "1.5rem", "4xl": "2rem", "5xl": "2.5rem" },
      letterSpacing: { tightest: "-0.045em" },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        glow: { "0%,100%": { opacity: 0.55 }, "50%": { opacity: 1 } },
        rise: { from: { transform: "translateY(14px)", opacity: 0 }, to: { transform: "translateY(0)", opacity: 1 } },
        scan: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(400%)" } },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        glow: "glow 4s ease-in-out infinite",
        scan: "scan 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
