import { useEffect, useState } from "react";
import clsx from "clsx";
import { useReducedMotion } from "motion/react";

// Types each word letter by letter, pauses, deletes it, then moves on to the next one (looping).
// Screen readers get the whole list once; the animated text is hidden from them.
const Typewriter = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 50,
  pause = 1600,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const word = words[wordIndex];

  useEffect(() => {
    if (shouldReduceMotion) return;

    let delay = isDeleting ? deletingSpeed : typingSpeed;
    let next;

    if (!isDeleting && length === word.length) {
      // Fully typed: wait, then start deleting
      delay = pause;
      next = () => setIsDeleting(true);
    } else if (isDeleting && length === 0) {
      // Fully deleted: move on to the next word
      next = () => {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      };
    } else {
      next = () => setLength((l) => l + (isDeleting ? -1 : 1));
    }

    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [
    length,
    isDeleting,
    word,
    words.length,
    typingSpeed,
    deletingSpeed,
    pause,
    shouldReduceMotion,
  ]);

  const longestWord = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  const text = shouldReduceMotion ? words[0] : word.slice(0, length);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      {/* Both layers share one grid cell; the invisible longest word (plus cursor) reserves the width */}
      <span aria-hidden="true" className={clsx("inline-grid", className)}>
        <span className="invisible [grid-area:1/1]">
          {longestWord}
          <Cursor />
        </span>
        <span className="[grid-area:1/1]">
          {text}
          {!shouldReduceMotion && <Cursor className="animate-blink" />}
        </span>
      </span>
    </>
  );
};

const Cursor = ({ className }) => {
  return (
    <span
      className={clsx(
        "ml-0.5 inline-block h-[1.1em] w-0.75 bg-indigo-brand align-[-0.15em]",
        className,
      )}
    />
  );
};

export default Typewriter;
