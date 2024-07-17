import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Detail = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75  xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full  xs:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

function Education(props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl  md:text-6xl xs:text-4xl mb-32 md:mb-16 w-full text-center">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative  md:w-full lg:w-[90%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="bg-dark dark:bg-light w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full absolute left-9 top-0 origin-top"
        />
        <ul className="flex flex-col w-full items-start justify-between ml-4 xs:ml-2">
          <Detail
            type=" Bachelor Of Engineering In Computer Science"
            time="2016-2019"
            place="University of Amravati"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering"
          />{" "}
          <Detail
            type=" Diploma In Computer Science"
            time="2012-2016"
            place="P.R.Pote College, Amravati "
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering."
          />{" "}
          <Detail
            type="High School Education"
            time="2012"
            place="Amravati"
            info="I focused on Mathematics, Physics, and Computer Science, laying a solid groundwork in analytical thinking and problem-solving."
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
