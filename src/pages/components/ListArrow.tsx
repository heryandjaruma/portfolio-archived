import ArrowRight from "./ArrowRight";

export default function ListArrow(props: { title: string }) {
  const properLinkTitle = props.title.replace(/\s+/g, "-");
  return (
    <>
      <li>
        <a
          href={`#${properLinkTitle}`}
          className="group flex items-center text-start text-2xl capitalize underline"
        >
          {props.title}
          <div className="ml-2 hidden group-hover:block">
            <ArrowRight />
          </div>
        </a>
      </li>
    </>
  );
}
