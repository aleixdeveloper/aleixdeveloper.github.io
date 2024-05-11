/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"dark": "#111111",
				"light": "#FFFFFF",
				"dark-gray": "#1A1A1A",
			},
			fontFamily: {
				/*   inter: ["Inter", "sans-serif"], */
				outfit: ["Outfit", "sans-serif"],
			},
		},
		screens: {
			"2xs": "350px",
			"xs": "500px",
			...defaultTheme.screens,
		},
	},
	plugins: [],
}
