import { motion, type Variants } from "motion/react";
import SectionBackground from "../../../common/section/SectionBackground";
import styles from "./ContactBackground.module.css";
import { useRef } from "react";
import { useInView } from "motion/react";

const ContactBackground = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const backgroundVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <SectionBackground>
      <div ref={ref} className={styles.background_container}>
        <motion.div
          variants={backgroundVariants}
          initial="initial"
          animate={isInView ? "animate" : ""}
          className={styles.background_image}
        ></motion.div>
      </div>
    </SectionBackground>
  );
};

export default ContactBackground;
