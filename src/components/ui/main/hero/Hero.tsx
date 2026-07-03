import clsx from "clsx";
import ArrowDownSvg from "../../../svgs/ArrowDownSvg";
import FadeUpEffect from "../../motion/FadeUpEffect";
import Paragraph from "../../common/Paragraph";
import SectionBackground from "../../common/section/SectionBackground";
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
      <div className={clsx("section_container", styles.section_container)}>
        <div className={styles.content_wrapper}>
          <HeroHeading />

          <FadeUpEffect delay={1.4}>
            <Paragraph>
              Sou Allan, Front-End Developer & UX/UI Designer. Desenvolvo
              aplicações web modernas, acessíveis e escaláveis no ecossistema
              React. Que a boa usabilidade esteja sempre a seu favor.
            </Paragraph>
          </FadeUpEffect>

          <button type="button">
            <ArrowDownSvg />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
