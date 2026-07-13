import { copyTrainingsSummary } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import Trainings from "./trainings/Trainings";
import styles from "./TrainingSection.module.css";
import TrainingBackground from "./background/TrainingBackground";

const TrainingSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <TrainingBackground />
      <div className={"section_container"}>
        <SectionSummary
          sectionCopy={copyTrainingsSummary}
          className={styles.section_summary}
        />
        <Trainings />
      </div>
    </section>
  );
};

export default TrainingSection;
