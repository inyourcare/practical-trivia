import Header from "@/components/Header";
import getPostContent from "@/components/post/getPostContent";
import dayjs from "dayjs";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import PostHeader from "@/components/post/PostHeader";
import Nav from "@/components/Nav";

export default function SangSangHome() {
  const post = getPostContent("about");
  return (
    <>
      <header className="w-full flex flex-col py-5 bg-[rgba(35,46,82,1)]">
        <Nav />
      </header>
      <div
        className="py-12"
        style={{
          backgroundImage: `url('` + post.data.image + `')`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundSize: "100% 100%",
          // maxWidth: "1280px",
          // width: "100%",
          // height: "0px",
          // paddingTop: `${Math.round(Number(order.at(1))) * 100}%`,
          // paddingTop: `100%`,
        }}
      >
        <div className="w-full flex p-3">
          <div className="flex-1 p-3 flex justify-center items-center">
            <Image width={300} height={300} src={'/images/camera.jpg'} alt="Image Description" />
          </div>
          <div className="h-20 bg-gray-200 flex-1 p-3">section2</div>
          <div className="h-20 bg-gray-200 flex-1 p-3">section3</div>
        </div>

        <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
    </>
  );
}
