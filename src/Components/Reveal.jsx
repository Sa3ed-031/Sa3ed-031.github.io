import clsx from "clsx";
import { m, useReducedMotion } from "motion/react";
import useMediaQuery from "../hooks/useMediaQuery";

const OFFSET = 40;

// Fades its children in (with a small offset) the first time they scroll into view.
// `fade={false}` keeps the content fully visible and only slides it (used for the hero,
// so the LCP image is painted right away).
const Reveal = ({
  as = "div",
  direction = "up",
  delay = 0,
  fade = true,
  className = "",
  children,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width:768px)");

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = m[as];
  const side = isMobile ? "up" : direction;
  const offset =
    side === "left"
      ? { x: -OFFSET }
      : side === "right"
        ? { x: OFFSET }
        : { y: OFFSET };

  return (
    <MotionTag
      // Motion animates this element itself, so no CSS transition
      className={clsx("transition-none", className)}
      initial={fade ? { opacity: 0, ...offset } : offset}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
