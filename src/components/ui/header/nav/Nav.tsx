import Menu from "../menu/Menu";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav_wrapper}>
      <Menu />
    </nav>
  );
};

export default Nav;
