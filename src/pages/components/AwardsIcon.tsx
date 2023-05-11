import Image from "next/image";

export default function AwardsIcon() {
  return (
    <Image
      src="/images/icons/awards.svg"
      alt="award icon"
      width={160}
      height={160}
      className="pointer-events-none w-8 sm:w-12 md:w-14"
    />
  );
}
