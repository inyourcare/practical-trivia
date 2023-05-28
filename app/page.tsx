// import styles from "./page.module.css";
import Header from "@/components/Header";
import Card from "@/components/drawer/drawer-card";
import dayjs from "dayjs";
// import { posts as data } from "../data/post";
import { posts } from "../data/post";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto flex flex-col p-3">
        <p className="text-4xl inline font-bold text-left ml-0  sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-24  my-16 leading-[normal] text-[rgba(35,46,82,1)]">
          All posts
        </p>

        {posts?.map((item) => {
          let GetDate = dayjs(item.date).format("DD-MMM , YYYY");

          return (
            <Post
              key={item.id}
              tag={item.tags[0]}
              date={GetDate.toString()}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}

        <Pagination />
      </main>
    </div>
  );
}