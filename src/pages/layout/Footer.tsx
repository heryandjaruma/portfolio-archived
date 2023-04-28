import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
      <>
      <div className="bg-[url('/images/particles/bg004.png')] bg-fill py-2">
         <div className="flex flex-row  justify-center h-32 items-center gap-x-7">
               <Link href="https://github.com/heryandjaruma" className="bg-turq p-4">
                  <Image src="/images/particles/github_icon.svg" width={150} height={150} className="w-6" alt="github_icon" />
               </Link>
               <Link href="https://www.linkedin.com/in/heryandjaruma/" className="bg-turq p-4">
                  <Image src="/images/particles/linkedin_icon.svg" width={150} height={150} className="w-6" alt="linkedin_icon" />
               </Link>
         </div>
         <p className="text-xs text-white w-full text-center">Copyright © 2023 Heryan Djaruma</p>

      </div>
      </>
   )
}