import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import TableRowsIcon from "@mui/icons-material/TableRows";

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

      {/* "!" because MUI's own styles load outside Tailwind's layers and would win otherwise */}
      <IconButton
        aria-label="Toggle navigation menu"
        aria-expanded={showDropDownHeader}
        className="hidden! text-indigo-brand! transition-all! duration-600! ease-in-out! upto-655:block!"
        onClick={() => {
          setShowDropDownHeader((prev) => !prev);
        }}
      >
        <TableRowsIcon />
      </IconButton>

      <div
        className={clsx(
          "relative flex gap-3.5 upto-768:gap-0",
          // Below 655px the links become a dropdown under the header
          "upto-655:absolute upto-655:top-full upto-655:right-0 upto-655:w-full upto-655:flex-col upto-655:gap-2 upto-655:overflow-hidden upto-655:border-3 upto-655:border-indigo-brand/50 upto-655:bg-surface/92",
          showDropDownHeader ? "upto-655:flex" : "upto-655:hidden",
        )}
      >
        {headerLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="h-[98%] border-b-[0.1rem] border-b-transparent p-4 text-[1.1rem] font-bold text-cloud hover:border-b-lavender hover:text-lavender from-1537:text-[2rem] upto-655:transition-all upto-655:duration-400 upto-655:ease-in-out upto-655:last:hover:border-transparent"
          >
            {link}
          </a>
        ))}
      </div>
    </header>
  );
};

export default TheHeader;
