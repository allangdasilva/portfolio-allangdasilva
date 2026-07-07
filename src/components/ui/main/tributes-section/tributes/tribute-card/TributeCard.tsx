import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import ExternalLink from "../../../../common/ExternalLink";
import ItemHeading from "../../../../common/ItemHeading";
import Paragraph from "../../../../common/Paragraph";
import styles from "./TributeCard.module.css";
import { useRef } from "react";

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

  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { once: true });

  const cardVariants: Variants = {
    initial: {
      y: 60,
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial={"initial"}
      animate={isInView ? "animate" : ""}
      className={styles.card_wrapper}
      {...props}
    >
      {/* SVG */}
      <div className={styles.svg_wrapper}>{svg}</div>
      {/* Divisor */}
      <div className={styles.divisor}>
        <div></div>
      </div>
      {/* Text */}
      <div className={styles.text_wrapper}>
        <ItemHeading>
          {title}
          <span className="type_paragraph_md">, {sub_title}</span>
        </ItemHeading>
        <Paragraph>{description}</Paragraph>
        <ExternalLink href={href}>• Inspecionar Tributo •</ExternalLink>
      </div>
    </motion.div>
  );
};

export default TributeCard;
