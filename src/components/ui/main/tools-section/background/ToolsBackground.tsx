import { motion, useScroll, useTransform, type Variants } from "motion/react";
import CitySilhouetteOneSvg from "../../../../svgs/CitySilhouetteOneSvg";
import CitySilhouetteTwoSvg from "../../../../svgs/CitySilhouetteTwoSvg";
import SectionBackground from "../../../common/section/SectionBackground";
import styles from "./ToolsBackground.module.css";

type Props = {
  sectionRef: React.RefObject<HTMLElement | null>;
};

const ToolsBackground = ({ sectionRef }: Props) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  const cityOneX = useTransform(scrollYProgress, [0, 1], ["-50%", "-55%"]);
  const cityTwoX = useTransform(scrollYProgress, [0, 1], ["-50%", "-45%"]);

  const lightsContainerVariants: Variants = {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const lightVariants: Variants = {
    offscreen: { opacity: 0.03 },
    onscreen: {
      opacity: 0.1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <SectionBackground>
      <motion.div
        variants={lightsContainerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.1 }}
        className={styles.background_container}
      >
        {/* City */}
        <CitySilhouetteOneSvg
          style={{ x: cityOneX }}
          className={styles.city_one}
        />
        <CitySilhouetteTwoSvg
          style={{ x: cityTwoX }}
          className={styles.city_two}
        />

        {/* Light */}
        <motion.div
          variants={lightVariants}
          className={styles.light_one}
        ></motion.div>
        <motion.div
          variants={lightVariants}
          className={styles.light_two}
        ></motion.div>
        <motion.div
          variants={lightVariants}
          className={styles.light_three}
        ></motion.div>
      </motion.div>
    </SectionBackground>
  );
};

export default ToolsBackground;
