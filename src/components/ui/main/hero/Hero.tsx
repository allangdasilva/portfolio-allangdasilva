import ArrowDownSvg from "../../../svgs/ArrowDownSvg";
import Paragraph from "../../common/Paragraph";
import SectionBackground from "../../common/section/SectionBackground";
import TypingEffect from "../../motion/TypingEffect";
import HeroHeading from "./hero-heading/HeroHeading";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <header className={styles.hero_wrapper}>
      <SectionBackground>
        <div className={styles.background_container}>
          <div className={styles.background_image}></div>
        </div>
      </SectionBackground>
      <div className={"section_container"}>
        <div className={styles.text_wrapper}>
          <HeroHeading />
          <Paragraph>
            <TypingEffect
              text={
                "Sou Allan, Front-End Developer & UX/UI Designer. Desenvolvo aplicações web modernas, acessíveis e escaláveis no ecossistema React. Que a boa usabilidade esteja sempre a seu favor."
              }
              baseDelay={0.6}
            />
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
