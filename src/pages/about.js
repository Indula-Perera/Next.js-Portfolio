import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/1111.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../component/Skills"
import Experience from "../component/Experience"
import Education from "@/component/Education";
import TransitionEffect from "@/component/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Indula Perera | About page</title>
        <meta name="description" content="Indula Perera" />
      </Head>
      <TransitionEffect/>
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Exploring my Background, Skills and Passion."
            className="mb-16 cursor-pointer lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-6 gap-16 sm:gap-8 ">
          <div className="flex flex-col items-start justify-start col-span-1 xl:col-span-4 md:order-2 md:col-span-8"></div>
            <div className="flex flex-col items-start justify-start col-span-2 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography 
              </h2>
              <p className="font-semibold text-justify cursor-pointer">
            Hello, I am Indula Perera, a highly motivated software engineering graduate holding a Bachelor of Science degree. I possess proficiency in various programming languages, including Java, JavaScript, HTML, PHP, Spring Boot, MySQL, MongoDB, OOP, and Android App Development, along with expertise in React JS. My career aspiration is to establish a successful career as a software engineer, utilizing my knowledge and skills to craft innovative software solutions tailored to meet the needs of businesses and end-users. With a solid foundation in education and practical experience, I am well-prepared to pursue my professional objectives and excel in the software engineering industry.
              </p>
            </div>

            <div className="relative col-span-2 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Madura Prasad"
                className="cursor-pointer w-60 h-90 rounded-2xl"
                priority sizes="(max-width:768px) 100vw,(max-width:1200px)50vw,33vw"
              />
            </div>
            <div className="flex flex-col items-start justify-start col-span-1 xl:col-span-4 md:order-2 md:col-span-8"></div>

            {/* <div className="flex flex-col items-end justify-between col-span-2 cursor-pointer xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={23} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={28} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div> */}
          </div>
          <Skills/>
          {/* <Experience/> */}
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default about;
