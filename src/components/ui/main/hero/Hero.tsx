import ArrowDownSvg from "../../../svgs/ArrowDownSvg";
import Paragraph from "../../common/Paragraph";
import SectionBackground from "../../common/section/SectionBackground";
import HeroHeading from "./hero-heading/HeroHeading";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <header className={styles.hero_wrapper}>
      <SectionBackground>
        <div className={styles.background_max_width}>
          <div></div>
        </div>
      </SectionBackground>
      <div className={"max_width_container"}>
        <div className={styles.text_wrapper}>
          <HeroHeading />
          <Paragraph>
            Sou Allan, Front-End Developer & UX/UI Designer. Desenvolvo
            aplicações web modernas, acessíveis e escaláveis no ecossistema
            React. Que a boa usabilidade esteja sempre a seu favor.
          </Paragraph>
        </div>
        <div className={styles.button_wrapper}>
          <button type="button">
            <ArrowDownSvg />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
