import { copyToolsSummary } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import Tools from "./tools/Tools";
import styles from "./ToolsSection.module.css";

const ToolsSection = () => {
  return (
    <section className={styles.tools_section}>
      <div className={"max_width_container"}>
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
