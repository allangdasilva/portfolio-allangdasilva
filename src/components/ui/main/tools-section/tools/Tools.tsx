import { toolsCopy } from "../../../../../data/tools.copy";
import ToolsCard from "./tools-card/ToolsCard";
import styles from "./Tools.module.css";

const Tools = () => {
  return (
    <div className={styles.tools_wrapper}>
      <div className={styles.tools_left}>
        {toolsCopy.slice(0, 3).map((card) => (
          <ToolsCard key={card.id} card={card} />
        ))}
      </div>
      <div className={styles.tools_right}>
        {toolsCopy.slice(-3).map((card) => (
          <ToolsCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
