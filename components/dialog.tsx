"use client";
import { ReactNode, useEffect, useState } from "react";

export default function Drawer({
  header,
  children,
  btnTitle,
}: {
  header?: ReactNode;
  children?: ReactNode;
  btnTitle: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  // const pathname = usePathname();
  // useEffect(() => {
  //   setIsOpen(false);
  // }, [pathname]);
  return (
    <>
      <main
        //  className={`sticky top-[30%] h-0 flex flex-wrap justify-center items-center w-full`}
        className={`sticky top-[75%] h-0 flex flex-col justify-center items-center w-full`}
      >
        <section
          className={
            "w-3/5 min-h-[300px] bg-gray-100 rounded-xl border border-black " +
            (isOpen ? "visible":"invisible")
          }
        >
          <header className="flex flex-row-reverse">
            <button
              className={`w-5 h-5 m-5 bg-[url('/images/icons/x.svg')] bg-no-repeat bg-center bg-cover cursor-pointer `}
              onClick={() => setIsOpen(false)}
            ></button>
          </header>
        </section>
        <button
          className={
            `bg-sul-btn rounded-xl opacity-25 hover:opacity-100
            w-3/5 min-h-[60px] my-10`
            // bg-[url('/images/icons/list.svg')] bg-no-repeat bg-center`
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`text-white font-semibold`}>{btnTitle}</span>
        </button>
      </main>
    </>
  );
}
