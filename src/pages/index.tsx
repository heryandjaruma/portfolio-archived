import getWindowSize from "@/utils/windowSize";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HomeCard from "./components/HomeCard";
import Header from "./layout/Header";

export default function Home() {
  const [active, setActive] = useState(false);

  const size = getWindowSize();
  console.log(size);
  console.log(active);

  return (
    <>
      <Header state={active} setState={setActive} windowSize={size} />
      <div
        className={`container mx-auto mb-10 flex flex-col items-center px-4 text-justify sm:px-0 ${
          active && size.width < 640 ? "hidden" : "block"
        }`}
      >
        <div className="my-4 flex h-[75vh] flex-col items-center justify-center text-center">
          <h1 className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text font-display text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            I&apos;m a <span>Coder</span>{" "}
          </h1>
        </div>
        {/* Line break */}
        <hr className="my-8 h-px w-full border-0 bg-gray-300" />
        <div className="flex w-full flex-col items-center justify-around space-y-4 md:flex-row md:space-y-0">
          {/* <h1 className="mb-6 w-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-left font-display text-2xl font-bold text-transparent">
            Portfolio
          </h1> */}

          <Link
            href="/coder"
            className="group relative duration-200 hover:scale-[1.02] md:w-[40vw]"
          >
            <div className="absolute -inset-0.5 h-full w-full rounded-xl bg-gradient-to-r opacity-70 blur  group-hover:from-indigo-300 group-hover:to-purple-400 group-hover:opacity-100"></div>
            <div className="relative flex flex-col overflow-hidden rounded-xl shadow-md ">
              <div className="relative">
                <Image
                  src="/images/kamifriend.jpg"
                  alt="Kamifriend"
                  width={1000}
                  height={1000}
                  className="rounded-t-xl object-cover md:h-72"
                />
                <div className="absolute bottom-0 flex h-3/4 w-full flex-row items-end bg-gradient-to-t from-white px-4 align-text-bottom font-display font-bold text-blue-800">
                  <h1 className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-3xl text-transparent md:text-4xl">
                    Coder
                  </h1>
                </div>
              </div>
              <div className="bg-white px-4 pb-2 font-body text-gray-500">
                <p className="text-start italic">
                  Award-winning, personal and technical projects
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/learner"
            className="group relative duration-200 hover:scale-[1.02] md:w-[40vw]"
          >
            <div className="absolute -inset-0.5 h-full w-full rounded-xl bg-gradient-to-r opacity-50 blur group-hover:from-rose-700 group-hover:to-pink-600 group-hover:opacity-50"></div>
            <div className="relative flex flex-col overflow-hidden rounded-xl shadow-md ">
              <div className="relative">
                <Image
                  src="/images/learner_001.jpg"
                  alt="Kamifriend"
                  width={1000}
                  height={1000}
                  className="rounded-t-xl object-cover md:h-72"
                />
                <div className="absolute bottom-0 flex h-1/3 w-full flex-row items-end bg-gradient-to-t from-white px-4 align-text-bottom font-display font-bold ">
                  <h1 className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-3xl text-transparent md:text-4xl">
                    Learner
                  </h1>
                </div>
              </div>
              <div className="bg-white px-4 pb-2 font-body text-gray-500">
                <p className="text-start italic">
                  Laboratory Assistant, Teaching Assistant, and tutor
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
