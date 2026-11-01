import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import Typewriter from "./Typewriter";
import Button from "./ui/Button";
import Chip from "./ui/Chip";
import MyProfile from "../assets/images/profile.webp";
import myCV from "../assets/Sa3ed-CV.pdf";

const techStack = ["React", "Tailwind", "Firebase", "Redux", "MUI"];

const roles = ["Front-End Developer", "React Developer", "Web Designer"];

// Hero buttons grow on big screens and shrink on phones
const heroButtonSize =
  "from-1537:px-8 from-1537:py-6 from-1537:text-[2rem] from-2000:text-[2.5rem] upto-492:px-[0.9rem] upto-492:py-2 upto-492:text-[1rem] upto-434:text-[0.9rem]";

const TheHome = () => {
  return (
    <div
      className="relative flex items-center justify-evenly gap-7 overflow-hidden px-8 py-16 pt-22 from-1537:justify-center from-1537:gap-[5%] from-1537:pt-20 from-1537:text-[1.7rem] from-2000:pt-24 from-2000:text-[2rem] upto-768:flex-col-reverse upto-768:gap-8 upto-768:px-4 upto-768:pt-20 upto-768:pb-12 upto-492:text-[0.95rem]"
      id="Home"
    >
      {/* The hero only slides in (no fade) so it is painted right away */}
      <Reveal
        direction="left"
        fade={false}
        className="relative flex h-full w-1/2 flex-col justify-center gap-2 text-cloud from-1537:gap-4 from-2000:gap-5 upto-932:w-[45%] upto-768:w-full upto-492:gap-[0.6rem]"
      >
        <h1 className="text-[3rem] leading-[1.2] text-balance from-2000:text-[4rem] upto-492:text-[2.2rem] upto-434:text-[2rem] upto-380:text-[1.85rem]">
          Hi, I'm <span className="text-lavender">Saeed Al-Haj Hussein</span>
        </h1>

        <span>
          I'm a <Typewriter words={roles} className="font-bold text-lavender" />
        </span>

        <p className="leading-[1.3] tracking-[1px]">
          Front-End Developer helping businesses launch fast, modern websites
          and web apps. I build with React, Tailwind and Firebase, with a focus
          on clean design and smooth user experience.
        </p>

        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Chip key={tech} className="px-[0.9em] py-[0.25em] text-[0.8em]">
              {tech}
            </Chip>
          ))}
        </ul>

        <SocialLinks variant="hero" />

        <div className="flex gap-5 upto-492:gap-2">
          <Button
            as="a"
            variant="primary"
            href="mailto:saeedalhajwork@gmail.com"
            className={heroButtonSize}
          >
            Hire
          </Button>
          <Button as="a" href="#Contact" className={heroButtonSize}>
            Contact
          </Button>
        </div>
        <div>
          <Button as="a" href={myCV} download className="inline-block">
            Download CV
          </Button>
        </div>
      </Reveal>

      <Reveal
        direction="right"
        fade={false}
        className="relative flex h-full w-fit flex-col items-center justify-center py-10 upto-932:w-[55%] upto-768:w-full"
      >
        <div className="relative grid place-items-center">
          <div
            aria-hidden="true"
            className="col-start-1 row-start-1 aspect-square w-[85%] rotate-45 rounded-3xl bg-linear-to-br from-indigo-brand to-indigo-brand/50 opacity-40 md:opacity-100"
          />
          {/* This is the LCP element: load it first and never lazily */}
          <img
            src={MyProfile}
            alt="Saeed Al-Haj Hussein"
            width={800}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="relative col-start-1 row-start-1 size-96 rounded-full shadow-[0_0_20px_var(--color-indigo-brand)] hover:shadow-[0_0_25px_var(--color-indigo-brand),0_0_50px_var(--color-indigo-brand),0_0_75px_var(--color-indigo-brand)] from-1537:size-120 from-2000:size-160 upto-492:size-80 upto-434:size-74 upto-380:size-66 upto-322:size-56"
          />
        </div>
      </Reveal>
    </div>
  );
};

export default TheHome;
