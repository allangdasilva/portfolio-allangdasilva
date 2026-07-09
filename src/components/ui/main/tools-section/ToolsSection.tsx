import { useRef } from "react";
import { copyToolsSummary } from "../../../../data/section-summary.copy";
import SectionBackground from "../../common/section/SectionBackground";
import SectionSummary from "../../common/section/SectionSummary";
import ToolsBackground from "./background/ToolsBackground";
import Tools from "./tools/Tools";
import styles from "./ToolsSection.module.css";

const ToolsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className={styles.section_wrapper}>
      <ToolsBackground sectionRef={sectionRef} />
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
