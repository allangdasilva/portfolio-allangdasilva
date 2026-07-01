import MotionWrapper from "../../../motion/MotionWrapper";
import { trainingsCopy } from "../../../../../data/trainings.copy";
import TrainingCard from "./training-card/TrainingCard";
import styles from "./Training.module.css";

const Trainings = () => {
  return (
    <MotionWrapper staggerValue={0.2} className={styles.trainings_wrapper}>
      {trainingsCopy.map((training) => (
        <TrainingCard key={training.id} training={training} />
      ))}
    </MotionWrapper>
  );
};

export default Trainings;
