import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { useRef } from "react";
import styles from "./PullUpEffect.module.css";

type Props = HTMLMotionProps<"span"> & {
  text: string;
};

const PullUpEffect = ({ text }: Props) => {
  const wordVariants: Variants = {
    initial: {
      y: "100%",
      opacity: 0.2,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span className={styles.words_wrapper}>
      <motion.span
        ref={ref}
        variants={wordVariants}
        initial={"initial"}
        animate={isInView ? "animate" : ""}
        className={styles.word}
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

export default PullUpEffect;
