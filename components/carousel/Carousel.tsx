"use client";

import { useEffect, useRef } from "react";
import Slider from "./Slider";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const imageSrcs = [
    "bibimbap-gb0ce9688b_1280.jpg",
    // "chicken-g95e14ed32_1280.jpg",
    "chinese-g8a0e5afdc_1280.jpg",
    "chinese-ga243a95e4_1280.jpg",
    "korean-gf4c70fb5b_1280.jpg",
    "korean-ga4652220b_1280.jpg",
    "korean-gbf5b482a2_1280.jpg",
    "korean-g1e47495fe_1280.jpg",
    "octopus-desktop-gf9b2ab88c_1280.jpg",
    "dumplings-fried-gd9613f55a_1280.jpg",
    "food-gb41467b8e_1280.jpg",
    "skate-ga064e06a4_1280.jpg",
    "meat-g15ca3b422_1280.jpg",
    "tteokbokki-g0c7fc890a_1280.jpg",
  ];
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const sliderElem = sliderRef.current;
  //     if (sliderElem && sliderElem.children.length > 0) {
  //       sliderElem.insertBefore(
  //         sliderElem.children.item(sliderElem.children.length - 1) as Element,
  //         sliderElem.children.item(0)
  //       );
  //       // sliderElem.setAttribute('style','`transform: translate3d(20px,0px, 0px); transition-duration: 350ms;')
  //     }
  //   }, 4500);
  //   return () => clearInterval(intervalId);
  // }, []);
  // const sliderRef = useRef<HTMLDivElement>(null);
  return (
    // <div
    //   className={`relative w-full h-[40vh] flex justify-center items-center flex-col overflow-hidden`}
    //   // bg-[url('/images/roulette/carousel/${imageSrcs[0]}')] bg-no-repeat bg-center bg-cover`}
    // >
    //   <div
    //     id="carousel-slider"
    //     ref={sliderRef}
    //     className="w-full h-full flex flex-row "
    //   >
    //     {imageSrcs.map((src, i) => (
    //       <Image
    //         width={1280}
    //         height={853}
    //         key={i}
    //         src={`/images/roulette/carousel/${src}`}
    //         // fill
    //         style={{ objectFit: "cover" }}
    //         alt=""
    //       ></Image>
    //     ))}
    //   </div>
    //   <div className="absolute w-full">{children}</div>
    // </div>
    <div
      className={`relative w-full h-[40vh] flex justify-center items-center flex-col overflow-hidden`}
    >
      <Slider items={imageSrcs}></Slider>
      <div className="absolute w-full">{children}</div>
    </div>
  );
}