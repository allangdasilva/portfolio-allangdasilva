import { motion, useInView, type HTMLMotionProps } from "motion/react";
import { useRef } from "react";

type Props = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  staggerValue: number;
};

const MotionWrapper = ({ children, staggerValue, ...props }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const wrapperVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerValue,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={wrapperVariants}
      initial={"initial"}
      animate={isInView ? "animate" : ""}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
