import { copyContactSummary } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import SectionBackground from "../../common/section/SectionBackground";
import Contacts from "./contacts/Contacts";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <SectionBackground>
        <div className={styles.background_container}>
          <div className={styles.background_image}></div>
        </div>
      </SectionBackground>
      <div className={"section_container"}>
        <SectionSummary
          sectionCopy={copyContactSummary}
          className={styles.section_summary}
        />
        <Contacts />
      </div>
    </section>
  );
};

export default ContactSection;
