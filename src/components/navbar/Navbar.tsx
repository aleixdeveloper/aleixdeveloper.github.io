import { getI18N } from "@/i18n";
import {
  getLangFromUrl,
  useTranslatedPath,
  extractLanguageAndRoute,
} from "@/i18n/utils";
import jobSvg from '../../assets/icons/job.svg'
import codeSvg from '../../assets/icons/code.svg'
import stackSvg from '../../assets/icons/stack.svg'
import homeSvg from '../../assets/icons/home.svg'

 
export const getNavigationLinks = (
  astroUrl: URL,
  currentLocale: string,
): { name: string; to: string, icon: ImageMetadata }[] => {
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
          icon: homeSvg,
        },
      ]
      : [
        {
          name: i18n.HEADER.PROJECTS,
          icon: codeSvg,
          to: translatePath("/projects"),
        },
        {
          name: i18n.STACK.TITLE,
          icon: stackSvg,
          to: "#techs",
        },
        {
          name: i18n.EXPERIENCE.TITLE,
          icon: jobSvg,
          to: "#experience",
        },
      ];

  return navigationLinks;
};
