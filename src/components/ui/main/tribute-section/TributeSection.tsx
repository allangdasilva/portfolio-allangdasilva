import { sectionCopyTributes } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import Tributes from "./tributes/Tributes";
import styles from "./TributeSection.module.css";

const TributeSection = () => {
  return (
    <section className={styles.tribute_section}>
      <div className={"max_width_container"}>
        <SectionSummary
          sectionCopy={sectionCopyTributes}
          className={styles.section_summary}
        />
        <Tributes />
      </div>
    </section>
  );
};

export default TributeSection;
