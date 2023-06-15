"use client";
import { useCurrentPath } from "@/hooks/current-path";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import Script from "next/script";
import DaumPostPopupOpenBtn from "./daum-post";
import { useDaumPostcodePopup } from "react-daum-postcode";
import emailjs from "@emailjs/browser";
import { kindDict } from "./util/kind/kindToKr";
import Link from "next/link";
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
  const pathname = useCurrentPath();
  const [selectedKind, setSelectedKind] = useState("");
  const [address, setAddress] = useState("");
  const [koreanKind, setKoreanKind] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [invisible, setInvisible] = useState(false);

  useEffect(() => {
    setKoreanKind(kindDict[selectedKind] || "");
  }, [selectedKind]);
  useEffect(() => {
    if (pathname === "/contactinfo") {
      setInvisible(true);
    } else if (pathname.includes("/intro/wawa")) {
      setSelectedKind("/wawa");
    } else if (pathname.includes("/intro/howcoding")) {
      setSelectedKind("/howcoding");
    } else if (pathname.includes("/intro/sangsang")) {
      setSelectedKind("/sangsang");
    } else if (pathname.includes("/intro/goodo")) {
      setSelectedKind("/goodo");
    } else {
      setInvisible(false);
    }
    // setSelectedKind(pathname);
    // console.log(pathname);
    setIsOpen(false);
  }, [pathname]);

  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    if (fullAddress) setAddress(fullAddress);
  };

  useEffect(() => {
    // window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    if (window.Kakao) {
      console.log("kakao instance");
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    } else {
      console.log("no kakao instance", window.Kakao);
    }
  }, []);

  const kakaoSendScrap = () => {
    const { Kakao, location } = window;
    Kakao.Link.sendScrap({
      templateId: 94996,
      requestUrl: location.href,
    });
  };

  // var templateParams = {
  //   from_name: "James",
  //   to_name: "Dollin",
  //   message: "Check this out!",
  //   email: "inyourcaretube@gmail.com",
  // };

  const form = useRef<HTMLFormElement>(null);

  // const test = async () => {
  //   // fetch(`/api/test`, {method: "GET",}).then(()=>{console.log('good')})
  //   fetch(`/api/contactInfo/create`, {method: "GET",}).then(()=>{console.log('good')})
  //   // await fetch(`http://localhost:3000/api/test`, {method: "GET",}).then(()=>{console.log('good')})
  // }

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);
    try {
      const fetchBody = {
        name: (
          form.current?.querySelector("input[name='name']") as HTMLInputElement
        ).value,
        kind: (
          form.current?.querySelector("input[name='kind']") as HTMLInputElement
        ).value,
        address: (
          form.current?.querySelector(
            "input[name='address']"
          ) as HTMLInputElement
        ).value,
        address2: (
          form.current?.querySelector(
            "input[name='address2']"
          ) as HTMLInputElement
        ).value,
        phone: (
          form.current?.querySelector("input[name='phone']") as HTMLInputElement
        ).value,
        description: (
          form.current?.querySelector(
            "textarea[name='description']"
          ) as HTMLInputElement
        ).value,
      };
      console.debug("fetchBody::", fetchBody);
      await fetch(`/api/contactinfo/create`, {
        method: "POST",
        body: JSON.stringify(fetchBody),
        headers: { "Content-Type": "application/json" },
      })
        .then((contactInfo) => {
          console.debug("contactInfo create successfully::", contactInfo);
          return emailjs
            .sendForm(
              process.env.NEXT_PUBLIC_NEXT_PUBLIC_MAIL_SERVER_KEY as string,
              process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY as string,
              form.current ? form.current : "",
              process.env.NEXT_PUBLIC_MAIL_PRIVATE_KEY as string
            )
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                console.log("FAILED...", error);
              }
            );
        })
        .then(() => {
          alert("정상적으로 문의되었습니다. 연락을 기다려 주세요! :D");
          setIsOpen(false);
        })
        .catch(() => {
          alert(
            "문의하기 프로세스 중 문제가 발생했습니다. 잠시 후 다시 시도 해 주세요 :("
          );
          setIsOpen(false);
        })
        .finally(() => setIsProcessing(false));
    } catch (error) {
      console.log(error);
    }
  };

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

              <form
                className="bg-gray-200 shadow-md rounded px-3 pt-3 pb-8 w-full text-xs"
                ref={form}
                onSubmit={(e) => onSubmitForm(e)}
              >
                <div className="w-full flex flex-nowrap justify-between">
                  <span className="w-1/2">
                    <label
                      className="block text-black text-xs font-bold my-1"
                      // onClick={() => test()}
                    >
                      상담 받으실 분 성함
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-11/12 py-2 px-1 text-black"
                      placeholder="예) 이름:홍길동"
                      name="name"
                      required
                    />
                  </span>
                  <span className="w-1/2">
                    <label className="block text-black text-xs font-bold my-1">
                      문의하실 분야
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-11/12 py-2 px-1 text-black"
                      value={selectedKind}
                      onChange={(e) => setSelectedKind(e.target.value)}
                      name="kindKey"
                      required
                    >
                      <option value={""}>선택없음</option>
                      <optgroup label="과외">
                        <option value={"/sangsang"}>
                          {kindDict["/sangsang"]}
                        </option>
                        <option value={"/goodo"}>{kindDict["/goodo"]}</option>
                        <option value={"/howcoding"}>
                          {kindDict["/howcoding"]}
                        </option>
                        <option value={"/mindfulness"}>
                          {kindDict["/mindfulness"]}
                        </option>
                        <option value={"/ipsi"}>{kindDict["/ipsi"]}</option>
                      </optgroup>

                      <optgroup label="회화">
                        <option value={"/conversation"}>
                          {kindDict["/conversation"]}
                        </option>
                      </optgroup>

                      <optgroup label="학원">
                        <option value={"/wawa"}>{kindDict["/wawa"]}</option>
                      </optgroup>

                      <optgroup label="유학">
                        <option value={"/solute"}>{kindDict["/solute"]}</option>
                      </optgroup>
                      <optgroup label="기타">
                        <option value={"/developing"}>
                          {kindDict["/developing"]}
                        </option>
                        <option value={"/about"}>{kindDict["/about"]}</option>
                      </optgroup>
                    </select>
                  </span>
                </div>
                <input hidden value={koreanKind} readOnly name="kind" />
                <label className="block text-black text-xs font-bold my-1">
                  주소
                </label>
                <div className="flex flex-wrap justify-between">
                  <input
                    className="shadow appearance-none border rounded w-8/12 py-2 px-1 text-black"
                    value={address}
                    readOnly
                    onClick={() => open({ onComplete: handleComplete })}
                    name="address"
                    required
                  />
                  <input
                    className="shadow appearance-none border rounded w-4/12 py-2 px-1 text-black"
                    placeholder="상세주소입력"
                    name="address2"
                  />
                  {/* <span className="shadow appearance-none border">
                  <DaumPostPopupOpenBtn setAddress={setAddress} />
                </span> */}
                </div>
                <label className="block text-black text-xs font-bold my-1">
                  전화번호
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  // placeholder="예) 이름:010-1234-1234"
                  type="tel"
                  placeholder="00*-000*-0000"
                  pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
                  maxLength={13}
                  name="phone"
                  required
                />
                <label className="block text-black text-xs font-bold my-1">
                  기타사항
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                  rows={4}
                  placeholder="전화 가능 시간, 수업이 필요한 이유, 약점과 강점, 공부 성향 등"
                  name="description"
                />
                <button
                  className={
                    "absolute bottom-2 right-10 rounded-xl bg-gray-300 p-2 min-w-[90px] justify-center items-center border text-xs font-bold " +
                    ""
                    // (isProcessing ? "disabled" : "")
                  }
                  type="submit"
                  value="submit"
                  disabled={isProcessing}
                >
                  문의하기
                </button>
              </form>
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
          <button
            className={
              // `absolute top-[10px] right-[20px] bg-sul-btn rounded-full opacity-25 hover:opacity-100 min-h-[50px] min-w-[50px] my-10 overflow-hidden flex justify-center items-center`
              `absolute top-[10px] right-[6%] rounded-full opacity-25 hover:opacity-100 min-h-[50px] min-w-[50px] my-10 overflow-hidden flex justify-center items-center`
            }
            onClick={()=>kakaoSendScrap()}
          >
            <Image
              width={50}
              height={50}
              src={`/images/icons/kakaotalk_sharing_btn_medium_ov.png`}
              style={{ width: 50, height: 50 }}
              alt="kakao share icon"
            />
          </button>
        </div>
      </main>
    </>
  );
}
