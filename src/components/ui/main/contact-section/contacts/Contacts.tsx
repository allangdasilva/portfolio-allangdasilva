import { motion } from "motion/react";
import MotionWrapper from "../../../motion/MotionWrapper";
import ContactLink from "./contact-link/ContactLinks";
import ContactSocial from "./contact-social/ContactSocial";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <MotionWrapper staggerValue={0.2} className={styles.contacts_wrapper}>
      {/* Links */}
      <motion.div>
        <ContactLink />
      </motion.div>
      {/* Social */}
      <motion.div>
        <ContactSocial />
      </motion.div>
    </MotionWrapper>
  );
};

export default Contacts;
