"use client";
import { useCurrentPath } from "@/hooks/current-path";
import { ReactNode, useEffect, useState } from "react";

export default function Drawer({}: // header,
// children,
// btnTitle,
{
  // header?: ReactNode;
  // children?: ReactNode;
  // btnTitle: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useCurrentPath();
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
            (isOpen ? "visible" : "invisible")
          }
        >
          <header className="flex flex-row-reverse m-5 justify-between">
            <button
              className={`w-5 h-5 bg-[url('/images/icons/x.svg')] bg-no-repeat bg-center bg-cover cursor-pointer `}
              onClick={() => setIsOpen(false)}
            ></button>
            {/* {header} */}
          </header>
          <div className="m-5">
            {/* {children} */}

            <form className="bg-gray-200 shadow-md rounded px-3 pt-3 pb-8 w-full text-xs">
              <div className="w-full flex">
                <span className="w-1/2">
                  <label className="block text-black text-xs font-bold my-1">
                    상담 받으실 분 성함
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-4/5 py-2 px-1 text-black"
                    placeholder="예) 이름:홍길동"
                  />
                </span>
                <span className="w-1/2">
                  <label className="block text-black text-xs font-bold my-1">
                    문의하실 분야
                  </label>
                  <select className="shadow appearance-none border rounded w-4/5 py-2 px-1 text-black">
                    <option>{pathname}</option>
                  </select>
                </span>
              </div>
              <label className="block text-black text-xs font-bold my-1">
                주소
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-xs font-bold my-1">
                전화번호
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                placeholder="예) 이름:010-1234-1234"
              />
              <label className="block text-black text-xs font-bold my-1">
                기타사항
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                rows={4}
                placeholder="수업이 필요한 이유, 약점과 강점, 공부 성향 등"
              />
            </form>
            <button className="absolute bottom-2 right-10 rounded-xl bg-gray-300 p-3">
              <p className="text-xs font-bold">상담예약</p>
            </button>
          </div>
        </section>
        <button
          className={
            `absolute top-[10px] bg-sul-btn rounded-xl opacity-25 hover:opacity-100 ` +
            `w-3/5 min-h-[50px] my-10`
            // `w-3/5 min-h-1/5 my-10`
            // bg-[url('/images/icons/list.svg')] bg-no-repeat bg-center`
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* <span className={`text-white font-semibold`}>{btnTitle}</span> */}
          <span className={`text-white font-semibold`}>{"문의하기"}</span>
        </button>
      </main>
    </>
  );
}
