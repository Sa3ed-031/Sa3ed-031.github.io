import clsx from "clsx";
import Reveal from "../Reveal";

// Big centered section heading that fades up into view
const SectionTitle = ({ className, children }) => {
  return (
    <Reveal
      as="h2"
      className={clsx(
        "w-fit self-center text-center text-[6rem] font-bold text-white/90 from-1537:text-[8rem] upto-768:text-[5rem] upto-616:text-[4.5rem] upto-492:text-[3.25rem] upto-380:text-[3rem] upto-322:text-[2.6rem]",
        className,
      )}
    >
      {children}
    </Reveal>
  );
};

export default SectionTitle;
