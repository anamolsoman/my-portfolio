import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-dark text-light  dark:bg-light dark:text-dark flex items-center justify-center 
      rounded-full py-3 px-6 cursor-pointer absolute
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark
      xs:dark:text-light xs:font-bold"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    >
      {name}
    </motion.div>
  );
};

function Skills(props) {
  return (
    <>
      <h2 className="font-bold text-8xl md:text-6xl md:mt-32 mt-64 w-full text-center">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight 
      dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightLg md:dark:bg-circularDarkMd
      sm:bg-circularLightLg sm:dark:bg-circularDarkSm"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-dark text-light dark:bg-light dark:text-dark flex items-center 
          justify-center rounded-full p-6 cursor-pointer lg:p-6 md:p-4 xs:p-2 xs:text-xs"
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-20vw" y="2vw" />
        <Skill name="HTML" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="VueJs" x="0vw" y="12vw" />
        <Skill name="ReactJs" x="-20vw" y="-15vw" />
        <Skill name="Bootstrap" x="15vw" y="-12vw" />
        <Skill name="Vuetify" x="32vw" y="-5vw" />
        <Skill name="Redux" x="-0vw" y="20vw" />
        <Skill name="Vuex" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
}

export default Skills;
