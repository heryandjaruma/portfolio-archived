import Header from "./layout/Header";
import Footer from "./layout/Footer";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CapIcon from "./components/CapIcon";
import NextPage from "./components/NextPage";

import Experience from "@/interface/experience";
import { useRouter } from "next/router";
import { handleButtonClick } from "@/utils/buttonUtils";
import LoadingPage from "./components/LoadingPage";
import Head from "next/head";

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/api/experiences");
        const data = await response.json();
        setExperiences(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching experiences:", error);
        setIsLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <>
      <Head>
        <title>Experiences - Ryan&apos;s Portfolio</title>
      </Head>
      <Header />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div
          className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-turq sm:px-0`}
        >
          <div
            id="welcome"
            className="mt-16 flex w-full flex-col justify-center px-4 pt-10 font-display font-semibold text-white lg:px-10"
          >
            <div className="mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <CapIcon />
                <h1 className="py-3 text-5xl font-extrabold sm:text-6xl md:text-7xl">
                  Experiences
                </h1>
                <p className="pb-2 text-xl font-normal text-gray-100">
                  I&apos;ve been in
                </p>
                <p className="pb-2 font-light text-gray-200">
                  Click on any card to view the details
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            id="contents"
            className="grid w-full grid-cols-1 place-items-center gap-4 px-4 font-display md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                onClick={() =>
                  handleButtonClick(router, `/experiences/${experience.id}`)
                }
                className="col-span-1 row-span-1 flex h-full w-full flex-col rounded-xl bg-slate-100 p-4 duration-150 md:hover:scale-95 md:hover:bg-slate-200"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              >
                <div
                  id="title"
                  className="w-full text-2xl font-semibold text-blk"
                >
                  <motion.h1
                    className="mb-2 w-fit rounded-full bg-primary py-1 px-2 text-xs capitalize text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {experience.type}
                  </motion.h1>
                  <motion.div
                    className="text-4xl font-semibold capitalize text-blue"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    {experience.title}
                  </motion.div>
                  <motion.div
                    id="brief"
                    className="pt-2 text-xs font-normal text-gray-600 line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                  >
                    {experience.description.brief}
                  </motion.div>
                </div>
                <motion.p
                  className="w-full truncate pt-4 text-end text-xs font-normal text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  {experience.association.name}
                </motion.p>
                <motion.p
                  className="w-full truncate text-end text-xs font-normal text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                >
                  {experience.period}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
      <NextPage next="awards" />
      <Footer />
    </>
  );
}
