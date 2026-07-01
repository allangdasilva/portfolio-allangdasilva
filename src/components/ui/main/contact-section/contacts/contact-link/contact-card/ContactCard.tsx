import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import ExternalLink from "../../../../../common/ExternalLink";
import ItemHeading from "../../../../../common/ItemHeading";
import styles from "./ContactCard.module.css";

type Props = HTMLMotionProps<"div"> & {
  contact: {
    id: number;
    title: string;
    desription: string;
    href: string;
  };
};

const ContactCard = ({ contact }: Props) => {
  const { title, desription, href } = contact;

  const cardVariants: Variants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div className={styles.card_wrapper}>
      {/* Title */}
      <motion.div variants={cardVariants}>
        <ItemHeading>{title}</ItemHeading>
      </motion.div>
      {/* Link */}
      <motion.div variants={cardVariants}>
        <ExternalLink href={href}>
          <motion.span>{desription}</motion.span>
        </ExternalLink>
      </motion.div>
    </motion.div>
  );
};

export default ContactCard;
