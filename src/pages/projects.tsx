import { useState } from "react";
import Header from "./layout/Header";
import getWindowSize from "@/utils/windowSize";
import Kamifriend from "./layout/coder/Kamifriend";
import Image from "next/image";
import ListArrow from "./components/ListArrow";

export default function Coder() {
  const [active, setActive] = useState(false);

  const size = getWindowSize();
  return (
    <>
      <Header state={active} setState={setActive} windowSize={size} />
      <div
        className={`container mx-auto flex flex-col items-center text-justify sm:px-0 ${
          active && size.width < 640 ? "hidden" : "block"
        }`}
      >
        <div className="w-full bg-[url('/images/particles/bg002.png')] bg-cover">
          <div id="welcome" className="w-full px-8 text-white h-[600px] flex flex-col justify-center font-display text-2xl font-semibold">
            <ul>
              <li className="">
                <ListArrow title="Kamifriend" />
              </li>
              <li className="">
                <ListArrow title="Kampoeng Koena" />
              </li>
              <li className="">
                <ListArrow title="Hikost" />
              </li>
              <li className="">
                <ListArrow title="Personal Website" />
              </li>
            </ul>
          </div>
        </div>

        <div id="kamifriend" className="w-full flex items-center justify-center py-6 px-4 h-[500px] bg-[url('/images/particles/bg001-01.png')] bg-fill">
        </div>
      </div>
    </>
  );
}
