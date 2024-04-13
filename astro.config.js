import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://aleixdeveloper.github.io/",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    robotsTxt(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
})
