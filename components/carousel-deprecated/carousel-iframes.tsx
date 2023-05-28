"use client";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
// import styles from "./carousel-iframes.module.css";

export default function CarouselIframes({ items }: { items: string[] }) {
  const [state, setState] = useState({
    carouselIdx: 0,
    //짝수개 이미지인 경우
    initialTransX: 0,
    autoSlide: false,
    slideInterval: 3000,
    width: "100vw",
    // width: '800px',
    sideControl: true,
    dotControl: true,
    // itemWidth: '30%',
    itemWidth: "500px",
    itemMargin: "10px",
  });
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    // document.cookie = "crossCookie=bar; SameSite=None; Secure"
    // if (window.YT) {
    //   console.log("YT instance");
    // } else {
    //   console.log("no YT instance", window.YT);
    // }
  }, []);

  return (
    <>
      <div className="relative w-full">
        {/* <div className={`${styles.slider}`} ref={sliderRef}> */}
        <div
          className={`flex flex-nowrap overflow-x-auto overflow-y-hidden`}
          ref={sliderRef}
        >
          {items &&
            items.length > 0 &&
            items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  // className={styles.itemContainer}
                  className={``}
                  // style={{ margin: state.itemMargin, width: state.itemWidth }}
                >
                  {/* <div className={}> */}
                  <div className={``}>
                    {/* <iframe
                      width="560"
                      height="315"
                      // src="https://www.youtube.com/embed/pLt0AFEppQ8"
                      src={item+"?enablejsapi=1&origin=http://localhost:3000"}
                      // title="YouTube video player"
                      // frameborder="0"
                      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      // allow="autoplay; encrypted-media"
                      // allowfullscreen
                      allowFullScreen
                      
                    ></iframe> */}
                    {/* <video
                      width="560"
                      height="315"
                      webkit-playsinline=""
                      src="blob:https://www.youtube.com/669081d9-1df0-45ef-afe1-c4729abd68c0"
                    ></video> */}
                    {/* <Image
                      src={`https://img.youtube.com/vi/pLt0AFEppQ8/default.jpg`}
                      width="560"
                      height="315"
                      fill
                      alt=""
                    /> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
