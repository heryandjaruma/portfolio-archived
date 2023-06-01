import Link from "next/link";

interface Props {
  next: string;
  bgcolor: string;
  textcolor: string;
}

export default function NextPage({ next, bgcolor, textcolor }: Props) {
  return (
    <>
      <div
        id="next-page"
        className={`flex h-20 w-full items-center justify-end p-4 text-2xl font-medium ${bgcolor}`}
      >
        <p className={`text-white`}>View next page, </p>
        <Link
          href={`/${next}`}
          className={`ml-2 font-semibold capitalize ${textcolor} underline`}
        >
          {next}
        </Link>
      </div>
    </>
  );
}
