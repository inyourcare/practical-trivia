import React from 'react';
import Header from '../../../../components/Header';
// import Newsletter from '../../../../components/Newsletter';
import dayjs from "dayjs";
import getPostMetadata from '@/components/post/getPostMetadata';
import PostPreview from '@/components/post/PostPreview';

export default function PostTagHome({ params }: { params: { slug: string } }) {

  // const posts = data.filter((item) => item.tags[0].toLowerCase().replaceAll(" ", "-") === params.slug)
  // const posts = data.filter((item) => item.tags.filter(tag=>tag.toLowerCase().replaceAll(" ", "-") === params.slug).length>=1)
  const posts = getPostMetadata().filter((item) => item.tags.filter(tag=>tag.toLowerCase().replaceAll(" ", "-") === params.slug).length>=1);
  return (

    <>
      <Header title='hidden' tag={`${params.slug}`} />

      <main className='container mx-auto flex flex-col p-3'>

        {
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
              />
            }
          )
        }

      </main>

      {/* <Newsletter /> */}
    </>
  );
}
