import { motion, useReducedMotion } from "motion/react";
import useMediaQuery from "@mui/material/useMediaQuery";

const OFFSET = 40;

// Fades its children in (with a small offset) the first time they scroll into view.
const Reveal = ({
  as = "div",
  direction = "up",
  delay = 0,
  className = "",
  children,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width:768px)", { noSsr: true });

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];
  const side = isMobile ? "up" : direction;
  const offset =
    side === "left"
      ? { x: -OFFSET }
      : side === "right"
        ? { x: OFFSET }
        : { y: OFFSET };

  return (
    <MotionTag
      className={`reveal ${className}`}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
