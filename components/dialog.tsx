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
        className={`sticky top-[83%] h-0 flex flex-col justify-center items-center w-full`}
        // className={`sticky bottom-[75%] h-0 flex flex-col justify-center items-center w-full`}
      >
        <section
          className={
            "absolute bottom-0 w-3/5 min-h-[500px] bg-gray-100 rounded-xl border border-black " +
            // "w-3/5 min-h-3/5 bg-gray-100 rounded-xl border border-black " +
            (isOpen ? "visible":"invisible")
          }
        >
          <header className="flex flex-row-reverse m-5 justify-between">
            <button
              className={`w-5 h-5 bg-[url('/images/icons/x.svg')] bg-no-repeat bg-center bg-cover cursor-pointer `}
              onClick={() => setIsOpen(false)}
            ></button>
            {header}
          </header>
          <div className="m-5">
            {children}
          </div>
        </section>
        <button
          className={
            `absolute top-[10px] bg-sul-btn rounded-xl opacity-25 hover:opacity-100 `+
            `w-3/5 min-h-[50px] my-10`
            // `w-3/5 min-h-1/5 my-10`
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
