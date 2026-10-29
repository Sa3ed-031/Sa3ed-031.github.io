import {
  SiAxios,
  SiCss,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGsap,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNetlify,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

// Skills without a Simple Icons logo (REST APIs, EmailJS, VS Code) have no icon
export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "TypeScript", icon: SiTypescript, learning: true },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "React Router", icon: SiReactrouter },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MUI", icon: SiMui },
      { name: "Styled Components", icon: SiStyledcomponents },
      { name: "Framer Motion", icon: SiFramer },
      { name: "GSAP", icon: SiGsap },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Firebase", icon: SiFirebase },
      { name: "REST APIs" },
      { name: "Axios", icon: SiAxios },
      { name: "EmailJS" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Vite", icon: SiVite },
      { name: "Netlify", icon: SiNetlify },
      { name: "VS Code" },
    ],
  },
];
