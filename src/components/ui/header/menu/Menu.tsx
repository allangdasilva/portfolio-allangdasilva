import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <button type="button" className={styles["menu-wrapper"]}>
      <div className={styles["menu-bar"]}></div>
      <div className={styles["menu-bar"]}></div>
      <div className={styles["menu-bar"]}></div>
    </button>
  );
};

export default Menu;
