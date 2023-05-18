import Footer from "./layout/Footer";
import Header from "./layout/Header";
import AwardsIcon from "./components/AwardsIcon";
import { useEffect, useState } from "react";

import Award from "@/interface/award";
import { useRouter } from "next/router";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import LoadingPage from "./components/LoadingPage";
import { handleButtonClick } from "@/utils/buttonUtils";
import Head from "next/head";

export default function Awards() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // API fetch
  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await fetch("/api/awards");
        const data = await response.json();
        setAwards(data);
        setIsLoading(false); // Set loading state to false after fetching awards
      } catch (error) {
        console.error("Error fetching awards:", error);
        setIsLoading(false); // Set loading state to false in case of an error
      }
    };

    fetchAwards();
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold value as needed
  });

  useEffect(() => {
    if (inView) {
      const awardsGrid = document.getElementById("contents");
      if (awardsGrid) {
        awardsGrid.style.opacity = "1";
        awardsGrid.style.transform = "translateY(0)";
      }
    }
  }, [inView]);

  return (
    <>
      <Head>
        <title>Awards - Ryan&apos;s Portfolio</title>
      </Head>
      <Header />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div
          className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-primary font-display`}
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
                <AwardsIcon />
                <h1 className="py-3 text-5xl font-extrabold sm:text-6xl md:text-7xl">
                  Awards
                </h1>
                <p className="pb-2 text-xl font-normal text-gray-200">
                  I&apos;ve received
                </p>
                <p className="pb-2 font-light text-gray-200">
                  Click on any card to view the details
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            id="contents"
            ref={ref}
            className="col-span-1 my-4 grid w-full place-items-center gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          >
            {awards.map((award, index) => (
              <motion.button
                key={award.id}
                className="col-span-1 row-span-1 flex h-full w-full flex-col rounded-xl bg-slate-100 p-4 duration-150 md:hover:scale-95 md:hover:bg-slate-200"
                onClick={() => handleButtonClick(router, `/awards/${award.id}`)}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              >
                <motion.h1
                  className="mb-2 w-fit rounded-full bg-turq py-1 px-2 text-xs font-semibold capitalize text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  {award.type}
                </motion.h1>
                <motion.h1
                  className="text-start text-4xl font-semibold capitalize text-blue"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  {award.title}
                </motion.h1>
                <motion.p
                  className="text-start text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  {award.program}
                </motion.p>
                <motion.p
                  className="mt-5 w-full text-end text-xs text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  by {award.association}
                </motion.p>
                <motion.p
                  className="w-full text-end text-xs text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  {award.date}
                </motion.p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      )}
      <Footer />
    </>
  );
}
