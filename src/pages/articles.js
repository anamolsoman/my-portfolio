import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import articleImg from "../../public/images/articles/pagination component in reactjs.jpg";
import articleImg2 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import TransitionEffect from "@/components/TransitionEffect";
import { LoaderImg } from "../components/Icons";
const FramerMotionImg = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="col-span-1 w-full border border-solid border-dark bg-light
     dark:border-light dark:bg-dark  p-4 rounded-2xl
     "
    >
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block rounded-lg cursor-pointer overflow-hidden"
      >
        <FramerMotionImg
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          width="400"
          height="400"
          priority
          sizes="(min-width: 768px) 50vw,(min-width: 1200px) 50vw, 50vw"
        ></FramerMotionImg>
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline dark:text-light xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm font-medium mb-2 ">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const ArticleList = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  function extractFirstImageUrl(htmlString) {
    // Create a new DOM parser
    const parser = new DOMParser();

    // Parse the HTML string into a document
    const doc = parser.parseFromString(htmlString, "text/html");

    // Find the first img tag
    const imgTag = doc.querySelector("img");

    // If an img tag is found, return its src attribute
    if (imgTag) {
      return imgTag.src;
    }

    // If no img tag is found, return null or an empty string
    return null;
  }

  function getFirstParagraph(content) {
    // Create a new DOMParser instance
    const parser = new DOMParser();

    // Parse the HTML string into a document
    const doc = parser.parseFromString(content, "text/html");

    // Get the first <p> tag from the parsed document
    const firstParagraph = doc.querySelector("p");

    // Return the text content of the first <p> tag, or an empty string if not found
    return firstParagraph ? firstParagraph.textContent.trim() : "";
  }

  return (
    <>
      <Head>
        <title>Anamol Soman | Articles Page</title>
        <meta name="description" content="about anamol soman" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex  flex-col overflow-hidden items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          ></AnimatedText>

          {loading ? (
            <div className="w-full flex items-center justify-center">
              <LoaderImg className="fill-dark stroke-dark  dark:fill-light dark:stroke-light w-40" />
            </div>
          ) : (
            <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
              {blogs.map((blog, index) => {
                return (
                  <FeaturedArticle
                    key={index}
                    title={blog.title}
                    summary={getFirstParagraph.apply(blog.content)}
                    time={blog.pubDate}
                    link={blog.link}
                    img={extractFirstImageUrl(blog.content)}
                  />
                );
              })}
            </ul>
          )}
        </Layout>
      </main>
    </>
  );
};

export default ArticleList;
