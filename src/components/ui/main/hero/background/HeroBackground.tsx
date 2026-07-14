import type { Variants } from "motion";
import LaurelsSvg from "../../../../svgs/LaurelsSvg";
import SectionBackground from "../../../common/section/SectionBackground";
import styles from "./HeroBackground.module.css";

const HeroBackground = () => {
  const laurelsVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.6, delay: 1.6, ease: "easeOut" },
    },
  };

  return (
    <SectionBackground>
      <div className={styles.background_container}>
        <div className={styles.background_image}></div>
        <LaurelsSvg
          variants={laurelsVariants}
          initial="initial"
          animate="animate"
          className={styles.laurels}
        />
      </div>
    </SectionBackground>
  );
};

export default HeroBackground;
