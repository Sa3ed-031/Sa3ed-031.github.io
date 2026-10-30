import clsx from "clsx";
import Reveal from "./Reveal";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import servicesList from "../data/services";
import staggerDelay from "../utils/staggerDelay";

const TheServices = () => {
  return (
    <Section id="Services">
      <SectionTitle>Services</SectionTitle>
      <div className="mx-auto grid w-full max-w-[1200px] auto-rows-[1fr] grid-cols-2 gap-8 from-1537:max-w-[1800px] upto-768:gap-4 upto-616:auto-rows-auto upto-616:grid-cols-1">
        {servicesList.map((service, index) => (
          <Reveal key={service.title} delay={staggerDelay(index)}>
            <ServiceBox
              title={service.title}
              description={service.description}
              index={index}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

const ServiceBox = ({ title, description, index }) => {
  return (
    <div
      className={clsx(
        "flex h-full w-full cursor-pointer flex-col justify-between gap-4 rounded-[3rem] p-8 text-white/90 opacity-80 transition-all duration-600 ease-in-out hover:scale-103 upto-492:p-6",
        // Checkerboard in the 2-column grid, alternating stripes in one column and on big screens
        index === 1 || index === 2 ? "bg-gray-800" : "bg-indigo-deep",
        index % 2 === 1
          ? "from-1537:bg-gray-800 upto-616:bg-gray-800"
          : "from-1537:bg-indigo-deep upto-616:bg-indigo-deep",
      )}
    >
      <h4 className="text-[1.8rem] font-extrabold from-1537:text-[3.2rem] upto-768:text-[1.6rem] upto-492:text-[1.4rem]">
        {title}
      </h4>
      <p className="text-[1.1rem] leading-[1.6] font-semibold from-1537:text-[2rem] upto-768:text-[1rem] upto-492:text-[0.95rem]">
        {description}
      </p>
    </div>
  );
};

export default TheServices;
