import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ListArrow from "./components/ListArrow";
import { GetStaticProps } from "next";
import path from "path";
import fs, { link } from "fs";
import Image from "next/image";
import ShowcaseItem from "./layout/ShowcaseItem";
import ShowIf from "./layout/ShowIf";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import CapIcon from "./components/CapIcon";
import NextPage from "./components/NextPage";

interface Props {
  experiences: Experience[];
}

interface Experience {
  id: number;
  show: boolean;
  title: string;
  period: string;
  association: {
    name: string;
    logo: boolean;
  };
  location: string;
  description: {
    brief: string;
    detail: string[];
  };
  image: number;
}

export default function Experience({ experiences }: Props) {
  return (
    <>
      <Header />
      <div
        className={`mx-auto flex max-w-screen-2xl flex-col items-center sm:px-0`}
      >
        <div
          id="welcome"
          className="mt-16 flex h-[560px] w-full flex-col justify-center bg-turq px-4 pt-10 font-display font-semibold text-white"
        >
          <div className="mb-10">
            <CapIcon />
            <h1 className="py-3 text-5xl font-extrabold">Experience</h1>
            <p className="text-xl font-normal text-gray-200">
              I&apos;ve been in
            </p>
          </div>
          <ul className="mb-16 space-y-2">
            {experiences.map((experience) => (
              <li key={experience.id}>
                <ListArrow title={experience.title} />
              </li>
            ))}
          </ul>
          <div className="w-full text-right">
            <Link
              href="/"
              className="rounded-full border-2 p-2 text-sm font-normal text-white"
            >
              See all on gallery view
            </Link>
          </div>
        </div>

        <h1
          id="highlight"
          className="w-full px-4 text-start text-2xl font-semibold text-gray-500"
        >
          Highlights
        </h1>

        <div id="contents" className="w-full">
          <ul className="">
            {experiences.map((experience) => (
              <div key={experience.id} className="">
                <ShowcaseItem id={experience.title}>
                  <div
                    id="experience-intro"
                    className="sticky top-16 z-40 mt-14 flex w-full flex-col items-center justify-center bg-darkprimary py-2 px-4"
                  >
                    <h1 className="w-full text-left text-2xl font-bold capitalize text-white">
                      {experience.title}
                    </h1>
                    <p className="w-full text-sm text-gray-300">
                      {experience.period}
                    </p>
                  </div>

                  <div
                    id="experience-location"
                    className="flex w-full flex-col bg-blue px-4 py-2 text-white"
                  >
                    <h1 className="text-start">
                      {experience.association.name}
                    </h1>
                    <span className="text-sm font-extralight">
                      {experience.location}
                    </span>
                  </div>

                  <div
                    id="experience-description"
                    className="bg-slate-100 px-4 py-8 text-start text-blk"
                  >
                    <h1 className="mb-4 text-lg font-semibold">Brief</h1>
                    <p>{experience.description.brief}</p>
                  </div>

                  <ShowIf isExist={experience.description.detail}>
                    <div
                      id="experience-details"
                      className="bg-primary px-4 py-8 text-start text-sm text-white"
                    >
                      <h1 className="mb-4 text-lg font-semibold">Detail</h1>
                      {experience.description.detail &&
                        Array.isArray(experience.description.detail) && (
                          <ul className="">
                            {experience.description.detail.map(
                              (detail, item) => (
                                <div key={item}>• {detail}</div>
                              )
                            )}
                          </ul>
                        )}
                    </div>
                  </ShowIf>
                  <ShowIf isExist={experience.image}>
                    <Swiper
                      pagination={{
                        dynamicBullets: true,
                      }}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      modules={[Pagination, Autoplay]}
                      className="h-72"
                    >
                      {Array.from({ length: experience.image }, (_, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={`/images/experiences/${experience.title}_${
                              index + 1
                            }.jpg`}
                            alt={`Image ${index}`}
                            width={1080}
                            height={1080}
                            className="h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </ShowIf>
                </ShowcaseItem>
              </div>
            ))}
          </ul>
        </div>
        <NextPage next="awards" />
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "src", "data", "experiences.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data: Experience[] = JSON.parse(fileContents);

  const filteredExperiences = data.filter((experience) => {
    return experience.show === true;
  });

  return {
    props: {
      experiences: filteredExperiences,
    },
  };
};
