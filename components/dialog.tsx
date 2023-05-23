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
      {/* <div className={`absolute h-screen w-full bg-green-300 opacity-0`}> */}
      <div
        className={`sticky top-[90%] h-0 opacity-25 hover:opacity-100 flex flex-wrap justify-center items-center`}
      >
        <button
          className={
            `bg-sul-btn rounded-xl
            xl:w-[700px] xl:h-[60px] w-[700px] h-[60px]`
            // bg-[url('/images/icons/list.svg')] bg-no-repeat bg-center`
          }
          onClick={() => setIsOpen(true)}
        >
          <span className={`text-white font-semibold`}>{btnTitle}</span>
        </button>
      </div>
      {/* </div> */}
    </>
  );
}
