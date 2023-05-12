import Header from "./layout/Header";
import Footer from "./layout/Footer";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CapIcon from "./components/CapIcon";
import NextPage from "./components/NextPage";

import Experience from "@/interface/experience";
import { useRouter } from "next/router";
import { handleButtonClick } from "@/utils/buttonUtils";
import LoadingPage from "./components/LoadingPage";

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/api/experience");
        const data = await response.json();
        setExperiences(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching experience:", error);
        setIsLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div
          className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-turq  sm:px-0`}
        >
          <div
            id="welcome"
            className="mt-16 flex w-full flex-col justify-center px-4 pt-10 font-display font-semibold text-white"
          >
            <div className="mb-10">
              <CapIcon />
              <h1 className="py-3 text-5xl font-extrabold">Experience</h1>
              <p className="text-xl font-normal text-gray-200">
                I&apos;ve been in
              </p>
            </div>
          </div>

          <div
            id="contents"
            className="grid w-full grid-cols-1 place-items-center gap-4 px-4 pb-8 font-display md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {experiences.map((experience) => (
              <div
                key={experience.id}
                onClick={() =>
                  handleButtonClick(router, `/experiences/${experience.id}`)
                }
                className="col-span-1 row-span-1 h-full w-full overflow-hidden rounded-xl bg-slate-100 p-6 shadow-xl duration-150 md:hover:scale-95 md:hover:bg-slate-200"
              >
                <div
                  id="title"
                  className="w-full text-2xl font-semibold text-blk"
                >
                  <h1 className="mb-2 w-fit rounded-full bg-primary py-1 px-2 text-xs capitalize text-white">
                    {experience.type}
                  </h1>
                  <div className="text-4xl font-semibold capitalize text-blue">
                    {experience.title}
                  </div>
                  <div
                    id="brief"
                    className="mt-2 text-xs font-normal text-gray-600 line-clamp-3"
                  >
                    {experience.description.brief}
                  </div>
                </div>
                <p className="mt-4 w-full truncate text-end text-xs font-normal text-gray-500">
                  {experience.association.name}
                </p>
                <p className="w-full truncate text-end text-xs font-normal text-gray-500">
                  {experience.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <NextPage next="awards" />
      <Footer />
    </>
  );
}
