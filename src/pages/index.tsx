import Image from "next/image";
import Link from "next/link";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";

import { useRef, useState } from "react";
import { scroller } from "react-scroll";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { scrollToDiv } from "@/utils/scrollUtils";

interface Props {
  news: Anews[];
  educations: Education[];
  showcases: Showcase[];
}

interface Showcase {
  id: number;
  filename: string;
}

interface Anews {
  id: number;
  show: boolean;
  title: string;
  association: string;
  keyword: string;
  description: string;
  account: string;
  platform: string;
  link: string;
}

interface Education {
  id: number;
  education: string;
  association: string;
  period: string;
  major: string;
  grade?: string;
  related: string;
}

export default function Home({ news, educations, showcases }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(event.clientX - scrollContainerRef.current!.offsetLeft);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const x = event.clientX - scrollContainerRef.current!.offsetLeft;
    const distance = x - startX;
    scrollContainerRef.current!.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // button scrolling
  // const handleScrollDown = (target: string) => {
  //   scroller.scrollTo(target, {
  //     duration: 400,
  //     delay: 0,
  //     smooth: "easeInOutQuart",
  //   });
  // };

  return (
    <>
      <Header />
      <div
        className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-slate-200`}
      >
        <div
          id="welcome"
          className="mt-16 flex w-full flex-col justify-center font-display text-white"
        >
          <div className="bg-white px-4 py-24">
            <p className="font-light text-gray-500">Hello, I&apos;m</p>
            <h1 className="text-left text-5xl font-bold text-blue">
              Heryan Djaruma
            </h1>
            <p className="mt-12 text-left font-bold text-gray-500">
              Find out more about me in this site
            </p>
            <div className="mt-4 flex flex-row">
              <button
                className="rounded-full border-2 border-blk py-1 px-9 text-blk"
                onClick={() => scrollToDiv("works")}
              >
                Works
              </button>
              <button
                className="flex flex-row items-center justify-center rounded-full px-5 py-1 font-display text-blk"
                onClick={() => scrollToDiv("contact")}
              >
                <span className="font-medium underline">Contact</span> &nbsp;
                <Image
                  src="/images/particles/arrow_tr.svg"
                  alt="arrow_tr"
                  className="w-3"
                  width={100}
                  height={100}
                />
              </button>
            </div>
          </div>
        </div>

        <div
          id="works"
          className="flex w-full items-center justify-center bg-primary px-4 py-16"
        >
          <div className="flex h-full w-full flex-col justify-around py-2">
            <h1 className="font-display text-4xl font-normal text-white">
              Works
            </h1>
            <Link href="/projects">
              <div
                id="roller"
                className="bg-fill relative my-2 rounded-full bg-blue py-2 px-7 font-display text-white"
              >
                <Image
                  src="/images/icons/code.svg"
                  alt="code_icon"
                  width={32}
                  height={32}
                  className="absolute right-0 top-0 w-9"
                />
                <h1 className="text-xl font-bold">Projects</h1>
                <p>Technical projects</p>
              </div>
            </Link>
            <Link href="/experience">
              <div
                id="roller"
                className="bg-fill relative my-2 rounded-full bg-blue py-2 px-7 font-display text-white"
              >
                <Image
                  src="/images/icons/cap.svg"
                  alt="code_icon"
                  width={32}
                  height={32}
                  className="absolute right-0 top-0 w-9"
                />
                <h1 className="text-xl font-bold">Experience</h1>
                <p>Laboratory assistant and teaching</p>
              </div>
            </Link>
            <Link href="/awards">
              <div
                id="roller"
                className="bg-fill relative my-2 rounded-full bg-blue py-2 px-7 font-display text-white"
              >
                <Image
                  src="/images/icons/awards.svg"
                  alt="award icon"
                  width={32}
                  height={32}
                  className="absolute right-0 top-0 w-7"
                />
                <h1 className="text-xl font-bold">Awards</h1>
                <p>Scholarship and winning project</p>
              </div>
            </Link>
          </div>
        </div>

        <div
          id="education"
          className="bg-fill pointer-events-none flex w-full items-center justify-center bg-white p-16 px-4"
        >
          <div className="flex h-full w-full flex-col items-center justify-around">
            <h1 className="pointer-events-none my-2 w-full text-start font-display text-4xl font-normal text-blk">
              Education
            </h1>
            <ol className="relative w-full border-l border-gray-200 font-display dark:border-gray-700">
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

        <div id="mentions" className="w-full bg-blu py-16 px-6 font-display">
          <h1 className="font-display text-4xl font-normal text-white">
            Mentions
          </h1>

          <Swiper
            rewind={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="mySwiper mt-3 overflow-hidden rounded-lg shadow-lg"
          >
            {news.map((anews) => (
              <SwiperSlide key={anews.id}>
                <div className="scroll-x-4 relative w-full flex-none bg-white ">
                  <a
                    target="_blank"
                    href={anews.link}
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="relative bg-slate-200 duration-150 group-hover:bg-slate-300">
                      <Image
                        src={`/images/mentions/${anews.keyword}.jpg`}
                        alt={`${anews.keyword}-mention`}
                        width={1080}
                        height={1080}
                        className="h-96 object-cover"
                      />
                      <div className="absolute bottom-0 h-12 w-full truncate bg-gradient-to-t from-white px-3 text-sm">
                        &nbsp;
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between py-3 px-3">
                      <h1 className="text-md text-sm font-normal text-blk">
                        <span className="font-semibold">
                          {anews.platform === "Instagram" ? "@" : ""}
                          {anews.account}
                        </span>{" "}
                        on {anews.platform}
                      </h1>
                      <Image
                        src={`/images/logo/${anews.platform}.svg`}
                        alt={`${anews.platform}-logo`}
                        width={1080}
                        height={1080}
                        className=" pointer-events-none h-8 w-8 rounded-full border-2"
                      />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const newsFilePath = path.join(process.cwd(), "src", "data", "news.json");
  const newsFileContents = fs.readFileSync(newsFilePath, "utf8");
  const newsData: Anews[] = JSON.parse(newsFileContents);

  const filteredNews = newsData.filter((anews) => {
    return anews.show === true;
  });

  const educationFilePath = path.join(
    process.cwd(),
    "src",
    "data",
    "educations.json"
  );
  const educationFileContents = fs.readFileSync(educationFilePath, "utf8");
  const educationData: Education[] = JSON.parse(educationFileContents);

  const showcaseFilePath = path.join(
    process.cwd(),
    "src",
    "data",
    "showcase.json"
  );
  const showcaseFileContents = fs.readFileSync(showcaseFilePath, "utf8");
  const showcaseData: Showcase[] = JSON.parse(showcaseFileContents);

  return {
    props: {
      news: filteredNews,
      educations: educationData,
      showcases: showcaseData,
    },
  };
};

{
  /* <div id="apple-scrolling" className="overflow-x-auto">
            <div
              className="scrolling-touch flex snap-x snap-mandatory space-x-3 px-4 pb-8"
              style={{ overflowX: "scroll", scrollbarWidth: "none" }}
            >
              {news.map((anews) => (
                <div
                  key={anews.id}
                  className="scroll-x-4 relative w-[88vw] flex-none snap-center overflow-clip rounded-lg bg-white shadow-xl"
                >
                  <a
                    target="_blank"
                    href={anews.link}
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="relative bg-slate-200 duration-150 group-hover:bg-slate-300">
                      <Image
                        src={`/images/mentions/${anews.keyword}.jpg`}
                        alt={`${anews.keyword}-mention`}
                        width={1080}
                        height={1080}
                        className="h-72 object-cover"
                      />
                      <div className="absolute bottom-0 h-12 w-full truncate bg-gradient-to-t from-white px-3 text-sm">
                        &nbsp;
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between py-3 px-3">
                      <h1 className="text-md text-sm font-normal text-blk">
                        <span className="font-semibold">
                          {anews.platform === "Instagram" ? "@" : ""}
                          {anews.account}
                        </span>{" "}
                        on {anews.platform}
                      </h1>
                      <Image
                        src={`/images/logo/${anews.platform}.svg`}
                        alt={`${anews.platform}-logo`}
                        width={1080}
                        height={1080}
                        className=" pointer-events-none h-8 w-8 rounded-full border-2"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div> */
}
{
  /* <div id="showcase" className="overflow-x-auto">
            <div
              className="scrolling-touch flex space-x-3 px-4"
              style={{
                overflowX: "scroll",
                scrollbarWidth: "none",
                cursor: isDragging ? "grabbing" : "grab",
              }}
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {showcases.map((showcase) => (
                <div
                  key={showcase.id}
                  className="scroll-x-4 relative w-48 flex-none overflow-clip rounded-xl border-2 border-gray-800 bg-white"
                >
                  <div className="relative duration-150 group-hover:bg-slate-300">
                    <Image
                      src={`/images/index/${showcase.filename}.jpg`}
                      alt={`${showcase.filename}-mention`}
                      width={1080}
                      height={1080}
                      className="pointer-events-none object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div> */
}
