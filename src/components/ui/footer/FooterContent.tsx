import styles from "./FooterContent.module.css";

const FooterCopyright = () => {
  return (
    <div className={styles.copyright_wrapper}>
      <div className={"section_container"}>
        <p className="type_paragraph_sm">
          2026 © Todos direitos reservados - Allan Silva.
        </p>
      </div>
    </div>
  );
};

export default FooterCopyright;
