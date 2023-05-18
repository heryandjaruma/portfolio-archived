import { useRouter } from "next/router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import Project from "@/interface/project";
import Image from "next/image";
import ShowIf from "../layout/ShowIf";
import Head from "next/head";
import { motion } from "framer-motion";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        if (response.status === 404) {
          setError(true);
          return;
        }
        const data = await response.json();
        setProject(data);
        setIsLoading(false); // Set loading state to false after fetching the award
      } catch (error) {
        console.error("Error fetching award:", error);
        setIsLoading(false); // Set loading state to false in case of an error
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (error) {
    // Redirect to error page or display an error message
    // You can replace the router.push() line with your desired logic
    router.push("/error");
    return null;
  }

  if (!project) {
    return (
      <div>
        <Head>
          <title>Ryan&apos;s Portfolio</title>
        </Head>
        <Header />
        <LoadingPage />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{project.propertitle} - Ryan&apos;s Portfolio</title>
      </Head>
      <Header />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div
          className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-blue font-display`}
        >
          <div className="mt-16" id="contents">
            <div
              id="project-title"
              className="flex flex-col bg-white px-4 py-3 backdrop-blur-lg backdrop-filter"
            >
              <h1 className="w-fit rounded-full bg-turq py-1 px-2 text-xs font-semibold capitalize text-white">
                {project.type}
              </h1>

              <div className="flex w-full flex-row items-center justify-start space-x-4 pt-3">
                <ShowIf isExist={project.logo}>
                  <Image
                    src={`/images/logo/${project.tag}.svg`}
                    alt={`${project.tag}-logo`}
                    className="pointer-events-none w-10"
                    width={64}
                    height={64}
                  />
                </ShowIf>

                {project.logotext ? (
                  <span>
                    <Image
                      src={`/images/logo/${project.tag}_logotext.svg`}
                      alt={`${project.tag}-logo-text`}
                      className="pointer-events-none w-36"
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
            </div>

            <div
              id="project-problem"
              className="grid w-full grid-cols-1 place-items-center px-4 py-14 text-white md:grid-cols-2"
            >
              <div className="col-span-1 row-span-1 md:order-last md:w-5/6">
                <h1 className="w-full text-start text-3xl font-medium lg:text-4xl">
                  Background
                </h1>

                <div className="text-left">{project.description?.problem}</div>
              </div>

              <div className="pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.description.problemimage ? (
                    <Image
                      src={`/images/projects/${project.tag}_cover.jpg`}
                      alt={`${project.tag}-cover`}
                      width={960}
                      height={960}
                      className="pointer-events-none w-full rounded-lg shadow-md md:max-h-screen"
                    />
                  ) : (
                    <Image
                      src={`/images/doodles/problem_doodle.svg`}
                      alt={`problem-doodle`}
                      width={960}
                      height={960}
                      className="pointer-events-none mt-8 w-full max-w-sm rounded-lg md:max-w-md"
                    />
                  )}
                </motion.div>
              </div>
            </div>

            <ShowIf isExist={project.description?.solution}>
              <div
                id="project-solution"
                className="grid grid-cols-1 place-items-center px-4 pb-4 text-white md:grid-cols-2"
              >
                <div className="col-span-1 row-span-1 md:order-first md:w-5/6 md:text-end">
                  <h1 className="w-full text-3xl font-medium lg:text-4xl">
                    Solution
                  </h1>

                  <div className="">{project.description?.solution}</div>

                  <ShowIf isExist={project.description?.topiclink}>
                    <p className="mt-6 italic">
                      To Learn more about this topic, refer to{" "}
                      <a
                        target="_blank"
                        href={project.description.topiclink}
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        this link
                      </a>
                    </p>
                  </ShowIf>
                </div>

                <div className="pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {project.description.solutionimage ? (
                      <Image
                        src={`/images/projects/${project.tag}_solution.jpg`}
                        alt={`${project.tag}-solution`}
                        width={960}
                        height={960}
                        className="pointer-events-none w-full rounded-lg shadow-md md:max-h-screen"
                      />
                    ) : (
                      <Image
                        src={`/images/doodles/solution_doodle.svg`}
                        alt={`solution-doodle`}
                        width={960}
                        height={960}
                        className="pointer-events-none mt-8 w-full max-w-sm rounded-lg md:max-w-md"
                      />
                    )}
                  </motion.div>
                </div>
              </div>
            </ShowIf>

            <ShowIf isExist={project.result}>
              <div className="my-16 px-4 text-center text-2xl italic text-white">
                <a
                  className="font-display underline"
                  target="_blank"
                  href={project.result?.link}
                  rel="noopener noreferrer"
                >
                  <p className="">
                    See the {project.result?.type} on{" "}
                    {project.result?.properplatform}
                  </p>
                </a>
              </div>
            </ShowIf>

            <div
              id="project-techstack"
              className="flex items-center justify-center bg-blu px-4 py-14 text-white"
            >
              <div className="w-full md:max-w-xl">
                <h1 className="mb-8 text-2xl font-medium md:text-center md:text-4xl">
                  Techstack
                </h1>
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
                            className="pointer-events-none h-12 w-12 object-contain"
                          />
                          <h1 className="">{tech}</h1>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <ShowIf isExist={project.awards}>
              <div
                id="project-awards"
                className="grid grid-cols-1 place-items-center bg-lightblu px-4 py-14 text-white md:grid-cols-2"
              >
                <div className="col-span-1 row-span-1 w-full md:order-last md:w-5/6">
                  <h1 className="text-2xl font-medium">Awards</h1>

                  <p className="mb-4">
                    <span className="capitalize">{project.title}</span> has
                    received{" "}
                    {project.awards && Object.entries(project.awards).length}{" "}
                    {project.awards &&
                    Object.keys(project.awards).length > 1 ? (
                      <span>awards</span>
                    ) : (
                      <span>award</span>
                    )}
                  </p>

                  <div id="awards-list" className="my-6">
                    <ul className="space-y-2">
                      {project.awards &&
                        Object.entries(project.awards).map(([key, award]) => (
                          <li key={key}>
                            <h1 className="font-medium">{award.name}</h1>
                            <h1 className="font-light">
                              by {award.association}
                            </h1>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                <div className="col-span-1 row-span-1 w-full md:max-w-xl">
                  <Image
                    src={`/images/projects/${project.tag}_awards.jpg`}
                    alt={`${project.title}-cover`}
                    width={`720`}
                    height={720}
                    className="pointer-events-none mb-10 rounded-lg shadow-md"
                  />
                </div>
              </div>
            </ShowIf>

            <ShowIf isExist={project.news}>
              <div
                id="project-news"
                className="grid grid-cols-1 place-items-center bg-blue px-4 py-14 text-white md:grid-cols-2"
              >
                <h1 className="mb-4 w-full text-left text-2xl font-medium md:mb-0 md:w-5/6 md:text-right md:text-4xl">
                  News
                </h1>

                <div id="news-list" className="w-full md:w-5/6">
                  {project.news?.link && (
                    <a
                      target="_blank"
                      href={project.news.link}
                      rel="noopener noreferrer"
                      className="text-center font-light underline"
                    >
                      {project.news.title}
                    </a>
                  )}
                </div>
              </div>
            </ShowIf>

            <ShowIf isExist={project.contributor}>
              <div
                id="project-contributor"
                className="grid grid-cols-1 place-items-center bg-indigo-500 px-4 py-14 text-white md:grid-cols-2"
              >
                <h1 className="mb-4 w-full text-left text-2xl font-medium md:mb-0 md:w-5/6 md:text-right md:text-4xl">
                  Contributor
                </h1>
                <ul className="w-full space-y-2 md:w-5/6">
                  {project.contributor &&
                    Object.entries(project.contributor).map(
                      ([key, contributor]) => (
                        <li key={key} className="md:text-lg">
                          {contributor?.name === "Heryan Djaruma" ? (
                            <>
                              <span className="underline">
                                {contributor.name}
                              </span>
                              <span className="font-extralight">
                                , {contributor?.role}
                              </span>
                            </>
                          ) : (
                            <>
                              {contributor?.name}
                              <span className="font-extralight">
                                , {contributor?.role}
                              </span>
                            </>
                          )}
                        </li>
                      )
                    )}
                </ul>
              </div>
            </ShowIf>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
