import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import ExternalLink from "../../../../common/ExternalLink";
import ItemHeading from "../../../../common/ItemHeading";
import Paragraph from "../../../../common/Paragraph";
import styles from "./TributeCard.module.css";

type Props = HTMLMotionProps<"div"> & {
  tribute: {
    id: number;
    svg: React.JSX.Element;
    title: string;
    sub_title: string;
    description: string;
    href: string;
  };
};

const TributeCard = ({ tribute, ...props }: Props) => {
  const { svg, title, sub_title, description, href } = tribute;

  const cardVariants: Variants = {
    initial: {
      y: 40,
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
      {/* SVG */}
      <motion.div className={styles.svg_wrapper}>{svg}</motion.div>
      {/* Divisor */}
      <motion.div className={styles.divisor}>
        <motion.div></motion.div>
      </motion.div>
      {/* Text */}
      <motion.div className={styles.text_wrapper}>
        <ItemHeading>
          {title}
          <motion.span className="type_paragraph_md">, {sub_title}</motion.span>
        </ItemHeading>
        <Paragraph>{description}</Paragraph>
        <ExternalLink href={href}>• Inspecionar Tributo •</ExternalLink>
      </motion.div>
    </motion.div>
  );
};

export default TributeCard;
