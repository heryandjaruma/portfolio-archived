import Image from "next/image";

interface Size {
  height: number;
  width: number;
}

export default function GlobeIcon({ width, height }: Size) {
  return (
    <Image
      src="/images/icons/globe.svg"
      alt="award icon"
      width={160}
      height={160}
      className={`w-${width} h-${height}`}
    />
  );
}
