import { motion } from "motion/react";
import MotionWrapper from "../../../motion/MotionWrapper";
import { toolsCopy } from "../../../../../data/tools.copy";
import ToolsCard from "./tools-card/ToolsCard";
import styles from "./Tools.module.css";

const Tools = () => {
  const toolsCopyLeft = toolsCopy.slice(0, 3);
  const toolsCopyRight = toolsCopy.slice(-3);

  return (
    <MotionWrapper staggerValue={0.05} className={styles.tools_wrapper}>
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
    </MotionWrapper>
  );
};

export default Tools;
