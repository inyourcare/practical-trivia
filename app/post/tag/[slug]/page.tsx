import React from "react";
import Header from "../../../../components/Header";
// import Newsletter from '../../../../components/Newsletter';
import dayjs from "dayjs";
import getPostMetadata from "@/components/post/getPostMetadata";
import PostPreview from "@/components/post/PostPreview";
import Pagination from "@/components/Pagination";
import { translateTagToKr } from "@/components/util/tag/tagToKr";
import Nav from "@/components/Nav";

export default function PostTagHome({ params }: { params: { slug: string } }) {
  const koreanTag = translateTagToKr(params.slug);
  // const postMetadata = getPostMetadata().filter((item) => item.tags.filter(tag=>tag.toLowerCase().replaceAll(" ", "-") === params.slug).length>=1);
  const postMetadata = getPostMetadata().filter(
    (item) => item.tags.filter((tag) => tag.includes(koreanTag)).length >= 1
  );
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      {/* <Header title="hidden" tag={`${params.slug}`} /> */}
      <Header title="hidden" tag="hidden" />
      {/* <header className="w-full flex flex-col py-5 bg-[rgba(35,46,82,1)]">
        <Nav />
      </header> */}

      <main className="container mx-auto flex flex-col p-3">
        {/* {
          posts.map(
            (item) => {

              return <PostPreview key={item.id}
                tags={item.tags}
                date={dayjs(item.date).format("DD MMMM , YYYY")}
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
                id={item.id}
                slug={item.slug}
                imageAlt={item.imageAlt}
              />
            }
          )
        } */}
        <Pagination postPreviews={postPreviews} />
      </main>

      {/* <Newsletter /> */}
    </>
  );
}
