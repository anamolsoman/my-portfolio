import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Detail = ({ company, companyLink, work, position, time, address }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a href={companyLink} className="text-primary capitalize">
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience(props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="bg-dark dark:bg-light w-[4px] h-full absolute left-9 top-0 origin-top"
        />
        <ul className="flex flex-col w-full items-start justify-between ml-4">
          <Detail
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink="www.google.com"
            work="Worked on a team responsible for developing new features for Google's 
      search engine, including improving the accuracy and relevance of search results and 
      developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink="www.google.com"
            work="Worked on a team responsible for developing new features for Google's 
    search engine, including improving the accuracy and relevance of search results and 
    developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink="www.google.com"
            work="Worked on a team responsible for developing new features for Google's 
  search engine, including improving the accuracy and relevance of search results and 
  developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink="www.google.com"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Detail
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink="www.google.com"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
