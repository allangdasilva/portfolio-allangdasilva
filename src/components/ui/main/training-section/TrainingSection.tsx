import { copyTrainingsSummary } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import Trainings from "./trainings/Trainings";
import styles from "./TrainingSection.module.css";

const TrainingSection = () => {
  return (
    <section className={styles.trainings_section}>
      <div className={"max_width_container"}>
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
