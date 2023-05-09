import Link from "next/link";

interface Props {
  next: string;
}

export default function NextPage({ next }: Props) {
  return (
    <>
      <div
        id="next-page"
        className="flex h-20 w-full items-center justify-end bg-turq p-4 text-2xl font-medium"
      >
        <p className="text-white">View next page, </p>
        <Link
          href={`/${next}`}
          className="ml-2 font-semibold capitalize text-primary underline"
        >
          {next} ➡️
        </Link>
      </div>
    </>
  );
}
