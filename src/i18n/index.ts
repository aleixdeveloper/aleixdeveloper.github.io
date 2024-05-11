import catalan from "./ca.json"
import english from "./en.json"
import spanish from "./es.json"

const LANG = {
	CATALAN: "ca",
	ENGLISH: "en",
	SPANISH: "es",
}

export const getI18N = ({ currentLocale = "en" }: { currentLocale: string | undefined }) => {
	if (currentLocale === LANG.CATALAN) return { ...english, ...catalan }
	if (currentLocale === LANG.SPANISH) return { ...english, ...spanish }
	return english
}
