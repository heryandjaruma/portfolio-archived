import Image from "next/image";

export default function CodeIcon() {
  return (
    <Image
      src="/images/icons/code.svg"
      alt="code-icon"
      width={160}
      height={160}
      className="pointer-events-none w-12 sm:w-14 md:w-16"
    />
  );
}
