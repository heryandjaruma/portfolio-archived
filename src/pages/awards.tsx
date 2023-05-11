import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Link from "next/link";
import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";
import AwardsIcon from "./components/AwardsIcon";
import ShowcaseItem from "./layout/ShowcaseItem";
import { useEffect, useState } from "react";

import Award from "@/interface/award";
import { useRouter } from "next/router";

import LoadingPage from "../pages/components/LaodingPage";

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

  // handling button
  const handleButtonClick = (page: string) => {
    router.push(page);
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div
          className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-primary font-display`}
        >
          <div
            id="welcome"
            className="mt-16 flex h-[260px] w-full flex-col justify-center bg-primary px-4 pt-10 font-display font-semibold text-white"
          >
            <div className="mb-10">
              <AwardsIcon />
              <h1 className="py-3 text-5xl font-extrabold">Awards</h1>
              <p className="mb-2 text-xl font-normal text-gray-200">
                I&apos;ve received
              </p>
            </div>
          </div>

          <div id="contents" className="my-4 w-full px-4">
            <div className="space-y-4">
              {awards.map((award) => (
                <ShowcaseItem key={award.id} id={award.title} tag={award.type}>
                  <button
                    className="rounded-xl bg-slate-100 py-4 px-4 duration-150 hover:bg-slate-200"
                    onClick={() => handleButtonClick(`/awards/${award.id}`)}
                  >
                    <div className="flex flex-row items-center space-x-2">
                      <h1 className="text-2xl font-semibold capitalize text-blue">
                        {award.title}
                      </h1>
                      <h1 className="rounded-full bg-turq py-1 px-2 text-xs capitalize text-white">
                        {award.type}
                      </h1>
                    </div>
                    <p className="text-start text-blk">{award.program}</p>
                    <p className="mt-3 text-end text-xs text-gray-600">
                      by {award.association}
                    </p>
                    <p className="text-end text-xs text-gray-600">
                      {award.date}
                    </p>
                  </button>
                </ShowcaseItem>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
