import styles from "./HeroHeading.module.css";

const HeroHeading = () => {
  return (
    <h2 className={styles["heading-wrapper"]}>
      <span className="type-hero-heading-sm">Dev</span>
      <span className="type-hero-heading-xl">Front End</span>
      <span className="type-hero-heading-md">& UX/UI Designer</span>
    </h2>
  );
};

export default HeroHeading;
