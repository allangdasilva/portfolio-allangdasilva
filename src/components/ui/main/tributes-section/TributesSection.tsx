import { copyTributesSummary } from "../../../../data/section-summary.copy";
import SectionBackground from "../../common/section/SectionBackground";
import SectionSummary from "../../common/section/SectionSummary";
import Tributes from "./tributes/Tributes";
import styles from "./TributesSection.module.css";

const TributesSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <SectionBackground>
        <div className={styles.background_container}>
          <div className={styles.background_image}></div>
        </div>
      </SectionBackground>
      <div className={"section_container"}>
        <SectionSummary
          sectionCopy={copyTributesSummary}
          className={styles.section_summary}
        />
        <Tributes />
      </div>
    </section>
  );
};

export default TributesSection;
