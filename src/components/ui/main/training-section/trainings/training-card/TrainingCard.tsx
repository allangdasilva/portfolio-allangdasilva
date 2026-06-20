import ArrowSvg from "../../../../../svgs/ArrowSvg";
import ItemHeading from "../../../../common/ItemHeading";
import Paragraph from "../../../../common/Paragraph";
import styles from "./TrainingCard.module.css";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  training: {
    id: number;
    title: string;
    description: string;
    progress: number;
  };
};

const TrainingCard = ({ training }: Props) => {
  const { title, description, progress } = training;
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.text_wrapper}>
        <ItemHeading>{title}</ItemHeading>
        <Paragraph>{description}</Paragraph>
      </div>
      <div className={styles.certificate_progress_wrapper}>
        <a href="#">
          <ArrowSvg />
        </a>
        <span className="type_title_md">{progress}%</span>
      </div>
    </div>
  );
};

export default TrainingCard;
