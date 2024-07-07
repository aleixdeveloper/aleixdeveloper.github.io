import wordleImg from "../assets/images/wordle/wordle.jpg";
import musicBandImg from "../assets/images/fenok-store/fenok-store.jpg";
import encyclopediaImg from "../assets/images/encyclopedia-tourist/encyclopedia.jpg";
import { getI18N } from "@/i18n";

export const info = {
  baseUrl: "https://aleixdeveloper.github.io",
  name: "Aleix Clemente",
  jobDescription: "Web Developer",
  about: "about",
  socialMedia: {
    github: "https://github.com/aleixdeveloper",
    email: "aleixclemente@gmail.com",
    linkedin: "https://www.linkedin.com/in/aleixclemente/",
    instagram: "https://www.instagram.com/aleeiixxx/",
  },
  stack: {
    design: ["figma"],
    charts: ["chartjs", "apexcharts"],
    uiframeworks: ["tailwindcss", "mui", "headlessui"],
    languages: ["js", "ts", "node"],
    frameworks: ["react", "next", "astro"],
    databases: ["mongodb", "strapi"],
    utils: ["git", "eslint"],
    mobile: ["expo"],
  },
};

export const projects = [
  {
    title: "Music band store",
    isFeatured: true,
    thumbnail: musicBandImg,
    githubUrl:
      "https://github.com/aleixdeveloper/nextjs-ecommerce-tuto/tree/main",
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
];
