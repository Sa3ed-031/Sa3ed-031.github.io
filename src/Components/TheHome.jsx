import SocialLinks from "./SocialLinks";
import MyProfile from "../assets/images/profile.png";
import myCV from "../assets/Sa3ed-CV.pdf";

const techStack = ["React", "Tailwind", "Firebase", "Redux", "MUI"];

const TheHome = () => {
  return (
    <div
      className="the-home overflow-hidden relative flex items-center justify-evenly gap-7 px-8 py-16"
      id="Home"
    >
      <div className="bio text-white gap-2 relative">
        <h1>
          Hi, I'm <span className="color-main">Saeed</span>
        </h1>

        <span className="text-animation">
          I'm a <span className="relative font-bold"></span>
        </span>

        <p>
          Front-End Developer helping businesses launch fast, modern websites
          and web apps. I build with React, Tailwind and Firebase, with a focus
          on clean design and smooth user experience.
        </p>

        <ul className="tech-chips flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <SocialLinks />

        <div className="buttons flex gap-5">
          <a href="mailto:saeedalhajwork@gmail.com" className="btn">
            Hire
          </a>
          <a href="#Contact" className="btn">
            Contact
          </a>
        </div>
        <a href={myCV} className="overflow-hidden" download>
          <button className="btn">Download CV</button>
        </a>
      </div>

      <div className="profile items-center relative">
        <div className="relative">
          <div
            className="rectangle absolute left-1/2 top-[calc(50%+1rem)] w-[83%] aspect-square
              -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-3xl z-0 opacity-40 md:opacity-100
              bg-linear-to-br from-indigo-500 via-indigo-600 to-indigo-900"
          ></div>
          <img src={MyProfile} alt="Saeed Al-Haj Hussein" />
        </div>
      </div>
    </div>
  );
};

export default TheHome;
