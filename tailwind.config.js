/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        fira: ['"Fira Code"', "monospace"],
        sans: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        topDown: {
          "0%": { transform: "translateY(-4px)" },
          "100%": { transform: "translateY(4px)" },
        },
        rotateBackground: {
          "0%": {
            background: "linear-gradient(0deg, #18CCFC, #6344F5, #AE48FF)",
          },
          "100%": {
            background: "linear-gradient(360deg, #18CCFC, #6344F5, #AE48FF)",
          },
        },
      },
      animation: {
        "rotate-30s": "rotate 30s linear infinite",
        "rotate-5s": "rotate 5s linear infinite",
        "rotate-background": "rotateBackground 10s linear infinity",
        "top-down": "topDown 4000ms linear infinite alternate",
        "top-down-reverse": "topDown 4000ms linear infinite alternate-reverse",
        "top-down-fast": "topDown 3000ms linear infinite alternate-reverse",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
