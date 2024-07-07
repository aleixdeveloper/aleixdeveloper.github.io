/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  bracketSameLine: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
