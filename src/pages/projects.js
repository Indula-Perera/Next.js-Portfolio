import AnimatedText from "@/component/AnimatedText";
import { GithubIcon } from "@/component/Icons";
import Layout from "@/component/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import blogApp from "../../public/images/projects/blogapp.png";
import Aisummarizer from "../../public/images/projects/Aisummarizer.png";
import zara from "../../public/images/projects/zara.png";
import pos from "../../public/images/projects/pos.png";
import Admin from "../../public/images/projects/Admin.png";
import port from "../../public/images/projects/port.png";
import RoadTrip from "../../public/images/projects/RoadTrip.png";
import imgSrc from "../../public/images/projects/imgsrc.png";
import TransitionEffect from "@/component/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark bg-light rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
        href={link}
        target="_blank"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,(max-width:1200px)50vw,50vw"
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-xl font-medium text-red-500 cursor-pointer dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-justify cursor-pointer text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center mt-2 ">
          <Link className="w-10 " href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        className="w-full overflow-hidden rounded-lg cursor-pointer"
        href={link}
        target="_blank"
        priority
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-red-500 cursor-pointer dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl">{title}</h2>
        </Link>
        <div className="flex items-center justify-between w-full mt-2 ">
          <Link
            className="text-lg font-semibold underline underline-offset-2 md:text-base"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Indula Perera | Projects page</title>
        <meta
          name="description"
          content="Indula Perera | Projects | GitHub | github"
        />
      </Head>
      <TransitionEffect/>
      <main className="flex flex-col items-end justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Showcase of My Personal Projects."
            className="mb-16 cursor-pointer lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12"></div>
            
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title="Blog Web App With Malicious URL Detection"
                img={blogApp}
                summary="For my BSc Final Project, I developed a sophisticated blog web application with a primary focus on Malicious URL Detection. The web application was built using Next.js and MongoDB for the route API, ensuring a seamless user experience. To enhance security, I integrated Python and NLP techniques to create a robust Malicious URL Detection system. To showcase the project, I used the Streamlit library for deployment. In addition to security features, the blog application supports categorized blog posting and allows users to publish comments. To enhance user convenience and authentication, I implemented Google and GitHub authentication for logging into the website. This project represents a comprehensive demonstration of my skills in web development, security, and authentication integration."
                link="https://github.com/Indula-Perera/React-Blog-App-With-Malicious-URL-Detection.git"
                type="Next.JS Project"
                github="https://github.com/Indula-Perera/React-Blog-App-With-Malicious-URL-Detection.git"
              />
            </div>
            
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="React Portfolio With Mailing "
                img={port}
                link="https://github.com/Indula-Perera/React-Portfolio.git"
                type="React Project"
                github="https://github.com/Indula-Perera/React-Portfolio.git"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Articles Summarize Web App "
                img={Aisummarizer}
                link="https://github.com/Indula-Perera/OpenAI-Article-Summarizer.git"
                type="React / OpenAI Project"
                github="https://github.com/Indula-Perera/OpenAI-Article-Summarizer.git"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Admin Dashboard Template"
                img={Admin}
                link="https://github.com/Indula-Perera/React-Admin-Dashboard.git"
                type="React (Front-end)"
                github="https://github.com/Indula-Perera/React-Admin-Dashboard.git"
              />
            </div>
            
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                title="Zara Wide Cloth Store "
                img={zara}
                summary="Zara Wide is a high-distinction online clothing store project, meticulously designed using PHP, JavaScript, and SQL. It offers an exceptional online shopping experience and robust administrative capabilities. Customers enjoy a user-friendly interface with an extensive product catalog, an efficient shopping cart, and secure user authentication. An admin panel empowers administrators to manage products, users, and orders seamlessly. This project highlights your web development skills and database management expertise, making it a valuable addition to your portfolio. Consider further enhancements such as recommendation engines and payment gateway integration for a more immersive shopping experience."
                link="https://github.com/Indula-Perera/Full-Functional-PHP-e-commerce-website-HD-Final-Project.git"
                type="Higher Diploma Final Project (Campus)"
                github="https://github.com/Indula-Perera/Full-Functional-PHP-e-commerce-website-HD-Final-Project.git"
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="E Commerce Shop POS System"
                img={pos}
                link="https://github.com/Indula-Perera/Point-of-Sale-Project.git"
                type="PHP Project"
                github="https://github.com/Indula-Perera/Point-of-Sale-Project.git"
              />
            </div>
           
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Trip Planning And Booking Web App"
                img={RoadTrip}
                link="https://github.com/Indula-Perera/Travel-Website--Road-Trip-Srilanka.git"
                type="PHP Project (Campus)"
                github="https://github.com/Indula-Perera/Travel-Website--Road-Trip-Srilanka.git"
              />
            </div>
             <div className="col-span-4 sm:col-span-12">
              <Project
                title="Image Search Web App"
                img={imgSrc}
                link="https://github.com/Indula-Perera/JS-Image-Search.git"
                type="JavaScript Project"
                github="https://github.com/Indula-Perera/JS-Image-Search.git"
              />
              
            </div>
            {/*
            <div className="col-span-12">
              <FeaturedProject
                title="Live Crypto Tracker"
                img={Project1}
                summary="The live crypto tracker is a mobile app developed using React Native and CoinGecko API that provides real-time cryptocurrency price monitoring. It features a user-friendly interface, customizable watchlists, price alerts, push notifications, and detailed views of each cryptocurrency. The app aims to provide a reliable and convenient tool for crypto enthusiasts to stay up-to-date and make informed investment decisions."
                link=""
                type="Featured Project"
                github=""
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Live Crypto Tracker"
                img={Project1}
                link=""
                type="Project"
                github=""
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Live Crypto Tracker"
                img={Project1}
                link=""
                type="Project"
                github=""
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Live Crypto Tracker"
                img={Project1}
                link=""
                type="Project"
                github=""
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
