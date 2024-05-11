/** @type {import("prettier").Config} */
export default {
	printWidth: 2,
	semi: false,
	singleQuote: false,
	jsxSingleQuote: false,
	quoteProps: "consistent",
	tabWidth: 1,
	trailingComma: "es5",
	useTabs: true,
	endOfLine: "lf",
	arrowParens: "always",
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: ["*.json", "*.md", "*.toml", "*.yml"],
			options: {
				useTabs: false,
			},
		},
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
}
