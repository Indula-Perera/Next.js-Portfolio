import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

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
      <Head>
        <title>Indula Perera | Contact Page</title>
        <meta name="description" content="Indula Perera" />
      </Head>
      <main className="flex items-center justify-center h-screen dark:text-light">
        <Layout className="max-w-2xl p-8">
          <AnimatedText
            text="Contact Me"
            className="mb-20 text-4xl font-bold text-center"
          />
          <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-9">
            <div>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="w-full p-4 text-lg border border-black rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                id="user_email"
                className="w-full p-4 text-lg border border-black rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="w-full p-4 text-lg border border-black rounded-lg"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-bold border-transparent hover:border-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
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
