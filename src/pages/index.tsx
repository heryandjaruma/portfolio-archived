import Image from "next/image";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";

import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { scrollToDiv } from "@/utils/scrollUtils";
import { handleButtonClick } from "@/utils/buttonUtils";
import { useRouter } from "next/router";

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
  properplatform: string;
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

  const router = useRouter();

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
        className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-white font-display`}
      >
        <div
          id="welcome"
          className="mt-16 flex w-full flex-col justify-center font-display text-white"
        >
          <div className="px-4 py-36">
            <p className="font-light text-gray-500 md:text-xl lg:text-2xl">
              Hello, I&apos;m
            </p>
            <div className="text-gray-500"></div>
            <h1 className="text-left text-5xl font-bold text-blue md:text-6xl lg:text-6xl">
              Heryan Djaruma
            </h1>
            <p className="my-1 text-left font-bold text-gray-500 md:text-lg lg:text-xl">
              Find out more about me in this site
            </p>
            <div className="mt-10 flex flex-row">
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
          className="justify-cente flex w-full items-center px-4 py-16"
        >
          <div className="w-1/2">
            From coding projects and teaching experiences to scholarships and
            notable awards, they have all been an integral part of my works.
            Click on any item to explore further and delve into the details.
          </div>
          <div className="flex h-full w-full flex-col justify-around py-2">
            <h1 className="font-display text-4xl font-normal text-primary">
              Works
            </h1>
            <div className="grid w-full grid-cols-1 gap-4 py-2 md:grid-cols-3">
              <button
                onClick={() => handleButtonClick(router, "/projects")}
                className="relative col-span-1 row-span-1 h-32 w-full rounded-full bg-blue py-2 px-7 text-start font-display text-white shadow-xl duration-150 md:h-40 lg:hover:scale-95"
              >
                <Image
                  src="/images/icons/code.svg"
                  alt="code_icon"
                  width={32}
                  height={32}
                  className="pointer-events-none absolute right-0 top-0 w-16"
                  priority
                />
                <h1 className="text-2xl font-bold md:text-3xl">Projects</h1>
                <p>Technical projects</p>
              </button>
              <button
                onClick={() => handleButtonClick(router, "/experiences")}
                className="relative col-span-1 row-span-1 h-32 w-full rounded-full bg-blue py-2 px-7 text-start font-display text-white shadow-xl duration-150 md:h-40 lg:hover:scale-95"
              >
                <Image
                  src="/images/icons/cap.svg"
                  alt="code_icon"
                  width={32}
                  height={32}
                  className="pointer-events-none absolute right-0 top-0 w-16"
                  priority
                />
                <h1 className="text-2xl font-bold md:text-3xl">Experiences</h1>
                <p>Laboratory assistant and teaching</p>
              </button>
              <button
                onClick={() => handleButtonClick(router, "/awards")}
                className="relative col-span-1 row-span-1 h-32 w-full rounded-full bg-blue py-2 px-7 text-start font-display text-white shadow-xl duration-150 md:h-40 lg:hover:scale-95"
              >
                <Image
                  src="/images/icons/awards.svg"
                  alt="award icon"
                  width={32}
                  height={32}
                  className="pointer-events-none absolute right-0 top-0 w-12"
                  priority
                />
                <h1 className="text-2xl font-bold md:text-3xl">Awards</h1>
                <p>Scholarship and winning project</p>
              </button>
            </div>
          </div>
        </div>

        <div
          id="education"
          className="bg-fill pointer-events-none flex w-96 items-center justify-center p-16 px-4"
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
            className="mySwiper mt-3 max-w-md overflow-hidden rounded-lg shadow-lg"
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
                      <div className="absolute bottom-0 h-1/2 w-full truncate bg-gradient-to-t from-white px-3 text-sm">
                        &nbsp;
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between py-3 px-3">
                      <h1 className="text-md text-sm font-normal text-blk">
                        <span className="font-semibold">
                          {anews.platform === "instagram" ? "@" : ""}
                          {anews.account}
                        </span>{" "}
                        on {anews.properplatform}
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
