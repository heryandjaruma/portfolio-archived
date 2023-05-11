import { useRouter } from "next/router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import Project from "@/interface/project";

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
          className={`mx-auto flex max-w-screen-2xl flex-col items-center bg-primary font-display`}
        >
          ANYYEOGGG
        </div>
      )}
      <Footer />
    </div>
  );
}
