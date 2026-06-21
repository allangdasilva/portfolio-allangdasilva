import Nav from "./nav/Nav";
import styles from "./HeaderContent.module.css";

const HeaderContent = () => {
  return (
    <div className={styles.content_wrapper}>
      <h1 className="sr_only">
        Portfólio de Allan Silva, Desenvolvedor Front-End e UX/UI Designer.
      </h1>
      <div className={"max_width_container"}>
        <Nav />
      </div>
    </div>
  );
};

export default HeaderContent;
