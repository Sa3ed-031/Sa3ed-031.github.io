import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import Button from "./ui/Button";
import Chip from "./ui/Chip";
import MyProfile from "../assets/images/profile.jpg";
import myCV from "../assets/Sa3ed-CV.pdf";

// Only the main tools; the full grouped list lives in the Skills section
const techStack = ["React", "Tailwind", "Firebase", "Redux", "MUI"];

// Hero buttons grow on big screens and shrink on phones
const heroButtonSize =
  "from-1537:px-8 from-1537:py-6 from-1537:text-[2rem] from-2000:text-[2.5rem] upto-492:px-[0.9rem] upto-492:py-2 upto-492:text-[1rem] upto-434:text-[0.9rem]";

const TheHome = () => {
  return (
    <div
      // "the-home" and "bio" stay as hooks for SocialLinks' remaining CSS until it's migrated
      className="the-home relative flex items-center justify-evenly gap-7 overflow-hidden px-8 py-16 pt-22 from-1537:justify-center from-1537:gap-[5%] from-1537:pt-20 from-1537:text-[1.7rem] from-2000:pt-24 from-2000:text-[2rem] upto-768:flex-col-reverse upto-768:gap-8 upto-768:px-4 upto-768:pt-20 upto-768:pb-12 upto-492:text-[0.95rem]"
      id="Home"
    >
      <Reveal
        direction="left"
        className="bio relative flex h-full w-1/2 flex-col justify-center gap-2 text-white from-1537:gap-4 from-2000:gap-5 upto-932:w-[45%] upto-768:w-full upto-492:gap-[0.6rem]"
      >
        <h1 className="text-[3rem] from-2000:text-[4rem] upto-492:text-[2.2rem] upto-434:text-[2rem]">
          Hi, I'm <span className="text-lavender">Saeed</span>
        </h1>

        {/* The role text comes from the "words" keyframes; a navy block wipes it like a typing cursor */}
        <span>
          I'm a{" "}
          <span className="relative font-bold before:animate-words before:text-lavender after:absolute after:-right-2 after:h-full after:w-[calc(100%+8px)] after:animate-typing after:border-l-3 after:border-navy after:bg-navy"></span>
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

        <SocialLinks />

        <div className="flex gap-5 upto-492:gap-2">
          <Button
            as="a"
            variant="primary"
            href="mailto:saeedalhajwork@gmail.com"
            className={`hover:bg-indigo-deep hover:text-white/90 ${heroButtonSize}`}
          >
            Hire
          </Button>
          <Button
            as="a"
            href="#Contact"
            className={`hover:bg-indigo-deep hover:text-white/90 ${heroButtonSize}`}
          >
            Contact
          </Button>
        </div>
        {/* Block wrapper keeps the old line height around the button on big screens */}
        <div>
          <Button as="a" href={myCV} download className="inline-block">
            Download CV
          </Button>
        </div>
      </Reveal>

      <Reveal
        direction="right"
        className="relative flex h-full w-fit flex-col items-center justify-center upto-932:w-[55%] upto-768:w-full"
      >
        <div className="relative">
          <div className="absolute top-[calc(50%+1rem)] left-1/2 z-0 aspect-square w-[83%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-3xl bg-linear-to-br from-indigo-500 via-indigo-600 to-indigo-900 opacity-40 md:opacity-100"></div>
          <img
            src={MyProfile}
            alt="Saeed Al-Haj Hussein"
            className="relative top-4 size-96 rounded-full shadow-[0_0_20px_var(--color-indigo-deep)] hover:shadow-[0_0_25px_var(--color-indigo-deep),0_0_50px_var(--color-indigo-deep),0_0_75px_var(--color-indigo-deep)] from-1537:size-120 from-2000:size-160 upto-492:size-80 upto-434:size-74 upto-380:size-66 upto-322:size-56"
          />
        </div>
      </Reveal>
    </div>
  );
};

export default TheHome;
