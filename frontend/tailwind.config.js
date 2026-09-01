/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Charcoal + Burnt Orange Theme
        charcoal: {
          950: "#111111", // Background
          900: "#171717", // Primary Surface
          800: "#1F1F1F", // Secondary Surface
          card: "#1A1A18", // Card Background
          elevated: "#242421", // Elevated Card
          border: "#34342F", // Border
          subtle: "#292925", // Subtle Border
          icon: "#241B17"  // Icon Container
        },
        brand: {
          50: "#fdf6f2",
          100: "#fce3d7", // Very Light Orange
          200: "#f5b08c", // Light Orange
          300: "#ee8e63",
          400: "#f0804f", // Primary Accent Hover
          500: "#e76f3c", // Primary Accent — Burnt Orange
          600: "#d25824",
          700: "#b54316",
          800: "#8d3210",
          900: "#60210a",
          950: "#331004"
        },
        orange: {
          50: "#fdf6f2",
          100: "#fce3d7",
          200: "#f5b08c",
          300: "#ee8e63",
          400: "#f0804f",
          500: "#e76f3c",
          600: "#d25824",
          700: "#b54316",
          800: "#8d3210",
          900: "#60210a"
        },
        // Semantic Palette
        status: {
          success: "#65A77A",
          warning: "#D5A33A",
          danger: "#D05A50",
          neutral: "#6F706A"
        },
        // Text Palette
        content: {
          primary: "#F5F5F0",
          secondary: "#B6B6AE",
          muted: "#85857E"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        "orange-glow": "0 8px 30px rgba(231,111,60,0.18)",
        "orange-subtle": "0 0 25px -5px rgba(231,111,60,0.12)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
      }
    },
  },
  plugins: [],
}
