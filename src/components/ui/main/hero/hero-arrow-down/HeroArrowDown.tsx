import ArrowDownSvg from "../../../../svgs/ArrowDownSvg";
import styles from ".//HeroArrowDown.module.css";

const HeroArrowDown = () => {
  return (
    <div className={styles["svg-wrapper"]}>
      <button type="button">
        <ArrowDownSvg />
      </button>
    </div>
  );
};

export default HeroArrowDown;
