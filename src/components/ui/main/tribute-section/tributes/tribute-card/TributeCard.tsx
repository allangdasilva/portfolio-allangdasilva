import ExternalLink from "../../../../common/ExternalLink";
import ItemHeading from "../../../../common/ItemHeading";
import Paragraph from "../../../../common/Paragraph";
import styles from "./TributeCard.module.css";

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

  return (
    <div className={styles.card_wrapper}>
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
    </div>
  );
};

export default TributeCard;
