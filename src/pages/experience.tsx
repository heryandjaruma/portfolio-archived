import getWindowSize from "@/utils/windowSize";
import { useState } from "react";
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

import { Autoplay, Pagination, Navigation } from "swiper";

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
          className="flex h-[600px] w-full flex-col justify-center bg-turq px-4 font-display font-semibold text-white"
        >
          <div className="mb-16">
            <Image
              src="/images/icons/ic_exp.svg"
              alt="code-icon"
              width={160}
              height={160}
              className="h-16 w-16"
            />
            <h1 className="py-3 text-5xl font-extrabold">Experience</h1>
            <p className="text-xl font-normal text-gray-200"></p>
            <ul className="space-y-2">
              {experiences.map((experience) => (
                <li key={experience.id}>
                  <ListArrow title={experience.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="contents" className="w-full">
          <ul className="">
            {experiences.map((experience) => (
              <li key={experience.id} className="">
                <ShowcaseItem id={experience.title}>
                  <div
                    id="experience-intro"
                    className="sticky top-14 z-40 flex w-full flex-col items-center justify-center bg-darkprimary py-2 px-4"
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
                    className="flex w-full flex-col bg-blue px-4 py-8 text-white"
                  >
                    {/* <Image
                      src="/images/icons/direction.svg"
                      width={64}
                      height={64}
                      alt="direction-icon"
                      className="h-5 w-5"
                    /> */}
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
                                <li key={item}>• {detail}</li>
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
              </li>
            ))}
          </ul>
        </div>
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
