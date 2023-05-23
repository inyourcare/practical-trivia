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

export default function Drawer({
  header,
  children,
}: {
  header?: ReactNode;
  children?: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <>
      <div className={`sticky top-0 left-0 h-0`}>
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
            : "transition-all duration-500 -z-10 ")
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
            {children}
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
