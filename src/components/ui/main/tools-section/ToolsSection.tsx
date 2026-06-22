import clsx from "clsx";
import { copyToolsSummary } from "../../../../data/section-summary.copy";
import SectionBackground from "../../common/section/SectionBackground";
import SectionSummary from "../../common/section/SectionSummary";
import Tools from "./tools/Tools";
import styles from "./ToolsSection.module.css";

const ToolsSection = () => {
  return (
    <section className={styles.tools_section}>
      <SectionBackground>
        <div className={styles.background_max_width}>
          <div></div>
        </div>
      </SectionBackground>
      <div className={clsx("max_width_container", styles.content_wrapper)}>
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
