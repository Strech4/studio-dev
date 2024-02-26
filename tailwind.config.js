/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "mdb": "840px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        "high-contrast": "#16433C",
        "low-contrast": "#027864",
        "separator": "#9CE0D0",
        "bg": "#F2FBF9",
        "button": "#86EAD4",
        "hover": "#7DE0CB",
        "ui-bg": "#DDF9F2",
        "bg-white": "#F9FEFD",
      },
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
    },
  },
  plugins: [],
};
