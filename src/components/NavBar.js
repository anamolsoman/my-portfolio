import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  MediumIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useState } from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group `}>
      {title}

      <span
        className={`h-[1px] dark:bg-light inline-block  bg-dark absolute  left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className, toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group  text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] dark:bg-dark inline-block  bg-light absolute  left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full relative px-32 z-10 lg:px-16 md:px-12 sm:px-8 py-8 font-medium flex items-center justify-between dark:bg-dark dark:text-light">
      <div
        className="hidden lg:flex flex-col items-center justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light rounded-sm block transition-all duration-300 ease-out h-0.5 w-6 my-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : ""
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 my-0.5 ${
            isOpen ? "hidden" : ""
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light rounded-sm block transition-all duration-300 ease-out h-0.5 w-6 my-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></span>{" "}
      </div>
      <div className="hidden lg:flex">
        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </div>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/anamol_soman"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>{" "}
          <motion.a
            href="https://github.com/anamolsoman"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>{" "}
          <motion.a
            href="https://www.linkedin.com/in/anamol-soman-a0072718a/"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>{" "}
          <motion.a
            title="Medium"
            href="https://medium.com/@anamolsoman2"
            target={"_blank"}
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <MediumIcon />
          </motion.a>{" "}
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col fixed z-30 left-1/2 top-1/2 justify-between items-center -translate-x-1/2 -translate-y-1/2
      bg-dark/95 dark:bg-light/95 rounded-lg background-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://twitter.com/anamol_soman"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>{" "}
            <motion.a
              href="https://github.com/anamolsoman"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1 bg-light dark:bg-dark rounded-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>{" "}
            <motion.a
              href="https://www.linkedin.com/in/anamol-soman-a0072718a/"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>{" "}
            <motion.a
              title="Medium"
              href="https://medium.com/@anamolsoman2"
              target={"_blank"}
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <MediumIcon />
            </motion.a>{" "}
            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-4 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
