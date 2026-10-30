import SocialLinks from "./SocialLinks";

const TheFooter = ({ headerLinks }) => {
  return (
    <footer className="relative bottom-0 flex flex-col items-center gap-2 bg-gray-800 p-4 from-1537:px-8 from-1537:pt-12 from-1537:pb-8">
      <SocialLinks variant="footer" />

      <div className="flex gap-3.5 upto-492:gap-2 upto-380:gap-1 upto-322:gap-0">
        {headerLinks
          .filter((link) => link !== "Contact")
          .map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="border-b-[0.1rem] border-b-transparent p-4 text-[1.1rem] font-bold text-white/90 hover:border-b-lavender hover:text-lavender from-1537:text-[2rem] upto-492:p-2 upto-492:text-[1rem]"
            >
              {link}
            </a>
          ))}
      </div>
      <p className="w-full text-center text-[length:larger] font-bold text-lavender from-1537:text-[2.3rem] upto-492:text-[1.15rem] upto-434:text-[1.1rem] upto-380:text-[0.9rem] upto-322:text-[1rem]">
        &copy; 2026 Saeed Al-Haj Hussein. All rights reserved.
      </p>
    </footer>
  );
};

export default TheFooter;
