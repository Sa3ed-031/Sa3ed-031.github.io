import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";
import staggerDelay from "../utils/staggerDelay";

const TheSkills = () => {
  return (
    <div className="the-skills section-container" id="Skills">
      <Reveal as="h2" className="section-heading">
        Skills
      </Reveal>
      <div className="skills-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={staggerDelay(index)}>
            <SkillGroup title={group.title} skills={group.skills} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

const SkillGroup = ({ title, skills }) => {
  return (
    <div className="skill-group h-full flex flex-col gap-4 p-6 rounded-3xl">
      <h3 className="almost-white text-xl font-bold">{title}</h3>
      <ul className="skill-chips flex flex-wrap gap-2">
        {skills.map(({ name, icon: Icon, learning }) => (
          <li key={name} className="flex items-center gap-1.5">
            {Icon && <Icon aria-hidden="true" className="shrink-0" />}
            {name}
            {learning && <span className="learning-badge">Learning</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TheSkills;
