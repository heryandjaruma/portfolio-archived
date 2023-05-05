import { useState } from "react";
import Header from "./layout/Header";
import getWindowSize from "@/utils/windowSize";
import Image from "next/image";
import ListArrow from "./components/ListArrow";
import ShowcaseItem from "./layout/ShowcaseItem";
import fs, { link } from "fs";
import path from "path";
import { GetStaticProps } from "next";
import YouTube from "react-youtube";
import Link from "next/link";
import ShowIf from "./layout/ShowIf";

interface Props {
  projects: Project[];
}

interface Project {
  id: number;
  logo: boolean;
  title: string;
  description: {
    problem: string;
    solution: string;
  };
  techstack: string[];
  awards: {
    [key: string]: string;
  };
  video: string;
  news: {
    title: string;
    link: string;
  };
  contributor: {
    [key: string]: string;
  };
}

export default function Projects({ projects }: Props) {
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
        <div className="w-full bg-[url('/images/particles/bg002.png')] bg-cover">
          <div
            id="welcome"
            className="flex h-[600px] w-full flex-col justify-center px-4 font-display font-semibold text-white"
          >
            <p className="mb-9 text-base font-light">List of Contents</p>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.id}>
                  <ListArrow title={project.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="contents" className="w-full">
          <ul className="">
            {projects.map((project) => (
              <li key={project.id}>
                <ShowcaseItem id={project.title}>
                  <div
                    id="project-title"
                    className="sticky top-11 z-40 flex w-full flex-row items-center justify-center space-x-4 rounded-b-lg bg-white/70 py-3  backdrop-blur-lg backdrop-filter"
                  >
                    <ShowIf isExist={project.logo}>
                      <Image
                        src={`/images/logo/${project.title}.svg`}
                        alt={`${project.title}-logo`}
                        className="h-10 w-10"
                        width={64}
                        height={64}
                      />
                    </ShowIf>
                    <h1 className="text-2xl font-bold capitalize text-blue">
                      {project.title}
                    </h1>
                  </div>

                  {/* <hr className="mx-4 h-px border-0 bg-gray-300" /> */}

                  <div id="project-problem" className="py-14 px-4 text-blue">
                    <Image
                      src={`/images/projects/${project.title}_cover.jpg`}
                      alt={`${project.title}-cover`}
                      width={960}
                      height={960}
                      className="mb-10 rounded-lg shadow-md"
                    />
                    <h1 className="mb-4 text-2xl font-medium">Background</h1>
                    <div
                      className="text-left text-blk"
                      dangerouslySetInnerHTML={{
                        __html: project.description.problem,
                      }}
                    ></div>
                  </div>

                  <div
                    id="project-solution"
                    className="bg-blue py-20 px-4 text-white"
                  >
                    <Image
                      src={`/images/projects/${project.title}_solution.jpg`}
                      alt={`${project.title}-cover`}
                      width={`720`}
                      height={720}
                      className="mb-10 rounded-lg shadow-md"
                    />
                    <h1 className="mb-4 text-2xl font-medium">
                      Problem Solution
                    </h1>
                    <div
                      className="text-left"
                      dangerouslySetInnerHTML={{
                        __html: project.description.solution,
                      }}
                    ></div>
                  </div>
                  {/* {project.video ? <YouTube videoId={project.video} /> : ""} */}

                  <div
                    id="project-techstack"
                    className="bg-blu px-4 py-14 text-white"
                  >
                    <h1 className="mb-4 text-2xl font-medium">Techstack</h1>
                    {project.techstack && Array.isArray(project.techstack) && (
                      <ul className="flex w-full flex-row items-center justify-evenly space-x-10">
                        {project.techstack.map((tech, item) => (
                          <li key={item}>
                            <div className="flex flex-col items-center justify-center">
                              <Image
                                src={`/images/logo/${tech}.svg`}
                                alt={`${tech}-logo`}
                                width={100}
                                height={100}
                                className="h-12 w-12 object-contain"
                              />
                              <h1 className="capitalize">{tech}</h1>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* <p className="text-left">{project.description.solution}</p> */}
                  </div>

                  <ShowIf isExist={project.awards}>
                    <div
                      id="project-awards"
                      className="bg-lightblu px-4 py-14 text-white"
                    >
                      <h1 className="text-2xl font-medium">Awards</h1>
                      <p className="mb-4">
                        This project has received{" "}
                        {project.awards &&
                          Object.entries(project.awards).length}{" "}
                        {project.awards &&
                        Object.keys(project.awards).length > 1 ? (
                          <span>awards</span>
                        ) : (
                          <span>award</span>
                        )}
                      </p>
                      <Image
                        src={`/images/projects/${project.title}_awards.jpg`}
                        alt={`${project.title}-cover`}
                        width={`720`}
                        height={720}
                        className="mb-10 rounded-lg shadow-md"
                      />
                      <div id="awards-list" className="my-6">
                        <ul className="space-y-2">
                          {project.awards &&
                            Object.entries(project.awards).map(
                              ([key, value]) => (
                                <li key={key}>
                                  <h1 className="font-medium">{key}</h1>
                                  <h1 className="font-light">by {value}</h1>
                                </li>
                              )
                            )}
                        </ul>
                      </div>
                    </div>
                  </ShowIf>
                  <ShowIf isExist={project.news}>
                    <div
                      id="project-news"
                      className="bg-blue px-4 py-14 text-white"
                    >
                      <h1 className="text-2xl font-medium">News</h1>
                      {/* <div id="news-list" className="my-6">
                      {project.news && (
                        <div id="news-list" className="my-6">
                          {project.news.link && (
                            <a
                              className="text-center font-light underline"
                              href={project.news.link}
                            >
                              {project.news.title}
                            </a>
                          )}
                        </div>
                      )}
                    </div> */}
                    </div>
                  </ShowIf>
                  <div
                    id="project-contributor"
                    className="bg-indigo-500 px-4 py-14 text-white"
                  >
                    <h1 className="mb-4 text-2xl font-medium">Contributor</h1>
                    <ul className="space-y-2">
                      {project.contributor &&
                        Object.entries(project.contributor).map(
                          ([key, value]) => (
                            <li key={key}>
                              {key === "Heryan Djaruma" ? (
                                <>
                                  <Link href="/" className="underline">
                                    {key}
                                  </Link>
                                  <span className="font-extralight">
                                    , {value}
                                  </span>
                                </>
                              ) : (
                                <>
                                  {key},{" "}
                                  <span className="font-extralight">
                                    {value}
                                  </span>
                                </>
                              )}
                            </li>
                          )
                        )}
                    </ul>
                  </div>
                </ShowcaseItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "src", "data", "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data: Project[] = JSON.parse(fileContents);

  return {
    props: {
      projects: data,
    },
  };
};
