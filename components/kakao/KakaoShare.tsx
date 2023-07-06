"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function KakaoShare() {
  useEffect(() => {
    // window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    if (window.Kakao) {
      console.log("kakao instance");
      if (!window.Kakao.isInitialized())
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
  return (
    <button
      className={
        // `absolute top-[10px] right-[20px] bg-sul-btn rounded-full opacity-25 hover:opacity-100 min-h-[50px] min-w-[50px] my-10 overflow-hidden flex justify-center items-center`
        `rounded-full opacity-25 hover:opacity-100 min-h-[50px] min-w-[50px] my-10 overflow-hidden flex justify-center items-center`
      }
      onClick={() => kakaoSendScrap()}
    >
      <Image
        width={50}
        height={50}
        src={`/images/icons/kakaotalk_sharing_btn_medium_ov.png`}
        style={{ width: 50, height: 50 }}
        alt="kakao share icon"
      />
    </button>
  );
}
