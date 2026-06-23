import clsx from "clsx";
import { copyTrainingsSummary } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import Trainings from "./trainings/Trainings";
import styles from "./TrainingSection.module.css";
import SectionBackground from "../../common/section/SectionBackground";

const TrainingSection = () => {
  return (
    <section className={styles.trainings_section}>
      <SectionBackground>
        <div className={styles.background_max_width}>
          <div></div>
        </div>
      </SectionBackground>
      <div className={clsx("max_width_container", styles.content_wrapper)}>
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
