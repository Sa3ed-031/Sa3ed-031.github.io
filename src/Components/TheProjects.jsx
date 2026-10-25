import { useState } from "react";
import projectsList from "../data/projects";

const TheProjects = () => {
  return (
    <div
      className="the-projects projects-services section-container"
      id="Projects"
    >
      <h2 className="section-heading">Projects</h2>
      <div className="projects-services-container projects-container flex gap-5">
        {projectsList.map((project) => (
          <ProjectBox
            key={project.title}
            title={project.title}
            src={project.src}
            url={project.url}
            tags={project.tags}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectBox = ({ title, src, url, tags, description }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`project-box overflow-hidden perspective-near px-4 py-8`}>
      <div
        className={`box ${flip ? "rotate" : ""} relative transform-3d w-full h-full`}
      >
        <div
          className={`face front ${
            flip
              ? setTimeout(() => {
                  return "z-0";
                }, 600)
              : "z-10"
          }`}
          onClick={() => {
            setFlip(true);
          }}
        >
          <div
            className="project-preview w-full flex-1 min-h-0
                relative flex items-center justify-center"
          >
            <img
              src={src}
              alt={`${title} website preview`}
              className=" w-full h-full object-cover border-none"
            />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} live website`}
              className="almost-white text-center font-bold text-md
                  p-4 cursor-pointer absolute z-10 hidden"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Live
            </a>
          </div>

          <div
            className="project-info h-auto px-6 py-4 flex
                flex-col justify-start gap-2"
          >
            <h4>{title}</h4>
            <ul className="project-tags flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <span className="color-main font-bold text-lg">
              View Project &rarr;
            </span>
          </div>
        </div>

        <div
          className="face back overflow-y-scroll"
          onClick={() => {
            setFlip(false);
          }}
        >
          <h4 className="color-main font-bold">{title}</h4>
          <p>
            {description ||
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro a magni maiores autem, nihil natus repellendus, ab placeat dolores tenetur deleniti quam optio."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheProjects;
