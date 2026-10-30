import clsx from "clsx";

// Page section with the shared spacing; pass breakpoint overrides through className
const Section = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={clsx(
        "flex flex-col gap-8 px-8 pt-12 pb-8 from-1537:gap-12 from-1537:p-12 upto-680:px-4 upto-680:pt-14 upto-492:pt-12",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default Section;
