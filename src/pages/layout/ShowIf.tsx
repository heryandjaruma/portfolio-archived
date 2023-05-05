import { ReactNode } from "react";

const ShowIf = (props: { isExist: any; children: ReactNode }) => {
  return <div>{props.isExist && <div>{props.children}</div>}</div>;
};

export default ShowIf;
