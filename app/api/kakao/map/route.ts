import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const { lat, lng, radius, query } = body;
  let page = 1;
  let isEnd = false;
  let restaurantsArr = new Array<any>();

  while (isEnd === false || page > 5) {
    const fetched = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?y=${lat}&x=${lng}&radius=${radius}&query=${query}&size=15&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
        },
      }
    );
    const jsonData = await fetched.json();
    isEnd = jsonData.meta.is_end;
    page += 1;
    restaurantsArr = restaurantsArr.concat(jsonData.documents)
    // console.log(jsonData.documents)
  }
  
  // console.log(restaurantsArr);

  return NextResponse.json({ data: restaurantsArr });

  // const getRestaurants = async () => {
  //   return await fetch(
  //     `https://dapi.kakao.com/v2/local/search/keyword.json?y=${lat}&x=${lng}&radius=${radius}&query=${query}&size=15&page=1`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
  //       },
  //     }
  //   )
  //     .then(async (response) => {
  //       // console.log("successfully getRestaurants", response.body);
  //       const restaurants = await response.json();
  //       console.log("successfully getRestaurants", restaurants.documents);
  //       return restaurants;
  //     })
  //     .catch((e) => {
  //       console.log("error getRestaurants", e);
  //       return { error: "error getRestaurants" };
  //     });
  // };
  // // return NextResponse.json({ data: "hello" });
  // return NextResponse.json({ data: await getRestaurants() });
}
