import clsx from "clsx";
import Reveal from "./Reveal";
import Card from "./ui/Card";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const timeline = [
  {
    date: "2022 – Present",
    head: "B.Sc. Software Engineering, Homs University",
    content:
      "Studying software engineering fundamentals: programming, data structures, databases and software design.",
  },
  {
    date: "2024",
    head: "Started Web Development",
    content:
      "Learned HTML, CSS and modern JavaScript, and built my first responsive websites.",
  },
  {
    date: "2025",
    head: "React.js & Modern Front-End",
    content:
      "Moved to React, TailwindCSS, React Router, Redux Toolkit and Material-UI, building real projects.",
  },
  {
    date: "2026",
    head: "Real-World Projects",
    content:
      "Built Rennello (team platform with role-based access), ZMovie and business websites. Currently learning TypeScript and building a real-time chat app with Firebase.",
  },
];

const TheEducation = () => {
  return (
    <Section id="Education" className="bg-surface upto-492:px-8 upto-492:py-12">
      <SectionTitle>Education</SectionTitle>
      {/* The ::before line runs down the middle (down the left edge on small screens) */}
      <div className="relative m-auto flex max-w-7xl flex-col gap-6 before:absolute before:left-[calc(50%-10px)] before:h-full before:w-[10px] before:bg-indigo-brand upto-768:gap-8 upto-768:before:left-0">
        {timeline.map((item, index) => (
          // Odd items sit on the left of the line, even items on the right
          <TimelineItem key={item.date} {...item} isLeft={index % 2 === 0} />
        ))}
      </div>
    </Section>
  );
};

const TimelineItem = ({ date, head, content, isLeft }) => {
  return (
    <Reveal
      direction={isLeft ? "left" : "right"}
      className={clsx(
        "relative flex w-full flex-col gap-3 upto-768:items-start upto-768:pr-0 upto-768:pl-8 upto-768:text-left",
        isLeft ? "items-end pr-[calc(50%+30px)]" : "pl-[calc(50%+30px)]",
      )}
    >
      <div
        className={clsx(
          "absolute top-2.25 size-5 rounded-full bg-indigo-brand shadow-[0_0_25px_var(--color-indigo-brand),0_0_50px_var(--color-indigo-brand)] from-1537:top-[17.5px] from-1537:size-[25px] upto-768:left-0",
          isLeft
            ? "left-[calc(50%-20px)] from-1537:left-[calc(50%-25px)]"
            : "left-[calc(50%-10px)]",
        )}
      ></div>
      <div className="w-fit rounded-[0.4rem] p-2 text-[20px] font-bold text-cloud from-1537:text-[2.5rem]">
        {date}
      </div>
      <Card className="flex cursor-pointer flex-col gap-4 rounded-4xl border-[0.3rem] bg-navy px-8 py-[1.3rem] transition-all duration-400 ease-in-out hover:scale-103 from-1537:gap-6 upto-380:p-4">
        <h3 className="text-[22px] font-medium text-cloud from-1537:text-[3rem] upto-492:text-[1.3rem]">
          {head}
        </h3>
        <p className="leading-[22px] text-cloud from-1537:text-[2rem] from-1537:leading-[1.6] upto-492:text-[0.9rem] upto-322:leading-[1.3]">
          {content}
        </p>
      </Card>
    </Reveal>
  );
};

export default TheEducation;
