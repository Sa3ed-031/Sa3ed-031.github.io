import clsx from "clsx";

const variants = {
  outline:
    "border-indigo-brand bg-transparent text-lavender hover:bg-indigo-brand hover:text-cloud",
  primary:
    "border-indigo-brand bg-indigo-brand text-cloud shadow-[0_0_25px_var(--color-indigo-brand)] hover:shadow-[0_0_40px_var(--color-indigo-brand)] hover:brightness-115",
  solid:
    "border-indigo-brand bg-indigo-brand text-cloud shadow-[0_0_6px_var(--color-indigo-brand)]",
};

// Pill button; pass `as="a"` for links. Size tweaks come in through className.
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
