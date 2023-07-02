import { Dispatch, SetStateAction } from "react";

export default function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`w-full h-[40vh] flex justify-center items-center flex-col 
    bg-[url('/images/roulette/carousel/bibimbap-gb0ce9688b_1280.jpg')] bg-no-repeat bg-center bg-cover
    text-white text-center font-black`}
    >
      {children}
    </div>
  );
}
