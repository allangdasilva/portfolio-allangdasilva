import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { toolsCopy } from "../../../../../data/tools.copy";
import ToolsCard from "./tools-card/ToolsCard";
import styles from "./Tools.module.css";

const Tools = () => {
  const toolsCopyLeft = toolsCopy.slice(0, 3);
  const toolsCopyRight = toolsCopy.slice(-3);

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

  return (
    <motion.div
      ref={ref}
      variants={wrapperVariants}
      initial={"initial"}
      animate={isInView ? "animate" : ""}
      className={styles.tools_wrapper}
    >
      {/* Left */}
      <motion.div className={styles.tools_left}>
        {toolsCopyLeft.slice(0, 3).map((card, i) => (
          <ToolsCard
            key={card.id}
            card={card}
            position="left"
            isLast={i + 1 === toolsCopyLeft.length}
          />
        ))}
      </motion.div>
      {/* Right */}
      <motion.div className={styles.tools_right}>
        {toolsCopyRight.slice(-3).map((card, i) => (
          <ToolsCard
            key={card.id}
            card={card}
            position="right"
            isLast={i + 1 === toolsCopyRight.length}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tools;
