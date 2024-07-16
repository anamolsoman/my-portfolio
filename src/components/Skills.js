import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-dark text-light  dark:bg-light dark:text-dark flex items-center justify-center rounded-full py-3 px-6 cursor-pointer absolute"
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
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-dark text-light dark:bg-light dark:text-dark flex items-center justify-center rounded-full p-6 cursor-pointer"
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
