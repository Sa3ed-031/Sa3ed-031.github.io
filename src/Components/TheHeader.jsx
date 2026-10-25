import IconButton from "@mui/material/IconButton";
import TableRowsIcon from "@mui/icons-material/TableRows";

const TheHeader = ({
  headerLinks,
  showDropDownHeader,
  setShowDropDownHeader,
}) => {
  return (
    <div className="the-header flex justify-around fixed w-full top-0 left-0 right-0 z-10">
      <div className="my-name p-1rem-bold-white text-[1.1rem]">
        <span className="color-main">Saeed</span> Al-Haj Hussein
      </div>

      <IconButton
        aria-label="Toggle navigation menu"
        aria-expanded={showDropDownHeader}
        className="links-toggle"
        onClick={() => {
          setShowDropDownHeader((prev) => !prev);
        }}
      >
        <TableRowsIcon className=" text-[2.5rem]" />
      </IconButton>

      <div
        className={`links ${showDropDownHeader ? "links-open" : ""} flex gap-3.5 relative`}
      >
        {headerLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="p-1rem-bold-white text-[1.1rem] h-[98%] border-b-[0.1rem] border-b-transparent"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TheHeader;
