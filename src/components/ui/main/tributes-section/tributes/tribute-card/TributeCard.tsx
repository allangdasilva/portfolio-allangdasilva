import { motion, useInView, type Variants } from "motion/react";
import ExternalLink from "../../../../common/ExternalLink";
import ItemHeading from "../../../../common/ItemHeading";
import Paragraph from "../../../../common/Paragraph";
import styles from "./TributeCard.module.css";
import { useRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tribute: {
    id: number;
    svg: React.JSX.Element;
    title: string;
    sub_title: string;
    description: string;
    href: string;
  };
};

const TributeCard = ({ tribute }: Props) => {
  const { svg, title, sub_title, description, href } = tribute;

  const cardVariants: Variants = {
    initial: {
      y: 20,
      opacity: 0.2,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial={"initial"}
      animate={isInView ? "animate" : ""}
      className={styles.card_wrapper}
    >
      <div className={styles.svg_wrapper}>{svg}</div>

      <div className={styles.divisor}>
        <div></div>
      </div>

      <div className={styles.text_wrapper}>
        <ItemHeading>
          {title}
          <span className="type_paragraph_md">, {sub_title}</span>
        </ItemHeading>
        <Paragraph>{description}</Paragraph>
        <ExternalLink href={href}>Inspecionar Tributo</ExternalLink>
      </div>
    </motion.div>
  );
};

export default TributeCard;
