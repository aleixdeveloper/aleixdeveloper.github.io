import jsImg from "../assets/icons/DEV_TECHS/javascript.png";
import tsImg from "../assets/icons/DEV_TECHS/ts.png";
import nextImg from "../assets/icons/DEV_TECHS/nextjs.png";
import astroImg from "../assets/icons/DEV_TECHS/astro.png";
import reactImg from "../assets/icons/DEV_TECHS/react.png";
import muiImg from "../assets/icons/DEV_TECHS/mui.png";
import gitImg from "../assets/icons/DEV_TECHS/git.png";
import chartjsImg from "../assets/icons/DEV_TECHS/chartjs.png";
import strapiImg from "../assets/icons/DEV_TECHS/strapi.png";
import mongoImg from "../assets/icons/DEV_TECHS/mongo.png";
import eslintImg from "../assets/icons/DEV_TECHS/eslint.png";
import rtlImg from "../assets/icons/DEV_TECHS/rtl.png";
import tailwindImg from "../assets/icons/DEV_TECHS/tailwind.png";
import figmaImg from "../assets/icons/DEV_TECHS/figma.png";
import vitestImg from "../assets/icons/DEV_TECHS/vitest.png";
import expoImg from "../assets/icons/DEV_TECHS/expo.png";
import apexchartsImg from "../assets/icons/DEV_TECHS/apexcharts.png";
import headlessuiImg from "../assets/icons/DEV_TECHS/headlessui.png";
import nodeImg from "../assets/icons/DEV_TECHS/node.png";
import jestImg from "../assets/icons/DEV_TECHS/jest.png";
import supabaseImg from "../assets/icons/DEV_TECHS/supabase.png";

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
    color: "#1B1B1D",
  },
  vitest: { name: "Vitest", img: vitestImg, value: 7, color: "#1B1B1F" },
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
  supabase: { name: "Supabase", img: supabaseImg, value: 10, color: "#232323" },
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
  jest: { name: "Jest", img: jestImg, value: 9, color: "#252932" },
};
