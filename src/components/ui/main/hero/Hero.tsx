import Paragraph from "../../common/Paragraph";
import HeroArrowDown from "./hero-arrow-down/HeroArrowDown";
import HeroHeading from "./hero-heading/HeroHeading";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={"max-width-container"}>
        <div className={styles["hero-text-wrapper"]}>
          <HeroHeading />
          <Paragraph className={`${styles.paragraph} type-paragraph-md`}>
            Sou Allan, Front-End Developer & UX/UI Designer. Desenvolvo
            aplicações web modernas, acessíveis e escaláveis no ecossistema
            React. Que a boa usabilidade esteja sempre a seu favor.
          </Paragraph>
        </div>
        <HeroArrowDown />
      </div>
    </header>
  );
};

export default Hero;
