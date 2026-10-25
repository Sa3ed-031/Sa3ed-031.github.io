# Portfolio Improvements – Task Brief

You are working on my personal portfolio website (React + Vite), deployed at https://sa3ed-portfolio.netlify.app.

**Before changing anything:** explore the project structure, find where each section (Navbar, Hero, Education, Services, Projects, Contact, Footer) lives, and check whether styling uses TailwindCSS, plain CSS, or MUI. Follow the existing code style and conventions. Do not change unrelated logic (e.g. the EmailJS contact form behavior). Keep the current visual identity (dark navy background + indigo/purple accent).

Work through the tasks in priority order. After finishing, run `npm run build` to make sure nothing is broken, then give me a short summary of every file you changed.

---

## 🔴 Priority 1 – Critical

### 1. Fix the font (site currently renders in the browser default Times New Roman)
- Find any broken or commented-out Google Fonts link and remove it.
- Add this to `index.html` inside `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```
- Apply `font-family: 'Poppins', sans-serif;` globally (in the global CSS, and in the Tailwind config / MUI theme too if the project uses them), so every element uses Poppins.
- Check that no component overrides it with a serif font.

### 2. Unify my name everywhere
- The correct name is exactly: **Saeed Al-Haj Hussein**
- Replace every variation (e.g. "Saeed al haj hussain", "Hussain") in the Navbar logo, Footer copyright, page title, alt texts, and anywhere else.
- In the Navbar logo keep the existing two-color style: "Saeed" in the accent color, "Al-Haj Hussein" in white.

### 3. Rewrite the Hero text
Replace the current long paragraphs (the "1-year experience, ITE Major..." text, the "Tech-Stack" paragraph, the "Familiar with C++, Java, Python..." line, and the "strong foundation..." paragraph) with:

- Heading: **Hi, I'm Saeed** (keep "Saeed" in the accent color)
- Keep the typing animation line, with these words: `Front-End Developer`, `React Developer`, `Web Designer`
- Paragraph:
  > Front-End Developer helping businesses launch fast, modern websites and web apps. I build with React, Tailwind and Firebase, with a focus on clean design and smooth user experience.
- Below it, a row of small tech badges/chips: `React` `Tailwind` `Firebase` `Redux` `MUI`
- Keep the social icons and the Hire / Contact buttons. Make sure "Hire" scrolls to the Contact section (or opens `mailto:saeedalhajwork@gmail.com`).

### 4. Update `index.html` `<head>` (SEO + social previews)
Replace the existing `<title>` and add the meta tags below. Remove any default title like "Vite + React".
```html
<title>Saeed Al-Haj Hussein – Front-End Developer</title>
<meta name="description" content="Front-End Developer building fast, modern websites and web apps with React, Tailwind and Firebase. Available for freelance projects and full-time roles." />
<meta name="author" content="Saeed Al-Haj Hussein" />
<link rel="canonical" href="https://sa3ed-portfolio.netlify.app/" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://sa3ed-portfolio.netlify.app/" />
<meta property="og:title" content="Saeed Al-Haj Hussein – Front-End Developer" />
<meta property="og:description" content="I build fast, modern websites and web apps for businesses. React · Tailwind · Firebase." />
<meta property="og:image" content="https://sa3ed-portfolio.netlify.app/preview.png" />

<meta name="twitter:card" content="summary_large_image" />

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Saeed Al-Haj Hussein",
  "jobTitle": "Front-End Developer",
  "url": "https://sa3ed-portfolio.netlify.app/",
  "sameAs": [
    "https://github.com/Sa3ed-031",
    "https://www.linkedin.com/in/sa3ed-al-haj-hussein/"
  ]
}
</script>
```
- I will place `preview.png` (1200×630) in the `public/` folder myself. Just make sure the `public/` folder exists.
- Make sure the favicon is in `public/` and referenced with an absolute path like `/favicon.png` (not a `src/...` path and no backslashes).

---

## 🟡 Priority 2 – Readability & Layout

### 5. Fix low-contrast text
- Any text in dark blue/indigo on the dark background (e.g. the "Tech-Stack:" and "Familiar" labels, "Press to read more" links) must be readable. Use a lighter accent shade (around `#A59BFF` or Tailwind `indigo-300`/`indigo-400`) for text on dark backgrounds.
- Aim for WCAG AA contrast (4.5:1) for body text.

