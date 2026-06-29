import { useRef } from "react";
import { motion, useInView } from "motion/react";
import styles from "./HeroHeading.module.css";
import HeadingWordsPullUp from "./heading-words-pull-up/HeadingWordsPullUp";

const HeroHeading = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const wrapperVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const blockVariants = {
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
        <HeadingWordsPullUp text="Dev" className="type_hero_heading_sm" />
      </motion.div>

      <motion.div variants={blockVariants} className={styles.text_xl_wrapper}>
        <HeadingWordsPullUp text="Front" className={"type_hero_heading_xl"} />
        <HeadingWordsPullUp text="End" className={"type_hero_heading_xl"} />
      </motion.div>

      <motion.div variants={blockVariants} className={styles.text_md_wrapper}>
        <HeadingWordsPullUp text="&" className={"type_hero_heading_md"} />
        <HeadingWordsPullUp text="UX/UI" className={"type_hero_heading_md"} />
        <HeadingWordsPullUp
          text="Designer"
          className={"type_hero_heading_md"}
        />
      </motion.div>
    </motion.h2>
  );
};

export default HeroHeading;
