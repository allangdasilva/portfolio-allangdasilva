import Menu from "../menu/Menu";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={"max-width-container"}>
      <div className={styles["menu-wrapper"]}>
        <Menu />
      </div>
    </nav>
  );
};

export default Nav;
