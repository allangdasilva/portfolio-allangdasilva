import Menu from "../menu/Menu";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={"max_width_container"}>
      <div className={styles.menu_wrapper}>
        <Menu />
      </div>
    </nav>
  );
};

export default Nav;
