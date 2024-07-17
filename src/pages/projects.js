import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import projectImg from "../../public/images/projects/security.jpg";
import ImageGalleryImg from "../../public/images/projects/image-gallery.png";
import PortfolioImg from "../../public/images/projects/portfolio.JPG";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full relative bg-light dark:bg-dark dark:border-light flex items-center justify-between border p-10 border-solid border-dark rounded-3xl 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2.5rem] bg-dark dark:bg-light
      
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 rounded-lg cursor-pointer overflow-hidden lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(min-width: 768px) 50vw,(min-width: 1200px) 50vw, 50vw"
        ></Image>
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:text-dark
             dark:bg-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
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
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]  rounded-[2.5rem] bg-dark dark:bg-light
       rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full rounded-lg cursor-pointer overflow-hidden"
      >
        <Image src={img} alt={title} className="w-full h-auto"></Image>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className=" text-dark dark:text-light text-lg font-semibold underline md-text-base"
          >
            Visit
          </Link>{" "}
          <Link href={github} target="_blank" className="w-8 md:w-6">
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
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the projects of Anamol Soman, showcasing expertise in HTML, CSS, JavaScript, ReactJS, and VueJS. Proven track record of delivering high-quality projects."
        />
        <meta
          name="keywords"
          content="Anamol Soman, projects, frontend developer, web development, HTML, CSS, JavaScript, ReactJS, VueJS"
        />
        <meta name="author" content="Anamol Soman" />
        <title>Projects by Anamol Soman | Frontend Developer</title>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          ></AnimatedText>

          <div className="grid grid-cols-12 gap-24 gap-y-32  xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                img={ImageGalleryImg}
                title="Responsive Image Gallery: NPM Package"
                summary="Vuejs image gallery is having some customizable options so you can make changes as per your requirements."
                link="https://www.npmjs.com/package/vuejs-image-gallery"
                github="https://github.com/anamolsoman/vuejs-image-gallery"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                img={projectImg}
                title="Cloud Security and Scaling"
                link="/"
                github="/"
                type="Dashboard"
              />{" "}
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                img={projectImg}
                title="E-Commerce Website"
                link="/"
                github="/"
                type="E-commerce"
              />{" "}
            </div>{" "}
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                img={PortfolioImg}
                title="Personal Portfolio"
                summary="Developed a personal portfolio website showcasing my skills, projects, and professional experience using HTML, CSS, JavaScript, and ReactJS. The responsive design ensures an optimal user experience across all devices."
                link="/"
                github="https://github.com/anamolsoman/my-portfolio"
                type="Featured Project"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                img={projectImg}
                title="Crypto Screener Application"
                link="/"
                github="/"
                type="Featured Project"
              />{" "}
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                img={projectImg}
                title="Crypto Screener Application"
                link="/"
                github="/"
                type="Featured Project"
              />{" "}
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
