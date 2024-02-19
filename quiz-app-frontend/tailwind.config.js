/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1e40af",
        "secondary-green": "#10b981",
        "secondary-orange": "#fb923c",
        "secondary-teal": "#14b8a6",
        "neutral-lightgray": "#f3f4f6",
        "neutral-darkgray": "#4b5563",
        "neutral-white": "#ffffff",
        "accent-red": "#ef4444",
        "accent-yellow": "#facc15",
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
