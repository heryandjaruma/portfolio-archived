interface Refer {
  id: number;
  type: string;
}

interface Award {
  id: number;
  show: boolean;
  title: string;
  propertitle: string;
  program: string;
  association: string;
  type: string;
  refer?: Refer;
  date: string;
  description: string;
  image: boolean;
}

export default Award;
