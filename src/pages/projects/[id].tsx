import { useRouter } from "next/router";
import projectsData from "../../data/projects.json";

interface Project {
  show: boolean;
  id: number;
  logo: boolean;
  logotext: boolean;
  title: string;
  tag: string;
  description: {
    problem: string;
    solution: string;
    problemimage: boolean;
    solutionimage: boolean;
    topiclink?: string;
  };
  techstack: string[];
  awards?: {
    [key: string]: string;
  };
  video?: string;
  newstitle?: string;
  newslink?: string;
  contributor?: {
    [key: string]: string | undefined;
  };
}

interface ProjectPageProps {
  project: Project | undefined;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const router = useRouter();
  const { id } = router.query;

  if (!project) {
    return <div>Project not found</div>;
  }

  return <div>Project Id : {project.id}</div>;
}

export async function getStaticPaths() {
  const res = await fetch("");
  const dataProjects = await res.json();
  const paths = projectsData.map((project: Project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
}
