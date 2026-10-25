import SocialLinks from "./SocialLinks";

const TheFooter = ({ headerLinks }) => {
  return (
    <div className="the-footer flex flex-col items-center p-4 gap-2 relative bottom-0">
      <SocialLinks />

      <div className="links flex gap-3.5">
        {headerLinks
          .filter((link) => link !== "Contact")
          .map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="p-1rem-bold-white text-[1.1rem] border-b-[0.1rem] border-b-transparent"
            >
              {link}
            </a>
          ))}
      </div>
      <p className="color-main text-center w-full font-bold">
        &copy; 2026 Saeed Al-Haj Hussein. All rights reserved.
      </p>
    </div>
  );
};

export default TheFooter;
