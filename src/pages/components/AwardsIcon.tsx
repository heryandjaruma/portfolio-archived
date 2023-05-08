import Image from "next/image";

export default function AwardsIcon() {
  return (
    <Image
      src="/images/icons/awards.svg"
      alt="award icon"
      width={160}
      height={160}
      className="h-16 w-16"
    />
  );
}
