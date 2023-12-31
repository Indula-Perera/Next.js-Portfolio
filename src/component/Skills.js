import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6  shadow-dark cursor-pointer absolute dark:text-dark  dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y, transition:{duration:1.5}}}

    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="w-full mt-64 font-bold text-center cursor-pointer text-8xl md:text-6xl md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center p-5 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
          
        >
          Web / App
        </motion.div>

        <Skill name="React JS" x="-20vw" y="2vw"/>
        <Skill name="HTML" x="-5vw" y="-11vw"/>
        <Skill name="CSS" x="20vw" y="3vw"/>
        <Skill name="JS" x="0vw" y="11.5vw"/>
        <Skill name="PHP" x="-24vw" y="-15vw"/>
        <Skill name="Spring Boot" x="14vw" y="-12vw"/>
        <Skill name="Android" x="29vw" y="-5vw"/>
        <Skill name="MongoDB" x="0vw" y="-20vw"/>
        <Skill name="Java" x="-25vw" y="18vw"/>
        <Skill name="Firebase" x="18vw" y="17vw"/>
        

      </div>
    </>
  );
};

export default Skills;
