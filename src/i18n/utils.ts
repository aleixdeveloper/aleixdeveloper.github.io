import { ui, defaultLang, showDefaultLang, routes } from "./ui";
import { LANGUAGES } from "@/i18n/index";
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getPathWithoutLocale(currentPath: string) {
  const [lang, path] = currentPath.split("/");
  /* if (lang in ui) return lang as keyof typeof ui
	return defaultLang */
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function extractLanguageAndRoute(url: string): [string, string] {
  const defaultLang = LANGUAGES.EN;
  const languages: string[] = [LANGUAGES.CAT, LANGUAGES.ES, LANGUAGES.EN];
  const parts: string[] = url.split("/").filter((part) => part !== "");

  if (parts.length >= 1 && languages.includes(parts[0])) {
    const language: string = parts[0];
    const route: string = parts.slice(1).join(""); // Join the parts without slashes
    return [language, route];
  } else {
    // If language not provided, assume default language and use the entire URL as route
    return [defaultLang, url.replace(/^\//, "")]; // Remove leading slash from route
  }
}
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation =
      defaultLang !== l &&
      (routes[l as keyof typeof routes] as Record<string, string>)[pathName] !==
        undefined;
    const translatedPath = hasTranslation
      ? "/" +
        (routes[l as keyof typeof routes] as Record<string, string>)[pathName]
      : path;

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path as keyof typeof route] !== undefined
      ? route[path as keyof typeof route]
      : undefined;
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string,
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}
