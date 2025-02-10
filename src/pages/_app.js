import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { CallIcon, LinkArrow } from "@/components/Icons";
import { motion } from "framer-motion";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont dark:bg-dark bg-light min-h-screen w-full`}
      >
        <Navbar></Navbar>
        <AnimatePresence mode="wait">
          <div className="fixed bottom-2 right-2 p-4 z-50  hidden sm:flex md:flex">
            <a href="tel:8806715199">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-dark dark:bg-light text-white rounded-full w-12 h-12 flex items-center justify-center"
              >
                <CallIcon className={"m-2 fill-white dark:fill-dark"} />
              </motion.button>
            </a>
          </div>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
