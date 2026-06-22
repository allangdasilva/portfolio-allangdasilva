import clsx from "clsx";
import { copyTributesSummary } from "../../../../data/section-summary.copy";
import SectionBackground from "../../common/section/SectionBackground";
import SectionSummary from "../../common/section/SectionSummary";
import Tributes from "./tributes/Tributes";
import styles from "./TributeSection.module.css";

const TributeSection = () => {
  return (
    <section className={styles.tributes_section}>
      <SectionBackground>
        <div className={styles.background_max_width}>
          <div></div>
        </div>
      </SectionBackground>
      <div className={clsx("max_width_container", styles.content_wrapper)}>
        <SectionSummary
          sectionCopy={copyTributesSummary}
          className={styles.section_summary}
        />
        <Tributes />
      </div>
    </section>
  );
};

export default TributeSection;
