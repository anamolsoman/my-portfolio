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
        <title>Anamol Soman | About Page</title>
        <meta name="description" content="about anamol soman" />
      </Head>
      <main className="flex w-full items-center justify-center dark:text-light">
        <Layout className="pt-16 pb-0">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, Im CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether Im working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative rounded-2xl h-max p-8 border-solid  border-2 border-dark bg-light dark:border-light dark:bg-dark">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]  rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={ProfilePicture}
                alt="anamol soman"
                className="rounded-2xl w-full h-auto"
                priority
                sizes="(min-width: 768px) 50vw,(min-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex  flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimateNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Satisfied Clients
                </h2>
              </div>{" "}
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  {" "}
                  <AnimateNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Completed Projects
                </h2>
              </div>{" "}
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  {" "}
                  <AnimateNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
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
