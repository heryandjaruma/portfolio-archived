import { ReactNode } from "react";

const ShowcaseItem = (props: { id: string; children: ReactNode }) => {
  return (
    <div
      id={props.id}
      className="bg-fill flex w-full flex-col bg-[url('/images/particles/bg001-01.png')] py-6 font-display"
    >
      {props.children}
    </div>
  );
};

export default ShowcaseItem;
