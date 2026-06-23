import clsx from "clsx";
import { copyContactSummary } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import SectionBackground from "../../common/section/SectionBackground";
import Contacts from "./contacts/Contacts";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.contact_section}>
      <SectionBackground>
        <div className={styles.background_max_width}>
          <div></div>
        </div>
      </SectionBackground>
      <div className={clsx("max_width_container", styles.content_wrapper)}>
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
