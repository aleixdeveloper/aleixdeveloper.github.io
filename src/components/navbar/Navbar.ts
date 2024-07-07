import { getI18N } from "@/i18n";
import {
  getLangFromUrl,
  useTranslatedPath,
  extractLanguageAndRoute,
} from "@/i18n/utils";

export const getNavigationLinks = (
  astroUrl: URL,
  currentLocale: string,
): { name: string; to: string }[] => {
  const pathname = new URL(astroUrl).pathname;

  const i18n = getI18N({
    currentLocale,
  });

  const lang = getLangFromUrl(astroUrl);
  const translatePath = useTranslatedPath(lang);

  const [, path] = extractLanguageAndRoute(pathname);

  const navigationLinks =
    path === "projects"
      ? [
          {
            name: "Home",
            to: translatePath("/"),
          },
        ]
      : [
          {
            name: i18n.HEADER.PROJECTS,
            to: translatePath("/projects/"),
          },
          {
            name: i18n.STACK.TITLE,
            to: "#techs",
          },
          {
            name: i18n.EXPERIENCE.TITLE,
            to: "#experience",
          },
        ];

  return navigationLinks;
};
