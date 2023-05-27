"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import DrawerCard from "./drawer-card";
import DrawerExpansion from "./drawer-expansion";

export default function Drawer({
  header,
  children,
}: {
  header?: ReactNode;
  children?: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [invisible, setInvisible] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/contactinfo") {
      setInvisible(true);
    } else {
      setInvisible(false);
    }
    setIsOpen(false);
  }, [pathname]);
  return (
    <>
      <div className={`sticky top-0 left-0 h-0 ` + (invisible ? `hidden` : ``)}>
        <button
          className={`bg-gray-300 rounded bg-opacity-25 hover:bg-opacity-100 
          xl:w-[55px] xl:h-[55px] w-10 h-10 
          bg-[url('/images/icons/list.svg')] bg-no-repeat bg-center`}
          style={
            {
              // backgroundImage: `url('/images/icons/list.svg')`,
              // backgroundRepeat: `no-repeat`,
              // backgroundPosition: `center`,
            }
          }
          onClick={() => setIsOpen(true)}
        ></button>
      </div>

      <main
        className={
          "fixed inset-y-0 right-0 overflow-hidden transform ease-in-out bg-gray-600 bg-opacity-0 " +
          (isOpen
            ? "transition-all z-10 duration-500 bg-opacity-40"
            : "transition-all duration-500 -z-10 ") +
          (invisible ? `hidden` : ``)
        }
      >
        <section
          className={
            // " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            " w-screen max-w-lg right-full absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            // (isOpen ? " translate-x-0 " : " translate-x-full ")
            (isOpen ? " translate-x-full opacity:100" : " translate-x-0 ")
          }
        >
          <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            {/* header */}
            <header className="p-4 font-bold text-lg">
              <div className="flex justify-between flex-row ">
                <span>교육 상담 리스트</span>
                {/* back to home */}
                <div className="mx-10">
                  <Link href={"/"}>
                    <span
                      className={`relative bg-gray-300 text-white rounded px-4 py-1 bg-opacity-25 hover:bg-opacity-100 cursor-pointer mx-1`}
                      style={{
                        backgroundImage: `url('/images/icons/house.svg')`,
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: `center`,
                        width: `40px`,
                        height: `40px`,
                        left: "20px",
                      }}
                    ></span>
                  </Link>
                  <span
                    className={`relative bg-gray-300 text-white rounded px-4 py-1 bg-opacity-25 hover:bg-opacity-100 cursor-pointer`}
                    style={{
                      backgroundImage: `url('/images/icons/x.svg')`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center`,
                      width: `40px`,
                      height: `40px`,
                      left: "20px",
                    }}
                    onClick={() => setIsOpen(false)}
                  ></span>
                </div>
              </div>
            </header>
            {/* main */}
            {/* 과외 */}
            <DrawerExpansion
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-award"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
              }
              mainText={
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  과외
                </span>
              }
            >
              <DrawerCard
                icon={
                  // Tailwind center -> flex flex-wrap justify-center items-center
                  <button
                    className={`h-12 w-12 flex flex-wrap justify-center items-center bg-green-600 text-white rounded px-4 py-1`}
                  >
                    Dream
                  </button>
                }
                title={<p>e상상코칭</p>}
                descrision={
                  <p className="text-sm text-gray-900 dark:text-white">
                    아이의 미래를 위한 선택 상상코칭입니다.
                  </p>
                }
                subDescrision={
                  <p className="text-xs text-gray-900 dark:text-white">
                    학생 맞춤의 프리미엄 과외
                  </p>
                }
                targetLink="/sangsang/"
              />
              <DrawerCard
                icon={
                  // Tailwind center -> flex flex-wrap justify-center items-center
                  <button
                    className={`h-12 w-12 flex flex-wrap justify-center items-center bg-green-600 text-white rounded px-4 py-1`}
                  >
                    9do
                  </button>
                }
                title={<p>공부구도</p>}
                descrision={
                  <p className="text-sm text-gray-900 dark:text-white">
                    공부하는 습관! 공부구도입니다.
                  </p>
                }
                subDescrision={
                  <p className="text-xs text-gray-900 dark:text-white">
                    나에게 딱 맞는 공부습관
                  </p>
                }
                targetLink="/goodo/"
              />
            </DrawerExpansion>
          </article>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
}
