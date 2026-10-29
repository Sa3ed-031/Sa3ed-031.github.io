// Plain screenshots of each live site (the *.png social images already contain the title)
import articles from "../assets/images/screenshots/articles-blog-screenshot.jpg";
import whatsapp from "../assets/images/screenshots/whatsapp-clone-screenshot.jpg";
import carpentry from "../assets/images/screenshots/archi-carpenter-screenshot.jpg";
import rennello from "../assets/images/screenshots/rennello-screenshot.jpg";
import zmovie from "../assets/images/screenshots/zmovie-screenshot.jpg";

const projectsList = [
  {
    id: "rennello",
    title: "Rennello",
    subtitle: "Service Workshop Platform",
    type: "team",
    teamSize: 6,
    src: rennello,
    live: "https://rennello.netlify.app",
    code: null,
    tech: [
      "React",
      "Redux",
      "Context API",
      "React Router",
      "Axios",
      "API",
      "Tailwind",
      "MUI",
      "Framer Motion",
    ],
    description:
      "4th-year team project connecting customers with local service workshops, with role-based access for customers, owners and admins.",
    highlights: [
      "Built the homepage and the full registration & login flow",
      "Built the customer-side flow and request-details pages with status tracking (pending, approved, active, complete)",
      'Built the "My Workshop" page for owners, consuming the teammates\' Laravel REST API',
    ],
    featured: true,
  },
  {
    id: "zmovie",
    title: "ZMovie",
    subtitle: "Movie & TV Discovery Platform",
    type: "solo",
    teamSize: null,
    src: zmovie,
    live: "https://sa3ed-zmovie.netlify.app",
    code: "https://github.com/Sa3ed-031/zmovie",
    tech: [
      "React",
      "React Router",
      "Context API",
      "Axios",
      "API",
      "Tailwind",
      "MUI",
      "Styled Components",
    ],
    description:
      "Movie and TV discovery platform powered by the TMDB API, with search, filters, trailers and a personal watchlist.",
    highlights: [
      "7 pages with search, genre/year/rating filters and pagination",
      "Centralized API layer and a custom useFetch hook",
      "Trailers, cast and similar titles",
    ],
    featured: true,
  },
  {
    id: "archi-carpenter",
    title: "Archi Carpenter",
    subtitle: "Business Website Concept",
    type: "solo",
    teamSize: null,
    src: carpentry,
    live: "https://sa3ed-archi-carpenter.netlify.app",
    code: "https://github.com/Sa3ed-031/Archi-Carpenter",
    tech: ["React", "React Router", "CSS", "MUI", "GSAP", "Context API"],
    description:
      "Responsive multi-page website concept for a carpentry business.",
    highlights: [
      "5 routed pages plus a custom 404 page",
      "GSAP animations, a Leaflet map and a contact form",
      "SEO and Open Graph tags",
    ],
    featured: false,
  },
  {
    id: "whatsapp-clone",
    title: "WhatsApp Clone",
    subtitle: "Chat App UI Clone",
    type: "solo",
    teamSize: null,
    src: whatsapp,
    live: "https://sa3ed-chatsapp.netlify.app",
    code: "https://github.com/Sa3ed-031/whatsapp-clone",
    tech: ["React", "CSS", "MUI", "Context API", "Local Storage"],
    description:
      "WhatsApp-style chat app with private chats, groups and broadcast messaging, running fully in the browser.",
    highlights: [
      "10+ screens on a client-side data model",
      "Group creation with broadcasting",
      "SHA-256 password hashing",
    ],
    featured: false,
  },
  {
    id: "articles-blog",
    title: "Tech Insight",
    subtitle: "Tech Articles Blog",
    type: "solo",
    teamSize: null,
    src: articles,
    live: "https://sa3ed-articles-blog-project.netlify.app",
    code: null,
    tech: ["React", "Context API", "CSS", "Styled Components"],
    description:
      "Responsive tech articles blog with search, filters and light/dark mode.",
    highlights: ["List and grid views", "Light and dark mode"],
    featured: false,
  },
];

export default projectsList;
