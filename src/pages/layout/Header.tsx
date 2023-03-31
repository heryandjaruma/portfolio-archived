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
        className={`bg-neuraindigo bg-gradient-to-r from-neurablue p-2 shadow-sm`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/">{/* <Image src="/image/" fill alt="Logo" /> */}</Link>

          <button
            type="button"
            className="inline-flex items-center text-white md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={state ? "hidden" : "h-10 w-10 md:h-8 md:w-8"}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={state ? "h-10 w-10 md:h-8 md:w-8" : "hidden"}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className={`h-full w-full items-center transition duration-200 md:block md:w-auto md:py-0 ${
              state ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul
              className={`fixed right-0 flex h-full w-full flex-col items-center justify-center px-5 text-right font-display text-2xl font-bold shadow-lg md:static md:h-10 md:flex-row md:space-y-0 md:space-x-4 md:bg-transparent md:px-0 md:shadow-none ${
                state && windowSize.width < 640
                  ? "bg-neuraindigo bg-gradient-to-r from-neurablue"
                  : "bg-transparent"
              }`}
            >
              <li className="w-full rounded-md bg-opacity-25 p-2 md:w-20">
                <Link
                  href="/"
                  className="group flex items-center justify-end rounded-md text-white transition-all duration-300 ease-in-out hover:text-[#b0fffc] md:flex-col md:text-center md:text-base"
                  aria-current="page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mx-2 h-6 md:group-hover:h-4"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  <p className="order-first md:order-last md:hidden md:group-hover:block">
                    About
                  </p>
                </Link>
              </li>

              <li className="w-full rounded-md bg-opacity-25 p-2 md:w-20">
                <Link
                  href="./portfolio"
                  className="group flex items-center justify-end rounded-md text-gray-200 transition duration-300 hover:text-[#b0fffc] md:flex-col md:text-center md:text-base"
                >
                  <svg
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
                  </svg>
                  <p className="order-first md:order-last md:hidden md:group-hover:block">
                    Coder
                  </p>
                </Link>
              </li>

              <li className="w-full rounded-md bg-opacity-25 p-2 md:w-20">
                <Link
                  href="./algorythm"
                  className="group flex items-center justify-end rounded-md text-gray-200 transition duration-300 hover:text-[#b0fffc] md:flex-col md:text-center md:text-base"
                >
                  <svg
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
                  </svg>

                  <p className="order-first md:order-last md:hidden md:group-hover:block">
                    Learner
                  </p>
                </Link>
              </li>

              <li className="w-full rounded-md bg-opacity-25 p-2 md:w-20">
                <Link
                  href="./algorythm"
                  className="group flex items-center justify-end rounded-md text-gray-200 transition duration-300 hover:text-[#b0fffc] md:flex-col md:text-center md:text-base"
                >
                  <svg
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
                  </svg>

                  <p className="order-first md:order-last md:hidden md:group-hover:block">
                    Musician
                  </p>
                </Link>
              </li>

              <li className="w-full rounded-md bg-opacity-25 p-2 md:w-20">
                <Link
                  href="./algorythm"
                  className="group flex items-center justify-end rounded-md text-gray-200 transition duration-300 hover:text-[#b0fffc] md:flex-col md:text-center md:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mx-2 h-6 md:group-hover:h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <p className="order-first md:order-last md:hidden md:group-hover:block">
                    Other
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
