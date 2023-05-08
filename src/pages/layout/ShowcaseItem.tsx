import { ReactNode } from "react";

const ShowcaseItem = (props: { id: string; children: ReactNode }) => {
  const properId = props.id.replace(/\s/g, "-");
  return (
    <div
      id={properId}
      className="bg-fill bg-white/ flex w-full flex-col font-display"
    >
      {props.children}
    </div>
  );
};

export default ShowcaseItem;
