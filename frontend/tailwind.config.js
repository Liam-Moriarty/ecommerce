/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.625rem", // 10px - very small, useful for subtle details
        xs: "0.75rem", // 12px - small text (for captions, hints)
        sm: "0.875rem", // 14px - default small body text
        base: "1rem", // 16px - standard body text
        lg: "1.125rem", // 18px - slightly larger body text for emphasis
        xl: "1.25rem", // 20px - heading level 4, or emphasis
        "2xl": "1.5rem", // 24px - heading level 3
        "3xl": "1.875rem", // 30px - heading level 2
        "4xl": "2.25rem", // 36px - heading level 1
        "5xl": "3rem", // 48px - large title or hero text
        "6xl": "3.75rem", // 60px - extra large hero text
        "7xl": "4.5rem", // 72px - for big hero sections
        "8xl": "6rem", // 96px - very large display text
        "9xl": "8rem", // 128px - massive, for hero sections or banners
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      // Color palette
      colors: {
        primary: "#6C63FF", // Bright, vibrant primary
        secondary: "#FFA8A8", // Light vibrant secondary
        neutral: "#4C51BF", // Light accent
        black: "#121212", // black for text
        gray: "#9f9f9f", // gray for secondary text
        background: "#ebebeb",
        // background: "#CBD5E0", // Light background
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        default: "0.375rem", // Base smooth corners
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem", // Rounded buttons/cards
        "3xl": "1.5rem", // More rounded look
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      screens: {
        xs: "475px", // Custom small screen breakpoint for very small devices
        sm: "640px", // Small devices like mobile phones
        md: "768px", // Tablets and larger mobile phones
        lg: "1024px", // Small laptops
        xl: "1280px", // Laptops and small desktops
        "2xl": "1536px", // Larger desktops or higher resolution screens
        "3xl": "1920px", // Large desktops or ultra-wide screens
      },
    },
  },
  plugins: [],
};
