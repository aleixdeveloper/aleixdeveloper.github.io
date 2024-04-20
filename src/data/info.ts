import wordleImg from "../assets/images/wordle/wordle.jpg"
import musicBandImg from "../assets/images/fenok-store/fenok-store.jpg"
import encyclopediaImg from "../assets/images/encyclopedia-tourist/encyclopedia.jpg"
import { getI18N } from "@i18n"

export const info = (i18n) => ({
	baseUrl: "https://aleixdeveloper.github.io",
	name: "Aleix Clemente",
	jobDescription: "Web Developer",
	about: i18n.HERO.DESCRIPTION,
	experience: [
		{
			name: "OASYS, SL",
			location: "Barcelona",
			startDate: "March 2021",
			endDate: "Present",
			link: "https://oasys-sw.com/",
			description: [
				"- Front-End Developer. Building web-apps for several companies in the pharmaceutical and food industry",
				"- Working daily with React, Javascript, Semantic/Mui and apexcharts among other technologies",
			],
		},

		{
			name: "DECATHLON SPAIN, S.A.",
			location: "El Prat de Llobregat",
			startDate: "2018",
			endDate: "2020",
			description: [
				"- Logistics Operator and IT Technician",
				"- (Hardware, network, scripting...)",
				"- Small dashboard website built with PHP",
			],
		},

		{
			name: "Non technical jobs",
			location: "Barcelona and surroundings",
			startDate: "2012",
			endDate: "2016",
			description: [
				"- Warehouse waiter at Mercabarna",
				"- Soccer coach in lower categories",
				"- After-school activity monitor of sports initiation",
				"- Offset printing operator",
			],
		},
	],

	volunteering: [
		{
			name: "International Cooperation Volunteering in Tujereng, Gambia",
			location: "Gambia",
			startDate: "2017",
			endDate: "2017",
			description: ["- Documentary recording and editing (2017)"],
		},
	],

	education: [
		{
			name: "Linkia FP",
			location: "Barcelona",
			startDate: "2018",
			endDate: "2020",
			link: "https://linkiafp.es/fp-grado-superior-desarrollo-de-aplicaciones-web-a-distancia/",
			description: ["Web Apps Development Certificate of Higher Education"],
		},
		{
			name: "UAB - Autonomous University of Barcelona",
			location: "Bellaterra",
			startDate: "2013",
			endDate: "2017",
			link: "https://www.uab.cat/web/facultat-de-ciencies-de-la-comunicacio-1345702085095.html",
			description: ["1st, 2nd and 3rd course - Journalism University Degree"],
		},
		{
			name: "IES Frederic Mompou",
			location: "Sant Vicenç dels Horts",
			startDate: "2010",
			endDate: "2012",
			link: "https://agora.xtec.cat/iesfmompou/",
			description: ["Bachelor of Science and Technology"],
		},
		{
			name: "IES Frederic Mompou",
			location: "Sant Vicenç dels Horts",
			startDate: "2010",
			endDate: "2012",
			link: "https://agora.xtec.cat/iesfmompou/",
			description: ["Certificate of Secondary Education"],
		},
	],
	addOns: [
		{
			name: "Car and Motorcycle License",
			description: ["- Own vehicle"],
		},
		{
			name: "Microsoft utilities",
			description: ["- Word", "- Excel", "- PowerPoint"],
		},
	],
	languages: [
		{
			name: "Catalan",
			description: ["- Mother tongue"],
		},
		{
			name: "Spanish",
			description: ["- Mother tongue"],
		},
		{
			name: "English",
			description: ["- B1 EOI", "- Good understanding of technical language"],
		},
	],
	socialMedia: {
		github: "https://github.com/aleixdeveloper",
		email: "aleixclemente@gmail.com",
		linkedin: "https://www.linkedin.com/in/aleixclemente/",
		instagram: "https://www.instagram.com/aleeiixxx/",
	},

	stack: [
		{ category: "Design", tech: ["figma"] },
		{ category: "Charts", tech: ["chartjs", "apexcharts"] },
		{ category: "UI frameworks", tech: ["tailwindcss", "mui", "headlessui"] },
		{ category: "Languages", tech: ["js", "ts", "node"] },
		{ category: "Frameworks", tech: ["react", "next", "astro"] },
		{ category: "Databases", tech: ["mongodb", "strapi"] },
		{ category: "Utils", tech: ["git", "eslint"] },
		{ category: "Mobile", tech: ["expo"] },
	],
})

export const getInfo = (locale) => {
	console.log("locale", locale)
	const i18n = getI18N({ currentLocale: locale })

	return info(i18n)
}

export const projects = [
	{
		title: "Music band store",
		isFeatured: true,
		thumbnail: musicBandImg,
		githubUrl: "https://github.com/aleixdeveloper/nextjs-ecommerce-tuto/tree/main",
		liveUrl: "https://fenokstore.vercel.app/",
	},
	{
		title: "Map markers around the world",
		isFeatured: true,
		thumbnail: encyclopediaImg,
		githubUrl: "",
		liveUrl: "",
	},
	{
		title: "Wordle for small competitions",
		isFeatured: true,
		thumbnail: wordleImg,
		githubUrl: "",
		liveUrl: "",
	},
]
