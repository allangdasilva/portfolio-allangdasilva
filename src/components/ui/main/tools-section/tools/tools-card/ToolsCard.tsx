import ItemHeading from "../../../../common/ItemHeading";
import List from "../../../../common/list/List";
import ListItem from "../../../../common/list/ListItem";
import styles from "./ToolsCard.module.css";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  card: {
    id: number;
    title: string;
    tools: string[];
  };
};

const ToolsCard = ({ card }: Props) => {
  const { title, tools } = card;

  return (
    <div className={styles.card_wrapper}>
      <ItemHeading>{title}</ItemHeading>
      <List>
        {tools.map((tool) => (
          <ListItem key={tool}>{tool}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default ToolsCard;
