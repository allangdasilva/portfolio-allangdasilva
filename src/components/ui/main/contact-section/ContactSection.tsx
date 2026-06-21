import { copyContactSummary } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import Contacts from "./contacts/Contacts";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.contact_section}>
      <div className={"max_width_container"}>
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
