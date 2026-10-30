import SocialLinks from "./SocialLinks";

const TheFooter = ({ headerLinks }) => {
  return (
    <footer className="relative bottom-0 flex flex-col items-center gap-2 bg-surface p-4 from-1537:px-8 from-1537:pt-12 from-1537:pb-8">
      <SocialLinks variant="footer" />

      {/* Wraps onto a second centered row when the links do not fit (small phones) */}
      <div className="flex flex-wrap justify-center gap-x-3.5 upto-492:gap-x-2 upto-380:gap-x-1 upto-322:gap-x-0">
        {headerLinks
          .filter((link) => link !== "Contact")
          .map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="border-b-[0.1rem] border-b-transparent p-4 text-[1.1rem] font-bold text-cloud hover:border-b-lavender hover:text-lavender from-1537:text-[2rem] upto-492:p-2 upto-492:text-[1rem]"
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
