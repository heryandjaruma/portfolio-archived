import Image from "next/image";
import Link from "next/link";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";

interface Props {
  news: Anews[];
}

interface Anews {
  id: number;
  show: boolean;
  title: string;
  description: string;
  platform: string;
  link: string;
}

export default function Home({ news }: Props) {
  return (
    <>
      <Header />
      <div
        className={`mx-auto flex max-w-screen-2xl flex-col items-center sm:px-0`}
      >
        <div className="mt-16 w-full bg-slate-100">
          <div
            id="welcome"
            className="flex h-[500px] w-full flex-col justify-center px-8 font-display text-white"
          >
            <h1 className="text-left font-display text-5xl font-bold text-blue">
              Heryan Djaruma
            </h1>
            <p className="my-2 text-left text-blk">
              Find out more about me in this site
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
          className="flex h-[500px] w-full items-center justify-center bg-turq py-6 px-4"
        >
          <div className="flex h-full flex-col justify-around">
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
                <p>Award winning and technical projects</p>
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
                <p>Laboratory Assistant and teaching</p>
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
                <p>Content creating and rhythms</p>
              </div>
            </Link>
          </div>
        </div>

        <div
          id="education"
          className="bg-fill flex h-[550px] w-full items-center justify-center bg-slate-50 py-6 px-4"
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
        <div id="mentions" className="w-full py-6">
          <h1 className="mb-4 px-4 text-2xl text-blk">Mentions</h1>
          <div className="overflow-x-auto">
            <div
              className="scrolling-touch flex snap-x snap-mandatory space-x-3 px-4 pb-6"
              style={{ overflowX: "scroll", scrollbarWidth: "none" }}
            >
              {news.map((anews) => (
                <div
                  key={anews.id}
                  className="scroll-x-4 h-72 w-[88vw] flex-none snap-center rounded-lg bg-slate-200 shadow-lg"
                >
                  <Link href="/" className="">
                    <h1 className="text-md font-semibold">
                      {anews.title} on {anews.platform}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
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
  const filePath = path.join(process.cwd(), "src", "data", "news.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data: Anews[] = JSON.parse(fileContents);

  const filteredNews = data.filter((news) => {
    return news.show === true;
  });

  return {
    props: {
      news: filteredNews,
    },
  };
};
