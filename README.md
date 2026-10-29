# Saeed Al-Haj Hussein – Portfolio

My personal portfolio: a fast, responsive React site that presents my services and projects, with a working contact form.

[![Live Demo](https://img.shields.io/badge/Live_Demo-sa3ed--031.github.io-4f39f6?style=for-the-badge&logo=github&logoColor=white)](https://sa3ed-031.github.io)

<img src="./public/preview.png" width="800" alt="Portfolio preview" />

## Features

- **Responsive design** that works from small phones to large desktop screens
- **Categorized skills section** grouping my tech stack (languages, frontend, styling, backend, tools) with logo icons
- **Projects showcase** with team/solo badges, tech tags, expandable highlights, and links to each live demo and source code
- **Project filtering** by type (team / solo) and by technology, with animated reflow when filters change
- **Services section** describing what I offer to clients
- **Contact form** that sends messages straight to my inbox with [EmailJS](https://www.emailjs.com/)
- **Scroll animations:** sections and cards fade in as they scroll into view (via [Motion](https://motion.dev/)), and respect the reduced-motion setting
- **Other animations:** typing effect in the hero and hover transitions

## Tech Stack

| Category      | Technology                                  |
| ------------- | ------------------------------------------- |
| Framework     | React 19                                    |
| Build tool    | Vite 8                                      |
| Styling       | Tailwind CSS 4, custom CSS                  |
| UI components | Material UI 7 (icons, buttons) with Emotion |
| Animations    | Motion (formerly Framer Motion)             |
| Icons         | React Icons (Simple Icons set)              |
| Routing       | React Router 7                              |
| Contact form  | EmailJS (`@emailjs/browser`)                |
| Linting       | ESLint 9                                    |
| Hosting       | GitHub Pages (GitHub Actions)               |

## Getting Started

```bash
git clone https://github.com/Sa3ed-031/Sa3ed-031.github.io.git
cd Sa3ed-031.github.io
npm install
npm run dev
```

### Environment variables

The contact form needs EmailJS keys. Copy `.env.example` to `.env` and fill in the values from your EmailJS dashboard:

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

`.env` is ignored by Git. For deployment, add the same variables as repository secrets in GitHub (Settings → Secrets and variables → Actions).

### Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start the dev server            |
| `npm run build`   | Build for production in `dist/` |
| `npm run preview` | Preview the production build    |
| `npm run lint`    | Run ESLint                      |

## Author

**Saeed Al-Haj Hussein** – Front-End Developer

- LinkedIn: [sa3ed-al-haj-hussein](https://www.linkedin.com/in/sa3ed-al-haj-hussein/)
- GitHub: [Sa3ed-031](https://github.com/Sa3ed-031)
- Email: [saeedalhajwork@gmail.com](mailto:saeedalhajwork@gmail.com)

<p align="center">💼 Need a website for your business? <a href="mailto:saeedalhajwork@gmail.com">Let's talk!</a></p>
