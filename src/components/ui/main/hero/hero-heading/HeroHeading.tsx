import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import styles from "./HeroHeading.module.css";
import TypingEffectBlur from "../../../motion/typing-effect-blur/TypingEffectBlur";

const HeroHeading = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const wrapperVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  return (
    <motion.h2
      ref={ref}
      variants={wrapperVariants}
      initial={"initial"}
      animate={isInView ? "animate" : ""}
      className={styles.heading_wrapper}
    >
      <motion.div className="type_hero_heading_sm">
        <TypingEffectBlur text="Dev" />
      </motion.div>

      <motion.div className={"type_hero_heading_xl"}>
        <TypingEffectBlur text="Front" /> <TypingEffectBlur text="End" />
      </motion.div>

      <motion.div className={"type_hero_heading_md"}>
        <TypingEffectBlur text="&" /> <TypingEffectBlur text="UX/UI" />{" "}
        <TypingEffectBlur text="Designer" />
      </motion.div>
    </motion.h2>
  );
};

export default HeroHeading;
