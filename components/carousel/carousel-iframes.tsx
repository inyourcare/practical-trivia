"use client";
import { ReactNode, useRef, useState } from "react";
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
  return (
    <>
      <div className="">
        {/* <div className={`${styles.slider}`} ref={sliderRef}> */}
        <div
          className={`flex flex-nowrap overflow-x-scroll overflow-y-hidden`}
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
                    <iframe
                      width="560"
                      height="315"
                      // src="https://www.youtube.com/embed/pLt0AFEppQ8"
                      src={item}
                      title="YouTube video player"
                      // frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      // allowfullscreen
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
