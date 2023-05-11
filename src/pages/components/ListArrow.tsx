export default function ListArrow(props: {
  title: string | undefined;
  tag: string | undefined;
}) {
  return (
    <>
      <li>
        <a
          href={`#${props.tag}`}
          className="group flex items-center text-start text-2xl capitalize underline duration-200 hover:text-gray-300"
        >
          {props.title}
        </a>
      </li>
    </>
  );
}
