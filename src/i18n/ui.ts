
import Cat from "@/components/flags/Cat.astro"
import Es from "@/components/flags/Es.astro"
import En from "@/components/flags/En.astro"

// Add missing imports
export const LANGUAGES: Record<string, { code: string; name: string; symbol: string; flag: typeof SpainFlag }> = {
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
		name: "Español",
		flag: Es,
	},
}

export const defaultLang = "es"
export const showDefaultLang = false

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
} as const

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
}
