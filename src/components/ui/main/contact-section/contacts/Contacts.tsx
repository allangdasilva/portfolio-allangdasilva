import { motion, useInView } from "motion/react";
import ContactLink from "./contact-link/ContactLinks";
import ContactSocial from "./contact-social/ContactSocial";
import styles from "./Contacts.module.css";
import { useRef } from "react";

const Contacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const wrapperVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={wrapperVariants}
      initial={"initial"}
      animate={isInView ? "animate" : ""}
      className={styles.contacts_wrapper}
    >
      {/* Links */}
      <motion.div>
        <ContactLink />
      </motion.div>
      {/* Social */}
      <motion.div>
        <ContactSocial />
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
