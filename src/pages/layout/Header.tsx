import Image from "next/image";
import Link from "next/link";

export default function Header({
  state,
  setState,
  windowSize,
}: {
  state: any;
  setState: any;
  windowSize: any;
}) {
  function toggleMobileMenu() {
    setState(!state);
  }

  return (
    <>
      <nav
        className="shadow-sm bg-[url('/images/particles/bg001-01.png')] bg-fill"
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between p-2">
          <Link href="/"><Image src="/images/particles/LOGO.svg" alt="my_logo" className="w-10" width={100} height={100}/></Link>

          <button
            type="button"
            className="inline-flex items-center text-white md:hidden h-full"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <Image src="/images/particles/menu.svg" alt="menu_icon" className="w-8" width={100} height={100} />
          </button>

          <div
            className={`h-full w-full items-center transition duration-200 md:block md:w-auto md:py-0 ${
              state ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul
              className={`fixed right-0 flex h-full w-full flex-col items-center justify-center px-5 text-right font-display text-2xl font-bold shadow-lg md:static md:h-10 md:flex-row md:space-y-0 md:space-x-4 md:bg-transparent md:px-0 md:shadow-none text-blue ${
                state && windowSize.width < 640
                  ? "bg-[url('/images/particles/bg001-01.png')] bg-fill"
                  : "bg-transparent"
              }`}
            >
              <li className="w-full rounded-md bg-opacity-25 p-2 md:w-20">
                <Link
                  href="/"
                  className="group flex items-center justify-end rounded-md transition-all duration-300 ease-in-out hover:text-[#b0fffc] md:flex-col md:text-center md:text-base"
                  aria-current="page"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mx-2 h-6 md:group-hover:h-4"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg> */}
                  <p className="order-first md:order-last md:hidden md:group-hover:block">
                    About
                  </p>
                </Link>
              </li>

              <li className="w-full rounded-md bg-opacity-25 p-2 md:w-20">
                <Link
                  href="/projects"
                  className="group flex items-center justify-end rounded-md transition duration-300 hover:text-[#b0fffc] md:flex-col md:text-center md:text-base"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mx-2 h-6 md:group-hover:h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                      clip-rule="evenodd"
                    />
                  </svg> */}
                  <p className="order-first md:order-last md:hidden md:group-hover:block">
                    Projects
                  </p>
                </Link>
              </li>

              <li className="w-full rounded-md bg-opacity-25 p-2 md:w-20">
                <Link
                  href="/learner"
                  className="group flex items-center justify-end rounded-md transition duration-300 hover:text-[#b0fffc] md:flex-col md:text-center md:text-base"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mx-2 h-6 md:group-hover:h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
                      clip-rule="evenodd"
                    />
                  </svg> */}

                  <p className="order-first md:order-last md:hidden md:group-hover:block">
                    Learner
                  </p>
                </Link>
              </li>

              <li className="w-full rounded-md bg-opacity-25 p-2 md:w-20">
                <Link
                  href="/musician"
                  className="group flex items-center justify-end rounded-md transition duration-300 hover:text-[#b0fffc] md:flex-col md:text-center md:text-base"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mx-2 h-6 md:group-hover:h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                      clip-rule="evenodd"
                    />
                  </svg> */}

                  <p className="order-first md:order-last md:hidden md:group-hover:block">
                    Musician
                  </p>
                </Link>
              </li>

              <li className="w-full rounded-md bg-opacity-25 p-2 md:w-20">
                <Link
                  href="/content creator"
                  className="group flex items-center justify-end rounded-md transition duration-300 hover:text-[#b0fffc] md:flex-col md:text-center md:text-base"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mx-2 h-6 md:group-hover:h-4"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg> */}

                  <p className="order-first md:order-last md:hidden md:text-xs md:group-hover:block">
                    Content Creator
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
