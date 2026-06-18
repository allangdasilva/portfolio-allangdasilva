import Menu from "../menu/Menu";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={`${styles.nav} max-width-container`}>
      <Menu />
    </nav>
  );
};

export default Nav;
