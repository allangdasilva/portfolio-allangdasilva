import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <button type="button" className={styles.menu_wrapper}>
      <div className={styles.menu_bar}></div>
      <div className={styles.menu_bar}></div>
      <div className={styles.menu_bar}></div>
    </button>
  );
};

export default Menu;
