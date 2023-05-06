import { useState } from "react";
import Header from "./layout/Header";
import getWindowSize from "@/utils/windowSize";
import Image from "next/image";
import ListArrow from "./components/ListArrow";
import ShowcaseItem from "./layout/ShowcaseItem";
import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";
import Link from "next/link";
import ShowIf from "./layout/ShowIf";
import Footer from "./layout/Footer";

interface Props {
  projects: Project[];
}

interface Project {
  show: boolean;
  id: number;
  logo: boolean;
  logotext: boolean;
  title: string;
  description: {
    problem: string;
    solution: string;
    problemimage: boolean;
    solutionimage: boolean;
    topiclink: string;
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
        <div
          id="welcome"
          className="flex h-[600px] w-full flex-col justify-center bg-blue px-4 font-display font-semibold text-white"
        >
          <div className="mb-16">
            <Image
              src="/images/icons/ic_code.svg"
              alt="code-icon"
              width={160}
              height={160}
              className="h-16 w-16"
            />
            <h1 className="py-3 text-5xl font-extrabold">Projects</h1>
            <p className="text-xl font-normal text-gray-200">
              I&apos;ve worked on
            </p>
            <Link href="/" className="mt-10 text-base font-normal text-blk">
              Gallery view
            </Link>
          </div>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.id}>
                <ListArrow title={project.title} />
              </li>
            ))}
          </ul>
        </div>

        <div id="contents" className="w-full">
          <ul className="">
            {projects.map((project) => (
              <li key={project.id} className="">
                <ShowcaseItem id={project.title}>
                  <div
                    id="project-title"
                    className="sticky top-14 z-40 flex w-full flex-row items-center justify-center space-x-4 rounded-b-lg bg-white/70 py-3  backdrop-blur-lg backdrop-filter"
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
                    {project.logotext ? (
                      <span>
                        <Image
                          src={`/images/logo/${project.title}_logotext.svg`}
                          alt={`${project.title}-logo-text`}
                          className="h-8 w-40"
                          width={1000}
                          height={1000}
                        />
                      </span>
                    ) : (
                      <span>
                        <h1 className="text-2xl font-bold capitalize text-blue">
                          {project.title}
                        </h1>
                      </span>
                    )}
                  </div>

                  <div id="project-problem" className="py-14 px-4 text-blue">
                    <ShowIf isExist={project.description.problemimage}>
                      <Image
                        src={`/images/projects/${project.title}_cover.jpg`}
                        alt={`${project.title}-cover`}
                        width={960}
                        height={960}
                        className="mb-10 rounded-lg shadow-md"
                      />
                    </ShowIf>
                    <h1 className="mb-4 text-2xl font-medium">Background</h1>
                    <div
                      className="text-left text-blk"
                      dangerouslySetInnerHTML={{
                        __html: project.description.problem,
                      }}
                    ></div>
                  </div>

                  <ShowIf isExist={project.description.solution}>
                    <div
                      id="project-solution"
                      className="bg-blue py-20 px-4 text-white"
                    >
                      <ShowIf isExist={project.description.solutionimage}>
                        <Image
                          src={`/images/projects/${project.title}_solution.jpg`}
                          alt={`${project.title}-cover`}
                          width={`720`}
                          height={720}
                          className="mb-10 rounded-lg shadow-md"
                        />
                      </ShowIf>
                      <h1 className="mb-4 text-2xl font-medium">Solution</h1>
                      <div
                        className="text-left"
                        dangerouslySetInnerHTML={{
                          __html: project.description.solution,
                        }}
                      ></div>
                      <ShowIf isExist={project.description.topiclink}>
                        <p className="mt-6">
                          To Learn more about this topic, refer to{" "}
                          {/* <Link
                          href={project.description.topiclink}
                          className="underline"
                        >
                          this link
                        </Link> */}
                          {"."}
                        </p>
                      </ShowIf>
                    </div>
                  </ShowIf>
                  {/* {project.video ? <YouTube videoId={project.video} /> : ""} */}

                  <div
                    id="project-techstack"
                    className="bg-blu px-4 py-14 text-white"
                  >
                    <h1 className="mb-8 text-2xl font-medium">Techstack</h1>
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
                        <span className="capitalize">{project.title}</span> has
                        received{" "}
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
                  <ShowIf isExist={project.contributor}>
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
                                    {key}
                                    <span className="font-extralight">
                                      , {value}
                                    </span>
                                  </>
                                )}
                              </li>
                            )
                          )}
                      </ul>
                    </div>
                  </ShowIf>
                </ShowcaseItem>
                <hr className="mx-4 mt-24 h-px border-0 bg-gray-300" />
              </li>
            ))}
          </ul>
        </div>
        <div
          id="nex-page"
          className="flex h-20 w-full items-center justify-end bg-turq p-4 text-2xl font-medium"
        >
          <p className="text-white">View next page, </p>
          <Link
            href="/experience"
            className="ml-2 font-semibold text-primary underline"
          >
            Experience ➡️
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "src", "data", "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data: Project[] = JSON.parse(fileContents);

  const filteredProjects = data.filter((project) => {
    return project.show === true;
  });

  return {
    props: {
      projects: filteredProjects,
    },
  };
};
