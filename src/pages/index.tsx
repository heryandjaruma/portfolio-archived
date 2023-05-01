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
          <div id="welcome" className="w-full px-8 text-white h-[600px] flex flex-col justify-center font-display">
            <h1 className="text-5xl font-display font-bold text-blue">Heryan Djaruma</h1>
            <div className="flex flex-row mt-4">
              <a href="#works">
                <button className="px-9 py-.1 border-2 rounded-full border-blk text-blk">
                  Works
                </button>
              </a>
              <a href="#contact">
                <button className="font-display px-5 py-1 rounded-full flex flex-row justify-center items-center text-blk">
                  <span className="underline font-medium">Contact</span> &nbsp;
                  <Image src="/images/particles/arrow_tr.svg" alt="arrow_tr" className="w-3" width={100} height={100} />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div id="works" className="w-full flex items-center justify-center py-6 px-4 h-[500px] bg-[url('/images/particles/bg003.png')] bg-fill">
          <div className="flex flex-col h-full justify-around">
            <h1 className="font-display font-normal text-4xl text-blue">Works</h1>
            <Link href="/projects">
              <div id="roller" className="relative bg-[url('/images/particles/bg004.png')] bg-fill rounded-full py-2 px-7 my-2 text-white font-display">
                <Image src="/images/particles/ic_code.svg" alt="code_icon" width={32} height={32} className="absolute right-0 top-0 w-9" />
                  <h1 className="font-bold text-xl">Projects</h1>
                  <p>Award winning and technical projects</p>
              </div>
            </Link>
            <Link href="/code">
              <div id="roller" className="relative bg-[url('/images/particles/bg004.png')] bg-fill rounded-full py-2 px-7 my-2 text-white font-display">
              <Image src="/images/particles/ic_exp.svg" alt="code_icon" width={32} height={32} className="absolute right-0 top-0 w-9" />
                <h1 className="font-bold text-xl">Experience</h1>
                <p>Laboratory Assistant and teaching</p>
              </div>
            </Link>
            <Link href="/code">
              <div id="roller" className="relative bg-[url('/images/particles/bg004.png')] bg-fill rounded-full py-2 px-7 my-2 text-white font-display">
              <Image src="/images/particles/ic_desmus.svg" alt="code_icon" width={32} height={32} className="absolute right-0 top-0 w-9" />
                <h1 className="font-bold text-xl">Awards</h1>
                <p>Content creating and rhythms</p>
              </div>
            </Link>
          </div>
        </div>

        <div id="education" className="w-full flex items-center justify-center py-6 px-4 h-[550px] bg-[url('/images/particles/bg000-01.png')] bg-fill">
          <div className="flex flex-col h-full justify-around">
            <h1 className="font-display font-normal text-4xl text-blue mb-2">Education</h1>
            <ol className="relative border-l border-gray-200 dark:border-gray-700 font-display">                  
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-blk bg-blk"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 italic">Student Exchange, February - July 2023</time>
                  <h3 className="text-lg font-semibold text-blue">Duksung Women's University, Seoul</h3>
                  <p className="text-md font-normal text-gray-500">Liberal Arts and Sciences</p>
                  <p className="text-sm font-extralight">Teaching Assistant</p>
              </li>
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-blk bg-blk"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 italic">Undergraduate, 2021 - 2025 (expected)</time>
                  <h3 className="text-lg font-semibold text-blue">Binus University</h3>
                  <p className="text-md font-normal text-gray-500">Computer Science. GPA 3.90/4.00</p>
                  <p className="text-sm font-extralight">Laboratory Assistant</p>
              </li>
              <li className="ml-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-blk bg-blk"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 italic">High School, 2018 - 2021</time>
                  <h3 className="text-lg font-semibold text-blue">SMAK 1 BPK Penabur Bandung</h3>
                  <p className="text-md font-normal text-gray-500">Natural Science</p>
                  <p className="text-sm font-extralight">Student Council President; Commencement Speaker</p>
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
