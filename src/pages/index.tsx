import getWindowSize from "@/utils/windowSize";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function Home() {
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
        <div id="welcome" className="w-full bg-darkprimary px-8 text-white h-[50vh] flex flex-col justify-center">
          <h1 className="text-5xl font-display font-bold">I'm a Coder</h1>
          <div className="flex flex-row mt-4">
            <button className="font-display px-9 py-.1 border-2 rounded-full">
              Work
            </button>
            <button className="font-display px-5 py-1 rounded-full flex flex-row justify-center items-center">
              <span className="underline">Contact</span> &nbsp;
              <Image src="/images/particles/arrow_tr.svg" alt="arrow_tr" className="w-3" width={100} height={100} />
            </button>
          </div>
        </div>

        <div id="work" className="bg-turq flex flex-row py-2 px-4 w-full">
          <h1 className="font-display font-medium text-xl text-primary">Work</h1>
        </div>

        </div>
      <Footer />
    </>
  );
}
