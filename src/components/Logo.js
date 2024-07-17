import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

// const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex">
      <motion.a
        href="/"
        className="bg-dark flex w-16 h-16 md:w-12 md:h-12 text-light items-center justify-center rounded-full font-bold text-2xl md:text-xl border border-solid border-transparent dark:border-light"
        whileHover={{
          scale: 1.2,
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
        }}
      >
        AS
      </motion.a>
    </div>
  );
};

export default Logo;
