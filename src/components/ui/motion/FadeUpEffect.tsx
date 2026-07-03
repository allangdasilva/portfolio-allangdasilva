import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";

type Props = {
  delay?: number;
  children: React.ReactNode;
};

const FadeUpEffect = ({ children, delay }: Props) => {
  const ref = useRef(null);

  const wrapperVariants: Variants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      },
    },
  };

  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={wrapperVariants}
      initial={"initial"}
      animate={isInView ? "animate" : ""}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpEffect;
