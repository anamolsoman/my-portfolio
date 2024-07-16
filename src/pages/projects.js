import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import projectImg from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative bg-light dark:bg-dark dark:border-light flex items-center justify-between border p-12 border-solid border-dark rounded-3xl ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2.5rem] bg-dark dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 rounded-lg cursor-pointer overflow-hidden"
      >
        <Image src={img} alt={title} className="w-full h-auto"></Image>
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:text-dark dark:bg-light p-2 px-6 text-lg font-semibold"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full relative bg-light dark:bg-dark  flex flex-col items-center justify-between border p-4 border-solid border-dark dark:border-light rounded-3xl ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2.5rem] bg-dark dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-full rounded-lg cursor-pointer overflow-hidden"
      >
        <Image src={img} alt={title} className="w-full h-auto"></Image>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className=" text-dark text-lg font-semibold underline"
          >
            Visit
          </Link>{" "}
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function projects(props) {
  return (
    <>
      <Head>
        <title>Anamol Soman | Projects Page</title>
        <meta name="description" content="about anamol soman" />
      </Head>
      <main className="w-full mb-16 flex items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          ></AnimatedText>

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                img={projectImg}
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                img={projectImg}
                title="Crypto Screener Application"
                link="/"
                github="/"
                type="Featured Project"
              />{" "}
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                img={projectImg}
                title="Crypto Screener Application"
                link="/"
                github="/"
                type="Featured Project"
              />{" "}
            </div>{" "}
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                img={projectImg}
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                img={projectImg}
                title="Crypto Screener Application"
                link="/"
                github="/"
                type="Featured Project"
              />{" "}
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                img={projectImg}
                title="Crypto Screener Application"
                link="/"
                github="/"
                type="Featured Project"
              />{" "}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
