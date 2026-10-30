import clsx from "clsx";

const variants = {
  filled: "border-lavender/45 bg-indigo-brand/18",
  outline: "border-lavender/40",
};

// Small rounded label; sizing comes in through className
const Chip = ({ as = "li", variant = "filled", className, ...props }) => {
  const Tag = as;
  return (
    <Tag
      className={clsx(
        "rounded-full border font-semibold text-lavender",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
};

export default Chip;
