import Image from "next/image";

export default function CodeIcon() {
  return (
    <Image
      src="/images/icons/code.svg"
      alt="code-icon"
      width={160}
      height={160}
      className="h-16 w-16"
    />
  );
}
