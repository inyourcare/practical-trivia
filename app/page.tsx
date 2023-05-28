// import styles from "./page.module.css";
import Header from "@/components/Header";
import CarouselCard from "@/components/carousel-deprecated/CarouselCard";
import CarouselIframes from "@/components/carousel-deprecated/carousel-iframes";
import Card from "@/components/drawer/drawer-card";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className={`flex justify-center items-center h-[100vh]`}>
        <div className="flex justify-center items-center flex-col w-[80%] h-[80%] bg-black">
          <div className="w-full h-[50%] bg-red-300"></div>
          <div className="flex justify-center items-center w-full h-[50%] bg-green-300 ">
          </div>
        </div>
      </div>
    </div>
  );
}
