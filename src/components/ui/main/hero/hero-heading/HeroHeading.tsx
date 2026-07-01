import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import PullUpEffect from "../../../motion/pull-up-effect/PullUpEffect";
import styles from "./HeroHeading.module.css";
import clsx from "clsx";

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
      <motion.div
        variants={blockVariants}
        className={clsx(styles.text_sm_wrapper, "type_hero_heading_sm")}
      >
        <PullUpEffect text="Dev" />
      </motion.div>

      <motion.div
        variants={blockVariants}
        className={clsx(styles.text_xl_wrapper, "type_hero_heading_xl")}
      >
        <PullUpEffect text="Front" />
        <PullUpEffect text="End" />
      </motion.div>

      <motion.div
        variants={blockVariants}
        className={clsx(styles.text_md_wrapper, "type_hero_heading_md")}
      >
        <PullUpEffect text="&" />
        <PullUpEffect text="UX/UI" />
        <PullUpEffect text="Designer" />
      </motion.div>
    </motion.h2>
  );
};

export default HeroHeading;
