"use client";

import { useState } from "react";
import Link from "next/link";
import ConsultationForm from "./ConsultationForm";
import KakaoShare from "../kakao/KakaoShare";
import Image from "next/image";

export default function ConsultationDialog({}: // header,
// children,
// btnTitle,
{
  // header?: ReactNode;
  // children?: ReactNode;
  // btnTitle: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [invisible, setInvisible] = useState(false);

  // const open = useDaumPostcodePopup(
  //   "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  // );

  return (
    <>
      <main
        //  className={`sticky top-[30%] h-0 flex flex-wrap justify-center items-center w-full`}
        className={
          `fixed y-0 left-0 w-full h-[100vh] pointer-events-none z-10` +
          (invisible ? `hidden` : ``)
        }
        // className={`sticky bottom-[75%] h-0 flex flex-col justify-center items-center w-full`}
      >
        <div className="sticky top-[83%] flex flex-col justify-center items-center w-full pointer-events-auto ">
          <section
            className={
              "absolute bottom-0 w-3/5 min-h-[500px] bg-gray-100 rounded-xl border border-black " +
              // "w-3/5 min-h-3/5 bg-gray-100 rounded-xl border border-black " +
              (isOpen ? "visible " : "invisible ")
            }
          >
            <header className="flex flex-row-reverse m-5 justify-between">
              <button
                className={`w-5 h-5 bg-[url('/images/icons/x.svg')] bg-no-repeat bg-center bg-cover cursor-pointer `}
                onClick={() => setIsOpen(false)}
              ></button>
              <Link
                href={`/`}
                className={`w-5 h-5 bg-[url('/images/icons/house.svg')] bg-no-repeat bg-center bg-cover cursor-pointer`}
              ></Link>
            </header>
            <div className="m-5">
              {/* {children} */}

              <ConsultationForm setIsOpen={setIsOpen}></ConsultationForm>
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
          <div className="absolute top-[10px] right-[6%] ">
            <KakaoShare>
              <button
                className={
                  // `absolute top-[10px] right-[20px] bg-sul-btn rounded-full opacity-25 hover:opacity-100 min-h-[50px] min-w-[50px] my-10 overflow-hidden flex justify-center items-center`
                  `rounded-full opacity-25 hover:opacity-100 min-h-[50px] min-w-[50px] my-10 overflow-hidden flex justify-center items-center`
                }
              >
                <Image
                  width={50}
                  height={50}
                  src={`/images/icons/kakaotalk_sharing_btn_medium_ov.png`}
                  style={{ width: 50, height: 50 }}
                  alt="kakao share icon"
                />
              </button>
            </KakaoShare>
          </div>
        </div>
      </main>
    </>
  );
}
