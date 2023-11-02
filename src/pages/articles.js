import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import TransitionEffect from "@/component/TransitionEffect";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useContext } from "react";



const Article = ({ title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid cursor-pointer rounded-xl bg-light text-dark first:mt-0 border-dark dark:border-light dark:bg-dark sm:flex-col "
    >
      <Link href={link} target="_blank">
        <h2 className="text-xl font-semibold capitalize hover:underline dark:text-light">
          {title}
        </h2>
      </Link>
      <span className="pl-4 font-semibold text-red-500 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  );
};

const articles = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kuzhptr",
        "template_urx6qqd",
        form.current,
        "2uxfj8V5OyAqS5YiI"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Head>
        <title>Indula Perera | Contact Page</title>
        <meta name="description" content="Indula Perera" />
      </Head>
      <TransitionEffect/>
      <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Contact Me"
            className="mb-16 cursor-pointer lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul>
          <form className="form-group" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="mb-4 user "
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user form-control form-control-sm"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-bold border-transparent hover:border-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base" />

         
        </form>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
