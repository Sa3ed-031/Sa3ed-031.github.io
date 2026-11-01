import clsx from "clsx";
import { MdTableRows } from "react-icons/md";

const TheHeader = ({
  headerLinks,
  showDropDownHeader,
  setShowDropDownHeader,
}) => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex w-full justify-around backdrop-blur-[30px] upto-768:justify-between upto-655:px-4">
      <div className="p-4 text-[1.1rem] font-bold text-cloud hover:scale-108 from-1537:text-[2rem] upto-768:pr-0">
        <span className="text-lavender">Saeed</span> Al-Haj Hussein
      </div>

      {/* Same size and round hover highlight as the old MUI IconButton */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={showDropDownHeader}
        className="hidden cursor-pointer rounded-full p-2 text-[1.5rem] text-indigo-brand transition-all duration-600 ease-in-out hover:bg-black/4 upto-655:block"
        onClick={() => {
          setShowDropDownHeader((prev) => !prev);
        }}
      >
        <MdTableRows aria-hidden="true" />
      </button>

      <div
        className={clsx(
          "relative flex gap-3.5 upto-768:gap-0",
          // Below 655px the links become a dropdown under the header
          "max-md:absolute max-md:top-full max-md:right-0 max-md:w-full max-md:flex-col max-md:gap-2 max-md:overflow-hidden max-md:border-3 max-md:border-indigo-brand/50 max-md:bg-surface/92",
          showDropDownHeader ? "max-md:flex" : "max-md:hidden",
        )}
      >
        {headerLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="h-[98%] border-b-[0.1rem] border-b-transparent p-4 px-2.5 text-[1.1rem] font-bold text-cloud hover:border-b-lavender hover:text-lavender from-1537:text-[2rem] upto-655:transition-all upto-655:duration-400 upto-655:ease-in-out upto-655:last:hover:border-transparent"
          >
            {link}
          </a>
        ))}
      </div>
    </header>
  );
};

export default TheHeader;
