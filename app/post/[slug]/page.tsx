import Post from "../../../components/Post";
import BLOCKQUOTE from "../../../components/Blockquote";
import PostHeader from "../../../components/PostHeader";
import Image from "next/image";
import { posts } from "../../../data/post";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import MarkdownTest from "../../markdowntest.mdx";

export default async function PostHome({
  params,
}: {
  params: { slug: string };
}) {
  // const post = posts.map(p=>p.title===params.slug)
  const post = posts.filter(
    (item) => item.title.toLowerCase().replaceAll(" ", "-") === params.slug
  )[0];
  return (
    <>
      <PostHeader
        title={post.title}
        tag={post.tags[0]}
        date={dayjs(post.date).format("DD MMMM , YYYY")}
        authorName={post.author}
      />

      <div className="my-10 mx-auto">
        <Image
          height="250"
          width="500"
          src={post.image}
          alt={post.title}
          className="mx-auto h-[72%] w-[1424px]"
        />
      </div>

      <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
        <MarkdownTest />
      </div>
      <div className="container my-20 flex flex-col justify-center mx-auto">
        <h2 className="text-3xl font-light  text-gray-500 dark:text-gray-400">
          Other interesting posts
        </h2>

        {posts.map((item) => {
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
      </div>
    </>
  );
}

// ReadingPage.defaultProps = {};

// interface ReadingPageProps {
//     post: {
//         date: string;
//         title: string;
//         description: string;
//         image: string;
//         tags: string[];
//         author: string;
//         category: string[];
//         id: string;
//     }
//     posts: {
//         map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
//         filter(arg0: (_: any, i: any) => boolean): unknown;
//         date: string;
//         title: string;
//         description: string;
//         image: string;
//         tags: string[];
//         author: string;
//         category: string[];
//         id: string;
//     }
// }

// export async function getStaticPaths() {

//     const paths = data.map((item) => ({
//         params: { slug: item.title.toLowerCase().replaceAll(" ", "-") },
//     }))

//     return {
//         paths: paths,
//         fallback: false,
//     }
// }

// export async function getStaticProps(context: { params: { slug: string; }; }) {

//     const { params: { slug } } = context

//     const post = data.filter((item) => item.title.toLowerCase().replaceAll(" ", "-") === slug)

//     const posts = data.filter((_, i) => i < 3)

//     return {
//         props: { post: post[0], posts },
//     }
// }
