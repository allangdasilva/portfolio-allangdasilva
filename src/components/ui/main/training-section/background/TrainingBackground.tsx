import { useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import AirDropSvg from "../../../../svgs/AirDropSvg";
import SectionBackground from "../../../common/section/SectionBackground";
import styles from "./TrainingBackground.module.css";

const TrainingBackground = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 1. Transformamos o objeto animate em uma função que recebe o index (i)
  const airDropVariants: Variants = {
    initial: {},
    animate: (i: number) => {
      // Opcional: Inverte a rotação dos itens ímpares para gerar mais caos
      const isEven = i % 2 === 0;

      return {
        rotate: isEven ? ["20deg", "-20deg"] : ["-20deg", "20deg"],
        transition: {
          // Uma leve diferença na duração impede que eles voltem a se sincronizar com o tempo
          duration: 2 + i * 0.15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          // 2. O Pulo do Gato: Delay negativo avança a animação.
          // i=0 (-0s), i=1 (-0.7s), i=2 (-1.4s).
          // Cada um vai nascer na tela em um ângulo completamente diferente!
          delay: -(i * 0.7),
        },
      };
    },
  };

  const airDropY = useTransform(scrollYProgress, [0, 1], [-80, 100]);

  return (
    <SectionBackground>
      <div ref={ref} className={styles.background_container}>
        {Array.from({ length: 4 }).map((_, i) => (
          <AirDropSvg
            key={i}
            custom={i}
            variants={airDropVariants}
            initial={"initial"}
            animate={"animate"}
            style={{ y: airDropY }}
          />
        ))}
      </div>
    </SectionBackground>
  );
};

export default TrainingBackground;
