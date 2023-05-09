export default function ListArrow(props: { title: string }) {
  const properLinkTitle = props.title?.replace(/\s+/g, "-");
  return (
    <>
      <li>
        <a
          href={`#${properLinkTitle}`}
          className="group flex items-center text-start text-2xl capitalize underline duration-200 hover:text-gray-300"
        >
          {props.title}
        </a>
      </li>
    </>
  );
}
