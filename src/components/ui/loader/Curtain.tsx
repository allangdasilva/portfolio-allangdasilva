import { useEffect } from "react";
import { motion } from "motion/react";
import MockingjayLogoSvg from "../../svgs/MockingjayLogoSvg";
import styles from "./Curtain.module.css";

const Curtain = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      animate={{
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      }}
      transition={{ duration: 0.9, delay: 1.75, ease: "easeOut" }}
      className={styles.curtain_wrapper}
      onAnimationComplete={onFinish}
      aria-hidden={"true"}
    >
      <div className={styles.logo_wrapper}>
        <MockingjayLogoSvg />
      </div>
    </motion.div>
  );
};

export default Curtain;
