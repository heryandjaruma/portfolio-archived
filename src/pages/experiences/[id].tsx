import Experience from "@/interface/experience";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../layout/Header";
import LoadingPage from "../components/LoadingPage";
import Footer from "../layout/Footer";
import exp from "constants";
import ShowIf from "../layout/ShowIf";
import Image from "next/image";

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
        <Header />
        <LoadingPage />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div
          className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-turq pb-10 font-display`}
        >
          <div id="title" className="mt-16 w-full bg-white p-4">
            <h1 className="mb-2 w-fit rounded-full bg-primary py-1 px-2 text-xs capitalize text-white">
              {experience.type}
            </h1>
            <div className="text-4xl font-semibold capitalize text-primary">
              {experience.title}
            </div>
            <p className="w-full text-start font-normal text-gray-500">
              {experience.period}
            </p>
          </div>

          <div id="association" className="w-full bg-turq p-4 text-white">
            <p className="text-lg">{experience.association.name}</p>
            <p className="text-sm">{experience.location}</p>
          </div>

          <div id="brief" className="px-4 text-white">
            <hr className="my-4 h-px border-0 bg-gray-200" />
            <h1 className="text-2xl font-semibold ">Brief</h1>
            <div id="brief" className="font-normal">
              {experience.description.brief}
            </div>
            <hr className="my-8 h-px border-0 bg-gray-200" />
          </div>

          <ShowIf isExist={experience.description.detail}>
            <div id="detail" className="mb-8 w-full text-white">
              <h1 className="text-2xl font-semibold">Detail</h1>
              <div className="w-full text-start text-sm text-white">
                {experience.description.detail?.map((detail, item) => (
                  <div key={item} className="w-full">
                    - {detail}
                  </div>
                ))}
              </div>
            </div>
          </ShowIf>

          <ShowIf isExist={experience.image}>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
              {experience.image && typeof experience.image === "number" && (
                <>
                  {Array.from({ length: experience.image }, (_, index) => (
                    <div
                      id="image"
                      key={index}
                      className="col-span-1 row-span-1 px-4"
                    >
                      <Image
                        src={`/images/experiences/${experience.title}_${
                          index + 1
                        }.jpg`}
                        alt={`Image ${index}`}
                        width={1080}
                        height={1080}
                        className="pointer-events-none w-96 rounded-lg object-cover shadow-xl"
                      />
                    </div>
                  ))}
                </>
              )}
            </div>
          </ShowIf>
        </div>
      )}
      <Footer />
    </div>
  );
}

{
  /* <Image
              
                src={`/images/experiences/${experience.title}.jpg`}
                width={1080}
                height={1080}
                alt={`${experience.title}-image`}
                className="w-56"
              /> */
}
