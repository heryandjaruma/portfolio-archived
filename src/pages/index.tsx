import getWindowSize from "@/utils/windowSize";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HomeCard from "./components/HomeCard";
import Header from "./layout/Header";

export default function Home() {
  const [active, setActive] = useState(false);

  const size = getWindowSize();

  return (
    <>
      <Header state={active} setState={setActive} windowSize={size} />
      <div
        className={`container mx-auto mb-10 flex flex-col items-center px-4 text-justify sm:px-0 ${
          active && size.width < 640 ? "hidden" : "block"
        }`}
      >
        <div className="my-4 flex h-[60vh] flex-col items-center justify-center text-center">
          <h1 className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text font-display text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            I&apos;m a <span>Coder</span>{" "}
          </h1>
          <div className="mt-5 flex flex-row justify-center space-x-5">
            <Link href="#showcase">
              <button className="relative flex items-center rounded-xl bg-gradient-to-bl from-rose-500 to-pink-600 p-3 font-code font-bold capitalize text-white shadow-md shadow-purple-300 duration-300 hover:from-rose-600 hover:to-pink-700 ">
                <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-25 brightness-100 contrast-150"></div>
                Showcase &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </Link>
            <Link href="#contact">
              <button className="relative flex items-center rounded-xl bg-gradient-to-bl from-[#D3CCE3] to-[#E9E4F0] p-3 font-code font-bold capitalize shadow-md shadow-purple-300 hover:from-[#c1bad0] hover:to-[#ddd8e4] ">
                <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] text-gray-500 opacity-25 brightness-100 contrast-150"></div>
                Contact &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm-3 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="" id="content">
          {/* Line break */}
          <hr id="showcase" className="my-4 h-px w-full border-0 bg-gray-300" />
          <h1 className="my-3 w-full bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-left font-display text-3xl font-bold text-transparent md:text-4xl">
            Showcase
          </h1>
          <div className="flex w-full flex-col items-center justify-around space-y-4 md:flex-row md:flex-wrap md:space-y-0">
            <Link
              href="/coder"
              className="group relative duration-200 hover:scale-[1.01] md:my-4 md:w-[40vw]"
            >
              <div className="absolute -inset-0.5 h-full w-full rounded-xl bg-gradient-to-r opacity-70 blur group-hover:from-indigo-300 group-hover:to-purple-400 group-hover:opacity-100"></div>
              <div className="relative flex flex-col overflow-hidden rounded-xl shadow-md ">
                <div className="relative">
                  <Image
                    src="/images/kamifriend.jpg"
                    alt="Kamifriend"
                    width={1000}
                    height={1000}
                    className="aspect-[4/3] rounded-t-xl object-cover md:h-72"
                  />
                  <div className="absolute bottom-0 flex h-1/3 w-full flex-row items-end bg-gradient-to-t from-white px-4 align-text-bottom font-display font-bold text-blue-800">
                    <h1 className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-2xl text-transparent md:text-4xl">
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
              className="group relative duration-200 hover:scale-[1.01] md:my-4 md:w-[40vw]"
            >
              <div className="absolute -inset-0.5 h-full w-full rounded-xl bg-gradient-to-r opacity-30 blur group-hover:from-emerald-700 group-hover:to-green-700 group-hover:opacity-30"></div>
              <div className="relative flex flex-col overflow-hidden rounded-xl shadow-md ">
                <div className="relative">
                  <Image
                    src="/images/learner_001.jpg"
                    alt="Kamifriend"
                    width={1000}
                    height={1000}
                    className="aspect-[4/3] rounded-t-xl object-cover md:h-72"
                  />
                  <div className="absolute bottom-0 flex h-1/2 w-full flex-row items-end bg-gradient-to-t from-white px-4 align-text-bottom font-display font-bold ">
                    <h1 className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-2xl text-transparent md:text-4xl">
                      Learner
                    </h1>
                  </div>
                </div>
                <div className="bg-white px-4 pb-2 font-body text-gray-500">
                  <p className="text-start italic">
                    Laboratory Assistant, Teaching Assistant, tutor
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/musician"
              className="group relative duration-200 hover:scale-[1.01] md:my-4 md:w-[40vw]"
            >
              <div className="absolute -inset-0.5 h-full w-full rounded-xl bg-gradient-to-r opacity-50 blur group-hover:from-blue-400 group-hover:to-red-400 group-hover:opacity-50"></div>
              <div className="relative flex flex-col overflow-hidden rounded-xl shadow-md ">
                <div className="relative">
                  <Image
                    src="/images/musician_001.jpg"
                    alt="Kamifriend"
                    width={1000}
                    height={1000}
                    className="aspect-[4/3] rounded-t-xl object-cover md:h-72"
                  />
                  <div className="absolute bottom-0 flex h-1/2 w-full flex-row items-end bg-gradient-to-t from-white px-4 align-text-bottom font-display font-bold ">
                    <h1 className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-2xl text-transparent md:text-4xl">
                      Musician
                    </h1>
                  </div>
                </div>
                <div className="bg-white px-4 pb-2 font-body text-gray-500">
                  <p className="text-start italic">Musician and producer</p>
                </div>
              </div>
            </Link>
            <Link
              href="/contentcreator"
              className="group relative duration-200 hover:scale-[1.01] md:my-4 md:w-[40vw]"
            >
              <div className="absolute -inset-0.5 h-full w-full rounded-xl bg-gradient-to-r opacity-50 blur group-hover:from-orange-400 group-hover:to-red-500 group-hover:opacity-50"></div>
              <div className="relative flex flex-col overflow-hidden rounded-xl shadow-md ">
                <div className="relative">
                  <Image
                    src="/images/cc_001.png"
                    alt="Seoul Thumbnail"
                    width={1000}
                    height={1000}
                    className="aspect-[4/3] rounded-t-xl object-cover md:h-72"
                  />
                  <div className="absolute bottom-0 flex h-1/3 w-full flex-row items-end bg-gradient-to-t from-white px-4 align-text-bottom font-display font-bold ">
                    <h1 className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-2xl text-transparent md:text-4xl">
                      Content Creator
                    </h1>
                  </div>
                </div>
                <div className="bg-white px-4 pb-2 font-body text-gray-500">
                  <p className="text-start italic">
                    TikTok, YouTube, multimedia editing
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/* Line break */}
          <hr
            id="contact"
            className="mt-10 mb-4 h-px w-full border-0 bg-gray-300"
          />
          <h1 className="my-3 w-full bg-gradient-to-r from-stone-700 to-slate-700 bg-clip-text text-left font-display text-3xl font-bold text-transparent md:text-4xl">
            Contact
          </h1>
          <div className="flex h-[40ch] w-full flex-col items-center justify-center space-y-3">
            {/* <Image
              src="/images/profile.jpg"
              width={1000}
              height={1000}
              alt="Profile"
              className="pointer-events-none w-48 rounded-full object-fill"
            /> */}
            <h1 className="font-code text-3xl">Heryan Djaruma</h1>
            <p className="font-body italic text-gray-600">
              Kota Bandung, Indonesia
            </p>
            <div className="flex w-full flex-row items-center justify-center space-x-7 pt-10 font-code font-bold">
              <Link
                href="https://www.linkedin.com/in/heryandjaruma/"
                className="flex flex-row rounded-xl bg-gray-200 p-2 text-blue-600 shadow-md hover:bg-gray-300"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                &nbsp;
                <p>Linkedin</p>
              </Link>
              <Link
                href="https://github.com/heryandjaruma"
                className="flex flex-row rounded-xl bg-gray-200 p-2 text-blue-600 shadow-md hover:bg-gray-300"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                &nbsp;
                <p>Github</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="my-4 w-full text-center font-code text-xs font-extralight">
        Copyright © 2023 Heryan Djaruma
      </p>
    </>
  );
}
