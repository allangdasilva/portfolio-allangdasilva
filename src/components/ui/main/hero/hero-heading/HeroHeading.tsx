import styles from "./HeroHeading.module.css";

const HeroHeading = () => {
  return (
    <h2 className={styles.heading_wrapper}>
      <span className="type_hero_heading_sm">Dev</span>
      <span className="type_hero_heading_xl">Front End</span>
      <span className="type_hero_heading_md">& UX/UI Designer</span>
    </h2>
  );
};

export default HeroHeading;
