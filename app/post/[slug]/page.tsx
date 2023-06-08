import PostHeader from "../../../components/post/PostHeader";
import Image from "next/image";
import dayjs from "dayjs";
import getPostMetadata from "@/components/post/getPostMetadata";
import Markdown from "markdown-to-jsx";
import PostPreview from "@/components/post/PostPreview";
import getPostContent from "@/components/post/getPostContent";
import Pagination from "@/components/Pagination";

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

export default async function PostHome({
  params,
}: {
  params: { slug: string };
}) {
  // const post = posts.map(p=>p.title===params.slug)
  // const post = posts.filter(
  //   // (item) => item.title.toLowerCase().replaceAll(" ", "-") === params.slug
  //   (item) => item.id === params.slug
  // )[0];
  const slug = params.slug;
  const post = getPostContent(slug);
  const posts = getPostMetadata();
  const postsRelated = posts.filter(
    (item) => item.id !== post.data.id && item.tags.includes(post.data.tags[0])
  );
  return (
    <>
      <PostHeader
        title={post.data.title}
        tag={post.data.tags[0]}
        date={dayjs(post.data.date).format("DD MMMM , YYYY")}
        authorName={post.data.author}
        description={post.data.description}
      />

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
        {/* first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left"> */}
        {/* <MarkdownTest2 /> */}
        <Markdown>{post.content}</Markdown>
      </div>
      <div className="container my-40 p-20 flex flex-col justify-center mx-auto border-t-2">
        {postsRelated.length > 0 ? (
          <>
            <h2 className="text-3xl font-light  text-gray-500 dark:text-gray-400">
              다른 관련 포스팅
            </h2>
            <Pagination
              postPreviews={postsRelated.slice(0, 5).map((item) => {
                let GetDate = dayjs(item.date).format("DD-MMM , YYYY");

                return (
                  <PostPreview
                    key={item.id}
                    id={item.id}
                    tags={item.tags}
                    category={item.category}
                    // tag={item.tag}
                    date={GetDate.toString()}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    slug={item.slug}
                    imageAlt={item.imageAlt}
                  />
                );
              })}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
