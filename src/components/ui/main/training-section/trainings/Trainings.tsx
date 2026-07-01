import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { trainingsCopy } from "../../../../../data/trainings.copy";
import TrainingCard from "./training-card/TrainingCard";
import styles from "./Training.module.css";

const Trainings = () => {
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
      className={styles.trainings_wrapper}
    >
      {trainingsCopy.map((training) => (
        <TrainingCard key={training.id} training={training} />
      ))}
    </motion.div>
  );
};

export default Trainings;
