import getPostContent from "@/components/post/getPostContent";
import Nav from "@/components/Nav";
import FoodRoulette from "@/components/food_roulette/FoodRoulette";
import DraggableTest from "@/components/test/draggable";
import DraggableTest2 from "@/components/test/draggable2";
import Script from "next/script";
declare global {
  interface Window {
    Sortable: any
  }
}
export default function FoodRouletteHome() {
  const post = getPostContent("about");

  return (
    <>
      <header className="w-full flex flex-col py-5 bg-[rgba(35,46,82,1)]">
        <Nav />
      </header>
      <div className="py-12 flex justify-center">
        <div className="w-full max-w-screen-lg">
          <div className="w-full flex p-3 flex-col md:flex-row">
            <FoodRoulette />
            {/* <DraggableTest /> */}
            {/* <DraggableTest2 /> */}
          </div>
        </div>
      </div>
    </>
  );
}
