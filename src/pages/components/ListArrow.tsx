import ArrowRight from "./ArrowRight";

export default function ListArrow(props: { title: string }) {
  const properLinkTitle = props.title.replace(/\s+/g, "-");
  return (
    <>
      <li>
        <a
          href={`#${properLinkTitle}`}
          className="group flex items-center text-3xl capitalize underline "
        >
          {props.title}
          &nbsp;
          <div className="hidden group-hover:block">
            <ArrowRight />
          </div>
        </a>
      </li>
    </>
  );
}
