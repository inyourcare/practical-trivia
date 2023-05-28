// import styles from "./page.module.css";
import CarouselCard from "@/components/carousel/CarouselCard";
import CarouselIframes from "@/components/carousel/carousel-iframes";
import Card from "@/components/drawer/drawer-card";

export default function Home() {
  return (
    <div>
      <div className={`flex justify-center items-center h-[100vh]`}>
        <div className="flex justify-center items-center flex-col w-[80%] h-[80%] bg-black">
          <div className="w-full h-[50%] bg-red-300"></div>
          <div className="flex justify-center items-center w-full h-[50%] bg-green-300 ">
            {/* <iframe
              width="560"
              height="315"
              // src="https://www.youtube.com/embed/pLt0AFEppQ8"
              src="https://youtube.com/embed/REhoCORAl3A"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
              allowFullScreen
            ></iframe> */}
            {/* "https://www.youtube.com/embed/3vzq2_NzF_s" "https://www.youtube.com/embed/eyD4mLiP-Ow" "https://youtube.com/embed/REhoCORAl3A" */}
            <CarouselIframes
              items={[
                // "https://www.youtube.com/embed/pLt0AFEppQ8",
                "https://www.youtube-nocookie.com/embed/pLt0AFEppQ8",
                "https://www.youtube-nocookie.com/embed/3vzq2_NzF_s",
                "https://www.youtube-nocookie.com/embed/eyD4mLiP-Ow",
                "https://www.youtube-nocookie.com/embed/REhoCORAl3A",
              ]}
            ></CarouselIframes>
          </div>
        </div>
      </div>
    </div>
  );
}
