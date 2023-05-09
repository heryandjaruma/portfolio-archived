import Image from "next/image";
import Link from "next/link";
import BackToTopButton from "../components/BackToTop";

export default function Footer() {
  return (
    <>
      <div className="bg-slate-50 py-4">
        <div className="flex h-32 flex-row items-center justify-center gap-x-7">
          <Link href="https://github.com/heryandjaruma" className="bg-turq p-4">
            <Image
              src="/images/particles/github_icon.svg"
              width={150}
              height={150}
              className="w-6"
              alt="github_icon"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/heryandjaruma/"
            className="bg-turq p-4"
          >
            <Image
              src="/images/particles/linkedin_icon.svg"
              width={150}
              height={150}
              className="w-6"
              alt="linkedin_icon"
            />
          </Link>
        </div>
        <p className="w-full text-center text-xs text-blk">
          Copyright © 2023 Heryan Djaruma
        </p>
      </div>
      <BackToTopButton />
    </>
  );
}
