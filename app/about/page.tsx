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
      {/* <Header /> */}
      {/* <PostHeader
        title={post.data.title}
        tag={post.data.krTags[0]}
        date={dayjs(post.data.date).format("DD MMMM , YYYY")}
        authorName={post.data.author}
      /> */}
      <div className="my-10 mx-auto">
        <Image
          height="250"
          width="500"
          src={post.data.image}
          alt={post.data.imageAlt}
          className="mx-auto h-[72%] w-[1424px]"
        />
      </div>

      <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
        <Markdown>{post.content}</Markdown>
      </div>
    </>
  );
}
