import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Link from "next/link";
import path from "path";
import fs from "fs";
import { GetStaticProps } from "next";
import AwardsIcon from "./components/AwardsIcon";
import ShowcaseItem from "./layout/ShowcaseItem";

interface Props {
  awards: Award[];
}

interface Award {
  id: number;
  show: boolean;
  title: string;
  program: string;
  association: string;
  type: string;
  refer?: string;
  date: string;
  description: string;
}

export default function Awards({ awards }: Props) {
  return (
    <>
      <Header />
      <div
        className={`mx-auto flex max-w-screen-2xl flex-col items-center font-display sm:px-0`}
      >
        <div
          id="welcome"
          className="mt-16 flex h-[260px] w-full flex-col justify-center bg-primary px-4 pt-10 font-display font-semibold text-white"
        >
          <div className="mb-10">
            <AwardsIcon />
            <h1 className="py-3 text-5xl font-extrabold">Awards</h1>
            <p className="mb-2 text-xl font-normal text-gray-200">
              I&apos;ve received
            </p>
          </div>
        </div>

        <div id="contents" className="my-4 w-full px-4">
          <ul className="space-y-4">
            {awards.map((award) => (
              <li key={award.id}>
                <ShowcaseItem id={award.title}>
                  <Link
                    className="rounded-xl bg-slate-100 py-4 px-4 hover:bg-slate-200"
                    href="/"
                  >
                    <h1 className="text-2xl font-semibold capitalize text-blue">
                      {award.title}
                    </h1>
                    <p>{award.program}</p>
                    <p className="mt-3 text-end text-xs text-gray-600">
                      by {award.association}
                    </p>
                    <p className="text-end text-xs text-gray-600">
                      {award.date}
                    </p>
                  </Link>
                </ShowcaseItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "src", "data", "awards.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data: Award[] = JSON.parse(fileContents);

  const filteredAwards = data.filter((award) => {
    return award.show === true;
  });

  return {
    props: {
      awards: filteredAwards,
    },
  };
};