### 6. Fix the purple diamond shape in the Hero
- It currently sits behind the hero text and hurts readability, especially on mobile.
- Move it behind the profile photo instead, or reduce its size/opacity so it never overlaps the text. On mobile, hide it or make it very subtle.

### 7. Condense the Education section
The current timeline is too long and too detailed for clients (high-school grades, lists of courses). Keep the timeline design but shorten it to these entries:

- **2022 – Present** · **B.Sc. Software Engineering, Homs University**
  Studying software engineering fundamentals: programming, data structures, databases and software design.
- **2024** · **Started Web Development**
  Learned HTML, CSS and modern JavaScript, and built my first responsive websites.
- **2025** · **React.js & Modern Front-End**
  Moved to React, TailwindCSS, React Router, Redux Toolkit and Material-UI, building real projects.
- **2026** · **Real-World Projects**
  Built Rennello (team platform with role-based access), ZMovie and business websites. Currently learning TypeScript and building a real-time chat app with Firebase.

Also move the Education section **below** the Projects section in both the page order and the Navbar links (new order: Home, Services, Projects, Education, Contact).

### 8. Improve the Projects section
- **Reorder** the project cards: Rennello Platform, ZMovie Website, Archi Carpenter, WhatsApp Clone, then the rest (Articles Blog, Prayers Times, Weather App).
- **Rename** "Carpentry Agency" to **Archi Carpenter**.
- Replace the "Press to read more" text with **View Project →**.
- Add small tech-stack tags on each card. Use these where known:
  - Rennello: React, Redux, Tailwind, MUI
  - ZMovie: React, Tailwind, Axios, MUI
  - Archi Carpenter: React, React Router, Leaflet, GSAP
  - WhatsApp Clone: React, MUI
  - For other projects, derive the tags from the project's existing data, or leave a `// TODO: add tech tags` comment.
- If project data is hardcoded inside JSX, refactor it into a single data array (e.g. `src/data/projects.js`) and map over it, so adding projects later is easy.
- Make sure the "Live" badge/button is visible without hover on mobile (touch devices have no hover).

### 9. Fix the Services cards alignment
- The 4th card ("Portfolio Websites") overflows its container and is misaligned with the others. Make all four cards equal height and aligned in the grid.

---

## 🟢 Priority 3 – Small Improvements

### 10. Contact section
- Add my email as visible clickable text above or beside the form: `saeedalhajwork@gmail.com` (`mailto:` link).
- Make the "Your Number" field optional (no `required`).

### 11. Social links
- <!-- OPTIONAL: delete this task if you want to keep Instagram --> Remove the Instagram icon from the Hero and Footer.
- Make sure all social links open in a new tab with `target="_blank" rel="noopener noreferrer"`.
- Add an `aria-label` to every icon-only link and button (e.g. `aria-label="LinkedIn"`).

### 12. Footer
- Copyright text: `© 2026 Saeed Al-Haj Hussein. All rights reserved.`
- Update the footer nav links to match the new section order.

### 13. General quality checks
- Every `<img>` must have a meaningful `alt` text.
- Check the whole site at 375px, 768px and 1440px widths: no horizontal scrolling, no overlapping text.
- Remove unused imports, unused components and `console.log` statements.
- In `package.json`, set `"name": "sa3ed-portfolio"` if it currently has a default/unrelated name.
- Make sure `.gitignore` includes `node_modules`, `dist` and `.env`.

---

## 📄 Final Task – README.md
Replace the repository README with a professional one containing:
- Title: **Saeed Al-Haj Hussein – Portfolio**
- One-line description
- A "Live Demo" shields.io badge linking to https://sa3ed-portfolio.netlify.app
- The preview image: `<img src="./public/preview.png" width="800" />`
- Features list (responsive design, projects showcase, services, contact form with EmailJS, animations if any)
- Tech stack table (based on the real `package.json` dependencies)
- Getting Started steps (`git clone`, `npm install`, `npm run dev`), and mention that EmailJS keys must go in a `.env` file if the project uses environment variables
- Author section with LinkedIn (https://www.linkedin.com/in/sa3ed-al-haj-hussein/), GitHub (https://github.com/Sa3ed-031) and email (saeedalhajwork@gmail.com)

---

## ⚠️ Security check
If any API keys (e.g. EmailJS service ID, template ID, public key) are hardcoded in the source, move them to a `.env` file using `VITE_` prefixed variables, read them with `import.meta.env`, add `.env` to `.gitignore`, and create a `.env.example` with empty values. Tell me which variables I need to add in Netlify's environment settings.
