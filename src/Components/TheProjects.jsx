import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import projectsList from "../data/projects";
import staggerDelay from "../utils/staggerDelay";

const MotionDiv = motion.div;

// Featured projects first, otherwise keep the data order
const sortedProjects = [...projectsList].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
);

const typeFilters = [
  { value: "all", label: "All", count: projectsList.length },
  {
    value: "team",
    label: "Team",
    count: projectsList.filter((p) => p.type === "team").length,
  },
  {
    value: "solo",
    label: "Solo",
    count: projectsList.filter((p) => p.type === "solo").length,
  },
];

// Every technology once, the most used first
const techCounts = projectsList
  .flatMap((p) => p.tech)
  .reduce(
    (counts, tech) => ({ ...counts, [tech]: (counts[tech] || 0) + 1 }),
    {},
  );
const techOptions = Object.keys(techCounts).sort(
  (a, b) => techCounts[b] - techCounts[a] || a.localeCompare(b),
);

const TheProjects = () => {
  const [type, setType] = useState("all");
  const [selectedTech, setSelectedTech] = useState([]);

  const filteredProjects = useMemo(
    () =>
      sortedProjects.filter(
        (project) =>
          (type === "all" || project.type === type) &&
          selectedTech.every((tech) => project.tech.includes(tech)),
      ),
    [type, selectedTech],
  );

  const isFiltered = type !== "all" || selectedTech.length > 0;

  const toggleTech = (tech) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
  };

  const clearFilters = () => {
    setType("all");
    setSelectedTech([]);
  };

  return (
    <div className="the-projects section-container" id="Projects">
      <Reveal as="h2" className="section-heading">
        Projects
      </Reveal>

      <Reveal className="project-filters flex flex-col items-center gap-4 w-full max-w-7xl mx-auto">
        <div
          role="group"
          aria-label="Filter projects by type"
          className="type-filter flex"
        >
          {typeFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={type === filter.value}
              className={`filter-btn ${type === filter.value ? "active" : ""}`}
              onClick={() => setType(filter.value)}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        <div
          role="group"
          aria-label="Filter projects by technology"
          className="tech-filter flex flex-wrap justify-center gap-2"
        >
          {techOptions.map((tech) => (
            <button
              key={tech}
              type="button"
              aria-pressed={selectedTech.includes(tech)}
              className={`filter-chip ${selectedTech.includes(tech) ? "active" : ""}`}
              onClick={() => toggleTech(tech)}
            >
              {tech}
            </button>
          ))}
          {isFiltered && (
            <button type="button" className="clear-btn" onClick={clearFilters}>
              Clear
            </button>
          )}
        </div>
      </Reveal>

      <div className="projects-grid relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredProjects.map((project, index) => (
            <MotionDiv
              key={project.id}
              layout="position"
              className="motion-card"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Reveal delay={staggerDelay(index)} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </MotionDiv>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="projects-empty flex flex-col items-center gap-4 text-center">
          <p className="almost-white text-lg">
            No projects match these filters.
          </p>
          <button type="button" className="clear-btn" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const {
    id,
    title,
    subtitle,
    type,
    teamSize,
    src,
    live,
    code,
    tech,
    description,
    highlights,
  } = project;

  return (
    <article className="project-card h-full flex flex-col overflow-hidden rounded-3xl">
      <div className="project-preview aspect-video overflow-hidden">
        <img
          src={src}
          alt={`${title} – ${subtitle} homepage screenshot`}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="project-info flex flex-col flex-1 gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="almost-white text-2xl font-extrabold">{title}</h3>
            <p className="color-main text-sm font-semibold">{subtitle}</p>
          </div>
          <span className="type-badge shrink-0">
            {type === "team" ? `Team of ${teamSize}` : "Solo"}
          </span>
        </div>

        <p className="almost-white">{description}</p>

        <ul className="project-tags flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <button
          type="button"
          className="details-toggle color-main font-bold w-fit"
          aria-expanded={showDetails}
          aria-controls={`${id}-highlights`}
          onClick={() => setShowDetails((prev) => !prev)}
        >
          {showDetails ? "Hide details ↑" : "Read more →"}
        </button>
        <ul
          id={`${id}-highlights`}
          hidden={!showDetails}
          className="highlights almost-white list-disc pl-5 flex-col gap-1"
        >
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} live demo`}
            className="card-btn primary"
          >
            Live Demo
          </a>
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
              className="card-btn"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default TheProjects;
