import { useRef } from "react";
import { copyTributesSummary } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import Tributes from "./tributes/Tributes";
import styles from "./TributesSection.module.css";
import TributesBackground from "./background/TributesBackground";

const TributesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className={styles.section_wrapper}>
      <TributesBackground sectionRef={sectionRef} />
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
