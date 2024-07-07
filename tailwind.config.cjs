/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gallery: {
          50: "#f7f6f5",
          100: "#eeedec",
          200: "#d6d4d2",
          300: "#bcb9b5",
          400: "#a19a96",
          500: "#8e8581",
          600: "#817875",
          700: "#6c6462",
          800: "#5a5352",
          900: "#4a4644",
          950: "#272423",
        },
        shark: {
          50: "#f7f7f8",
          100: "#efeef0",
          200: "#d9d8df",
          300: "#b7b6c3",
          400: "#908fa1",
          500: "#737186",
          600: "#5d5b6e",
          700: "#4d4a5a",
          800: "#42404c",
          900: "#3a3842",
          950: "#1e1d22",
        },
        navy: {
          50: "#ecfaff",
          100: "#cff1fe",
          200: "#a5e4fc",
          300: "#67d1f9",
          400: "#22b6ee",
          500: "#069cd4",
          600: "#0884b2",
          700: "#0e6d90",
          800: "#155b75",
          900: "#164e63",
          950: "#083444",
        },
        watermelon: {
          50: "#fff0f3",
          100: "#ffe2e8",
          200: "#ffcad7",
          300: "#ff9fb6",
          400: "#ff698f",
          500: "#ff3f75",
          600: "#ed1159",
          700: "#c8084c",
          800: "#a80946",
          900: "#8f0c42",
          950: "#500120",
        },
        dark: "#1E1D22",
        light: "#EEEDEC",
        "dark-gray": "#1A1A1A",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
    screens: {
      "2xs": "350px",
      xs: "500px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
