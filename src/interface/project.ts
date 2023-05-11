interface Contributor {
  name: string;
  role: string;
}

interface Award {
  name: string;
  association: string;
}

interface Description {
  brief: string;
  problem?: string;
  solution?: string;
  problemimage?: boolean;
  solutionimage?: boolean;
  topiclink?: string;
}

interface News {
  title?: string;
  link?: string;
}

interface Project {
  id: number;
  show?: boolean;
  logo?: boolean;
  logotext?: boolean;
  title: string;
  tag?: string;
  type: string;
  description: Description;
  techstack?: string[];
  awards?: {
    [key: string]: Award;
  };
  video?: string;
  news?: News;
  contributor?: {
    [key: string]: Contributor | undefined;
  };
}

export default Project;
