import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

function about(props) {
  return (
    <div>
      <Head>
        <title>Anamol Soman | About Page</title>
        <meta name="description" content="about anamol soman" />
      </Head>
      <main className="flex w-full items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!"></AnimatedText>
        </Layout>
      </main>
    </div>
  );
}

export default about;
