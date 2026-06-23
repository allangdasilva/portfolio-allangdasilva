import { copyTrainingsSummary } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import SectionBackground from "../../common/section/SectionBackground";
import Trainings from "./trainings/Trainings";
import styles from "./TrainingSection.module.css";

const TrainingSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <SectionBackground>
        <div className={styles.background_container}>
          <div className={styles.background_image}></div>
        </div>
      </SectionBackground>
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
