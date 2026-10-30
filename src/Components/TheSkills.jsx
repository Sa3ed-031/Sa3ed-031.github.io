import Reveal from "./Reveal";
import Card from "./ui/Card";
import Chip from "./ui/Chip";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { skillGroups } from "../data/skills";
import staggerDelay from "../utils/staggerDelay";

const TheSkills = () => {
  return (
    <Section id="Skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 from-1537:max-w-[1800px]">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={staggerDelay(index)}>
            <SkillGroup title={group.title} skills={group.skills} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

const SkillGroup = ({ title, skills }) => {
  return (
    <Card className="flex h-full flex-col gap-4 rounded-3xl border-[0.2rem] bg-surface p-6">
      <h3 className="text-xl font-bold text-cloud">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map(({ name, icon: Icon, learning }) => (
          <Chip
            key={name}
            className="flex items-center gap-1.5 px-[0.9em] py-[0.3em] text-[0.9rem]"
          >
            {Icon && <Icon aria-hidden="true" className="shrink-0" />}
            {name}
            {learning && (
              <span className="rounded-full border border-lavender px-[0.5em] text-[0.7rem] leading-[1.5] text-lavender">
                Learning
              </span>
            )}
          </Chip>
        ))}
      </ul>
    </Card>
  );
};

export default TheSkills;
