import { useMotionValueEvent, useScroll, type Variants } from "motion/react";
import { useRef, useState } from "react";
import SectionBackground from "../../../common/section/SectionBackground";
import HandOneSvg from "../../../../svgs/HandOneSvg";
import HandTwoSvg from "../../../../svgs/HandTwoSvg";
import HandThreeSvg from "../../../../svgs/HandThreeSvg";
import styles from "./TributesBackground.module.css";

const TributesBackground = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let currentStep = 0;

    if (latest >= 0.8) currentStep = 3;
    else if (latest >= 0.75) currentStep = 2;
    else if (latest >= 0.7) currentStep = 1;

    setAnimationStep((prev) => (prev !== currentStep ? currentStep : prev));
  });

  const handVariants: Variants = {
    offscreen: {
      y: "100%",
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.4,
      },
    },
    onscreen: (i: number) => ({
      y: 20,
      x: i,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <SectionBackground>
      <div ref={ref} className={styles.background_container}>
        <div className={styles.background_image}></div>
        <div className={styles.hands_wrapper}>
          <HandOneSvg
            variants={handVariants}
            initial="offscreen"
            animate={animationStep >= 1 ? "onscreen" : "offscreen"}
          />

          <HandTwoSvg
            variants={handVariants}
            custom={-144}
            initial="offscreen"
            animate={animationStep >= 2 ? "onscreen" : "offscreen"}
          />

          <HandThreeSvg
            variants={handVariants}
            custom={116}
            initial="offscreen"
            animate={animationStep >= 3 ? "onscreen" : "offscreen"}
          />
        </div>
      </div>
    </SectionBackground>
  );
};

export default TributesBackground;
