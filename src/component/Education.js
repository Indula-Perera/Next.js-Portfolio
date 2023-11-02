import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto cursor-pointer flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">{type}</h3>
        <span className="font-medium capitalize text-dark/75 dark:text-primaryDark xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full font-medium text-justify">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center cursor-pointer text-8xl md:text-6xl xs:text-4xl md:mb-16">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="flex flex-col items-start justify-between w-full ml-5 xs:ml-2">
          <Details
            type="BSc in Software Engineering"
            time="2022-2023"
            place="ICBT Campus (Cardiff Metropolitan University)"
            info="As a graduate of the Bachelor of Science in Software Engineering program, I possess a deep understanding of software design, development, and maintenance. With I strong foundation in computer science, programming languages, and software development methodologies, I am well-equipped to meet industry standards and customer requirements in designing and developing software applications. I am prepared to contribute to the advancement of the field through I have knowledge and expertise in software engineering principles."
          />

          <Details
            type="HD in Computing and Software Engineering"
            time="2020-2022"
            place="ICBT Campus - Colombo 04"
            info="As a graduate of the Higher Diploma in Software Engineering program, I have developed a solid foundation in software development, programming languages, and software engineering principles. I possess practical skills in designing, developing, and testing software applications, and are prepared to contribute to the industry through I have knowledge and expertise.  education has equipped I to meet the demands of a rapidly evolving technological landscape."
          />

          <Details
            type="ICT Technician NVQ Level 4"
            time="2019-2020"
            place="Vocational Training Authority - Sri Lanka"
            info="In addition to my academic achievements, I completed the ICT Technician NVQ Level 4 course at the Vocational Training Authority of Sri Lanka during the 2019-2020 period. This program provided me with comprehensive technical knowledge and practical skills, which were further enhanced during a six-month apprenticeship in the field. I am now ready to leverage this combined education and experience to pursue a diverse range of careers within the technology sectors."
          />


          <Details
            type="Advanced Level"
            time="2018"
            place="Mahanama College - Colombo 03"
            info="As a graduate of the Advance level in Commerce stream, I have gained a deep understanding of business principles and practices. I possess practical skills in financial accounting, economics, and business management, and are well-equipped to pursue further studies in commerce or enter the workforce. I'm education has prepared for a wide range of careers in the business world."
          />

          <Details
            type="Ordinary Level"
            time="2015"
            place="Mahanama College - Colombo 03"
            info="As a graduate of the Ordinary level, I have completed a crucial stage of I education. I have gained a foundational understanding of various subjects and developed essential skills such as reading, writing, and arithmetic. I'm education has prepared to pursue further studies or enter the workforce with basic knowledge and skills."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
