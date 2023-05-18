import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Award from "@/interface/award";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Image from "next/image";

import LoadingPage from "../components/LoadingPage";
import Head from "next/head";
import Link from "next/link";
import ShowIf from "../layout/ShowIf";

const AwardDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [award, setAward] = useState<Award | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAward = async () => {
      try {
        const response = await fetch(`/api/awards/${id}`);
        if (response.status === 404) {
          setError(true);
          return;
        }
        const data = await response.json();
        setAward(data);
        setIsLoading(false); // Set loading state to false after fetching the award
      } catch (error) {
        console.error("Error fetching award:", error);
        setIsLoading(false); // Set loading state to false in case of an error
      }
    };

    if (id) {
      fetchAward();
    }
  }, [id]);

  if (error) {
    // Redirect to error page or display an error message
    // You can replace the router.push() line with your desired logic
    router.push("/error");
    return null;
  }

  if (!award) {
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
        <title>{award.propertitle} - Ryan&apos;s Portfolio</title>
      </Head>
      <Header />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <motion.div
          className="mx-auto flex max-w-screen-2xl flex-col items-center bg-primary pt-16 font-display"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div
            id="content"
            className="m-4 flex flex-col items-center overflow-hidden rounded-xl bg-white shadow-xl md:max-w-2xl"
          >
            <motion.div
              id="title"
              className="w-full px-4 py-4 text-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.h1 className="mb-8 w-fit rounded-full bg-turq py-1 px-2 text-xs capitalize text-white">
                {award.type}
              </motion.h1>
              <motion.h1 className="text-3xl font-semibold capitalize text-blue">
                {award.title}
              </motion.h1>
              <motion.p className="text-blk">{award.program}</motion.p>
              <motion.p className="text-md mt-3 text-gray-600">
                by {award.association}
              </motion.p>
              <motion.p className="text-md text-gray-600">
                {award.date}
              </motion.p>
            </motion.div>

            <motion.div
              id="description"
              className="px-4 py-4 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <motion.p className="text-blk">{award.description}</motion.p>
            </motion.div>

            <ShowIf isExist={award.refer}>
              <motion.div
                id="refer"
                className="w-full px-4 py-4 text-left text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <motion.p className="text-gray-500">
                  Related to this award -{" "}
                  <Link
                    href={`/${award.refer?.type}s/${award.refer?.id}`}
                    className="text-blu underline"
                  >
                    {award.refer?.type}
                  </Link>
                </motion.p>
              </motion.div>
            </ShowIf>

            {award.image ? (
              <motion.div
                id="image"
                className="select-none place-items-center px-4 py-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <Image
                  src={`/images/awards/${award.tag}.jpg`}
                  width={1000}
                  height={1000}
                  alt="groovy-doodle"
                  className="pointer-events-none rounded-md shadow-lg md:max-w-md"
                  priority
                />
              </motion.div>
            ) : (
              <motion.div
                id="image"
                className="select-none place-items-center px-4 py-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <Image
                  src="/images/awards/groovydoodle.svg"
                  width={1000}
                  height={1000}
                  alt="groovy-doodle"
                  className="pointer-events-none md:max-w-md"
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default AwardDetailPage;
