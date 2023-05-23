"use client";
import { ReactNode, useEffect, useState } from "react";

export default function Drawer({
  header,
  children,
}: {
  header?: ReactNode;
  children?: ReactNode;
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
        className={`sticky top-[90%] h-0 flex flex-wrap justify-center items-center`}
      >
        <button
          className={
            `bg-gray-300 rounded bg-opacity-25 hover:bg-opacity-100 
            xl:w-[55px] xl:h-[55px] w-10 h-10 `
            // bg-[url('/images/icons/list.svg')] bg-no-repeat bg-center`
          }
          style={
            {
              // backgroundImage: `url('/images/icons/list.svg')`,
              // backgroundRepeat: `no-repeat`,
              // backgroundPosition: `center`,
            }
          }
          onClick={() => setIsOpen(true)}
        >
          문의하기
        </button>
      </div>
      {/* </div> */}
    </>
  );
}
