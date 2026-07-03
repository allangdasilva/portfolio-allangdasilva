import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import clsx from "clsx";
import styles from "./TypingEffectBlur.module.css";

type Props = HTMLMotionProps<"span"> & {
  text: string;
};

const TypingEffectBlur = ({ text, ...props }: Props) => {
  const splittedText = text.split("");

  const letterVariants: Variants = {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      y: 12,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.span className={clsx(styles.word, props.className)}>
      {splittedText.map((letter, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className={styles.letter}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TypingEffectBlur;
