import { copyToolsSummary } from "../../../../data/section-summary.copy";
import SectionBackground from "../../common/section/SectionBackground";
import SectionSummary from "../../common/section/SectionSummary";
import Tools from "./tools/Tools";
import styles from "./ToolsSection.module.css";

const ToolsSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <SectionBackground>
        <div className={styles.background_container}>
          <div className={styles.background_image}></div>
        </div>
      </SectionBackground>
      <div className={"section_container"}>
        <SectionSummary
          sectionCopy={copyToolsSummary}
          className={styles.section_summary}
        />
        <Tools />
      </div>
    </section>
  );
};

export default ToolsSection;
