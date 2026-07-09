import { motion, type SVGMotionProps } from "motion/react";

type Props = SVGMotionProps<SVGSVGElement>;

const CitySilhouetteTwoSvg = ({ ...props }: Props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="1081"
      height="470"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="var(--color-bg-yellow-800)"
          d="M1010.8 262.933V79.485h64.26l16.65 14.374v377.182H-12V223.042h10.006v-45.666h54.287l8.885 10.876v22.59h50.347v72.785h14.805V115.458h34.547V80.324h75.022v101.237h14.806V34.305l63.181 36.812v158.97h22.706l35.531-33.466v-50.204h29.621V87.015h80.942v71.956l23.198 19.654v30.54h37.019V58.572l10.856-12.553h43.431V9.208h46.396V0h7.9v10.885h18.756v47.687h18.756V220.88h14.805V115.458L759.076 91.2v176.537h19.75V141.394h76.007V30.12h31.582L911.1 51.042h42.446v110.436l33.561 28.442v73.013z"
        />
      </g>
    </motion.svg>
  );
};

export default CitySilhouetteTwoSvg;
