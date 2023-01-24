const jsImg = "/assets/icons/DEV_TECHS/javascript.png";
const tsImg = "/assets/icons/DEV_TECHS/ts.png";
const nextImg = "/assets/icons/DEV_TECHS/nextjs.png";
const astroImg = "/assets/icons/DEV_TECHS/astro.png";
const reactImg = "/assets/icons/DEV_TECHS/react.png";
const muiImg = "/assets/icons/DEV_TECHS/mui.png";
const gitImg = "/assets/icons/DEV_TECHS/git.png";
const chartjsImg = "/assets/icons/DEV_TECHS/chartjs.png";
const strapiImg = "/assets/icons/DEV_TECHS/strapi.png";
const mongoImg = "/assets/icons/DEV_TECHS/mongo.png";
const eslintImg = "/assets/icons/DEV_TECHS/eslint.png";
const rtlImg = "/assets/icons/DEV_TECHS/rtl.png";
const tailwindImg = "/assets/icons/DEV_TECHS/tailwind.png";
const figmaImg = "/assets/icons/DEV_TECHS/figma.png";
const vitestImg = "/assets/icons/DEV_TECHS/vitest.png";
const expoImg = "/assets/icons/DEV_TECHS/expo.png";
const apexchartsImg = "/assets/icons/DEV_TECHS/apexcharts.png";
const headlessuiImg = "/assets/icons/DEV_TECHS/headlessui.png";
const nodeImg = "/assets/icons/DEV_TECHS/node.png";

export const dictionary = {
  js: { name: "JavaScript", img: jsImg, value: 10, color: "#111" },
  ts: {
    name: "TypeScript",
    img: tsImg,
    value: 10,
    color: "#00273f" /* "#124c87" */,
  },
  react: { name: "React", img: reactImg, value: 10, color: "#20232A" },
  next: { name: "Next", img: nextImg, value: 10, color: "#111" },
  astro: { name: "Astro", img: astroImg, value: 10, color: "#0F172A" },
  tdd: { name: "TDD" },
  rtl: {
    name: "React Testing Library",
    img: rtlImg,
    value: 10,
    color: "#242526" /* "#911919" */,
  },
  vitest: { name: "Vitest", img: vitestImg, value: 7, color: "#242424" },
  git: { name: "Git", img: gitImg, value: 7, color: "#111" },
  tailwindcss: {
    name: "Tailwindcss",
    img: tailwindImg,
    value: 7,
    color: "#0B1120",
  },
  mui: { name: "Mui", img: muiImg, value: 8, color: "#071B2F" },
  figma: { name: "Figma", img: figmaImg, value: 7, color: "#000" },
  mongodb: { name: "MongoDB", img: mongoImg, value: 5, color: "#001E2B" },
  eslint: {
    name: "ESLINT",
    img: eslintImg,
    value: 5,
    color: "#101828" /* "#281482" */,
  },
  chartjs: { name: "Chart.js", img: chartjsImg, value: 4, color: "#0b0b0b" },
  strapi: { name: "Strapi", img: strapiImg, value: 7, color: "#121180" },
  prisma: { name: "Prisma", img: "", value: 7, color: "purple" },
  expo: { name: "Expo", img: expoImg, value: 7, color: "#151718" },
  apexcharts: {
    name: "Apexcharts",
    img: apexchartsImg,
    value: 7,
    color: "#010101",
  },
  headlessui: {
    name: "Headless UI",
    img: headlessuiImg,
    value: 7,
    color: "#111827",
  },
  node: { name: "Nodejs", img: nodeImg, value: 8, color: "#1a2545" },
};
