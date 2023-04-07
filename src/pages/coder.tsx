import { useState } from "react";
import Header from "./layout/Header";
import getWindowSize from "@/utils/windowSize";
import Kamifriend from "./layout/coder/Kamifriend";
import Image from "next/image";

export default function Coder() {
  const [active, setActive] = useState(false);

  const size = getWindowSize();
  return (
    <>
      <Header state={active} setState={setActive} windowSize={size} />
      <div
        className={`container mx-auto mb-10 flex flex-col items-center px-4 text-justify sm:px-0 ${
          active && size.width < 640 ? "hidden" : "block"
        }`}
      >
        <div className="my-4 flex h-[54vh] flex-row items-center justify-center text-center">
          <h1 className="w-5/12 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text font-display text-4xl text-transparent">
            Coder
          </h1>
          <p className="w-7/12 text-start text-gray-500">
            Award-winning, personal and technical projects
          </p>
        </div>
        <hr id="showcase" className="h-px w-full border-0 bg-gray-300" />
      </div>
    </>
  );
}
