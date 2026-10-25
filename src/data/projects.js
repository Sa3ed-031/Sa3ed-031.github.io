import articles from "../assets/images/articles-blog.png";
import prayers from "../assets/images/prayers-times-app.png";
import weather from "../assets/images/weather-app.png";
import whatsapp from "../assets/images/whatsapp-clone.png";
import carpentry from "../assets/images/carpentry-agency.png";
import rennello from "../assets/images/rennello.png";
import zmovie from "../assets/images/sa3ed-zmovie.png";

// To add a project: import its image above, then add an object to this array.
const projectsList = [
  {
    title: "Rennello Platform",
    src: rennello,
    url: "https://rennello.netlify.app",
    tags: ["React", "Redux", "Tailwind", "MUI"],
    description: `4th-year project (team of 6) - a platform connecting customers with local service workshops, with full RBAC for customers, workshop owners, and admins. My contribution as Frontend Developer:
- Built the main homepage and the complete registration & login flow, including all related sub-pages,
- Developed the entire user (customer) route/flow across the platform,
- Built the request-details pages for both customers and workshop owners, covering status tracking (pending, approved, active, complete),
- Built the "My Workshop" management page for workshop owners.
Tech stack: React.js, Redux, TailwindCSS, Material-UI, Framer Motion (frontend) - Laravel & MySQL (backend, by teammates).`,
  },
  {
    title: "ZMovie Website",
    src: zmovie,
    url: "https://sa3ed-zmovie.netlify.app",
    tags: ["React", "Tailwind", "Axios", "MUI"],
    description: `A movie/TV discovery platform built with the TMDB API, featuring dynamic browsing, filtering, and a watchlist system
- Built homepage, movies/TV-shows, search, trending, and watchlist pages with a structured React folder architecture,
- Implemented multi-tab filtering (popular, top-rated, airing-today) and a dynamic "latest release" homepage banner,
- Built a reusable Pagination component (using MUI) to handle large result sets, a custom useFetch hook to centralized API data-fetching,
- Organized all API requests into a dedicated api layer for maintainability; watchlist currently persisted via Local Storage.
Tech stack: React.js, TailwindCSS, Axios, Material-UI, Local Storage.`,
  },
  {
    title: "Archi Carpenter",
    src: carpentry,
    url: "https://sa3ed-archi-carpenter.netlify.app",
    tags: ["React", "React Router", "Leaflet", "GSAP"],
    description: `A business website for a woodworking/carpentry company, showcasing services and past work with lead-generation forms
- Used react-router to Build a homepage, services, projects, contact and about pages routes.
- Used CSS & Media queries to style modern and responsive web pages.
- Used Leaflet (an embedded location map) in the contact page.
Tech stack: React.js, Material-UI, Leaflet (interactive map), GSAP (animations).`,
  },
  {
    title: "WhatsApp Clone",
    src: whatsapp,
    url: "https://sa3ed-chatsapp-clone-project.netlify.app",
    tags: ["React", "MUI"],
    description: `A UI and functional clone of WhatsApp's core chat experience
- Designed and built the full UI flow across 8 pages (welcome, add-number, login/register, user page, chat & group info),
- Implemented a data model with a global users array, unique per-user chat lists (by ID), and per-chat message threads,
- Built group creation from existing chats, with broadcasting messages across group members.
Tech stack: React.js, CSS, Material-UI, Local Storage.`,
  },
  {
    title: "Articles Blog",
    src: articles,
    url: "https://sa3ed-articles-blog-project.netlify.app",
    tags: ["React", "Styled Components"],
    description:
      "A responsive blog website built with React.js and styled-components. It features a clean interface, dynamic content, and a seamless user experience.",
  },
  {
    title: "Prayers Times",
    src: prayers,
    url: "https://sa3ed-prayers-times-project.netlify.app",
    tags: ["React", "Styled Components"],
    description:
      "A responsive app for displaying prayer times, built with React.js and styled-components. It features a clean interface, real-time updates, and a seamless user experience.",
  },
  {
    title: "Weather App",
    src: weather,
    url: "https://sa3ed-weather-project.netlify.app",
    tags: ["React", "Styled Components"],
    description:
      "A modern weather app built with React.js and styled-components. It features a responsive design, real-time weather data, and an intuitive user interface.",
  },
];

export default projectsList;
