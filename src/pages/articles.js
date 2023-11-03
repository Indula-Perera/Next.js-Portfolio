import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Head from "next/head";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TransitionEffect from "@/component/TransitionEffect";
import Image from "next/image";
import contact from "../../public/images/projects/contact.png";

const Article = ({ title, date, link }) => {
  // ... (No changes needed for this component)
};

const Articles = () => {
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
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex flex-wrap items-center justify-between w-full lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <Image
                src={contact}
                alt="Main image"
                className="w-full h-auto cursor-pointer md:w-full"
                priority
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center self-center">
                <AnimatedText
                  text="Contact Me"
                  className="text-6xl text-left cursor-pointer xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl"
                />
                <p className="my-4 text-base font-medium cursor-pointer md:text-sm sm:text-xs">
                  {/* Add your description here */}
                </p>
              </div>
            </div>
          </div>
        </Layout>
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full space-y-4 md:w-1/2"
          >
            <div className="relative p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="w-full p-3 text-lg border rounded-lg border-dark bg-light dark:bg-dark dark:border-light"
                placeholder="Your Name"
              />
            </div>
            <div className="relative p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="w-full p-3 text-lg border rounded-lg border-dark bg-light dark:bg-dark dark:border-light"
                placeholder="Your Email"
              />
            </div>
            <div className="relative p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <textarea
                name="message"
                id="message"
                rows="5"
                className="w-full p-3 text-lg border rounded-lg border-dark bg-light dark:bg-dark dark:border-light"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-bold border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
            >
              Send
            </button>
          </form>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
