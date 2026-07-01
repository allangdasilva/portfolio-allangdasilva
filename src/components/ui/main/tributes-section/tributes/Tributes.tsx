import MotionWrapper from "../../../motion/MotionWrapper";
import { tributesCopy } from "../../../../../data/tributes.copy";
import TributeCard from "./tribute-card/TributeCard";
import styles from "./Tributes.module.css";

const Tributes = () => {
  return (
    <MotionWrapper staggerValue={0.2} className={styles.tributes_wrapper}>
      {tributesCopy.map((tribute) => (
        <TributeCard key={tribute.id} tribute={tribute} />
      ))}
    </MotionWrapper>
  );
};

export default Tributes;
