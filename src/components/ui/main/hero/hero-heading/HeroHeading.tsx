import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import PullUpEffect from "../../../motion/pull-up-effect/PullUpEffect";
import styles from "./HeroHeading.module.css";

const HeroHeading = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const wrapperVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const blockVariants: Variants = {
    initial: {},
    animate: {},
  };

  return (
    <motion.h2
      ref={ref}
      variants={wrapperVariants}
      initial={"initial"}
      animate={isInView ? "animate" : ""}
      className={styles.heading_wrapper}
    >
      <motion.div variants={blockVariants}>
        <PullUpEffect text="Dev" className="type_hero_heading_sm" />
      </motion.div>

      <motion.div variants={blockVariants} className={styles.text_xl_wrapper}>
        <PullUpEffect text="Front" className={"type_hero_heading_xl"} />
        <PullUpEffect text="End" className={"type_hero_heading_xl"} />
      </motion.div>

      <motion.div variants={blockVariants} className={styles.text_md_wrapper}>
        <PullUpEffect text="&" className={"type_hero_heading_md"} />
        <PullUpEffect text="UX/UI" className={"type_hero_heading_md"} />
        <PullUpEffect text="Designer" className={"type_hero_heading_md"} />
      </motion.div>
    </motion.h2>
  );
};

export default HeroHeading;
