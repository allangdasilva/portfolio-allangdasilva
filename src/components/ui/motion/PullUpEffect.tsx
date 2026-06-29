import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import { useRef } from "react";

type Props = HTMLMotionProps<"span"> & {
  text: string;
};

const PullUpEffect = ({ text }: Props) => {
  const textVariants: Variants = {
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
    <motion.span
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        overflow: "hidden",
      }}
    >
      <motion.span
        ref={ref}
        variants={textVariants}
        initial={"initial"}
        animate={isInView ? "animate" : ""}
        style={{ display: "inline-block" }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

export default PullUpEffect;
