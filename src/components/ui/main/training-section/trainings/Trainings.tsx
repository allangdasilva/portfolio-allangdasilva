import { trainingsCopy } from "../../../../../data/trainings.copy";
import TrainingCard from "./training-card/TrainingCard";
import styles from "./Training.module.css";

const Trainings = () => {
  return (
    <div className={styles.trainings_wrapper}>
      {trainingsCopy.map((training) => (
        <TrainingCard key={training.id} training={training} />
      ))}
    </div>
  );
};

export default Trainings;
