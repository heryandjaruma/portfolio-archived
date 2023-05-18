import Experience from "@/interface/experience";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../layout/Header";
import LoadingPage from "../components/LoadingPage";
import Footer from "../layout/Footer";
import ShowIf from "../layout/ShowIf";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

export default function ExperienceDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [experience, setExperience] = useState<Experience | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch(`/api/experiences/${id}`);
        if (response.status === 404) {
          setError(true);
          return;
        }
        const data = await response.json();
        setExperience(data);
        setIsLoading(false); // Set loading state to false after fetching the award
      } catch (error) {
        console.error("Error fetching award:", error);
        setIsLoading(false); // Set loading state to false in case of an error
      }
    };

    if (id) {
      fetchExperience();
    }
  }, [id]);

  if (error) {
    // Redirect to error page or display an error message
    // You can replace the router.push() line with your desired logic
    router.push("/error");
    return null;
  }

  if (!experience) {
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
        <title>{experience.propertitle} - Ryan&apos;s Portfolio</title>
      </Head>

      <Header />

      {isLoading ? (
        <LoadingPage />
      ) : (
        <div>
          {/* mobile */}
          <motion.div
            className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-turq pb-10 font-display md:hidden`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              id="title"
              className="mt-16 w-full bg-white p-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h1 className="mb-2 w-fit rounded-full bg-primary py-1 px-2 text-xs capitalize text-white">
                {experience.type}
              </h1>

              <div className="text-4xl font-semibold capitalize text-primary">
                {experience.title}
              </div>

              <motion.p
                className="w-full text-start font-normal text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {experience.period}
              </motion.p>
            </motion.div>

            <motion.div
              id="association"
              className="w-full bg-turq p-4 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <motion.p className="text-lg">
                {experience.association.name}
              </motion.p>

              <motion.p className="text-sm">{experience.location}</motion.p>
            </motion.div>

            <motion.div
              id="brief"
              className="px-4 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <hr className="my-4 h-px border-0 bg-gray-200" />

              <motion.h1 className="text-2xl font-semibold ">Brief</motion.h1>

              <div id="brief" className="font-normal">
                {experience.description.brief}
              </div>

              <hr className="my-8 h-px border-0 bg-gray-200" />
            </motion.div>

            <ShowIf isExist={experience.description.detail}>
              <motion.div
                id="detail"
                className="mb-8 w-full px-4 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                <motion.h1 className="w-full text-2xl font-semibold">
                  Detail
                </motion.h1>

                <motion.div className="w-full text-start text-sm text-white">
                  {experience.description.detail?.map((detail, item) => (
                    <motion.div
                      key={item}
                      className="w-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: item * 0.1 + 1.2 }}
                    >
                      - {detail}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </ShowIf>

            <ShowIf isExist={experience.image}>
              <motion.div
                className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                {experience.image && typeof experience.image === "number" && (
                  <>
                    {Array.from({ length: experience.image }, (_, index) => (
                      <motion.div
                        id="image"
                        key={index}
                        className="col-span-1 row-span-1 px-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 1.2 }}
                      >
                        <Image
                          src={`/images/experiences/${experience.tag}_${
                            index + 1
                          }.jpg`}
                          alt={`Image ${index}`}
                          width={1080}
                          height={1080}
                          className="pointer-events-none w-96 rounded-lg object-cover shadow-xl"
                        />
                      </motion.div>
                    ))}
                  </>
                )}
              </motion.div>
            </ShowIf>
          </motion.div>

          {/* md */}
          <motion.div
            className={`mx-auto hidden max-w-screen-2xl flex-col items-center bg-turq pb-10 font-display md:flex`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              id="title"
              className="mt-16 w-full bg-white p-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h1 className="mb-2 w-fit rounded-full bg-primary py-1 px-2 text-xs capitalize text-white">
                {experience.type}
              </h1>

              <div className="text-4xl font-semibold capitalize text-primary">
                {experience.title}
              </div>

              <motion.p
                className="w-full text-start font-normal text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {experience.period}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 place-items-center">
              <motion.div
                className="order-last col-span-1 row-span-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <motion.div
                  id="association"
                  className="w-full bg-turq p-4 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.p className="text-2xl font-semibold">
                    {experience.association.name}
                  </motion.p>

                  <motion.p className="text-lg">{experience.location}</motion.p>
                </motion.div>

                <motion.div
                  id="brief"
                  className="px-4 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <hr className="my-4 h-px border-0 bg-gray-200" />

                  <motion.h1 className="text-2xl font-semibold ">
                    Brief
                  </motion.h1>

                  <div id="brief" className="font-normal">
                    {experience.description.brief}
                  </div>

                  <hr className="my-8 h-px border-0 bg-gray-200" />
                </motion.div>

                <ShowIf isExist={experience.description.detail}>
                  <motion.div
                    id="detail"
                    className="mb-8 w-full px-4 text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.h1 className="text-2xl font-semibold">
                      Detail
                    </motion.h1>

                    <motion.div className="w-full text-start text-sm text-white">
                      {experience.description.detail?.map((detail, item) => (
                        <motion.div
                          key={item}
                          className="w-full"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: item * 0.1 }}
                        >
                          - {detail}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </ShowIf>
              </motion.div>

              <motion.div
                className="col-span-1 row-span-1 select-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <ShowIf isExist={experience.image}>
                  <motion.div
                    className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    {experience.image &&
                      typeof experience.image === "number" &&
                      Array.from({ length: experience.image }, (_, index) => (
                        <motion.div
                          id="image"
                          key={index}
                          className="col-span-1 row-span-1"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <Image
                            src={`/images/experiences/${experience.tag}_${
                              index + 1
                            }.jpg`}
                            alt={`Image ${index}`}
                            width={1080}
                            height={1080}
                            className="pointer-events-none rounded-lg object-cover shadow-xl"
                            priority
                          />
                        </motion.div>
                      ))}
                  </motion.div>
                </ShowIf>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
      <Footer />
    </div>
  );
}
