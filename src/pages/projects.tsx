import Header from "./layout/Header";
import Image from "next/image";
import Footer from "./layout/Footer";

import CodeIcon from "./components/CodeIcon";
import NextPage from "./components/NextPage";

import Project from "@/interface/project";
import { useEffect, useState } from "react";
import { handleButtonClick } from "@/utils/buttonUtils";
import { useRouter } from "next/router";
import LoadingPage from "./components/LoadingPage";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div
          className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-blue font-display`}
        >
          <div
            id="welcome"
            className="mt-16 flex h-[260px] w-full flex-col justify-center bg-blue px-4 font-display font-semibold text-white md:px-8"
          >
            <div className="mb-10">
              <CodeIcon />
              <h1 className="py-3 text-5xl font-extrabold sm:text-6xl md:text-7xl">
                Projects
              </h1>
              <p className="mb-2 text-xl font-normal text-gray-200">
                I&apos;ve worked on
              </p>
              <p className="mb-2 font-light text-gray-200">
                Click on any card to view the details
              </p>
            </div>
          </div>

          <div
            id="contents"
            className="grid w-full grid-cols-1 place-items-center gap-4 bg-blue px-4 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() =>
                  handleButtonClick(router, `/projects/${project.id}`)
                }
                className="relative col-span-1 row-span-1 aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 shadow-xl duration-150 lg:hover:scale-95 lg:hover:bg-slate-200"
              >
                <div
                  id="title"
                  className="h-full  w-full p-6 text-2xl font-semibold text-blk shadow-xl"
                >
                  <h1 className="mb-2 w-fit rounded-full bg-turq py-1 px-2 text-xs capitalize text-white">
                    {project.type}
                  </h1>
                  {project.logotext ? (
                    <Image
                      src={`/images/logo/${project.tag}_logotext.svg`}
                      width={300}
                      height={300}
                      alt="logo image"
                      className="pointer-events-none w-60"
                      priority
                    />
                  ) : (
                    <div className="text-4xl font-semibold capitalize text-blue">
                      {project.title}
                    </div>
                  )}
                  <div
                    id="brief"
                    className="mt-2 w-1/2 text-sm font-normal capitalize text-gray-500"
                  >
                    {project.description.brief}
                  </div>
                </div>

                <div id="logo" className="absolute -bottom-9 -right-6">
                  {project.logo ? (
                    <Image
                      src={`/images/logo/${project.tag}.svg`}
                      width={300}
                      height={300}
                      alt="logo image"
                      className="pointer-events-none w-44 p-4"
                      priority
                    />
                  ) : (
                    <Image
                      src={`/images/logo/${project.type}.svg`}
                      width={300}
                      height={300}
                      alt="logo image"
                      className="pointer-events-none w-44 p-4"
                      priority
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <NextPage next="experiences" />
        </div>
      )}
      <Footer />
    </>
  );
}
