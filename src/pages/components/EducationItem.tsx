export default function EducationItem(props: {
  id: number;
  education: string;
  association: string;
  period: string;
  major: string;
  grade?: string;
  related: string;
}) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-blk bg-blk"></div>
      <time className="mb-1 text-sm font-normal italic leading-none text-gray-400">
        <span className="capitalize">{props.education}</span>, {props.period}
      </time>
      <h3 className="text-lg font-semibold capitalize text-blue">
        {props.association}
      </h3>
      <p className="text-md font-normal text-gray-500">{props.major}</p>
      <p className="text-sm font-extralight">{props.related}</p>
    </li>
  );
}
