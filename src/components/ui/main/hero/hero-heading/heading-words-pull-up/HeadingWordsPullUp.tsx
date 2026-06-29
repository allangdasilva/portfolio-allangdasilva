import clsx from "clsx";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import styles from "./HeadingWordsPullUp.module.css";

type Props = HTMLMotionProps<"span"> & {
  text: string;
};

const HeadingWordsPullUp = ({ text, ...props }: Props) => {
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

  return (
    <motion.div className={styles.words_wrapper}>
      <motion.div
        variants={wordVariants}
        className={clsx(styles.words, props.className)}
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

export default HeadingWordsPullUp;
