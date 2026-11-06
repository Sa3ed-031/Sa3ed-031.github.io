import clsx from "clsx";

const defaultPadding =
  "px-8 pt-8 pb-4 from-1537:p-12 upto-680:px-4 upto-680:pt-10 upto-492:pt-4";

// Page section with the shared spacing. Pass `padding` to replace the padding classes as a whole
// (mixing two values for the same breakpoint would make the winner unpredictable).
const Section = ({ id, className, padding = defaultPadding, children }) => {
  return (
    <section
      id={id}
      className={clsx(
        "flex flex-col gap-4 from-1537:gap-12",
        padding,
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
