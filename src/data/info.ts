import wordleImg from "../assets/images/wordle/wordle.jpg"
import musicBandImg from "../assets/images/fenok-store/fenok-store.jpg"
import encyclopediaImg from "../assets/images/encyclopedia-tourist/encyclopedia.jpg"
import { getI18N } from "@/i18n"

export const info =
	{
		baseUrl:
			"https://aleixdeveloper.github.io",
		name:
			"Aleix Clemente",
		jobDescription:
			"Web Developer",
		about:
			"about",
		/* 
		volunteering:
			[
				{
					name:
						"International Cooperation Volunteering in Tujereng, Gambia",
					location:
						"Gambia",
					startDate:
						"2017",
					endDate:
						"2017",
					description:
						[
							"- Documentary recording and editing (2017)",
						],
				},
			],

		education:
			[
				{
					name:
						"Linkia FP",
					location:
						"Barcelona",
					startDate:
						"2018",
					endDate:
						"2020",
					link:
						"https://linkiafp.es/fp-grado-superior-desarrollo-de-aplicaciones-web-a-distancia/",
					description:
						[
							"Web Apps Development Certificate of Higher Education",
						],
				},
				{
					name:
						"UAB - Autonomous University of Barcelona",
					location:
						"Bellaterra",
					startDate:
						"2013",
					endDate:
						"2017",
					link:
						"https://www.uab.cat/web/facultat-de-ciencies-de-la-comunicacio-1345702085095.html",
					description:
						[
							"1st, 2nd and 3rd course - Journalism University Degree",
						],
				},
				{
					name:
						"IES Frederic Mompou",
					location:
						"Sant Vicenç dels Horts",
					startDate:
						"2010",
					endDate:
						"2012",
					link:
						"https://agora.xtec.cat/iesfmompou/",
					description:
						[
							"Bachelor of Science and Technology",
						],
				},
				{
					name:
						"IES Frederic Mompou",
					location:
						"Sant Vicenç dels Horts",
					startDate:
						"2010",
					endDate:
						"2012",
					link:
						"https://agora.xtec.cat/iesfmompou/",
					description:
						[
							"Certificate of Secondary Education",
						],
				},
			], */
		addOns:
			[
				{
					name:
						"Car and Motorcycle License",
					description:
						[
							"- Own vehicle",
						],
				},
				{
					name:
						"Microsoft utilities",
					description:
						[
							"- Word",
							"- Excel",
							"- PowerPoint",
						],
				},
			],
		languages:
			[
				{
					name:
						"Catalan",
					description:
						[
							"- Mother tongue",
						],
				},
				{
					name:
						"Spanish",
					description:
						[
							"- Mother tongue",
						],
				},
				{
					name:
						"English",
					description:
						[
							"- B1 EOI",
							"- Good understanding of technical language",
						],
				},
			],
		socialMedia:
			{
				github:
					"https://github.com/aleixdeveloper",
				email:
					"aleixclemente@gmail.com",
				linkedin:
					"https://www.linkedin.com/in/aleixclemente/",
				instagram:
					"https://www.instagram.com/aleeiixxx/",
			},
		stack:
			{
				design:
					[
						"figma",
					],
				charts:
					[
						"chartjs",
						"apexcharts",
					],
				uiframeworks:
					[
						"tailwindcss",
						"mui",
						"headlessui",
					],
				languages:
					[
						"js",
						"ts",
						"node",
					],
				frameworks:
					[
						"react",
						"next",
						"astro",
					],
				databases:
					[
						"mongodb",
						"strapi",
					],
				utils:
					[
						"git",
						"eslint",
					],
				mobile:
					[
						"expo",
					],
			},
	}

export const projects =
	[
		{
			title:
				"Music band store",
			isFeatured:
				true,
			thumbnail:
				musicBandImg,
			githubUrl:
				"https://github.com/aleixdeveloper/nextjs-ecommerce-tuto/tree/main",
			liveUrl:
				"https://fenokstore.vercel.app/",
		},
		{
			title:
				"Map markers around the world",
			isFeatured:
				true,
			thumbnail:
				encyclopediaImg,
			githubUrl:
				"",
			liveUrl:
				"",
		},
		{
			title:
				"Wordle for small competitions",
			isFeatured:
				true,
			thumbnail:
				wordleImg,
			githubUrl:
				"",
			liveUrl:
				"",
		},
	]
