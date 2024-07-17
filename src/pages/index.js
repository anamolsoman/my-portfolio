import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anamol Soman | Frontend Developer Portfolio</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Anamol Soman portfolio. Experienced frontend developer with 5 years of proficiency in creating responsive and user-friendly web applications."
        />
        <meta
          name="description"
          content="Anamol Soman, frontend developer, web development, HTML, CSS, JavaScript, ReactJS, VueJS"
        />
        <meta name="author" content="Anamol Soman" />
      </Head>
      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex flex-wrap items-center justify-between w-full  lg:flex-col">
            <div className="w-1/2 md:w-full ">
              <Image
                src={ProfilePic}
                alt="Anamol"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(min-width: 768px) 50vw,(min-width: 1200px) 50vw, 50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium dark:text-light md:text-sm sm:text-xs">
                As a skilled frontend developer, I am dedicated to turning ideas
                into innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in ReactJs, VueJS and web
                development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Anamol_Soman_Frontend_Developer.pdf"
                  target={"_blank"}
                  className="flex items-center p-2.5 px-6 dark:bg-light  bg-dark font-semibold text-lg dark:text-dark text-light rounded-lg hover:text-dark hover:bg-light hover:dark:text-light hover:dark:bg-dark
                  border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:anamolsoman2@gmail.com"
                  className="ml-4 text-lg capitalize underline dark:text-light text-dark font-medium md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
