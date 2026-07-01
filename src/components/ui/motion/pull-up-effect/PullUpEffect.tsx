import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { useRef } from "react";
import styles from "./PullUpEffect.module.css";
import clsx from "clsx";

type Props = HTMLMotionProps<"span"> & {
  text: string;
};

const PullUpEffect = ({ text, ...props }: Props) => {
  const wordVariants: Variants = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
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
        className={clsx(styles.word, props.className)}
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

export default PullUpEffect;
