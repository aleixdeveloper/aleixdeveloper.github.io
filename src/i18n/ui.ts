import Cat from "@/assets/icons/flags/cat.png";
import Es from "@/assets/icons/flags/es.png";
import En from "@/assets/icons/flags/uk.png";
// Add missing imports
export const LANGUAGES: Record<
  string,
  {
    code: string;
    name: string;
    symbol: string;
    flag: ImageMetadata;
  }
> = {
  ca: {
    symbol: "🇨🇦",
    code: "ca",
    name: "Català",
    flag: Cat,
  },
  en: {
    symbol: "🇪🇳",
    code: "en",
    name: "English",
    flag: En,
  },
  es: {
    symbol: "🇪🇸",
    code: "es",
    name: "Castellano",
    flag: Es,
  },
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.proyectos": "Proyectos",
  },
  en: {
    "nav.inicio": "Home",
    "nav.proyectos": "Projects",
  },
  ca: {
    "nav.inicio": "Inici",
    "nav.proyectos": "Projectes",
  },
} as const;

export const routes = {
  es: {
    proyectos: "proyectos",
  },
  en: {
    proyectos: "projects",
  },
  ca: {
    proyectos: "projectes",
  },
};
