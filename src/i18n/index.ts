import catalan from "./ca.json"
import english from "./en.json"
import spanish from "./es.json"

const LANG = {
	CATALAN: "ca",
	ENGLISH: "en",
	SPANISH: "es",
}

export const getI18N = ({ currentLocale = "es" }: { currentLocale: string | undefined }) => {
	if (currentLocale === LANG.CATALAN) return { ...spanish, ...catalan }
	if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english }
	return spanish
}
