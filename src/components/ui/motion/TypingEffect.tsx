import { useRef } from "react";
import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";

type Props = HTMLMotionProps<"span"> & {
  text: string;
  baseDelay?: number;
};

const TypingEffect = ({ text, baseDelay, ...props }: Props) => {
  const splittedText = text.split("");

  const letterVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: (i: number) => ({
      opacity: 1,
      transition: {
        delay: baseDelay ? baseDelay + i * 0.01 : i * 0.01,
        ease: "easeInOut",
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span {...props}>
      {splittedText.map((letter, i) => (
        <motion.span
          key={i}
          ref={ref}
          variants={letterVariants}
          initial={"initial"}
          animate={isInView ? "animate" : ""}
          custom={i}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TypingEffect;
