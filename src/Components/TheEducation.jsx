import Reveal from "./Reveal";

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
    <div className="the-education section-container" id="Education">
      <Reveal as="h2" className="section-heading">
        Education
      </Reveal>
      <div className="timeline-items flex flex-col gap-6 max-w-7xl m-auto relative">
        {timeline.map((item, index) => (
          <TimelineItem
            key={item.date}
            {...item}
            // Odd items sit on the left of the line, even items on the right
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ date, head, content, direction }) => {
  return (
    <Reveal
      direction={direction}
      className="timeline-item w-full relative flex flex-col gap-3"
    >
      <div className="timeline-dot w-5 h-5 bg-(--main-color) rounded-full absolute top-2.25"></div>
      <div className="timeline-date almost-white text-[20px] font-bold w-fit p-2">
        {date}
      </div>
      <div className="timeline-content flex flex-col gap-4 cursor-pointer px-8 py-[1.3rem] rounded-4xl">
        <h3 className="almost-white text-[22px] font-medium">{head}</h3>
        <p className="almost-white">{content}</p>
      </div>
    </Reveal>
  );
};

export default TheEducation;
