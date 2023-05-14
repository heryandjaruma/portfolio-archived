interface Association {
  name: string;
  logo: boolean;
}

interface Description {
  brief: string;
  detail?: string[];
}

interface Experience {
  id: number;
  show: boolean;
  title: string;
  propertitle: string;
  type: string;
  tag: string;
  period: string;
  association: Association;
  location: string;
  description: Description;
  image?: number;
}

export default Experience;
