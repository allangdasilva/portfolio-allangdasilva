import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
  type KeyframeOptions,
} from "motion/react";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  from?: number;
  to: number;
  animationOptions?: KeyframeOptions & { duration?: number };
  className?: string;
};

export const Counter = ({
  from = 0,
  to,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const shouldReduceMotion = useReducedMotion();

  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) return;

    if (shouldReduceMotion) {
      count.set(to);
      return;
    }

    const controls = animate(count, to, {
      duration: 1.4,
      ease: "easeOut",
      ...animationOptions,
    });

    return () => controls.stop();
  }, [inView, shouldReduceMotion, from, to, count, animationOptions]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};
