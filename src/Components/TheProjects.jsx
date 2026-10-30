import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import clsx from "clsx";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Reveal from "./Reveal";
import Card from "./ui/Card";
import Chip from "./ui/Chip";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import projectsList from "../data/projects";
import staggerDelay from "../utils/staggerDelay";

const MotionDiv = motion.div;

const activeFilter = "border-indigo-brand bg-indigo-brand text-white";
const filterText = "cursor-pointer font-semibold text-lavender";

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
  // Ids of the cards showing their back face; cleared whenever the filters change
  const [flippedIds, setFlippedIds] = useState([]);

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

  const changeType = (value) => {
    setType(value);
    setFlippedIds([]);
  };

  const toggleTech = (tech) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech],
    );
    setFlippedIds([]);
  };

  const clearFilters = () => {
    setType("all");
    setSelectedTech([]);
    setFlippedIds([]);
  };

  const setFlipped = (id, flipped) => {
    setFlippedIds((prev) =>
      flipped ? [...prev, id] : prev.filter((flippedId) => flippedId !== id),
    );
  };

  return (
    <Section id="Projects" className="bg-gray-800">
      <SectionTitle>Projects</SectionTitle>

      <Reveal className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 from-1537:max-w-[1800px]">
        <div
          role="group"
          aria-label="Filter projects by type"
          className="flex overflow-hidden rounded-full border-2 border-indigo-deep"
        >
          {typeFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={type === filter.value}
              className={clsx(
                filterText,
                "px-[1.2rem] py-2 not-first:border-l-2",
                type === filter.value
                  ? activeFilter
                  : "border-indigo-deep hover:bg-indigo-brand/25",
              )}
              onClick={() => changeType(filter.value)}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        <div
          role="group"
          aria-label="Filter projects by technology"
          className="flex flex-wrap justify-center gap-2"
        >
          {techOptions.map((tech) => (
            <button
              key={tech}
              type="button"
              aria-pressed={selectedTech.includes(tech)}
              className={clsx(
                filterText,
                "rounded-full border px-[0.9rem] py-1 text-[0.9rem]",
                selectedTech.includes(tech)
                  ? activeFilter
                  : "border-lavender/45 hover:bg-indigo-brand/25",
              )}
              onClick={() => toggleTech(tech)}
            >
              {tech}
            </button>
          ))}
          {isFiltered && (
            <ClearButton onClick={clearFilters}>Clear</ClearButton>
          )}
        </div>
      </Reveal>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 from-1537:max-w-[1800px]">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredProjects.map((project, index) => (
            <MotionDiv
              key={project.id}
              layout="position"
              // Motion animates this element itself, so no CSS transition
              className="transition-none"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Reveal delay={staggerDelay(index)} className="h-full">
                <ProjectCard
                  project={project}
                  flipped={flippedIds.includes(project.id)}
                  onFlip={(flipped) => setFlipped(project.id, flipped)}
                />
              </Reveal>
            </MotionDiv>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-lg text-white/90">
            No projects match these filters.
          </p>
          <ClearButton onClick={clearFilters}>Clear filters</ClearButton>
        </div>
      )}
    </Section>
  );
};

const ClearButton = (props) => {
  return (
    <button
      type="button"
      className={clsx(
        filterText,
        "px-[0.9rem] py-1 text-[0.9rem] underline underline-offset-4 hover:text-white/90",
      )}
      {...props}
    />
  );
};

