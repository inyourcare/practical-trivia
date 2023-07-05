import { Dispatch, SetStateAction } from "react";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const imageSrcs = [
    "bibimbap-gb0ce9688b_1280.jpg",
    "chicken-g95e14ed32_1280.jpg",
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
  return (
    <div
      className={`w-full h-[40vh] flex justify-center items-center flex-col 
    bg-[url('/images/roulette/carousel/${imageSrcs[0]}')] bg-no-repeat bg-center bg-cover`}
    >
      {children}
    </div>
  );
}
