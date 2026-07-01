import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import ItemHeading from "../../../../common/ItemHeading";
import List from "../../../../common/list/List";
import ListItem from "../../../../common/list/ListItem";
import styles from "./ToolsCard.module.css";
import clsx from "clsx";

type Props = HTMLMotionProps<"div"> & {
  card: {
    id: number;
    title: string;
    tools: string[];
  };
  position: "left" | "right";
  isLast: boolean;
};

const ToolsCard = ({ card, position, isLast, ...props }: Props) => {
  const { title, tools } = card;

  const cardVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  const detailVariants: Variants = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 130%, 0 130%)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={clsx(
        styles.card_wrapper,
        position === "left" && styles.card_wrapper_left,
        position === "right" && styles.card_wrapper_right,
      )}
      {...props}
    >
      {/* Detail */}
      <motion.div
        variants={detailVariants}
        aria-hidden="true"
        className={styles.detail}
      >
        <motion.div className={styles.circ}></motion.div>
        <motion.div
          className={clsx(styles.dashed, isLast && styles.dashed_none)}
        ></motion.div>
      </motion.div>
      {/* Title */}
      <motion.div variants={cardVariants}>
        <ItemHeading>{title}</ItemHeading>
      </motion.div>
      {/* List */}
      <List>
        {tools.map((tool) => (
          <motion.div key={tool} variants={cardVariants}>
            <ListItem>{tool}</ListItem>
          </motion.div>
        ))}
      </List>
    </motion.div>
  );
};

export default ToolsCard;
