import { ReactNode } from "react";

const ShowcaseItem = (props: {
  id: string;
  tag: string;
  children: ReactNode;
}) => {
  return (
    <div
      id={props.tag}
      className="bg-fill bg-white/ flex w-full flex-col font-display"
    >
      {props.children}
    </div>
  );
};

export default ShowcaseItem;
