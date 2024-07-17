import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import ProfilePicture from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../../src/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

function about(props) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn more about Anamol Soman, an experienced frontend developer with expertise in HTML, CSS, JavaScript, ReactJS, and VueJS."
        />
        <meta
          name="keywords"
          content="Anamol Soman, about Anamol Soman, frontend developer, web development, HTML, CSS, JavaScript, ReactJS, VueJS"
        />
        <meta name="author" content="Anamol Soman" />
        <title>About Anamol Soman | Frontend Developer</title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full items-center justify-center dark:text-light">
        <Layout className="pt-16 pb-0">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, Im Anamol Soman, an experienced frontend developer with 5
                years of proficiency in creating responsive and user-friendly
                web applications. Demonstrated expertise in HTML, CSS,
                JavaScript, and modern frameworks like ReactJS and VueJS.
              </p>
              <p className="my-4 font-medium">
                I have a proven track record of delivering high-quality projects
                that exceed client expectations and enhance user experiences. I
                believe that web development is about more than just writing
                code – its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether Im working on a website, mobile app, or other digital
                product, I bring my commitment to excellence and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className="col-span-3 md:col-span-8 md:order-1 xl:col-span-4 relative rounded-2xl h-max p-8 border-solid  border-2 border-dark bg-light dark:border-light dark:bg-dark">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={ProfilePicture}
                alt="anamol soman"
                className="rounded-2xl w-full h-auto"
                priority
                sizes="(min-width: 768px) 50vw,(min-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex  flex-col  items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl  md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  <AnimateNumbers value={10} />+
                </span>
                <h2 className="text-xl  font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>{" "}
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  {" "}
                  <AnimateNumbers value={12} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Completed Projects
                </h2>
              </div>{" "}
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl  md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                  {" "}
                  <AnimateNumbers value={5} />+
                </span>
                <h2 className="text-xl  font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </div>
  );
}

export default about;
