import { copyContactSummary } from "../../../../data/section-summary.copy";
import SectionSummary from "../../common/section/SectionSummary";
import Contacts from "./contacts/Contacts";
import ContactBackground from "./background/ContactBackground";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.section_wrapper}>
      <ContactBackground />
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