// Both faces sit in the same grid cell, so the card is as tall as its taller face
const ProjectCard = ({ project, flipped, onFlip }) => {
  const shouldReduceMotion = useReducedMotion();
  const detailsButton = useRef(null);
  const backButton = useRef(null);
  // Only move focus after a click, not when the filters reset the card
  const focusAfterFlip = useRef(false);

  const { id, title, subtitle, type, teamSize, src, highlights, description } =
    project;

  useEffect(() => {
    if (!focusAfterFlip.current) return;
    focusAfterFlip.current = false;
    (flipped ? backButton : detailsButton).current?.focus();
  }, [flipped]);

  const flip = (toBack) => {
    focusAfterFlip.current = true;
    onFlip(toBack);
  };

  // With reduced motion the faces cross-fade instead of rotating
  const faceClass = clsx(
    "rounded-3xl border-[0.2rem] bg-navy [grid-area:1/1]",
    shouldReduceMotion ? "transition-opacity duration-300" : "backface-hidden",
  );

  return (
    <div className="h-full perspective-[1200px]">
      <div
        className={clsx(
          "relative grid h-full transition-transform duration-600 ease-in-out transform-3d",
          flipped && !shouldReduceMotion && "rotate-y-180",
        )}
      >
        <Card
          as="article"
          inert={flipped}
          aria-hidden={flipped}
          className={clsx(
            "group flex flex-col overflow-hidden",
            faceClass,
            shouldReduceMotion && flipped && "opacity-0",
          )}
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={src}
              alt={`${title} – ${subtitle} homepage screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-600 ease-out group-hover:scale-105"
            />
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-extrabold text-white/90">
                  {title}
                </h3>
                <p className="text-sm font-semibold text-lavender">
                  {subtitle}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-indigo-deep px-[0.7rem] py-[0.15rem] text-[0.8rem] font-bold text-white/90">
                {type === "team" ? `Team of ${teamSize}` : "Solo"}
              </span>
            </div>

            <p className="text-white/90">{description}</p>

            <TechTags tech={project.tech} />

            <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
              <ProjectLinks project={project} />
              <FlipButton
                ref={detailsButton}
                aria-expanded={flipped}
                aria-controls={`${id}-details`}
                aria-label={`Show details for ${title}`}
                onClick={() => flip(true)}
              >
                Details <AutorenewIcon fontSize="small" aria-hidden="true" />
              </FlipButton>
            </div>
          </div>
        </Card>

        <Card
          as="article"
          id={`${id}-details`}
          inert={!flipped}
          aria-hidden={!flipped}
          className={clsx(
            "flex flex-col gap-4 overflow-hidden p-5",
            faceClass,
            shouldReduceMotion ? !flipped && "opacity-0" : "rotate-y-180",
          )}
        >
          <h3 className="text-2xl font-extrabold text-white/90">{title}</h3>
          <h4 className="text-sm font-bold tracking-wider text-lavender uppercase">
            {type === "team" ? "My role" : "Highlights"}
          </h4>
          <ul className="flex list-disc flex-col gap-2 pl-5 text-white/90">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <TechTags tech={project.tech} />

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
            <ProjectLinks project={project} />
            <FlipButton
              ref={backButton}
              aria-expanded={flipped}
              aria-controls={`${id}-details`}
              aria-label={`Back to ${title} overview`}
              onClick={() => flip(false)}
            >
              <ArrowBackIcon fontSize="small" aria-hidden="true" /> Back
            </FlipButton>
          </div>
        </Card>
      </div>
    </div>
  );
};

const FlipButton = (props) => {
  return (
    <button
      type="button"
      className="ml-auto inline-flex cursor-pointer items-center gap-[0.3rem] font-bold text-lavender hover:text-white/90 focus-visible:text-white/90"
      {...props}
    />
  );
};

const TechTags = ({ tech }) => {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <Chip
          key={t}
          variant="outline"
          className="px-[0.6rem] py-[0.15rem] text-[0.75rem]"
        >
          {t}
        </Chip>
      ))}
    </ul>
  );
};

const cardButton =
  "rounded-full border-2 px-[1.1rem] py-[0.45rem] font-bold hover:border-indigo-brand hover:bg-indigo-brand hover:text-white";

const ProjectLinks = ({ project: { title, live, code } }) => {
  return (
    <>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} live demo`}
        className={clsx(
          cardButton,
          "border-indigo-brand bg-indigo-brand text-white",
        )}
      >
        Live Demo
      </a>
      {code && (
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} source code on GitHub`}
          className={clsx(cardButton, "border-indigo-deep text-lavender")}
        >
          Code
        </a>
      )}
    </>
  );
};

export default TheProjects;
