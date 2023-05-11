interface Award {
  id: number;
  show: boolean;
  title: string;
  program: string;
  association: string;
  type: string;
  refer?: string;
  date: string;
  description: string;
}

export default Award;
