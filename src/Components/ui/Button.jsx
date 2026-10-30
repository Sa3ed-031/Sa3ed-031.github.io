import clsx from "clsx";

const variants = {
  outline: "border-indigo-deep bg-ink text-lavender",
  primary:
    "border-transparent bg-indigo-brand text-ink shadow-[0_0_25px_var(--color-indigo-deep)]",
  solid:
    "border-indigo-deep bg-indigo-deep text-white/90 shadow-[0_0_6px_var(--color-indigo-deep)]",
};

// Pill button; pass `as="a"` for links. Hover and size tweaks come in through className.
const Button = ({
  as = "button",
  variant = "outline",
  className,
  ...props
}) => {
  const Tag = as;
  return (
    <Tag
      className={clsx(
        "cursor-pointer rounded-[2rem] border-4 px-[1.3rem] py-[0.6rem] text-[1rem] font-bold",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
};

export default Button;
