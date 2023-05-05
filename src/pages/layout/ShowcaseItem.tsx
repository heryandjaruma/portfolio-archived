import { ReactNode } from "react";

const ShowcaseItem = (props: { id: string; children: ReactNode }) => {
  const properId = props.id.replace(/\s/g, "-");
  return (
    <div
      id={properId}
      className="bg-fill flex w-full flex-col bg-white/70 py-6 font-display"
      // className="bg-fill flex w-full flex-col bg-[url('/images/particles/bg001-01.png')] py-6 font-display"
    >
      {props.children}
    </div>
  );
};

export default ShowcaseItem;
