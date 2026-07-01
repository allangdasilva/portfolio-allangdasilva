import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import ArrowSvg from "../../../../../svgs/ArrowSvg";
import ItemHeading from "../../../../common/ItemHeading";
import Paragraph from "../../../../common/Paragraph";
import styles from "./TrainingCard.module.css";

type Props = HTMLMotionProps<"div"> & {
  training: {
    id: number;
    title: string;
    description: string;
    progress: number;
  };
};

const TrainingCard = ({ training, ...props }: Props) => {
  const { title, description, progress } = training;

  const cardVariants: Variants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={styles.card_wrapper}
      {...props}
    >
      {/* Text */}
      <motion.div className={styles.text_wrapper}>
        <ItemHeading>{title}</ItemHeading>
        <Paragraph>{description}</Paragraph>
      </motion.div>
      {/* Certificate / Progress */}
      <motion.div className={styles.certificate_progress_wrapper}>
        <motion.a href="#">
          <ArrowSvg />
        </motion.a>
        <motion.span className="type_title_md">{progress}%</motion.span>
      </motion.div>
    </motion.div>
  );
};

export default TrainingCard;
