import React from 'react';
import Header from '../../../../components/Header';
import Post from '../../../../components/Post';
// import Newsletter from '../../../../components/Newsletter';
import { posts as data } from '../../../../data/post';
import dayjs from "dayjs";

export default function PostTagHome({ params }: { params: { slug: string } }) {

  // const posts = data.filter((item) => item.tags[0].toLowerCase().replaceAll(" ", "-") === params.slug)
  const posts = data.filter((item) => item.tags.filter(tag=>tag.toLowerCase().replaceAll(" ", "-") === params.slug).length>=1)
  return (

    <>
      <Header title='hidden' tag={`${params.slug}`} />

      <main className='container mx-auto flex flex-col p-3'>

        {
          posts.map(
            (item) => {

              return <Post key={item.id}
                tag={item.tags[0]}
                date={dayjs(item.date).format("DD MMMM , YYYY")}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            }
          )
        }

      </main>

      {/* <Newsletter /> */}
    </>
  );
}
