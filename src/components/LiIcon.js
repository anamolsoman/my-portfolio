import React from "react";
import { motion, useScroll } from "framer-motion";

function LiIcon({ reference }) {
  const { scrollYProgrees } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        width="75"
        height="75"
        viewBox="0 0 100 100"
        className="-rotate-90 md:w-[60px] md:h-[60px]  xs:w-[40px] xs:h-[40px]"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgrees,
          }}
          cx="75"
          cy="50"
          r="20"
          className="fill-light dark:fill-dark stroke-[5px]"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="fill-primary animate-pulse stroke-1"
        />
      </svg>
    </figure>
  );
}

export default LiIcon;
