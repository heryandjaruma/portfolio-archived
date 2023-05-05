import getWindowSize from "@/utils/windowSize";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function Home() {
  const [active, setActive] = useState(false);

  const size = getWindowSize();

  return (
    <>
      <Header state={active} setState={setActive} windowSize={size} />
      <div
        className={`container mx-auto flex flex-col items-center text-justify sm:px-0 ${
          active && size.width < 640 ? "hidden" : "block"
        }`}
      >
        <div className="w-full bg-[url('/images/particles/bg001-01.png')] bg-cover">
          <div
            id="welcome"
            className="flex h-[600px] w-full flex-col justify-center px-8 font-display text-white"
          >
            <h1 className="text-left font-display text-5xl font-bold text-blue">
              Heryan Djaruma
            </h1>
            <p className="my-2 text-left text-blk">
              Find out more about me in this website
            </p>
            <div className="mt-4 flex flex-row">
              <a href="#works">
                <button className="rounded-full border-2 border-blk py-1 px-9 text-blk">
                  Works
                </button>
              </a>
              <a href="#contact">
                <button className="flex flex-row items-center justify-center rounded-full px-5 py-1 font-display text-blk">
                  <span className="font-medium underline">Contact</span> &nbsp;
                  <Image
                    src="/images/particles/arrow_tr.svg"
                    alt="arrow_tr"
                    className="w-3"
                    width={100}
                    height={100}
                  />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          id="works"
          className="bg-fill flex h-[500px] w-full items-center justify-center bg-[url('/images/particles/bg003.png')] py-6 px-4"
        >
          <div className="flex h-full flex-col justify-around">
            <h1 className="font-display text-4xl font-normal text-blue">
              Works
            </h1>
            <Link href="/projects">
              <div
                id="roller"
                className="bg-fill relative my-2 rounded-full bg-[url('/images/particles/bg004.png')] py-2 px-7 font-display text-white"
              >
                <Image
                  src="/images/particles/ic_code.svg"
                  alt="code_icon"
                  width={32}
                  height={32}
                  className="absolute right-0 top-0 w-9"
                />
                <h1 className="text-xl font-bold">Projects</h1>
                <p>Award winning and technical projects</p>
              </div>
            </Link>
            <Link href="/code">
              <div
                id="roller"
                className="bg-fill relative my-2 rounded-full bg-[url('/images/particles/bg004.png')] py-2 px-7 font-display text-white"
              >
                <Image
                  src="/images/particles/ic_exp.svg"
                  alt="code_icon"
                  width={32}
                  height={32}
                  className="absolute right-0 top-0 w-9"
                />
                <h1 className="text-xl font-bold">Experience</h1>
                <p>Laboratory Assistant and teaching</p>
              </div>
            </Link>
            <Link href="/code">
              <div
                id="roller"
                className="bg-fill relative my-2 rounded-full bg-[url('/images/particles/bg004.png')] py-2 px-7 font-display text-white"
              >
                <Image
                  src="/images/particles/ic_desmus.svg"
                  alt="code_icon"
                  width={32}
                  height={32}
                  className="absolute right-0 top-0 w-9"
                />
                <h1 className="text-xl font-bold">Awards</h1>
                <p>Content creating and rhythms</p>
              </div>
            </Link>
          </div>
        </div>

        <div
          id="education"
          className="bg-fill flex h-[550px] w-full items-center justify-center bg-[url('/images/particles/bg000-01.png')] py-6 px-4"
        >
          <div className="flex h-full flex-col justify-around">
            <h1 className="mb-2 font-display text-4xl font-normal text-blue">
              Education
            </h1>
            <ol className="relative border-l border-gray-200 font-display dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-blk bg-blk"></div>
                <time className="mb-1 text-sm font-normal italic leading-none text-gray-400">
                  Exchange Student, February - July 2023
                </time>
                <h3 className="text-lg font-semibold text-blue">
                  Duksung Women&apos;s University, Seoul
                </h3>
                <p className="text-md font-normal text-gray-500">
                  Liberal Arts and Sciences
                </p>
                <p className="text-sm font-extralight">Teaching Assistant</p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-blk bg-blk"></div>
                <time className="mb-1 text-sm font-normal italic leading-none text-gray-400">
                  Undergraduate, 2025 (expected)
                </time>
                <h3 className="text-lg font-semibold text-blue">
                  Binus University
                </h3>
                <p className="text-md font-normal text-gray-500">
                  Computer Science. GPA 3.90/4.00
                </p>
                <p className="text-sm font-extralight">Laboratory Assistant</p>
              </li>
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-blk bg-blk"></div>
                <time className="mb-1 text-sm font-normal italic leading-none text-gray-400">
                  High School, 2021
                </time>
                <h3 className="text-lg font-semibold text-blue">
                  SMAK 1 BPK Penabur Bandung
                </h3>
                <p className="text-md font-normal text-gray-500">
                  Natural Science
                </p>
                <p className="text-sm font-extralight">
                  Student Council President; Commencement Speaker
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
