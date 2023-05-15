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
// import { scrollToDiv } from "@/utils/scrollUtils";
import { handleButtonClick } from "@/utils/buttonUtils";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

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

  const handleScrollDown = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Ryan&apos;s Portfolio</title>
      </Head>
      <Header />
      <div
        className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-white font-display`}
      >
        <div
          id="welcome"
          className="mt-16 flex w-full flex-col justify-center pt-14 font-display text-white"
        >
          <div className="flex w-full flex-col items-center justify-center px-4 pb-8">
            <h1 className="text-center text-5xl font-bold text-blk md:text-5xl lg:text-6xl">
              Hello, I&apos;m
            </h1>

            <h1 className="text-center text-5xl font-bold text-blue md:text-5xl lg:text-6xl">
              Heryan Djaruma
            </h1>

            <p className="py-4 text-center font-normal text-gray-600 md:text-lg lg:text-xl">
              A <span className="text-blue">Computer Science student</span> and
              an <span className="text-blue">enthusiastic learner</span> with a
              series of professional works.
            </p>

            <p className="w-full py-4 text-center text-sm font-light text-gray-600 md:max-w-2xl lg:text-base">
              Some of my notable accomplishments include being awarded a
              scholarship, serving as a laboratory assistant, and receiving
              recognition for my project. Moreover, my diverse range of
              interests spans across leadership, graphic editing, and music.
            </p>

            <div className="mt-6 flex flex-row gap-x-6">
              <button
                className="rounded-full border-2 border-blk py-1 px-9 text-blk md:text-xl"
                onClick={() => handleScrollDown("my-works")}
              >
                Works
              </button>
              <button
                className="flex flex-row items-center justify-center rounded-full px-5 py-1 font-display text-blk md:text-xl"
                onClick={() => handleScrollDown("contact")}
              >
                <span className="font-medium underline">Contact</span> &nbsp;
                <Image
                  src="/images/icons/arrow_tr.svg"
                  alt="arrow_tr"
                  className="w-3"
                  width={100}
                  height={100}
                />
              </button>
            </div>
          </div>

          <div className="mt-8 flex w-full items-center justify-center p-4">
            <Image
              src={`/images/index/welcome.png`}
              width={1920}
              height={1080}
              alt="headline-image"
              className="pointer-events-none w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
              priority
            />
          </div>
        </div>

        <div
          id="my-works"
          className="grid w-full grid-cols-1 place-items-center px-4 py-16 text-center"
        >
          <h1 className="font-display text-4xl font-semibold text-primary lg:text-5xl">
            Works
          </h1>

          <div className="pt-4 pb-8 text-gray-700 md:max-w-2xl md:text-lg">
            From coding projects and teaching experiences to scholarship and
            notable award, they have all been an integral part of my works.
            Click on any item below to explore further and delve into the
            details.
          </div>

          <div className="grid w-full grid-cols-1 place-items-center gap-4 py-2 md:grid-cols-3 md:px-16">
            <button
              onClick={() => handleButtonClick(router, "/projects")}
              className="relative col-span-1 row-span-1 w-full max-w-md rounded-full bg-blue py-8 px-10 text-start font-display text-white shadow-lg duration-150 sm:py-9 md:py-11 lg:hover:scale-95"
            >
              <Image
                src="/images/icons/code.svg"
                alt="code_icon"
                width={32}
                height={32}
                className="pointer-events-none absolute right-4 -top-2 h-16 w-16 rounded-lg bg-turq p-2 md:-right-1"
                priority
              />
              <h1 className="text-xl font-bold lg:text-2xl">Projects</h1>
            </button>

            <button
              onClick={() => handleButtonClick(router, "/experiences")}
              className="relative col-span-1 row-span-1 w-full max-w-md rounded-full bg-blue py-8 px-10 text-start font-display text-white shadow-lg duration-150 sm:py-9 md:py-11 lg:hover:scale-95"
            >
              <Image
                src="/images/icons/cap.svg"
                alt="code_icon"
                width={32}
                height={32}
                className="pointer-events-none absolute right-4 -top-2 h-16 w-16 rounded-lg bg-turq p-2 md:-right-1"
                priority
              />
              <h1 className="text-xl font-bold lg:text-2xl">Experiences</h1>
            </button>

            <button
              onClick={() => handleButtonClick(router, "/awards")}
              className="relative col-span-1 row-span-1 w-full max-w-md rounded-full bg-blue py-8 px-10 text-start font-display text-white shadow-lg duration-150 sm:py-9 md:py-11 lg:hover:scale-95"
            >
              <Image
                src="/images/icons/awards.svg"
                alt="award icon"
                width={32}
                height={32}
                className="pointer-events-none absolute right-4 -top-2 h-16 w-16 rounded-lg bg-turq p-2 md:-right-1"
                priority
              />
              <h1 className="text-xl font-bold lg:text-2xl">Awards</h1>
            </button>
          </div>
        </div>

        {/* <hr className="my-8 h-px w-11/12 border-0 bg-gray-400" /> */}

        <div
          id="education"
          className="bg-fill grid h-full w-full grid-cols-1 place-items-center p-16 px-4 md:grid-cols-2"
        >
          <div className="col-span-1 row-span-1 pb-10 text-center md:w-2/3 md:text-end">
            <h1 className="font-display text-4xl font-semibold text-primary lg:text-5xl">
              Education
            </h1>

            <p className="py-4 text-gray-700 md:text-lg">
              My education includes active participation in various
              organizations and notable experiences. To learn more, visit the{" "}
              <Link className="text-primary underline" href="/experiences">
                Experiences
              </Link>{" "}
              and{" "}
              <Link className="text-primary underline" href="/awards">
                Awards
              </Link>{" "}
              page.
            </p>
          </div>

          <div className="relative col-span-1 row-span-1 border-l border-gray-200 font-display dark:border-gray-700 md:w-full">
            <div className="mb-10 ml-4">
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
            </div>

            <div className="mb-10 ml-4">
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
            </div>

            <div className="ml-4">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-blk bg-blk"></div>

              <time className="mb-1 text-sm font-normal italic leading-none text-gray-400">
                High School, 2021
              </time>

              <h3 className="text-lg font-semibold text-blue">
                SMAK 1 BPK Penabur, Bandung
              </h3>

              <p className="text-md font-normal text-gray-500">
                Natural Science
              </p>

              <p className="text-sm font-extralight">
                Student Council President; Commencement Speaker
              </p>
            </div>
          </div>
        </div>

        {/* <hr className="my-8 h-px w-11/12 border-0 bg-gray-400" /> */}

        <div
          id="mentions"
          className="grid w-full grid-cols-1 place-items-center px-6 py-16 text-center font-display lg:grid-cols-2"
        >
          <div className=" order-0 col-span-1 row-span-1 lg:order-1 lg:w-2/3 lg:text-start">
            <h1 className="font-display text-4xl font-semibold text-primary lg:text-5xl">
              Mentions
            </h1>

            <p className="py-4 text-gray-700 md:text-lg">
              Check out some of the professional mentions of my work.
            </p>
          </div>

          <div className="col-span-1 row-span-1">
            <Swiper
              rewind={true}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="mySwiper mt-3 w-full max-w-sm overflow-hidden rounded-lg shadow-xl md:max-w-lg"
            >
              {news.map((anews) => (
                <SwiperSlide key={anews.id}>
                  <div className="scroll-x-4 relative w-full flex-none bg-blue ">
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
                          priority
                        />

                        <div className="absolute bottom-0 h-1/2 w-full truncate bg-gradient-to-t from-white px-3 text-sm">
                          &nbsp;
                        </div>
                      </div>

                      <div className="flex flex-row items-center justify-between py-3 px-3">
                        <h1 className="text-md text-sm font-normal text-white">
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
                          className=" pointer-events-none h-8 w-8 rounded-full border-2 bg-white"
                          priority
                        />
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
