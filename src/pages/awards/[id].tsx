import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Award from "@/interface/award";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Image from "next/image";

import LoadingPage from "../components/LoadingPage";
import Head from "next/head";

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
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center bg-primary pt-16 font-display">
          <div
            id="content"
            className="m-4 flex flex-col items-center overflow-hidden rounded-xl bg-white shadow-xl md:max-w-2xl"
          >
            <div id="title" className="w-full px-4 py-4 text-start">
              <h1 className="mb-8 w-fit rounded-full bg-turq py-1 px-2 text-xs capitalize text-white">
                {award.type}
              </h1>
              <h1 className="text-3xl font-semibold capitalize text-blue">
                {award.title}
              </h1>
              <p className="text-blk">{award.program}</p>
              <p className="text-md mt-3 text-gray-600">
                by {award.association}
              </p>
              <p className="text-md text-gray-600">{award.date}</p>
            </div>

            <div id="description" className="px-4 py-4 text-white">
              <p className="text-blk">{award.description}</p>
            </div>

            <div id="illustration" className="place-items-center px-4 py-6">
              <Image
                src="/images/awards/groovydoodle.svg"
                width={1000}
                height={1000}
                alt="groovy-doodle"
                className="md:max-w-md"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AwardDetailPage;
