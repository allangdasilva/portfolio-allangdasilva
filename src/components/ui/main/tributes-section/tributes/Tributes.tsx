import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { tributesCopy } from "../../../../../data/tributes.copy";
import TributeCard from "./tribute-card/TributeCard";
import styles from "./Tributes.module.css";

const Tributes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const wrapperVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={wrapperVariants}
      initial={"initial"}
      animate={isInView ? "animate" : ""}
      className={styles.tributes_wrapper}
    >
      {tributesCopy.map((tribute) => (
        <TributeCard key={tribute.id} tribute={tribute} />
      ))}
    </motion.div>
  );
};

export default Tributes;
