import Image from "next/image";
import Tab from "../Tab";

export default function Kamifriend() {
  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-start-1">
            <Image
              src="/images/coder/kamifriend_1_001.png"
              alt="Kamifriend photo"
              width={1000}
              height={1000}
              className="aspect-auto"
            />
          </div>
          <div className="md:col-start-2">
            <Tab />
          </div>
        </div>
      </div>
    </>
  );
}
