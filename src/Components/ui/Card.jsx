import clsx from "clsx";

// Indigo-bordered card whose glow grows on hover; border width, radius and background come in through className
const Card = ({ as = "div", className, ...props }) => {
  const Tag = as;
  return (
    <Tag
      className={clsx(
        "border-indigo-brand shadow-[0_0_10px_var(--color-indigo-brand)] hover:shadow-[0_0_25px_var(--color-indigo-brand)]",
        className,
      )}
      {...props}
    />
  );
};

export default Card;
