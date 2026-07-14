import { motion, type SVGMotionProps } from "motion/react";

type Props = SVGMotionProps<SVGSVGElement>;

const CitySilhouetteOneSvg = ({ ...props }: Props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="1081"
      height="446"
      fill="none"
      {...props}
    >
      <path
        fill="var(--color-bg-yellow-900)"
        d="m991.247 127.801 14.963-16.47h63.86v22.938H1081V447H532.366v-.587H261.924V447H0V162.979h79.854v-22.248l14.371-15.814h84.645v19.324h9.59v200.278h16.498V95.049l14.381-15.813V54.64h73.464v146.402h24.487V96.8l7.454-8.195h86.245V249.07h44.722l25.552 44.507v-23.432h20.234V146.002h43.649v74.951h21.298v192.669h73.623V200.226h83.8v-47.183h158.635v185.469l21.447 23.601V40h71.337v138.286h15.961z"
      />
    </motion.svg>
  );
};

export default CitySilhouetteOneSvg;
