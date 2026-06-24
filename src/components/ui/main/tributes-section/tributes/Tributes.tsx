import { tributesCopy } from "../../../../../data/tributes.copy";
import TributeCard from "./tribute-card/TributeCard";
import styles from "./Tributes.module.css";

const Tributes = () => {
  return (
    <div className={styles.tributes_wrapper}>
      {tributesCopy.map((tribute) => (
        <TributeCard key={tribute.id} tribute={tribute} />
      ))}
    </div>
  );
};

export default Tributes;
