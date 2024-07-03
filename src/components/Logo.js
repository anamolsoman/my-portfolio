import React from "react";
import Link from "next/link";

// import { motion } from "framer-motion";

// const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex">
      <Link
        href="/"
        className="bg-dark flex w-16 h-16 text-light items-center justify-center rounded-full font-bold text-2xl"
        whileHover={{
          scale: 1.5,
        }}
      >
        AS
      </Link>
    </div>
  );
};

export default Logo;
