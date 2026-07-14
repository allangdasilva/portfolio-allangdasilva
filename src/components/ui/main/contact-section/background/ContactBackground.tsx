import SectionBackground from "../../../common/section/SectionBackground";
import styles from "./ContactBackground.module.css";

const ContactBackground = () => {
  return (
    <SectionBackground>
      <div className={styles.background_container}>
        <div className={styles.background_image}></div>
      </div>
    </SectionBackground>
  );
};

export default ContactBackground;
